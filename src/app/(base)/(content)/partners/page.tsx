import type { Metadata } from "next";
import { PartnersAccommodationStrip } from "@/features/base/partners/components/partners-accommodation-strip";
import { PartnersCta } from "@/features/base/partners/components/partners-cta";
import { PartnersFeatured } from "@/features/base/partners/components/partners-featured";
import { PartnersFooterCredit } from "@/features/base/partners/components/partners-footer-credit";
import { PartnersGalleryPreview } from "@/features/base/partners/components/partners-gallery-preview";
import { PartnersHero } from "@/features/base/partners/components/partners-hero";
import { PartnersHostClubs } from "@/features/base/partners/components/partners-host-clubs";
import { PartnersInstitutional } from "@/features/base/partners/components/partners-institutional";
import { PartnersRaceDay } from "@/features/base/partners/components/partners-race-day";
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
      <PartnersFeatured />
      <PartnersInstitutional />
      <PartnersRaceDay />
      <PartnersHostClubs />
      <PartnersAccommodationStrip />
      <PartnersFooterCredit />
      <PartnersStats />
      <PartnersWhy />
      <PartnersGalleryPreview />
      <PartnersCta />
    </>
  );
}
