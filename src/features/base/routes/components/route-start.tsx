import Image from "next/image";
import { Reveal } from "@/components/motion/reveal";
import { ROUTE_START_CHECKLIST } from "../constants";
import type { RouteDetailData } from "../types";

export function RouteStart({ data }: { data: RouteDetailData }) {
  return (
    <div
      id="start"
      className="scroll-mt-[170px] overflow-hidden bg-brand-cream px-5 pt-9 pb-10 sm:mx-4 sm:mt-4 sm:rounded-[22px] sm:bg-white sm:px-10 sm:py-24"
    >
      <div className="mx-auto grid max-w-[1280px] grid-cols-1 items-center gap-16 lg:grid-cols-2">
        <Reveal className="relative hidden aspect-[4/3] overflow-hidden rounded-2xl lg:block">
          <Image
            src={data.startImage}
            alt="Start line at Eko Atlantic"
            fill
            className="object-cover"
          />
        </Reveal>
        <Reveal delay={0.1}>
          <div className="mb-4 font-mono text-xs tracking-wide text-brand-green uppercase">
            Getting to the Start Line
          </div>
          <h2 className="font-heading mb-2.5 text-4xl leading-[0.95] font-black text-brand-teal uppercase italic sm:text-5xl">
            The Start
          </h2>
          <div className="mb-6 font-heading text-xl font-semibold text-gray-500">
            Pre-Race Information
          </div>
          <p className="mb-4 font-sans text-[15px] leading-relaxed text-gray-700">
            {data.startWaveBody}
          </p>
          <p className="mb-2.5 font-sans text-[15px] font-bold text-brand-teal">
            Don&apos;t leave home without…
          </p>
          <ul className="mb-8 flex list-disc flex-col gap-1 pl-5 font-sans text-[15px] leading-loose text-gray-700">
            {ROUTE_START_CHECKLIST.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <a
            href="/routes#map"
            className="inline-flex h-11 items-center gap-2 rounded-full bg-brand-yellow px-7 font-sans text-[13px] font-bold text-brand-teal"
          >
            View Start Area Map
          </a>
        </Reveal>
      </div>
    </div>
  );
}
