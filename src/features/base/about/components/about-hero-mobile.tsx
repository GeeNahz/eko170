import { Reveal } from "@/components/motion/reveal";
import { ABOUT_HERO_STATS } from "../constants";

export function AboutHeroMobile() {
  return (
    <div className="relative overflow-hidden bg-brand-teal">
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(45deg, #fff 0, #fff 14px, transparent 14px, transparent 28px)",
        }}
      />

      <div className="relative px-5 pt-8 pb-8">
        <Reveal className="mb-4 font-mono text-xs tracking-[3px] text-brand-yellow uppercase">
          Who We Are
        </Reveal>
        <Reveal
          delay={0.1}
          className="font-heading mb-4 text-6xl leading-[0.86] font-black text-white uppercase italic"
        >
          About
          <br />
          <span className="text-transparent [-webkit-text-stroke:2px_#fff]">
            EKO
          </span>
          <span className="text-brand-green">170</span>
        </Reveal>
        <Reveal className="max-w-[560px] font-sans text-lg leading-relaxed text-white/85">
          The Lagos Gran Fondo — West Africa&apos;s biggest closed-road
          cycling event, made in Lagos.
        </Reveal>
      </div>

      <Reveal delay={0.2} className="relative border-t border-white/18 bg-brand-teal-deep">
        <div className="grid grid-cols-2 gap-4 px-5 py-[18px]">
          {ABOUT_HERO_STATS.map((stat) => (
            <div key={stat.id}>
              <div
                className={`font-heading text-3xl font-black italic ${
                  stat.id === "hero-stat-date" ? "text-brand-yellow" : "text-white"
                }`}
              >
                {stat.value}
              </div>
              <div className="mt-1 font-mono text-[11px] tracking-wide text-white/60 uppercase">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </Reveal>
    </div>
  );
}
