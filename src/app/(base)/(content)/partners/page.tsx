import type { Metadata } from "next";
import { PartnersCta } from "@/features/base/partners/components/partners-cta";
import { PartnersGalleryPreview } from "@/features/base/partners/components/partners-gallery-preview";
import { PartnersHero } from "@/features/base/partners/components/partners-hero";
import { PartnersSponsors } from "@/features/base/partners/components/partners-sponsors";
import { PartnersStats } from "@/features/base/partners/components/partners-stats";
import { PartnersWhy } from "@/features/base/partners/components/partners-why";

export const metadata: Metadata = {
  title: "Partners — EKO170",
  description:
    "The brands and institutions that make Lagos' biggest cycling event possible — confirmed partners and how to join them.",
};

export default function PartnersPage() {
  return (
    <>
      <PartnersHero />
      <PartnersStats />
      <PartnersSponsors />
      <PartnersWhy />
      <PartnersGalleryPreview />
      <PartnersCta />
    </>
  );
}
