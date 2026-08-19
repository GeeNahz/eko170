import type { ResultCategory } from "./types";

export const RESULT_CATEGORIES: ResultCategory[] = [
  {
    id: "category-170",
    title: "Full Ride",
    distanceLabel: "170KM",
    description:
      "Results published by Overall, Gender, and Age-Category (Junior/Open) placings.",
  },
  {
    id: "category-70",
    title: "Half Ride",
    distanceLabel: "70KM",
    description:
      "Results published by Overall, Gender, and Age-Category (Junior/Open) placings.",
  },
];

export const RESULTS_QUERY_KEYS = {
  info: ["results", "info"] as const,
};
