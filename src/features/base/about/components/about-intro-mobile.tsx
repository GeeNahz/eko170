import { Quote } from "lucide-react";
import { Reveal } from "@/components/motion/reveal";

export function AboutIntroMobile() {
  return (
    <div className="relative overflow-hidden bg-brand-teal px-5 pt-10 pb-11">
      <div className="relative text-center">
        <Quote className="mx-auto mb-6 size-10 fill-white text-white opacity-20" />
        <Reveal className="font-heading mb-6 text-4xl leading-none font-black text-white italic uppercase">
          Lagos leads. Lagos endures.
          <br />
          <span className="text-brand-yellow">Lagos rides.</span>
        </Reveal>
        <Reveal delay={0.1} className="mx-auto max-w-[640px] font-sans text-base leading-relaxed text-white/78">
          Every kilometre tells a story — of resilience, pride, and progress.
          From the sleek skyline of Victoria Island to the rural calm of Epe,
          EKO170 embodies what Lagos stands for: grit, excellence, and
          motion.
        </Reveal>
      </div>

      <div className="mt-12 flex flex-col gap-12">
        <Reveal delay={0.2}>
          <div className="mb-2 font-heading text-8xl leading-none font-black text-transparent italic [-webkit-text-stroke:1.5px_rgba(255,255,255,0.25)]">
            01
          </div>
          <h2 className="font-heading mb-6 text-4xl leading-[0.95] font-black text-white uppercase italic">
            Our Vision
          </h2>
          <p className="mb-4 font-sans text-[15.5px] leading-relaxed text-white/82">
            Lagos is a city that never stops moving — alive with ambition,
            rhythm, and the unmistakable pulse of possibility. EKO 170 Lagos
            Gran Fondo was born to channel that energy onto two wheels.
          </p>
          <p className="font-sans text-[15.5px] leading-relaxed text-white/82">
            Our vision is simple but powerful: to position Lagos as{" "}
            <span className="font-semibold text-brand-yellow">
              Africa&apos;s cycling capital
            </span>{" "}
            — where world-class endurance meets coastal beauty, and where
            sport becomes a catalyst for unity, health, and economic growth.
          </p>
        </Reveal>

        <Reveal delay={0.3}>
          <div className="mb-2 font-heading text-8xl leading-none font-black text-transparent italic [-webkit-text-stroke:1.5px_rgba(255,255,255,0.25)]">
            02
          </div>
          <h2 className="font-heading mb-6 text-4xl leading-[0.95] font-black text-white uppercase italic">
            Our Mission
          </h2>
          <p className="mb-4 font-sans text-[15.5px] leading-relaxed text-white/82">
            We exist to promote active living, celebrate Lagos&apos;s
            stunning urban and coastal landscapes, and champion a healthier,
            more connected society.
          </p>
          <p className="mb-4 font-sans text-[15.5px] leading-relaxed text-white/82">
            Through this annual event, we aim to drive sports tourism,
            support local enterprise, and highlight Lagos&apos;s evolution
            into a truly global megacity.
          </p>
          <p className="font-sans text-[15.5px] leading-relaxed font-semibold text-white">
            EKO 170 is more than a race — it is a cultural statement.
          </p>
        </Reveal>
      </div>
    </div>
  );
}
