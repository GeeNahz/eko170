import Image from "next/image";
import { Reveal } from "@/components/motion/reveal";

export function LegacySection() {
  return (
    <div
      id="legacy"
      className="mx-4 mt-4 scroll-mt-[140px] overflow-hidden rounded-[22px] bg-white px-6 py-24 sm:px-10"
    >
      <div className="mx-auto grid w-full max-w-[1280px] grid-cols-1 items-center gap-16 lg:grid-cols-[1.05fr_0.95fr]">
        <Reveal>
          <div className="mb-4 border-l-4 border-brand-green pl-3 font-mono text-xs tracking-wide text-brand-green uppercase">
            What Remains
          </div>
          <h2 className="font-heading mb-5 text-4xl leading-[0.95] font-black text-brand-teal uppercase italic sm:text-5xl">
            Legacy
          </h2>
          <p className="font-sans text-lg leading-relaxed text-gray-700">
            Beyond one Sunday in January, EKO170 is building a cycling
            culture — safer roads, stronger clubs, and a generation of
            Lagosians who see the bicycle as freedom. Every edition funds
            the next step, and the movement grows.
          </p>
        </Reveal>
        <Reveal delay={0.1} className="relative aspect-[4/3] overflow-hidden rounded-2xl">
          <Image
            src="/images/sm-DSC_1924.jpg"
            alt="EKO170 legacy"
            fill
            className="object-cover"
          />
        </Reveal>
      </div>
    </div>
  );
}
