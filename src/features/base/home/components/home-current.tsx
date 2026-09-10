import { AboutEko } from "./about-eko";
import { AtlanticChallenge } from "./atlantic-challenge";
import { ChooseDistance } from "./choose-distance";
import { CountdownSection } from "./countdown-section";
import { DistanceBar } from "./distance-bar";
import { EventBar } from "./event-bar";
import { FeatureCommunity, FeatureRoute } from "./feature-rows";
import { Figures } from "./figures";
import { Hero } from "./hero";
import { HomeMobileSections } from "./home-mobile-sections";
import { MomentsInMotion } from "./moments-in-motion";
import { Newsletter } from "./newsletter";
import { RegistrationBanner } from "./registration-banner";
import { SeedingEvents } from "./seeding-events";
import { SponsorsMarquee } from "./sponsors-marquee";
import { Ticker } from "../../event/components/ticker";

// The pre-update Home, kept intact and swappable with HomeRevamped (see
// src/app/(base)/page.tsx) rather than edited in place — per explicit
// instruction: this is not a redesign of the old page, it's a new one
// that replaces it, with the old one kept available to swap back to.
export function HomeCurrent() {
  return (
    <>
      <div className="hidden lg:contents">
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
      </div>
      <div className="contents lg:hidden">
        <HomeMobileSections />
      </div>
    </>
  );
}
