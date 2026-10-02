import { NextResponse } from "next/server";
import { RegisterService } from "@/features/base/register/server/service";

// Flutterwave's recommended source of truth: this is the only path that
// writes a registration to the Sheet. The redirect-back verify page only
// reads (see register/verify/page.tsx) — with no database to dedupe a
// write between "the rider's browser came back" and "the webhook fired",
// treating exactly one path as authoritative avoids a double-recorded
// registration if the rider refreshes the verify page.
export async function POST(request: Request) {
  const expectedHash = process.env.FLUTTERWAVE_SECRET_HASH;
  const signature = request.headers.get("verif-hash");
  if (!expectedHash || !signature || signature !== expectedHash) {
    return NextResponse.json({ error: "Invalid signature" }, { status: 401 });
  }

  const body = await request.json();
  if (body.event !== "charge.completed" || body.data?.status !== "successful") {
    return NextResponse.json({ status: "ignored" });
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
