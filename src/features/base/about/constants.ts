import type { AboutHeroStat, FourC } from "./types";

export const ABOUT_HERO_STATS: AboutHeroStat[] = [
  { id: "hero-stat-full", value: "170KM", label: "The Full Ride" },
  { id: "hero-stat-half", value: "70KM", label: "The Half Ride" },
  { id: "hero-stat-closed", value: "100%", label: "Closed Roads" },
  { id: "hero-stat-date", value: "10 · 01 · 27", label: "Race Day · Eko Atlantic" },
];

export const FOUR_CS: FourC[] = [
  {
    id: "four-c-challenge",
    title: "Challenge",
    description:
      "We design a course that pushes limits while rewarding persistence.",
  },
  {
    id: "four-c-culture",
    title: "Culture",
    description:
      "Each stretch of the route celebrates the fusion of tradition and innovation that defines Lagos.",
  },
  {
    id: "four-c-community",
    title: "Community",
    description:
      "Riders, residents, and volunteers all share in a collective celebration of endurance and unity.",
  },
  {
    id: "four-c-change",
    title: "Change",
    description: "We advocate for safer roads and sustainable mobility for all.",
  },
];

export const LEGACY_POINTS: string[] = [
  "EKO170 leaves lasting footprints — in communities, schools, and local economies.",
  "Through Ride to School programs, community rides, and safety advocacy, we encourage a new generation to view cycling as recreation and empowerment.",
  "Each year, small businesses thrive, hospitality booms, and the dream of dedicated cycling lanes in Lagos moves closer to reality.",
];
