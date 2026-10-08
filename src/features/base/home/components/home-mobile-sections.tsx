import { AboutEko } from "./about-eko";
import { AtlanticChallengeMobile } from "./atlantic-challenge-mobile";
import { ChooseDistance } from "./choose-distance";
import { EventGroupMobile } from "./event-group-mobile";
import { FeatureCommunity, FeatureRoute } from "./feature-rows";
import { Figures } from "./figures";
import { HeroMobile } from "./hero-mobile";
import { MomentsInMotionMobile } from "./moments-in-motion-mobile";
import { Newsletter } from "./newsletter";
import { SeedingEventsMobile } from "./seeding-events-mobile";
import { SponsorsMarquee } from "./sponsors-marquee";
import { Ticker } from "../../event/components/ticker";
import { REGISTRATION } from "../../lib/server/registration";

export function HomeMobileSections() {
  return (
    <>
      <HeroMobile registration={REGISTRATION} />
      <Ticker />
      <EventGroupMobile registration={REGISTRATION} />
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
