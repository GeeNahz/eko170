import Image from "next/image";
import { Reveal } from "@/components/motion/reveal";

export function DiscoverHero() {
  return (
    <div className="relative mx-4 mt-4 overflow-hidden rounded-[22px] bg-brand-teal-deep px-6 pt-28 pb-32 sm:px-10">
      <Image
        src="/images/sm-DSC_2032.jpg"
        alt="Lagos"
        fill
        priority
        className="object-cover opacity-55"
      />
      <div className="absolute inset-0 bg-linear-to-r from-brand-teal-deep/90 via-brand-teal-deep/50 to-brand-teal-deep/30" />
      <div
        aria-hidden
        className="absolute -top-30 -right-35 size-130 rounded-full border-[70px] border-brand-green/14"
      />

      <div className="relative mx-auto max-w-[1280px]">
        <Reveal className="mb-4 font-mono text-xs tracking-[1.5px] text-brand-yellow uppercase">
          Discover Lagos
        </Reveal>
        <Reveal
          delay={0.1}
          className="font-heading mb-5 text-6xl leading-[0.9] font-black text-white uppercase italic sm:text-7xl lg:text-8xl"
        >
          Your Host City
        </Reveal>
        <Reveal
          delay={0.2}
          className="max-w-[640px] font-sans text-base leading-relaxed text-white/82"
        >
          Africa&apos;s most vibrant city is more than a backdrop — make
          EKO170 a full Lagos weekend.
        </Reveal>
      </div>
    </div>
  );
}
