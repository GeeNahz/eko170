import { createHmac } from "node:crypto";
import { NextResponse } from "next/server";
import { RegisterService } from "@/features/base/register/server/service";
import { PAYMENT_GATEWAY, PAYSTACK_SECRET_KEY } from "@/features/base/lib/constants";

// Same source-of-truth posture as the Flutterwave webhook (see that
// route) — this is the only path that writes a registration to the
// Sheet; the redirect-back verify page only reads.
//
// Paystack has no separate dashboard-configured webhook secret like
// Flutterwave's hash: it signs the raw request body with an HMAC of the
// secret key itself, so the signature must be computed over the exact
// bytes sent, before any JSON parsing.
export async function POST(request: Request) {
  const signature = request.headers.get("x-paystack-signature");
  const rawBody = await request.text();

  if (!PAYSTACK_SECRET_KEY || !signature) {
    return NextResponse.json({ error: "Invalid signature" }, { status: 401 });
  }

  const expectedSignature = createHmac("sha512", PAYSTACK_SECRET_KEY)
    .update(rawBody)
    .digest("hex");
  if (expectedSignature !== signature) {
    return NextResponse.json({ error: "Invalid signature" }, { status: 401 });
  }

  const body = JSON.parse(rawBody);
  if (body.event !== "charge.success" || body.data?.status !== "success") {
    return NextResponse.json({ status: "ignored" });
  }

  // Paystack's webhook is still configured in the dashboard but isn't
  // the active gateway right now — ignore rather than process against
  // the wrong adapter.
  if ((PAYMENT_GATEWAY ?? "flutterwave") !== "paystack") {
    return NextResponse.json({ status: "ignored (inactive gateway)" });
  }

  try {
    // Never trust the webhook payload's own amount/status — re-verify
    // server-to-server via RegisterService, same as the verify page does.
    const verified = await RegisterService.verifyRegistrationPayment(
      String(body.data.reference),
    );
    if (verified) {
      await RegisterService.recordPaidRegistration(verified);
    }
  } catch (error) {
    console.error("[webhooks/paystack] processing failed", error);
    // Non-2xx so Paystack retries — this is an unexpected failure (e.g.
    // the Sheets webhook was briefly down), not a rejected payment.
    return NextResponse.json({ error: "processing failed" }, { status: 500 });
  }

  return NextResponse.json({ status: "ok" });
}
