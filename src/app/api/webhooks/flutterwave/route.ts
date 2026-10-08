import { NextResponse } from "next/server";
import { RegisterService } from "@/features/base/register/server/service";
import { FLUTTERWAVE_SECRET_HASH, PAYMENT_GATEWAY } from "@/features/base/lib/constants";

// Flutterwave's recommended source of truth: this is the only path that
// writes a registration to the Sheet. The redirect-back verify page only
// reads (see register/verify/page.tsx) — with no database to dedupe a
// write between "the rider's browser came back" and "the webhook fired",
// treating exactly one path as authoritative avoids a double-recorded
// registration if the rider refreshes the verify page.
export async function POST(request: Request) {
  const signature = request.headers.get("verif-hash");
  if (!FLUTTERWAVE_SECRET_HASH || !signature || signature !== FLUTTERWAVE_SECRET_HASH) {
    return NextResponse.json({ error: "Invalid signature" }, { status: 401 });
  }

  const body = await request.json();
  if (body.event !== "charge.completed" || body.data?.status !== "successful") {
    return NextResponse.json({ status: "ignored" });
  }

  // Flutterwave's webhook is still configured in the dashboard but
  // isn't the active gateway right now — ignore rather than process
  // against the wrong adapter.
  if ((PAYMENT_GATEWAY ?? "flutterwave") !== "flutterwave") {
    return NextResponse.json({ status: "ignored (inactive gateway)" });
  }

  try {
    // Never trust the webhook payload's own amount/status — re-verify
    // server-to-server via RegisterService, same as the verify page does.
    const verified = await RegisterService.verifyRegistrationPayment(
      String(body.data.id),
    );
    if (verified) {
      await RegisterService.recordPaidRegistration(verified);
    }
  } catch (error) {
    console.error("[webhooks/flutterwave] processing failed", error);
    // Non-2xx so Flutterwave retries — this is an unexpected failure
    // (e.g. the Sheets webhook was briefly down), not a rejected payment.
    return NextResponse.json({ error: "processing failed" }, { status: 500 });
  }

  return NextResponse.json({ status: "ok" });
}
