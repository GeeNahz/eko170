import type { Metadata } from "next";
import { RegisterCta } from "@/features/base/results/components/register-cta";
import { ResultCategories } from "@/features/base/results/components/result-categories";
import { ResultsCta } from "@/features/base/results/components/results-cta";
import { ResultsHero } from "@/features/base/results/components/results-hero";

export const metadata: Metadata = {
  title: "Results — EKO170",
  description:
    "EKO170 is officially timed by FinishTime. View official race results, split by Full Ride and Half Ride categories.",
};

export default function ResultsPage() {
  return (
    <>
      <ResultsHero />
      <ResultCategories />
      <ResultsCta />
      <RegisterCta />
    </>
  );
}
