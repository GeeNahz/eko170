import { AboutEko } from "./about-eko";
import { ChooseDistance } from "./choose-distance";
import { EventCardSection } from "./event-card-section";
import { FeatureCommunity } from "./feature-rows";
import { Figures } from "./figures";
import { HeroMobile } from "./hero-mobile";
import { MomentsInMotionMobile } from "./moments-in-motion-mobile";
import { Newsletter } from "./newsletter";
import { ShopHighlight } from "./shop-highlight";
import { SponsorsMarquee } from "./sponsors-marquee";
import { TrainingCalendar } from "./training-calendar";
// RouteVoteSection (route-vote/components/route-vote-section) is no longer
// rendered here — re-add the import if the Route Announcement block below
// is ever restored.
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
      {/* Route Announcement replaced by Race Options in this slot — see
          choose-distance.tsx. Kept commented, not deleted, in case the
          route-vote/announcement block is needed again. */}
      {/* <RouteVoteSection registration={REGISTRATION} /> */}
      <ChooseDistance />
      <ShopHighlight />
      <TrainingCalendar />
      <EventCardSection registration={REGISTRATION} />
      <AboutEko />
      <Figures />
      <FeatureCommunity />
      <MomentsInMotionMobile />
      <SponsorsMarquee />
      <Newsletter />
    </>
  );
}
