import type {
  FigureStat,
  GalleryPhoto,
  RouteStat,
  SponsorLogo,
} from "../lib/types";
import type {
  DistanceCard,
  EventCard,
  FeatureCard,
  SeedingEvent,
} from "./types";

export const EVENT_CARDS: EventCard[] = [
  {
    id: "event-full",
    title: "EKO170 — Full Ride",
    distanceLabel: "170KM",
    dateLabel: "10 Jan 2027",
    resultsHref: "/results",
    registerHref: "/register",
    registerLabel: "Enter the Full Ride",
  },
  {
    id: "event-half",
    title: "EKO170 — Half Ride",
    distanceLabel: "70KM",
    dateLabel: "10 Jan 2027",
    resultsHref: "/results",
    registerHref: "/register",
    registerLabel: "Enter the Half Ride",
  },
];

export const DISTANCE_STATS: RouteStat[] = [
  { id: "dist-full", label: "Full Ride Distance", value: "170KM" },
  { id: "dist-half", label: "Half Ride Distance", value: "70KM" },
  { id: "dist-location", label: "Race Location", value: "Eko Atlantic City" },
  { id: "dist-date", label: "Race Date", value: "10 January 2027" },
];

export const SEEDING_EVENTS: SeedingEvent[] = [
  {
    id: "seed-lekki-coastal",
    distanceKm: 100,
    location: "Lagos",
    title: "Lekki Coastal Classic",
    dateLabel: "12 September 2026",
    terrainLabel: "Road",
    distanceLabel: "100km",
    registerHref: "/register",
  },
  {
    id: "seed-epe-country",
    distanceKm: 80,
    location: "Lagos",
    title: "Epe Country Ride",
    dateLabel: "18 October 2026",
    terrainLabel: "Road",
    distanceLabel: "80km",
    registerHref: "/register",
  },
  {
    id: "seed-atlantic-crit",
    distanceKm: 45,
    location: "Eko Atlantic",
    title: "Eko Atlantic Night Crit",
    dateLabel: "21 November 2026",
    terrainLabel: "Road",
    distanceLabel: "45km",
    registerHref: "/register",
  },
  {
    id: "seed-ikoyi-bridge",
    distanceKm: 60,
    location: "Lagos",
    title: "Ikoyi Bridge Loop",
    dateLabel: "6 December 2026",
    terrainLabel: "Road",
    distanceLabel: "60km",
    registerHref: "/register",
  },
  {
    id: "seed-vi-70",
    distanceKm: 70,
    location: "Victoria Island",
    title: "Victoria Island 70",
    dateLabel: "19 December 2026",
    terrainLabel: "Road",
    distanceLabel: "70km",
    registerHref: "/register",
  },
  {
    id: "seed-tune-up",
    distanceKm: 40,
    location: "Eko Atlantic",
    title: "Final Tune-Up Ride",
    dateLabel: "3 January 2027",
    terrainLabel: "Road",
    distanceLabel: "40km",
    registerHref: "/register",
  },
];

export const FIGURES: FigureStat[] = [
  { id: "fig-distance", value: "170KM", label: "Full Ride Distance" },
  { id: "fig-participants", value: "2,000+", label: "Expected Participants" },
  { id: "fig-stations", value: "10+", label: "Support Stations" },
  { id: "fig-categories", value: "4", label: "Race Categories" },
  { id: "fig-hours", value: "7+", label: "Hours of Racing" },
  { id: "fig-city", value: "1", label: "Incredible City" },
];

export const ABOUT_FEATURE_CARDS: FeatureCard[] = [
  {
    id: "about-levels",
    title: "All Levels Welcome",
    description:
      "From first-time riders to seasoned racers — every cyclist has a place on the start line.",
  },
  {
    id: "about-distance",
    title: "170 Kilometres",
    description:
      "A full 170km route through the heart of Lagos — from Eko Atlantic City all the way to Epe.",
  },
  {
    id: "about-community",
    title: "Global Community",
    description:
      "Riders from Lagos, Abuja, London, New York and beyond — one city, one unstoppable movement.",
  },
];

