import { AboutEko } from "./about-eko";
import { ChooseDistance } from "./choose-distance";
import { ContactSection } from "./contact-section";
import { EventCardSection } from "./event-card-section";
import { FeatureCommunity } from "./feature-rows";
import { FeesIncluded } from "./fees-included";
import { Figures } from "./figures";
import { HeroMobile } from "./hero-mobile";
import { MomentsInMotionMobile } from "./moments-in-motion-mobile";
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

// Mirrors home-revamped.tsx's desktop section order exactly — see that
// file for the ordering rationale.
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
      <FeesIncluded />
      <TrainingCalendar />
      <ShopHighlight />
      <TravelAccommodationPlaceholder />
      <SponsorsMarquee />
      <MomentsInMotionMobile />
      <ContactSection />
      <EventCardSection registration={REGISTRATION} />
      <AboutEko />
      <Figures />
      <FeatureCommunity />
      <Newsletter />
    </>
  );
}
