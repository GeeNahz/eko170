import { AboutEko } from "./about-eko";
import { AtlanticChallengeMobile } from "./atlantic-challenge-mobile";
import { ChooseDistance } from "./choose-distance";
import { CountdownSection } from "./countdown-section";
import { DistanceBar } from "./distance-bar";
import { EventBarMobile } from "./event-bar-mobile";
import { FeatureCommunity, FeatureRoute } from "./feature-rows";
import { Figures } from "./figures";
import { Hero } from "./hero";
import { MomentsInMotionMobile } from "./moments-in-motion-mobile";
import { Newsletter } from "./newsletter";
import { RegistrationBanner } from "./registration-banner";
import { SeedingEventsMobile } from "./seeding-events-mobile";
import { SponsorsMarquee } from "./sponsors-marquee";
import { Ticker } from "../../event/components/ticker";

export function HomeMobileSections() {
  return (
    <>
      <Hero />
      <Ticker />
      <EventBarMobile />
      <DistanceBar />
      <RegistrationBanner />
      <CountdownSection />
      <AboutEko />
      <ChooseDistance />
      <AtlanticChallengeMobile />
      <FeatureRoute />
      <SeedingEventsMobile />
      <Figures />
      <FeatureCommunity />
      <MomentsInMotionMobile />
      <SponsorsMarquee />
      <Newsletter />
    </>
  );
}
