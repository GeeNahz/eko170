import { Reveal } from "@/components/motion/reveal";

export function ShopHero() {
  return (
    <div className="overflow-hidden bg-brand-teal-deep px-5 pt-7.5 pb-8.5 sm:mx-4 sm:mt-4 sm:rounded-[22px] sm:px-10 sm:pt-28 sm:pb-32">
      <div className="mx-auto max-w-[1280px]">
        <Reveal className="mb-4 font-mono text-xs tracking-[1.5px] text-brand-yellow uppercase">
          Merch
        </Reveal>
        <Reveal
          delay={0.1}
          className="font-heading mb-5 text-5xl leading-[0.95] font-black text-white uppercase italic sm:text-7xl"
        >
          Official EKO170 Kit
        </Reveal>
        <Reveal
          delay={0.2}
          className="max-w-[640px] font-sans text-base leading-relaxed text-white/82"
        >
          Bib shorts, rider bundles, and the complete kit — browse the
          lineup and check your size below. Purchasing opens soon.
        </Reveal>
      </div>
    </div>
  );
}
