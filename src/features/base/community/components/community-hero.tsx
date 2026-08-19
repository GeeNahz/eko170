import Image from "next/image";
import { Reveal } from "@/components/motion/reveal";

export function CommunityHero() {
  return (
    <div className="relative mx-4 mt-4 overflow-hidden rounded-[22px] bg-brand-teal-deep px-6 pt-28 pb-32 sm:px-10">
      <Image
        src="/images/sm-DSC_1708.jpg"
        alt="EKO170 community"
        fill
        priority
        className="object-cover opacity-[0.22]"
      />
      <div className="absolute inset-x-0 bottom-0 h-50 bg-linear-to-t from-brand-teal-deep to-transparent" />
      <div
        aria-hidden
        className="absolute -top-30 -right-35 size-130 rounded-full border-[70px] border-brand-green/14"
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
