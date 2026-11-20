import { SPONSOR_LOGOS } from "../home/constants";
import type { PartnerStat, WhyPartnerCard } from "./types";

// Derived from the real confirmed list rather than hardcoded, so this
// can't drift out of sync when a sponsor is added or removed.
export const PARTNER_STATS: PartnerStat[] = [
  {
    id: "stat-confirmed",
    value: String(SPONSOR_LOGOS.length),
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
