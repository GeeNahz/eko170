import type { RouteStat } from "../lib/types";
import type {
  RouteCategoryCard,
  RouteDetailData,
  RouteFaq,
  SupportFeature,
} from "./types";

// Waypoints below are a visual approximation traced from the rider-supplied
// route-map screenshots (eko70.png / eko170.png / eko170-2.png) against
// known Lagos geography (place names, relative label positions) — not
// survey-grade GPS. Good enough for the Leaflet overview map; swap for
// real GPX data once a course survey exists.
const EKO_ATLANTIC: [number, number] = [6.4166, 3.4155];

// Shared coastal corridor (Eko Atlantic -> Ilado -> ... -> Eleko) that the
// confirmed 94.5KM route, the 170KM route's return leg, and vote Option B
// all trace identically per the reference screenshots.
const COASTAL_OUT: [number, number][] = [
  EKO_ATLANTIC,
  [6.45, 3.427], // Falomo
  [6.44, 3.5], // Ilado
  [6.455, 3.575], // Okun-Ajah
  [6.462, 3.62], // Mopo Onijebu
  [6.46, 3.635], // Mosere Ikoga
  [6.465, 3.67], // Iwerekun
  [6.47, 3.71], // Iwesolu
  [6.475, 3.745], // Igando
  [6.483, 3.77], // Eleko
];
const COASTAL_BACK: [number, number][] = [...COASTAL_OUT].reverse();

// Confirmed 94.5KM Medio Fondo — coastal out-and-back to Eleko (eko70.png).
export const ROUTE_70_PATH: [number, number][] = COASTAL_OUT;

// Vote Option A / the working 170KM Gran Fondo route — Ikorodu/Imota inland
// loop, confirmed as the route shown outside the vote widget (eko170.png).
export const ROUTE_170_PATH: [number, number][] = [
  EKO_ATLANTIC,
  [6.596, 3.484], // Majidun / Ebute Ikorodu
  [6.6194, 3.5106], // Ikorodu
  [6.645, 3.548], // Maya
  [6.672, 3.598], // Salabo
  [6.6975, 3.633], // Imota
  [6.6608, 3.707], // Agbowa
  [6.658, 3.78], // Odo
  [6.64, 3.855], // Ketu
  [6.585, 3.875], // Ejirin
  [6.575, 3.93], // Tewon
  [6.5833, 3.9833], // Epe
  [6.47, 3.9], // Alaro City
  [6.455, 3.855], // Ibeju
  ...COASTAL_BACK.slice(1), // Eleko -> ... -> back to Eko Atlantic
];

// Vote Option B — coastal "Lekki–Epe Corridor" all the way to Epe, with the
// small Eredo/Poka detour near the end (eko170-2.png).
export const ROUTE_VOTE_OPTION_B_PATH: [number, number][] = [
  ...COASTAL_OUT,
  [6.455, 3.855], // Ibeju
  [6.47, 3.9], // Alaro City
  [6.575, 3.93], // Tewon
  [6.5833, 3.9833], // Epe
  [6.605, 3.965], // Eredo / Poka detour
  [6.5833, 3.9833], // back through Epe
];

export const ROUTE_STATS: RouteStat[] = [
  { id: "route-distance", label: "Distance", value: "~170KM" },
  { id: "route-elevation", label: "Elevation", value: "Moderate rolling" },
  { id: "route-start", label: "Start", value: "Eko Atlantic Blvd" },
  { id: "route-finish", label: "Finish", value: "Eko Atlantic Blvd" },
];

export const ROUTE_HIGHLIGHTS: string[] = [
  "Coastal stretch through Ahmadu Bello Way & Ozumba Mbadiwe",
  "Lekki–Ikoyi Bridge crossing — Lagos' architectural landmark",
  "Lekki Free Trade Zone & Dangote Refinery corridor",
  "Scenic Epe countryside turnaround & festival-style finish",
];

export const ROUTE_CATEGORY_CARDS: RouteCategoryCard[] = [
  {
    id: "category-170",
    image: "/images/CR2A2942.jpg",
    distanceValue: "170",
    distanceSuffix: "KM",
    title: "Gran Fondo",
    description:
      "The flagship route for elite and seasoned cyclists — the complete 170KM journey from Eko Atlantic City to Epe and back.",
    href: "/routes/170",
  },
  {
    id: "category-70",
    image: "/images/DSC_1924.jpg",
    distanceValue: "94.5",
    distanceSuffix: "KM",
    title: "Medio Fondo",
    description:
      "A balanced 94.5KM route for strong riders — festival energy across Lekki–Ikoyi Bridge and Lekki Phase 1.",
    href: "/routes/70",
  },
];

