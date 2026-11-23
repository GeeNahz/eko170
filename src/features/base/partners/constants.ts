import type {
  FeaturedPartner,
  PartnerLogo,
  PartnerStat,
  RaceDaySupportPartner,
  WhyPartnerCard,
} from "./types";

export const FEATURED_PARTNERS: FeaturedPartner[] = [
  {
    id: "featured-cetpower",
    name: "CETPower",
    src: "/sponsors/cetpower.png",
    billing: "Major Partner",
    description: "Powering the Event Village and supporting an on-course aid station.",
  },
  {
    id: "featured-nnpc",
    name: "NNPC Foundation",
    src: "/sponsors/logo-nnpc.png",
    description:
      "Supporting women's participation in cycling and recognising competitive achievement through the EKO170 women's race prizes.",
  },
];

// A single dedicated row, not an array — the doc gives the Sports
// Commission its own section, distinct from the grid tiers above/below.
export const INSTITUTIONAL_PARTNER: PartnerLogo & { description: string } = {
  id: "institutional-lssc",
  name: "Lagos State Sports Commission",
  src: "/sponsors/logo-lssc-sm.jpg",
  description:
    "Working with the organisers on route planning and coordination with Lagos State agencies.",
};

export const RACE_DAY_SUPPORT_PARTNERS: RaceDaySupportPartner[] = [
  {
    id: "raceday-medbury",
    name: "Medbury",
    src: "/sponsors/logo-medbury.jpg",
    billing: "Medical Partner",
    description: "Supporting medical coverage and rider care for EKO170 2027.",
  },
  {
    id: "raceday-avis",
    name: "AVIS",
    src: "/sponsors/logo-Avis.png",
    billing: "Transport Support",
    description: "Supporting route reconnaissance and event transport logistics.",
  },
];

// Its own wide row (same treatment as INSTITUTIONAL_PARTNER), per the
// updated mockup — not a third tile in the grid above.
export const POCARI_SWEAT_PARTNER: PartnerLogo & { description: string } = {
  id: "raceday-pocari",
  name: "Pocari Sweat",
  src: "/sponsors/logo-pocari-sweat.png",
  description: "Pocari Sweat plans to distribute its products at one aid station and at the Event Village.",
};

export const HOST_CYCLING_CLUBS: PartnerLogo[] = [
  { id: "club-cycology", name: "Cycology Lagos", src: "/sponsors/logo-cycology.png" },
  { id: "club-cyclotron", name: "Cyclotron", src: "/sponsors/logo-cyclotron.png" },
];

// Single entry, same reasoning as INSTITUTIONAL_PARTNER — its own
// dedicated accommodation strip, not a grid tile.
export const ACCOMMODATION_PARTNER: PartnerLogo & { description: string } = {
  id: "accommodation-nordic",
  name: "Nordic Hotel Lagos",
  src: "/sponsors/logo-NordicHotels.svg",
  description: "Nordic Hotel Lagos offers discounted room rates for EKO170 riders.",
};

// Derived from the categorized lists above rather than hardcoded, so
// this can't drift out of sync when a partner is added or removed.
export const PARTNER_STATS: PartnerStat[] = [
  {
    id: "stat-confirmed",
    value: String(
      FEATURED_PARTNERS.length +
        1 +
        RACE_DAY_SUPPORT_PARTNERS.length +
        1 +
        HOST_CYCLING_CLUBS.length +
        1,
    ),
    label: "Confirmed Partners",
  },
  { id: "stat-distances", value: "2", label: "Race Distances" },
  { id: "stat-day", value: "1", label: "Unforgettable Day" },
];

export const WHY_PARTNER_CARDS: WhyPartnerCard[] = [
  {
    id: "why-visibility",
    title: "City-Scale Visibility",
    description:
      "Your brand on closed roads through Victoria Island, seen by thousands of riders and a live spectator crowd.",
  },
  {
    id: "why-audience",
    title: "Engaged Audience",
    description:
      "A premium, health-focused audience across Nigeria and beyond — on-course, on-screen and on-social.",
  },
  {
    id: "why-activation",
    title: "Activation That Sticks",
    description:
      "Feed-zone sampling, branded rider packs, expo stands, finish-line naming, and medical support and mobility partnerships — put product in riders' hands.",
  },
];
