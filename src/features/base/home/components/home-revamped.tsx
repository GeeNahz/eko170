import { AboutEko } from "./about-eko";
import { ChooseDistance } from "./choose-distance";
import { EventCardSection } from "./event-card-section";
import { FeatureCommunity } from "./feature-rows";
import { Figures } from "./figures";
import { Hero } from "./hero";
import { HomeMobileSectionsRevamped } from "./home-mobile-sections-revamped";
import { MomentsInMotion } from "./moments-in-motion";
import { Newsletter } from "./newsletter";
import { ShopHighlight } from "./shop-highlight";
import { SponsorsMarquee } from "./sponsors-marquee";
import { TrainingCalendar } from "./training-calendar";
// RouteVoteSection (route-vote/components/route-vote-section) is no longer
// rendered here — re-add the import if the Route Announcement block below
// is ever restored.
import { Ticker } from "../../event/components/ticker";
import { REGISTRATION } from "../../lib/server/registration";

// The updated Home from the latest design pass. Section order here was
// originally re-derived from the mockup's actual id order, then adjusted
// per client feedback: the route-vote widget moved up to right after
// Hero, and Atlantic Challenge / Seeding Events were dropped from Home
// entirely (Routes page keeps its own interactive map; those two
// components are untouched, just not rendered here). See
// src/app/(base)/page.tsx for the swap point back to HomeCurrent, which
// still renders the original section set unchanged.
export function HomeRevamped() {
  return (
    <>
      <div className="hidden lg:contents">
        <Hero registration={REGISTRATION} />
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
        <MomentsInMotion />
        <SponsorsMarquee />
        <Newsletter />
      </div>
      <div className="contents lg:hidden">
        <HomeMobileSectionsRevamped />
      </div>
    </>
  );
}
