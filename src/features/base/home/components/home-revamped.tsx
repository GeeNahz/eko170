import { AboutEko } from "./about-eko";
import { AtlanticChallenge } from "./atlantic-challenge";
import { ChooseDistance } from "./choose-distance";
import { EventCardSection } from "./event-card-section";
import { FeatureCommunity } from "./feature-rows";
import { Figures } from "./figures";
import { Hero } from "./hero";
import { HomeMobileSectionsRevamped } from "./home-mobile-sections-revamped";
import { MomentsInMotion } from "./moments-in-motion";
import { Newsletter } from "./newsletter";
import { SeedingEvents } from "./seeding-events";
import { SponsorsMarquee } from "./sponsors-marquee";
import { RouteVoteSection } from "../route-vote/components/route-vote-section";
import { Ticker } from "../../event/components/ticker";

// The updated Home from the latest design pass. Section order here is
// re-derived from the mockup's actual id order (top -> register -> about
// -> routevote -> race -> route -> seeding -> [figures, no id] -> riders
// -> gallery -> sponsors -> [newsletter, no id]), NOT copied from the old
// page's order — FeatureRoute has no counterpart in the new mockup at
// all and is dropped here (it stays in HomeCurrent, untouched). See
// src/app/(base)/page.tsx for the swap point back to HomeCurrent.
export function HomeRevamped() {
  return (
    <>
      <div className="hidden lg:contents">
        <Hero />
        <Ticker />
        <EventCardSection />
        <AboutEko />
        <RouteVoteSection />
        <ChooseDistance />
        <AtlanticChallenge />
        <SeedingEvents />
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
