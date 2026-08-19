import Image from "next/image";
import { Reveal } from "@/components/motion/reveal";
import { LEGACY_POINTS } from "../constants";

export function Legacy() {
  return (
    <div className="mx-4 mt-4 overflow-hidden rounded-[22px] bg-white px-6 py-24 sm:px-10">
      <div className="mx-auto grid max-w-[1280px] grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <Reveal className="relative">
          <div className="relative aspect-4/3 overflow-hidden rounded-2xl">
            <Image
              src="/images/CR2A2756.jpg"
              alt="EKO170 legacy"
              fill
              className="object-cover"
            />
          </div>
          <div className="absolute -right-4 -bottom-4 rounded-[14px] bg-brand-green px-6.5 py-5 shadow-[0_16px_40px_rgba(47,158,68,0.35)]">
            <div className="font-heading text-[34px] leading-none font-black text-white italic">
              Ride to School
            </div>
            <div className="mt-1 font-mono text-[11px] tracking-wide text-white/80 uppercase">
              Community Programs
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mb-4 border-l-4 border-brand-green pl-3 font-mono text-xs tracking-wide text-brand-green uppercase">
            Our Legacy
          </div>
          <h2 className="font-heading mb-6 text-4xl leading-[0.95] font-black text-brand-teal uppercase italic sm:text-5xl">
            Beyond the finish line.
          </h2>
          <ul className="flex flex-col gap-4">
            {LEGACY_POINTS.map((point) => (
              <li
                key={point}
                className="relative pl-5.5 font-sans text-base leading-relaxed text-gray-700"
              >
                <span className="absolute left-0 text-brand-green">›</span>
                {point}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </div>
  );
}
