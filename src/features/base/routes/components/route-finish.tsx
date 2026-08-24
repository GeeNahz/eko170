import Image from "next/image";
import { Reveal } from "@/components/motion/reveal";
import type { RouteDetailData } from "../types";

export function RouteFinish({ data }: { data: RouteDetailData }) {
  return (
    <div
      id="finish"
      className="scroll-mt-[170px] overflow-hidden bg-brand-cream px-5 pt-9 pb-11 sm:mx-4 sm:mt-4 sm:rounded-[22px] sm:px-10 sm:py-24"
    >
      <div className="mx-auto grid max-w-[1280px] grid-cols-1 items-center gap-16 lg:grid-cols-2">
        <Reveal>
          <div className="mb-4 font-mono text-xs tracking-wide text-brand-green uppercase">
            {data.navLabel} Ride
          </div>
          <h2 className="font-heading mb-2.5 text-4xl leading-[0.95] font-black text-brand-teal uppercase italic sm:text-5xl">
            The Finish
          </h2>
          <div className="mb-6 font-heading text-xl font-semibold text-gray-500">
            Finish Line Details
          </div>
          <p className="mb-2 font-sans text-[15px] font-bold text-brand-teal">
            Once you&apos;ve crossed the finish line
          </p>
          <p className="mb-4 font-sans text-[15px] leading-relaxed text-gray-700">
            Keep moving, grab your water, collect your medal, and enjoy
            everything the finish festival on the Atlantic marina has to
            offer — music, food, and the hospitality village.
          </p>
          <p className="mb-2 font-sans text-[15px] font-bold text-brand-teal">
            Secure bike park
          </p>
          <p className="mb-8 font-sans text-[15px] leading-relaxed text-gray-700">
            A marshalled bike park operates beside the finish village. Your
            number board must remain cable-tied to your handlebars so you
            can check your bike in and out.
          </p>
          <a
            href="/routes#map"
            className="inline-flex h-11 items-center gap-2 rounded-full bg-brand-yellow px-7 font-sans text-[13px] font-bold text-brand-teal"
          >
            View Finish Area Map
          </a>
        </Reveal>
        <Reveal delay={0.1} className="relative hidden aspect-[4/3] overflow-hidden rounded-2xl lg:block">
          <Image src={data.finishImage} alt="Finish line" fill className="object-cover" />
        </Reveal>
      </div>
    </div>
  );
}
