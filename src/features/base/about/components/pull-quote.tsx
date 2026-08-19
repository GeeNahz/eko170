import { Quote } from "lucide-react";
import { Reveal } from "@/components/motion/reveal";

export function PullQuote() {
  return (
    <div className="mx-4 mt-4 overflow-hidden rounded-[22px] bg-white px-6 py-24 sm:px-10">
      <div className="mx-auto max-w-[1000px] text-center">
        <Quote className="mx-auto mb-6 size-10 fill-brand-green text-brand-green opacity-20" />
        <Reveal className="font-heading mb-6 text-4xl leading-none font-black text-brand-teal italic uppercase sm:text-6xl">
          Lagos leads. Lagos endures.
          <br />
          <span className="text-brand-green">Lagos rides.</span>
        </Reveal>
        <Reveal
          delay={0.1}
          className="mx-auto max-w-[640px] font-sans text-base leading-relaxed text-gray-500"
        >
          Every kilometre tells a story — of resilience, pride, and progress.
          From the sleek skyline of Victoria Island to the rural calm of Epe,
          EKO170 embodies what Lagos stands for: grit, excellence, and
          motion.
        </Reveal>
      </div>
    </div>
  );
}
