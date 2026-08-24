import Image from "next/image";
import { Reveal } from "@/components/motion/reveal";

export function DiscoverHero() {
  return (
    <div className="relative overflow-hidden bg-brand-teal px-5 pt-[30px] pb-[34px] sm:mx-4 sm:mt-4 sm:rounded-[22px] sm:bg-brand-teal-deep sm:px-10 sm:pt-28 sm:pb-32">
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.04] sm:hidden"
        style={{
          backgroundImage:
            "repeating-linear-gradient(45deg, #fff 0, #fff 14px, transparent 14px, transparent 28px)",
        }}
      />
      <Image
        src="/images/sm-DSC_2032.jpg"
        alt="Lagos"
        fill
        priority
        className="hidden object-cover opacity-55 sm:block"
      />
      <div className="absolute inset-0 hidden bg-linear-to-r from-brand-teal-deep/90 via-brand-teal-deep/50 to-brand-teal-deep/30 sm:block" />
      <div
        aria-hidden
        className="absolute -top-30 -right-35 hidden size-130 rounded-full border-[70px] border-brand-green/14 sm:block"
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
