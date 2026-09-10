import type { Metadata } from "next";
import { VolunteerForm } from "@/features/base/volunteer/components/volunteer-form";
import { VolunteerHero } from "@/features/base/volunteer/components/volunteer-hero";

export const metadata: Metadata = {
  title: "Volunteer — EKO170",
  description:
    "Join the EKO170 volunteer crew — marshal corners, run feed zones, and hand out medals on race day. Kit and meals included.",
};

export default function VolunteerPage() {
  return (
    <>
      <VolunteerHero />
      <VolunteerForm />
    </>
  );
}
