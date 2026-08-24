import Image from "next/image";
import { Reveal } from "@/components/motion/reveal";

export function PartnersHero() {
  return (
    <div className="relative overflow-hidden bg-brand-teal px-5 pt-8 pb-8.5 sm:mx-4 sm:mt-4 sm:rounded-[22px] sm:bg-brand-teal-deep sm:px-10 sm:pt-28 sm:pb-32">
      <Image
        src="/images/sm-CR2A2877.jpg"
        alt="EKO170 partners"
        fill
        priority
        className="hidden object-cover opacity-50 sm:block"
      />
      <div className="absolute inset-0 hidden bg-linear-to-r from-brand-teal-deep/90 via-brand-teal-deep/55 to-brand-teal-deep/35 sm:block" />

      <div
        aria-hidden
        className="absolute -top-30 -right-35 hidden size-130 rounded-full border-[70px] border-brand-green/14 sm:block"
      />
      <div
        aria-hidden
        className="absolute right-30 -bottom-22 hidden size-70 rounded-full border-[44px] border-brand-yellow/10 sm:block"
      />

      <div className="relative mx-auto max-w-[1280px]">
        <Reveal className="mb-4 font-mono text-xs tracking-[1.5px] text-brand-yellow uppercase">
          Partners
        </Reveal>
        <Reveal
          delay={0.1}
          className="font-heading mb-5 text-6xl leading-[0.9] font-black text-white uppercase italic sm:text-7xl lg:text-8xl"
        >
          Backed by the Best
        </Reveal>
        <Reveal
          delay={0.2}
          className="max-w-[640px] font-sans text-base leading-relaxed text-white/72"
        >
          The brands and institutions that make Lagos&apos; biggest cycling
          event possible.
        </Reveal>
      </div>
    </div>
  );
}
