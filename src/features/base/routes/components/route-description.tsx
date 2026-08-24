import Image from "next/image";
import { Reveal } from "@/components/motion/reveal";
import type { RouteDetailData } from "../types";

export function RouteDescription({ data }: { data: RouteDetailData }) {
  return (
    <div
      id="route-description"
      className="scroll-mt-[170px] overflow-hidden bg-white px-5 pt-9 pb-11 sm:mx-4 sm:mt-4 sm:rounded-[22px] sm:px-10 sm:py-24"
    >
      <div className="mx-auto grid max-w-[1280px] grid-cols-1 items-center gap-16 lg:grid-cols-2">
        <Reveal className="relative hidden aspect-[4/3.4] overflow-hidden rounded-2xl lg:block">
          <Image
            src={data.routeDescriptionImage}
            alt={`${data.navLabel} route`}
            fill
            className="object-cover"
          />
        </Reveal>
        <Reveal delay={0.1}>
          <div className="mb-4 font-mono text-xs tracking-wide text-brand-green uppercase">
            Route Description
          </div>
          <h2 className="font-heading mb-2.5 text-4xl leading-[0.95] font-black text-brand-teal uppercase italic sm:text-5xl">
            {data.routeDescHeading}
          </h2>
          <div className="mb-6 font-heading text-xl font-semibold text-gray-500">
            From Start to Finish
          </div>
          <p className="mb-4 font-sans text-[15px] leading-relaxed text-gray-700">
            {data.routeDescParagraphs[0]}
          </p>
          <p className="mb-8 font-sans text-[15px] leading-relaxed text-gray-700">
            {data.routeDescParagraphs[1]}
          </p>
          <a
            href="/routes#map"
            className="inline-flex h-11 items-center gap-2 rounded-full bg-brand-yellow px-7 font-sans text-[13px] font-bold text-brand-teal"
          >
            View Route Map
          </a>
        </Reveal>
      </div>
    </div>
  );
}
