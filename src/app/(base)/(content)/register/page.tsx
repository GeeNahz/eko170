import type { Metadata } from "next";
import { MERCH_UPSELL_ENABLED } from "@/features/base/lib/constants";
import { RegisterHero } from "@/features/base/register/components/register-hero";
import { RegistrationForm } from "@/features/base/register/components/registration-form";
import { ShopService } from "@/features/base/shop/server/service";

export const metadata: Metadata = {
  title: "Register — EKO170",
  description:
    "Enter the race. Register for EKO170 — choose your distance, provide your details, and secure your place on the start line.",
};

export default async function RegisterPage() {
  const merchProducts = MERCH_UPSELL_ENABLED ? await ShopService.getProducts() : [];

  return (
    <>
      <RegisterHero />
      <RegistrationForm
        merchUpsellEnabled={MERCH_UPSELL_ENABLED}
        merchProducts={merchProducts}
      />
    </>
  );
}
