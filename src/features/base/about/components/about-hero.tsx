import Image from "next/image";
import { Reveal } from "@/components/motion/reveal";
import { ABOUT_HERO_STATS } from "../constants";

export function AboutHero() {
  return (
    <div className="relative mx-4 mt-4 min-h-[620px] overflow-hidden rounded-[22px]">
      <Image
        src="/images/CR2A3106.jpg"
        alt="EKO170 riders"
        fill
        priority
        className="object-cover"
        style={{ objectPosition: "center 30%" }}
      />
      <div className="absolute inset-0 bg-linear-to-t from-brand-teal-deep via-brand-teal-deep/35 to-brand-teal-deep/45" />

      <div className="relative mx-auto max-w-[1280px] px-6 pt-28 sm:px-10 sm:pt-32">
        <Reveal className="mb-4 font-mono text-xs tracking-[3px] text-brand-yellow uppercase">
          Who We Are
        </Reveal>
        <Reveal
          delay={0.1}
          className="font-heading mb-4 text-6xl leading-[0.86] font-black text-white uppercase italic sm:text-8xl lg:text-[104px]"
        >
          About
          <br />
          <span className="text-transparent [-webkit-text-stroke:2px_#fff]">
            EKO
          </span>
          <span className="text-brand-green">170</span>
        </Reveal>
        <Reveal
          delay={0.2}
          className="mb-14 max-w-[560px] font-sans text-lg leading-relaxed text-white/85"
        >
          The Lagos Gran Fondo — West Africa&apos;s biggest closed-road
          cycling event, made in Lagos.
        </Reveal>
      </div>

      <Reveal
        delay={0.3}
        className="relative border-t border-white/18 bg-brand-teal-deep/55 backdrop-blur-sm"
      >
        <div className="mx-auto grid max-w-[1280px] grid-cols-2 gap-6 px-6 py-6 sm:grid-cols-4 sm:px-10">
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
