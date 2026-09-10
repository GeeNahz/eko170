import { Reveal } from "@/components/motion/reveal";

export function PartnerApplyHero() {
  return (
    <div className="relative overflow-hidden bg-brand-teal px-5 pt-[30px] pb-[34px] text-center sm:mx-4 sm:mt-4 sm:rounded-[22px] sm:px-10 sm:py-24">
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          background:
            "repeating-linear-gradient(45deg, rgba(255,255,255,0.04) 0 14px, transparent 14px 28px)",
        }}
      />
      <div className="relative mx-auto max-w-[720px]">
        <Reveal className="mb-4 font-mono text-xs tracking-[2px] text-brand-yellow uppercase">
          Partner With EKO170
        </Reveal>
        <Reveal
          delay={0.1}
          className="font-heading text-5xl leading-[0.95] font-black text-white uppercase sm:text-6xl lg:text-7xl"
        >
          Become a Partner
        </Reveal>
        <Reveal
          delay={0.15}
          className="mt-4 font-sans text-sm text-white/82 sm:text-base"
        >
          Tell us about your organisation and how you would like to work
          with EKO170. The commercial team will come back to you by email.
        </Reveal>
      </div>
    </div>
  );
}
