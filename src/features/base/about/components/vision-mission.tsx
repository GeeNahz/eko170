import { Reveal } from "@/components/motion/reveal";

export function VisionMission() {
  return (
    <div className="relative mx-4 mt-4 overflow-hidden rounded-[22px] bg-brand-teal-deep">
      <svg
        aria-hidden
        viewBox="0 0 1440 200"
        preserveAspectRatio="none"
        className="absolute inset-x-0 bottom-0 h-[200px] w-full"
      >
        <path
          d="M0,168 C160,140 300,176 440,158 C600,138 720,178 880,164 C1040,150 1180,180 1320,160 L1440,168 L1440,200 L0,200 Z"
          fill="#ffffff"
          opacity="0.08"
        />
        <path
          d="M0,186 C200,166 360,196 540,184 C740,170 900,198 1100,186 C1260,178 1360,192 1440,184 L1440,200 L0,200 Z"
          fill="#ffffff"
          opacity="0.12"
        />
      </svg>

      <div className="relative mx-auto grid max-w-[1280px] grid-cols-1 gap-16 px-6 py-16 sm:px-10 sm:py-24 lg:grid-cols-2 lg:gap-0">
        <Reveal className="lg:border-r lg:border-white/12 lg:pr-14">
          <div className="mb-2 font-heading text-8xl leading-none font-black text-transparent italic [-webkit-text-stroke:1.5px_rgba(255,255,255,0.25)]">
            01
          </div>
          <h2 className="font-heading mb-6 text-4xl leading-[0.95] font-black text-white uppercase italic sm:text-5xl">
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

        <Reveal delay={0.1} className="lg:pl-14">
          <div className="mb-2 font-heading text-8xl leading-none font-black text-transparent italic [-webkit-text-stroke:1.5px_rgba(255,255,255,0.25)]">
            02
          </div>
          <h2 className="font-heading mb-6 text-4xl leading-[0.95] font-black text-white uppercase italic sm:text-5xl">
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
