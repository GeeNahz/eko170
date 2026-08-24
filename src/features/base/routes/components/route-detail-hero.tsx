import Image from "next/image";
import { Reveal } from "@/components/motion/reveal";
import type { RouteDetailData } from "../types";

export function RouteDetailHero({ data }: { data: RouteDetailData }) {
  return (
    <div
      id="top"
      className="relative flex min-h-[420px] scroll-mt-[140px] items-center justify-center overflow-hidden bg-brand-teal sm:mx-4 sm:mt-4 sm:min-h-[560px] sm:rounded-[22px]"
    >
      <Image
        src={data.heroImage}
        alt=""
        fill
        priority
        className="hidden object-cover sm:block"
      />
      <div className="absolute inset-0 hidden bg-linear-115 from-brand-yellow/85 via-brand-yellow/35 to-brand-teal-deep/55 sm:block" />

      <Reveal className="relative px-5 py-16 text-center sm:px-10 sm:pt-28 sm:pb-32">
        <h1 className="font-heading text-6xl leading-[0.88] font-black text-white italic drop-shadow-[0_6px_40px_rgba(0,0,0,0.35)] sm:text-8xl lg:text-[112px]">
          {data.distanceLabel}
        </h1>
        <div className="mt-3.5 font-sans text-xl font-bold text-white drop-shadow-[0_2px_16px_rgba(0,0,0,0.4)] sm:text-2xl">
          Sunday, 10 January 2027
        </div>
        <div className="mt-6 inline-flex h-10 items-center rounded-full bg-white px-6 font-sans text-[13.5px] font-semibold text-brand-teal shadow-[0_8px_30px_rgba(0,0,0,0.25)]">
          Entries open
        </div>
      </Reveal>
    </div>
  );
}
