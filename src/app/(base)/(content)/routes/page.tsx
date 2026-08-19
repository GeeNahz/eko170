import type { Metadata } from "next";
import { CourseOverview } from "@/features/base/routes/components/course-overview";
import { RouteCategories } from "@/features/base/routes/components/route-categories";
import { RouteMap } from "@/features/base/routes/components/route-map";
import { RouteSupport } from "@/features/base/routes/components/route-support";
import { RoutesHero } from "@/features/base/routes/components/routes-hero";

export const metadata: Metadata = {
  title: "Routes — EKO170",
  description:
    "The Atlantic Challenge — 170km and 70km closed-road routes through Eko Atlantic City, Victoria Island, Lekki, and Epe.",
};

export default function RoutesPage() {
  return (
    <>
      <RoutesHero />
      <CourseOverview />
      <RouteCategories />
      <RouteSupport />
      <RouteMap />
    </>
  );
}
