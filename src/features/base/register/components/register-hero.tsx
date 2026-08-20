import Image from "next/image";
import { Reveal } from "@/components/motion/reveal";

export function RegisterHero() {
  return (
    <div className="relative mx-4 mt-4 overflow-hidden rounded-[22px] bg-brand-teal-deep px-6 py-24 text-center sm:px-10">
      <Image
        src="/images/CR2A3106.jpg"
        alt=""
        fill
        priority
        className="object-cover opacity-[0.28]"
      />
      <div className="absolute inset-0 bg-linear-to-r from-brand-teal-deep/92 to-brand-teal-deep/55" />

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
      </div>
    </div>
  );
}
