import type { Metadata } from "next";
import { RouteDetail } from "@/features/base/routes/components/route-detail";
import { ROUTE_70_DETAIL } from "@/features/base/routes/constants";

export const metadata: Metadata = {
  title: "EKO 70 Route — EKO170",
  description:
    "The 70km EKO170 Lagos Cycle Race — the accessible Half Ride from Eko Atlantic City through Victoria Island and the Lekki–Ikoyi Bridge, back to the marina.",
};

export default function Route70Page() {
  return <RouteDetail data={ROUTE_70_DETAIL} />;
}
