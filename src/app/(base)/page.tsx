import { AboutEko } from "@/features/base/home/components/about-eko";
import { AtlanticChallenge } from "@/features/base/home/components/atlantic-challenge";
import { ChooseDistance } from "@/features/base/home/components/choose-distance";
import { CountdownSection } from "@/features/base/home/components/countdown-section";
import { DistanceBar } from "@/features/base/home/components/distance-bar";
import { EventBar } from "@/features/base/home/components/event-bar";
import { FeatureCommunity, FeatureRoute } from "@/features/base/home/components/feature-rows";
import { Figures } from "@/features/base/home/components/figures";
import { Hero } from "@/features/base/home/components/hero";
import { MomentsInMotion } from "@/features/base/home/components/moments-in-motion";
import { Newsletter } from "@/features/base/home/components/newsletter";
import { RegistrationBanner } from "@/features/base/home/components/registration-banner";
import { SeedingEvents } from "@/features/base/home/components/seeding-events";
import { SponsorsMarquee } from "@/features/base/home/components/sponsors-marquee";
import { Ticker } from "@/features/base/event/components/ticker";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Ticker />
      <EventBar />
      <DistanceBar />
      <CountdownSection />
      <SeedingEvents />
      <RegistrationBanner />
      <Figures />
      <AboutEko />
      <ChooseDistance />
      <AtlanticChallenge />
      <FeatureRoute />
      <FeatureCommunity />
      <SponsorsMarquee />
      <MomentsInMotion />
      <Newsletter />
    </>
  );
}
