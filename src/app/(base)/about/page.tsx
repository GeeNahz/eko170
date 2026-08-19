import type { Metadata } from "next";
import { AboutHero } from "@/features/base/about/components/about-hero";
import { CtaBanner } from "@/features/base/about/components/cta-banner";
import { FourCs } from "@/features/base/about/components/four-cs";
import { Legacy } from "@/features/base/about/components/legacy";
import { PullQuote } from "@/features/base/about/components/pull-quote";
import { VisionMission } from "@/features/base/about/components/vision-mission";
import { Ticker } from "@/features/base/event/components/ticker";

export const metadata: Metadata = {
  title: "About — EKO170",
  description:
    "The Lagos Gran Fondo — West Africa's biggest closed-road cycling event. Our vision, mission, and legacy behind EKO170.",
};

export default function AboutPage() {
  return (
    <>
      <Ticker />
      <AboutHero />
      <PullQuote />
      <VisionMission />
      <FourCs />
      <Legacy />
      <CtaBanner />
    </>
  );
}