export const SUPPORT_FEATURES: SupportFeature[] = [
  {
    id: "support-stations",
    title: "10+ Support Stations",
    description:
      "Hydration, nutrition, and mechanical support along the full route.",
  },
  {
    id: "support-medical",
    title: "Medical Coverage",
    description:
      "On-course medical teams and ambulance support throughout race day.",
  },
  {
    id: "support-closed-roads",
    title: "Roads Fully Closed",
    description:
      "No cars. No okadas. No chaos. Just you, your bike, and the open road.",
  },
  {
    id: "support-timed",
    title: "Timed & Ranked",
    description:
      "Chip-timed results published live and archived for every finisher.",
  },
];

export const ROUTE_SUBNAV_LINKS: { id: string; label: string; href: string }[] = [
  { id: "introduction", label: "Introduction", href: "#introduction" },
  { id: "route-description", label: "Route Description", href: "#route-description" },
  { id: "start", label: "Start-Line", href: "#start" },
  { id: "finish", label: "Finish Line", href: "#finish" },
  { id: "more", label: "Additional Information", href: "#more" },
  { id: "faqs", label: "Entries & FAQs", href: "#faqs" },
];

export const ROUTE_START_CHECKLIST: string[] = [
  "Your number board, cable-tied to your handlebars, facing forward.",
  "Your race number, worn low down on the back of your cycling shirt.",
  "Your timing chip, fixed to your bicycle and clearly visible.",
  "Your helmet — no helmet, no ride.",
];

export const ROUTE_FAQS: RouteFaq[] = [
  {
    id: "faq-withdraw",
    question: "Can I withdraw from EKO170?",
    answer:
      "Full details will be published in the official rider guide ahead of race week. For urgent queries contact info@eko170.com.",
  },
  {
    id: "faq-substitution-enter",
    question: "How do I enter as a substitution?",
    answer:
      "Full details will be published in the official rider guide ahead of race week. For urgent queries contact info@eko170.com.",
  },
  {
    id: "faq-substitution-fee",
    question: "What is the substitution fee?",
    answer:
      "Full details will be published in the official rider guide ahead of race week. For urgent queries contact info@eko170.com.",
  },
  {
    id: "faq-race-number",
    question: "When will my race number be available for collection?",
    answer:
      "Full details will be published in the official rider guide ahead of race week. For urgent queries contact info@eko170.com.",
  },
  {
    id: "faq-confirmation",
    question: "When will I receive confirmation of my entry?",
    answer:
      "Full details will be published in the official rider guide ahead of race week. For urgent queries contact info@eko170.com.",
  },
  {
    id: "faq-consent-letter",
    question: "Where do I send my substitution consent letter?",
    answer:
      "Full details will be published in the official rider guide ahead of race week. For urgent queries contact info@eko170.com.",
  },
];

