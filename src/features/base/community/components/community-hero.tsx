import Image from "next/image";
import { Reveal } from "@/components/motion/reveal";

export function CommunityHero() {
  return (
    <div className="relative overflow-hidden bg-brand-teal px-5 pt-7.5 pb-8.5 sm:mx-4 sm:mt-4 sm:rounded-[22px] sm:bg-brand-teal-deep sm:px-10 sm:pt-28 sm:pb-32">
      <Image
        src="/images/sm-DSC_1708.jpg"
        alt="EKO170 community"
        fill
        priority
        className="hidden object-cover opacity-[0.22] sm:block"
      />
      <div className="absolute inset-x-0 bottom-0 hidden h-50 bg-linear-to-t from-brand-teal-deep to-transparent sm:block" />
      <div
        aria-hidden
        className="absolute -top-30 -right-35 hidden size-130 rounded-full border-[70px] border-brand-green/14 sm:block"
      />

      <div className="relative mx-auto max-w-[1280px]">
        <Reveal className="mb-4 font-mono text-xs tracking-[1.5px] text-brand-yellow uppercase">
          Community
        </Reveal>
        <Reveal
          delay={0.1}
          className="font-heading mb-5 text-6xl leading-[0.9] font-black text-white uppercase italic sm:text-7xl lg:text-8xl"
        >
          More Than a Race
        </Reveal>
        <Reveal
          delay={0.2}
          className="max-w-[640px] font-sans text-base leading-relaxed text-white/82"
        >
          EKO170 belongs to Lagos — its volunteers, clubs, charities, and
          the movement for safer, greener streets.
        </Reveal>
      </div>
    </div>
  );
}
