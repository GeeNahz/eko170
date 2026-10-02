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
  searchParams: Promise<{ transaction_id?: string; status?: string }>;
}) {
  const { transaction_id: transactionId, status } = await searchParams;

  // Read-only — this page never writes to the Sheet. It just re-verifies
  // with Flutterwave to show the rider the right outcome; the webhook is
  // the only path that actually records the registration (see
  // RegisterService.recordPaidRegistration / the webhook route for why).
  const verified =
    status === "successful" && transactionId
      ? await RegisterService.verifyRegistrationPayment(transactionId)
      : null;

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
