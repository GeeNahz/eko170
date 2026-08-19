import type { Metadata } from "next";
import { RouteDetail } from "@/features/base/routes/components/route-detail";
import { ROUTE_170_DETAIL } from "@/features/base/routes/constants";

export const metadata: Metadata = {
  title: "EKO 170 Route — EKO170",
  description:
    "The 170km EKO170 Lagos Cycle Race — the flagship Full Ride from Eko Atlantic City through Victoria Island, over the Lekki–Ikoyi Bridge, to Epe and back.",
};

export default function Route170Page() {
  return <RouteDetail data={ROUTE_170_DETAIL} />;
}
