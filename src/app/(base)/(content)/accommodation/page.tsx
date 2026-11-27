import type { Metadata } from "next";
import { AccommodationForm } from "@/features/base/accommodation/components/accommodation-form";
import { AccommodationGallery } from "@/features/base/accommodation/components/accommodation-gallery";
import { AccommodationHero } from "@/features/base/accommodation/components/accommodation-hero";
import { AccommodationNordicOffer } from "@/features/base/accommodation/components/accommodation-nordic-offer";

export const metadata: Metadata = {
  title: "Accommodation — EKO170",
  description:
    "A discounted rider rate at Nordic Hotel Lagos for EKO170 2027 — submit your details and the hotel will confirm your booking.",
};

export default function AccommodationPage() {
  return (
    <>
      <AccommodationHero />
      <AccommodationNordicOffer />
      <AccommodationGallery />
      <AccommodationForm />
    </>
  );
}
