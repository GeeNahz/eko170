import { Reveal } from "@/components/motion/reveal";
import { PARTNER_STATS } from "../constants";

export function PartnersStats() {
  return (
    <div className="overflow-hidden bg-brand-teal-deep px-5 py-[18px] sm:mx-4 sm:mt-4 sm:rounded-[22px] sm:px-10 sm:py-14">
      <div className="mx-auto grid w-full max-w-[1280px] grid-cols-2 gap-6 sm:grid-cols-4">
        {PARTNER_STATS.map((stat, i) => (
          <Reveal key={stat.id} delay={i * 0.05} className="text-center">
            <div className="font-heading text-5xl leading-[0.9] font-black text-brand-yellow italic">
              {stat.value}
            </div>
            <div className="mt-2.5 font-mono text-[11px] tracking-wide text-white/70 uppercase">
              {stat.label}
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  );
}
