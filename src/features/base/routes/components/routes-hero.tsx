import Image from "next/image";
import { Reveal } from "@/components/motion/reveal";

export function RoutesHero() {
  return (
    <div className="relative overflow-hidden bg-brand-teal px-5 pt-8 pb-9 sm:mx-4 sm:mt-4 sm:rounded-[22px] sm:bg-brand-teal-deep sm:px-10 sm:pt-28 sm:pb-52">
      <Image
        src="/images/DSC_2320.jpg"
        alt=""
        fill
        priority
        className="hidden object-cover opacity-[0.32] sm:block"
      />
      <div className="absolute inset-0 hidden bg-linear-to-r from-brand-teal-deep/92 to-brand-teal-deep/50 sm:block" />

      <svg
        aria-hidden
        viewBox="0 0 1440 200"
        preserveAspectRatio="none"
        className="absolute inset-x-0 bottom-0 h-[200px] w-full"
      >
        <path
          d="M0,168 C160,140 300,176 440,158 C600,138 720,178 880,164 C1040,150 1180,180 1320,160 L1440,168 L1440,200 L0,200 Z"
          fill="#ffffff"
          opacity="0.08"
        />
        <path
          d="M0,186 C200,166 360,196 540,184 C740,170 900,198 1100,186 C1260,178 1360,192 1440,184 L1440,200 L0,200 Z"
          fill="#ffffff"
          opacity="0.12"
        />
      </svg>

      <div className="relative mx-auto max-w-[1280px]">
        <Reveal className="mb-4 font-mono text-xs tracking-[2px] text-brand-yellow uppercase">
          Route Preview
        </Reveal>
        <Reveal
          delay={0.1}
          className="font-heading mb-6 text-6xl leading-[0.9] font-black text-white uppercase sm:text-7xl lg:text-8xl"
        >
          The Atlantic
          <br />
          Challenge.
        </Reveal>
        <Reveal
          delay={0.2}
          className="max-w-[640px] font-sans text-lg leading-relaxed text-white/80"
        >
          Roads completely closed to traffic. 170 kilometres from Eko
          Atlantic City through Victoria Island, over the Lekki–Ikoyi Bridge,
          and into the open countryside of Epe.
        </Reveal>
      </div>
    </div>
  );
}
