import type { Metadata } from "next";
import { RegisterHero } from "@/features/base/register/components/register-hero";
import { RegistrationSuccess } from "@/features/base/register/components/registration-success";
import { RegistrationFailed } from "@/features/base/register/components/registration-failed";
import { RegisterService } from "@/features/base/register/server/service";

export const metadata: Metadata = {
  title: "Registration — EKO170",
};

export default async function RegisterVerifyPage({
  searchParams,
}: {
  searchParams: Promise<{ transaction_id?: string; reference?: string }>;
}) {
  // Flutterwave's redirect sends `transaction_id` (+ a `status` param
  // we no longer gate on); Paystack's sends `reference` with no status
  // param at all. Only one gateway is ever active, so only its own
  // param will actually be present — whichever shows up is the
  // identifier to verify.
  const { transaction_id: transactionId, reference } = await searchParams;
  const identifier = transactionId ?? reference;

  // Read-only — this page never writes to the Sheet. It just re-verifies
  // with the active gateway to show the rider the right outcome; the
  // webhook is the only path that actually records the registration
  // (see RegisterService.recordPaidRegistration / the webhook routes
  // for why). A thrown config error renders the failure view rather
  // than crashing the page.
  let verified = null;
  if (identifier) {
    try {
      verified = await RegisterService.verifyRegistrationPayment(identifier);
    } catch (error) {
      console.error("[register/verify] verification failed", error);
    }
  }

  return (
    <>
      <RegisterHero />
      <div className="mx-auto w-full max-w-[920px] px-0 pb-24 sm:px-10">
        {verified ? (
          <RegistrationSuccess
            data={{
              name: verified.name,
              email: verified.email,
              refCode: verified.refCode,
            }}
          />
        ) : (
          <RegistrationFailed />
        )}
      </div>
    </>
  );
}
