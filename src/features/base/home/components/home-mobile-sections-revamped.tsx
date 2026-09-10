import { AboutEko } from "./about-eko";
import { AtlanticChallengeMobile } from "./atlantic-challenge-mobile";
import { ChooseDistance } from "./choose-distance";
import { EventCardSection } from "./event-card-section";
import { FeatureCommunity } from "./feature-rows";
import { Figures } from "./figures";
import { HeroMobile } from "./hero-mobile";
import { MomentsInMotionMobile } from "./moments-in-motion-mobile";
import { Newsletter } from "./newsletter";
import { SeedingEventsMobile } from "./seeding-events-mobile";
import { SponsorsMarquee } from "./sponsors-marquee";
import { RouteVoteSection } from "../route-vote/components/route-vote-section";
import { Ticker } from "../../event/components/ticker";

// Order re-derived from the mockup's actual id order (top -> register ->
// about -> routevote -> race -> route -> seeding -> [figures, no id] ->
// riders -> gallery -> sponsors -> [newsletter, no id]) — NOT copied from
// HomeMobileSections. FeatureRoute has no counterpart in the new mockup
// and is dropped here (stays in HomeMobileSections, untouched).
export function HomeMobileSectionsRevamped() {
  return (
    <>
      <HeroMobile />
      <Ticker />
      <EventCardSection />
      <AboutEko />
      <RouteVoteSection />
      <ChooseDistance />
      <AtlanticChallengeMobile />
      <SeedingEventsMobile />
      <Figures />
      <FeatureCommunity />
      <MomentsInMotionMobile />
      <SponsorsMarquee />
      <Newsletter />
    </>
  );
}
