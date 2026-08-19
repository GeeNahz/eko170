import type { SponsorLogo } from "../lib/types";
import type { HeadlinePartner, PartnerStat, WhyPartnerCard } from "./types";

export const PARTNER_STATS: PartnerStat[] = [
  { id: "stat-commercial", value: "12", label: "Commercial Partners" },
  { id: "stat-government", value: "8", label: "Government Bodies" },
  { id: "stat-riders", value: "5,000+", label: "Riders Reached" },
  { id: "stat-day", value: "1", label: "Unforgettable Day" },
];

export const HEADLINE_PARTNERS: HeadlinePartner[] = [
  {
    id: "headline-quest",
    tierLabel: "Title Partner",
    logoSrc: "/sponsors/logo-quest-sm.jpg",
    logoAlt: "Quest Oil",
    description:
      "Quest Oil fuels the movement — presenting sponsor of the EKO170 Lagos Gran Fondo.",
  },
  {
    id: "headline-elektron",
    tierLabel: "Presenting Partner",
    logoSrc: "/sponsors/logo-elektron-sm.jpg",
    logoAlt: "Elektron",
    description:
      "Elektron powers the timing, lighting and energy behind race weekend.",
  },
];

export const COMMERCIAL_PARTNER_LOGOS: SponsorLogo[] = [
  { id: "commercial-quest", name: "Quest Oil", src: "/sponsors/logo-quest-sm.jpg" },
  { id: "commercial-avis", name: "Avis", src: "/sponsors/logo-avis-sm.jpg" },
  { id: "commercial-elektron", name: "Elektron", src: "/sponsors/logo-elektron-sm.jpg" },
  { id: "commercial-watch", name: "Watch Galleries", src: "/sponsors/logo-watch-sm.jpg" },
  { id: "commercial-dynastar", name: "Dynastar", src: "/sponsors/logo-dynastar-sm.jpg" },
];

export const GOVERNMENT_PARTNER_LOGOS: SponsorLogo[] = [
  { id: "government-lsg", name: "Lagos State Government", src: "/sponsors/logo-lsg-sm.jpg" },
  { id: "government-tourism", name: "Ministry of Tourism", src: "/sponsors/logo-tourism-sm.jpg" },
  {
    id: "government-lstac",
    name: "Lagos Tourism, Arts & Culture",
    src: "/sponsors/logo-lstac-sm.jpg",
  },
  {
    id: "government-lssc",
    name: "Lagos State Sports Commission",
    src: "/sponsors/logo-lssc-sm.jpg",
  },
];

export const WHY_PARTNER_CARDS: WhyPartnerCard[] = [
  {
    id: "why-visibility",
    title: "City-Scale Visibility",
    description:
      "Your brand on closed roads through Eko Atlantic City, seen by thousands of riders and a live spectator crowd.",
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
      "Feed-zone sampling, branded rider packs, expo stands and finish-line naming — put product in riders' hands.",
  },
];
