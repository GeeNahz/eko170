import Link from "next/link";
import { ArrowRight, Download, MapPin } from "lucide-react";
import { Reveal } from "@/components/motion/reveal";
import { REGISTER_HREF } from "../../navigation/constants";
import { ROUTE_HIGHLIGHTS, ROUTE_STATS } from "../constants";

export function CourseOverview() {
  return (
    <div className="bg-white px-5 pt-9 pb-2 sm:bg-transparent sm:px-0 sm:py-0">
      <div className="mx-auto w-full max-w-[1280px] sm:px-10 sm:py-20">
        <Reveal className="mb-4 font-mono text-xs tracking-wide text-brand-green uppercase">
          Course Overview
        </Reveal>
        <div className="grid grid-cols-1 items-start gap-14 lg:grid-cols-2">
        <Reveal delay={0.1}>
          <p className="mb-6 font-sans text-lg leading-relaxed text-gray-700">
            Starting and finishing at Eko Atlantic Boulevard, the Full Ride
            takes you through Victoria Island, Ahmadu Bello Way, over the
            Lekki–Ikoyi Bridge, along the Lekki–Epe Expressway, through the
            Lekki Free Trade Zone and Dangote Refinery corridor, and into
            the open countryside of Epe before looping back.
          </p>
          <div className="mb-8 grid grid-cols-2 gap-4">
            {ROUTE_STATS.map((stat) => (
              <div
                key={stat.id}
                className="rounded-xl border border-brand-cream-border px-6 py-4"
              >
                <div className="mb-1.5 font-mono text-[11px] tracking-wide text-gray-400 uppercase">
                  {stat.label}
                </div>
                <div className="font-sans text-base font-semibold text-brand-teal">
                  {stat.value}
                </div>
              </div>
            ))}
          </div>
          <div className="flex flex-wrap gap-4">
            <Link
              href={REGISTER_HREF}
              className="inline-flex items-center gap-2.5 rounded-full bg-brand-green px-6 py-4 font-sans text-sm font-semibold text-white"
            >
              Register for This Route
              <ArrowRight className="size-4" />
            </Link>
            <button
              type="button"
              className="inline-flex items-center gap-2.5 rounded-full border-2 border-brand-green px-6 py-4 font-sans text-sm font-semibold text-brand-green"
            >
              <Download className="size-4" />
              Download GPX
            </button>
          </div>
        </Reveal>

        <Reveal delay={0.2}>
          <a
            href="#map"
            className="flex items-center gap-3 rounded-2xl border border-brand-cream-border bg-brand-teal px-6 py-6"
          >
            <MapPin className="size-6 shrink-0 text-brand-yellow" />
            <span className="font-sans text-sm font-semibold text-white">
              View the interactive route map below
            </span>
          </a>
          <div className="mt-6 flex flex-col gap-2">
            <div className="mb-0.5 font-mono text-xs tracking-wide text-brand-green uppercase">
              Route Highlights
            </div>
            {ROUTE_HIGHLIGHTS.map((highlight) => (
              <div key={highlight} className="relative pl-5 font-sans text-sm text-gray-600">
                <span className="absolute left-0 text-brand-green">›</span>
                {highlight}
              </div>
            ))}
          </div>
        </Reveal>
        </div>
      </div>
    </div>
  );
}
