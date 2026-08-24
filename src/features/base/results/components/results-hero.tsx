import { Reveal } from "@/components/motion/reveal";

export function ResultsHero() {
  return (
    <div className="mx-auto w-full max-w-[1280px] bg-brand-cream px-5 pt-10 pb-10 sm:px-10 sm:pt-18">
      <Reveal className="mb-4 border-l-4 border-brand-green pl-3 font-mono text-xs tracking-wide text-brand-green uppercase">
        Official Results
      </Reveal>
      <Reveal
        delay={0.1}
        className="font-heading text-6xl leading-[0.9] font-black text-brand-teal uppercase sm:text-7xl"
      >
        Race Results
      </Reveal>
      <Reveal
        delay={0.2}
        className="mt-4 max-w-[620px] font-sans text-base leading-relaxed text-gray-500"
      >
        EKO170 is officially timed by FinishTime. Full results — overall,
        gender, and age-category placings — are published on their
        platform and updated after race day.
      </Reveal>
    </div>
  );
}
