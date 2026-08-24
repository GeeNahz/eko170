import Image from "next/image";
import { Reveal } from "@/components/motion/reveal";

export function RegisterHero() {
  return (
    <div className="relative overflow-hidden bg-brand-teal px-5 pt-[30px] pb-[34px] text-center sm:mx-4 sm:mt-4 sm:rounded-[22px] sm:bg-brand-teal-deep sm:px-10 sm:py-24">
      <Image
        src="/images/CR2A3106.jpg"
        alt=""
        fill
        priority
        className="hidden object-cover opacity-[0.28] sm:block"
      />
      <div className="absolute inset-0 hidden bg-linear-to-r from-brand-teal-deep/92 to-brand-teal-deep/55 sm:block" />

      <div className="relative mx-auto max-w-[920px]">
        <Reveal className="mb-4 font-mono text-xs tracking-[2px] text-brand-yellow uppercase">
          Enter the Race
        </Reveal>
        <Reveal
          delay={0.1}
          className="font-heading text-5xl leading-[0.95] font-black text-white uppercase sm:text-6xl lg:text-7xl"
        >
          EKO170 Registration
        </Reveal>
        <Reveal
          delay={0.15}
          className="mt-4 font-sans text-sm text-white/72 sm:hidden"
        >
          Sunday, 10 January 2027 · Eko Atlantic City, Lagos · Road · 170KM /
          70KM.
        </Reveal>
      </div>
    </div>
  );
}
