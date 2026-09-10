import type { Metadata } from "next";
import { PartnerApplyForm } from "@/features/base/partners/apply/components/partner-apply-form";
import { PartnerApplyHero } from "@/features/base/partners/apply/components/partner-apply-hero";

export const metadata: Metadata = {
  title: "Become a Partner — EKO170",
  description:
    "Tell us about your organisation and how you would like to partner with EKO170 — sponsorship, in-kind support, media, or community partnership.",
};

export default function PartnerApplyPage() {
  return (
    <>
      <PartnerApplyHero />
      <PartnerApplyForm />
    </>
  );
}
