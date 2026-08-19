import type { Metadata } from "next";
import { GalleryCta } from "@/features/base/gallery/components/gallery-cta";
import { GalleryGrid } from "@/features/base/gallery/components/gallery-grid";
import { GalleryHero } from "@/features/base/gallery/components/gallery-hero";

export const metadata: Metadata = {
  title: "Gallery — EKO170",
  description:
    "Moments in Motion — relive EKO170 through the lens. Start-line energy, bridge crossings, and finish-line celebration.",
};

export default function GalleryPage() {
  return (
    <>
      <GalleryHero />
      <GalleryGrid />
      <GalleryCta />
    </>
  );
}
