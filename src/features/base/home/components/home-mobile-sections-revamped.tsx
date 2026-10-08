import { AboutEko } from "./about-eko";
import { ChooseDistance } from "./choose-distance";
import { EventCardSection } from "./event-card-section";
import { FeatureCommunity } from "./feature-rows";
import { Figures } from "./figures";
import { HeroMobile } from "./hero-mobile";
import { MomentsInMotionMobile } from "./moments-in-motion-mobile";
import { Newsletter } from "./newsletter";
import { SponsorsMarquee } from "./sponsors-marquee";
import { RouteVoteSection } from "../route-vote/components/route-vote-section";
import { Ticker } from "../../event/components/ticker";
import { REGISTRATION } from "../../lib/server/registration";

// Order originally re-derived from the mockup's id order, then adjusted
// per client feedback: route-vote moved to right after Hero, and Atlantic
// Challenge / Seeding Events dropped from Home entirely (see
// home-revamped.tsx for the same change on the desktop tree).
export function HomeMobileSectionsRevamped() {
  return (
    <>
      <HeroMobile registration={REGISTRATION} />
      <Ticker />
      <RouteVoteSection registration={REGISTRATION} />
      <EventCardSection registration={REGISTRATION} />
      <AboutEko />
      <ChooseDistance />
      <Figures />
      <FeatureCommunity />
      <MomentsInMotionMobile />
      <SponsorsMarquee />
      <Newsletter />
    </>
  );
}