export const ROUTE_170_DETAIL: RouteDetailData = {
  slug: "170",
  navLabel: "EKO 170",
  distanceLabel: "eko 170",
  heroImage: "/images/DSC_2320.jpg",
  routeDescriptionImage: "/images/DSC_2320.jpg",
  startImage: "/images/sm-CR2A2942.jpg",
  finishImage: "/images/g-CR2A3170.jpg",
  price: "₦75,000",
  earlyBirdPrice: "₦60,000",
  distanceKm: "170 kilometres",
  introEyebrow: "The Full Atlantic Challenge",
  introHeading: "The 170KM EKO170 Lagos Cycle Race",
  introBody:
    "The 170km is the flagship of EKO170 — West Africa's biggest closed-road Gran Fondo. From Eko Atlantic City through Victoria Island, over the Lekki–Ikoyi Bridge and out along the Lekki–Epe corridor to the open countryside of Epe, it is a true test of endurance with world-class support at every kilometre, finishing at a festival on the Atlantic marina.",
  routeDescHeading: "EKO 170 Route",
  routeDescParagraphs: [
    "The route starts on Eko Atlantic Boulevard beneath the towers of the new city. Riders head out through Victoria Island on Ahmadu Bello Way, cross the Lekki–Ikoyi Link Bridge — the day's signature climb — and settle into the long, fast run along the Lekki–Epe Expressway.",
    "Past the Lekki Free Trade Zone and the Dangote Refinery corridor, the course opens into the green countryside of Epe before the turn for home. The return leg rides the coast the whole way back — the Atlantic on your left, the skyline ahead — to the finish chute on the marina. Cut-off: 8 hours.",
  ],
  startWaveBody:
    "The Eko Atlantic Boulevard Start Precinct welcomes riders for the 170 kilometres — waves roll out from 06:00, at first light.",
  moreAboutCards: [
    {
      id: "start-times",
      title: "Start Times",
      description:
        "Group start times for the 170km are seeded by your qualifying result. Waves roll out from 06:00.",
    },
    {
      id: "cut-offs",
      title: "Cut-Offs",
      description:
        "Three cut-off points keep the course safe. Riders outside the limits are taken by sweep vehicle to the finish.",
    },
    {
      id: "get-to-finish",
      title: "Get to the Finish",
      description:
        "After the finish, roll straight into the marina festival — medals, food, music, and the winners' podium.",
    },
    {
      id: "bag-drop",
      title: "Bag Drop-Off",
      description:
        "Drop your kit bag at the info tent on Eko Atlantic Boulevard before the start; collect it at the same point after.",
    },
    {
      id: "info-tents",
      title: "Info Tents",
      description:
        "Three info tents at the Start Precinct handle last-minute race queries and replacement timing chips.",
    },
    {
      id: "strava-route",
      title: "Strava Route",
      description:
        "Preview the full 170km course on Strava and load the GPX onto your bike computer.",
    },
  ],
};

export const ROUTE_70_DETAIL: RouteDetailData = {
  slug: "70",
  navLabel: "EKO 70",
  distanceLabel: "eko 70",
  heroImage: "/images/sm-DSC_1924.jpg",
  routeDescriptionImage: "/images/sm-DSC_1924.jpg",
  startImage: "/images/sm-CR2A2942.jpg",
  finishImage: "/images/g-CR2A3170.jpg",
  price: "₦40,000",
  earlyBirdPrice: "₦32,000",
  distanceKm: "94.5 kilometres",
  introEyebrow: "An Exhilarating Experience",
  introHeading: "The 94.5KM EKO170 Lagos Cycle Race",
  introBody:
    "The 70km is the perfect introduction to the world of Gran Fondo cycling — a more accessible option for a wider range of cyclists, including first-timers, junior riders, and anyone who prefers a less demanding challenge than the full 170km. Same fully closed roads, same Atlantic start, same festival finish — in a friendlier format.",
  routeDescHeading: "EKO 70 Route",
  routeDescParagraphs: [
    "The 70km starts exactly where the 170km does, on Eko Atlantic Boulevard, shortly after that event's final riders have set off. The route crosses Victoria Island and takes in the Lekki–Ikoyi Link Bridge — short and steep, but soon a fast, fun ride down to the coastal road.",
    "At the Lekki halfway point the 70km riders make their turn — the 170km field will have carried straight on — and come back along the shoreline with the breakers of the Atlantic for company, all the way downhill to the finish chute on the marina. Cut-off: 5 hours.",
  ],
  startWaveBody:
    "The Eko Atlantic Boulevard Start Precinct welcomes riders for the 70 kilometres — waves roll out from 06:45, shortly after the 170km riders.",
  moreAboutCards: [
    {
      id: "start-times",
      title: "Start Times",
      description:
        "Group start times for the 70km follow the 170km waves, rolling out from 06:45.",
    },
    {
      id: "cut-offs",
      title: "Cut-Offs",
      description:
        "One cut-off point at the Lekki turn keeps the course safe. Sweep vehicles carry riders outside the limit to the finish.",
    },
    {
      id: "get-to-finish",
      title: "Get to the Finish",
      description:
        "Cross the line and roll straight into the marina festival — the same finish as the 170km heroes.",
    },
    {
      id: "bag-drop",
      title: "Bag Drop-Off",
      description:
        "Drop your kit bag at the info tent on Eko Atlantic Boulevard before the start; collect it at the same point after.",
    },
    {
      id: "info-tents",
      title: "Info Tents",
      description:
        "Three info tents at the Start Precinct handle last-minute race queries and replacement timing chips.",
    },
    {
      id: "strava-route",
      title: "Strava Route",
      description:
        "Preview the 70km course on Strava and load the GPX onto your bike computer.",
    },
  ],
};
