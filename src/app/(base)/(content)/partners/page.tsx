import type { Metadata } from "next";
import { HeadlinePartners } from "@/features/base/partners/components/headline-partners";
import { PartnersCta } from "@/features/base/partners/components/partners-cta";
import { PartnersGovernment } from "@/features/base/partners/components/partners-government";
import { PartnersHero } from "@/features/base/partners/components/partners-hero";
import { PartnersSponsors } from "@/features/base/partners/components/partners-sponsors";
import { PartnersStats } from "@/features/base/partners/components/partners-stats";
import { PartnersWhy } from "@/features/base/partners/components/partners-why";

export const metadata: Metadata = {
  title: "Sponsors & Partners — EKO170",
  description:
    "The brands and institutions that make Lagos' biggest cycling event possible — commercial sponsors, government partners, and how to join them.",
};

export default function PartnersPage() {
  return (
    <>
      <PartnersHero />
      <PartnersStats />
      <HeadlinePartners />
      <PartnersSponsors />
      <PartnersGovernment />
      <PartnersWhy />
      <PartnersCta />
    </>
  );
}
