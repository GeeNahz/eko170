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

// This page is otherwise static; revalidating periodically keeps the
// merch stock counters below from freezing at build time.
export const revalidate = 30;

export default async function RegisterPage() {
  const merchProducts = MERCH_UPSELL_ENABLED ? await ShopService.getProducts() : [];
  const merchStock = MERCH_UPSELL_ENABLED ? await ShopService.getStock() : null;

  return (
    <>
      <RegisterHero />
      <RegistrationForm
        merchUpsellEnabled={MERCH_UPSELL_ENABLED}
        merchProducts={merchProducts}
        merchStock={merchStock}
      />
    </>
  );
}
