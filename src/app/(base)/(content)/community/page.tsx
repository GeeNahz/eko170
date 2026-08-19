import type { Metadata } from "next";
import { CharityCauses } from "@/features/base/community/components/charity-causes";
import { CommunityCta } from "@/features/base/community/components/community-cta";
import { CommunityHero } from "@/features/base/community/components/community-hero";
import { CommunityStats } from "@/features/base/community/components/community-stats";
import { CyclingClubs } from "@/features/base/community/components/cycling-clubs";
import { LegacySection } from "@/features/base/community/components/legacy-section";
import { SustainabilitySection } from "@/features/base/community/components/sustainability-section";
import { VolunteersSection } from "@/features/base/community/components/volunteers-section";

export const metadata: Metadata = {
  title: "Community — EKO170",
  description:
    "More than a race — EKO170 belongs to Lagos' volunteers, cycling clubs, charities, and the movement for safer, greener streets.",
};

export default function CommunityPage() {
  return (
    <>
      <CommunityHero />
      <CommunityStats />
      <VolunteersSection />
      <CyclingClubs />
      <CharityCauses />
      <SustainabilitySection />
      <LegacySection />
      <CommunityCta />
    </>
  );
}