export const DISTANCE_CARDS: DistanceCard[] = [
  {
    id: "distance-full",
    image: "/images/CR2A3106.jpg",
    distanceValue: "170",
    distanceSuffix: "KM",
    tagline: "The Full Distance",
    title: "Full Ride",
    description:
      "The flagship route. Start and finish at Eko Atlantic Boulevard, traversing Victoria Island, crossing the Lekki–Ikoyi Bridge, through the Lagos Free Trade Zone and Dangote Refinery corridor, into the open countryside of Epe.",
    tags: ["Elite", "Seasoned Cyclists", "Community", "Teams"],
    terrain: "Moderate rolling",
  },
  {
    id: "distance-half",
    image: "/images/CR2A2850.jpg",
    distanceValue: "70",
    distanceSuffix: "KM",
    tagline: "For Strong Riders",
    title: "Half Ride",
    description:
      "The ideal distance for strong riders seeking a balance of challenge and accessibility. Experience the energy of race day across Lekki–Ikoyi Bridge, Lekki Phase 1, and Sangotedo — returning to a festival-style finish at Eko Atlantic City.",
    tags: ["Fitness Riders", "Enthusiasts", "Corporate Teams", "Families"],
    terrain: "Flat to moderate",
  },
];

export const SPONSOR_LOGOS: SponsorLogo[] = [
  { id: "sponsor-quest", name: "Quest Oil", src: "/sponsors/logo-quest-sm.jpg" },
  { id: "sponsor-avis", name: "Avis", src: "/sponsors/logo-avis-sm.jpg" },
  { id: "sponsor-elektron", name: "Elektron", src: "/sponsors/logo-elektron-sm.jpg" },
  { id: "sponsor-watch", name: "Watch Galleries", src: "/sponsors/logo-watch-sm.jpg" },
];

export const PARTNER_LOGOS: SponsorLogo[] = [
  { id: "partner-dynastar", name: "Dynastar", src: "/sponsors/logo-dynastar-sm.jpg" },
  { id: "partner-tourism", name: "Ministry of Tourism Lagos", src: "/sponsors/logo-tourism-sm.jpg" },
  { id: "partner-lsg", name: "Lagos State Government", src: "/sponsors/logo-lsg-sm.jpg" },
  { id: "partner-lssc", name: "LSSC", src: "/sponsors/logo-lssc-sm.jpg" },
  { id: "partner-etiosa", name: "Eti-Osa Local Government", src: "/sponsors/logo-etiosa-sm.jpg" },
  { id: "partner-sdg", name: "Lagos SDG", src: "/sponsors/logo-sdg-sm.jpg" },
  { id: "partner-ibeju", name: "Ibeju-Lekki Local Government", src: "/sponsors/logo-ibeju-sm.jpg" },
  { id: "partner-lstac", name: "Lagos State Tourism, Arts & Culture", src: "/sponsors/logo-lstac-sm.jpg" },
  { id: "partner-partner", name: "Partner", src: "/sponsors/logo-partner-sm.jpg" },
  { id: "partner-lspwc", name: "LSPWC", src: "/sponsors/logo-lspwc-sm.jpg" },
];

export const GALLERY_FEATURED: GalleryPhoto = {
  id: "gallery-featured",
  src: "/images/DSC_2032.jpg",
  alt: "EKO170 race film",
};

export const GALLERY_PREVIEW: GalleryPhoto[] = [
  { id: "gallery-1", src: "/images/CR2A2667.jpg", alt: "EKO170 moment" },
  { id: "gallery-2", src: "/images/DSC_1708.jpg", alt: "EKO170 moment" },
  { id: "gallery-3", src: "/images/CR2A2756.jpg", alt: "EKO170 moment" },
  { id: "gallery-4", src: "/images/DSC_1842.jpg", alt: "EKO170 moment" },
];

export const GALLERY_TOTAL_PHOTOS = 46;
