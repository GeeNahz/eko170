import type { Metadata } from "next";
import { AttractionsSection } from "@/features/base/discover/components/attractions-section";
import { CityIntro } from "@/features/base/discover/components/city-intro";
import { DiscoverCta } from "@/features/base/discover/components/discover-cta";
import { DiscoverHero } from "@/features/base/discover/components/discover-hero";
import { HotelsSection } from "@/features/base/discover/components/hotels-section";
import { RaceWeekendTimeline } from "@/features/base/discover/components/race-weekend-timeline";
import { RestaurantsSection } from "@/features/base/discover/components/restaurants-section";
import { TransportSection } from "@/features/base/discover/components/transport-section";

export const metadata: Metadata = {
  title: "Discover Lagos — EKO170",
  description:
    "Your host city for EKO170 — attractions, hotels, restaurants, getting around, and how to plan the full Lagos race weekend.",
};

export default function DiscoverPage() {
  return (
    <>
      <DiscoverHero />
      <CityIntro />
      <AttractionsSection />
      <HotelsSection />
      <RestaurantsSection />
      <TransportSection />
      <RaceWeekendTimeline />
      <DiscoverCta />
    </>
  );
}
