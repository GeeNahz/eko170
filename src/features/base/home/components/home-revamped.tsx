import { AboutEko } from "./about-eko";
import { ChooseDistance } from "./choose-distance";
import { ContactSection } from "./contact-section";
import { EventCardSection } from "./event-card-section";
import { FeatureCommunity } from "./feature-rows";
import { FeesIncluded } from "./fees-included";
import { Figures } from "./figures";
import { Hero } from "./hero";
import { HomeMobileSectionsRevamped } from "./home-mobile-sections-revamped";
import { MomentsInMotion } from "./moments-in-motion";
import { Newsletter } from "./newsletter";
import { ShopHighlight } from "./shop-highlight";
import { SponsorsMarquee } from "./sponsors-marquee";
import { TrainingCalendar } from "./training-calendar";
import { TravelAccommodationPlaceholder } from "./travel-accommodation-placeholder";
// RouteVoteSection (route-vote/components/route-vote-section) is no longer
// rendered here — re-add the import if the Route Announcement block below
// is ever restored.
import { Ticker } from "../../event/components/ticker";
import { REGISTRATION } from "../../lib/server/registration";

// The updated Home from the latest design pass. Section order re-derived
// per the client's 28 Oct 2026 review: hero -> distance cards -> fees/
// what's-included + training + shop preview -> travel/accommodation +
// partners + gallery + contact, with the sections the review didn't
// mention (Event Cards, About Eko, Figures, Community) kept and appended
// after that flow rather than removed. FeesIncluded, TravelAccommodation-
// Placeholder and ContactSection are new; Travel/Accommodation is a
// placeholder pending the organiser's own copy. Atlantic Challenge /
// Seeding Events were dropped from Home entirely in an earlier pass
// (Routes page keeps its own interactive map; those two components are
// untouched, just not rendered here). See src/app/(base)/page.tsx for the
// swap point back to HomeCurrent, which still renders the original
// section set unchanged.
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
        <FeesIncluded />
        <TrainingCalendar />
        <ShopHighlight />
        <TravelAccommodationPlaceholder />
        <SponsorsMarquee />
        <MomentsInMotion />
        <ContactSection />
        <EventCardSection registration={REGISTRATION} />
        <AboutEko />
        <Figures />
        <FeatureCommunity />
        <Newsletter />
      </div>
      <div className="contents lg:hidden">
        <HomeMobileSectionsRevamped />
      </div>
    </>
  );
}
