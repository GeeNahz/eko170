import { Mountain, RefreshCw, Sparkles, Users } from "lucide-react";
import { Reveal, RevealGroup, RevealItem } from "@/components/motion/reveal";
import { FOUR_CS } from "../constants";

const ICONS = [Mountain, Sparkles, Users, RefreshCw];

export function FourCs() {
  return (
    <div className="mx-4 mt-4 overflow-hidden rounded-[22px] bg-brand-cream px-6 py-24 sm:px-10">
      <div className="mx-auto max-w-[1280px]">
        <Reveal className="mb-4 text-center font-mono text-xs tracking-wide text-brand-green uppercase">
          What We Stand For
        </Reveal>
        <Reveal
          delay={0.1}
          className="font-heading mb-14 text-center text-4xl leading-[0.95] font-black text-brand-teal uppercase italic sm:text-5xl"
        >
          The Four C&apos;s
        </Reveal>

        <RevealGroup className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {FOUR_CS.map((item, i) => {
            const Icon = ICONS[i];
            return (
              <RevealItem
                key={item.id}
                className="relative overflow-hidden rounded-2xl border border-brand-cream-border bg-white p-8"
              >
                <div className="font-heading absolute -top-3.5 right-3 text-8xl leading-none font-black text-brand-teal/[0.06] italic">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <Icon className="relative mb-4 size-[30px] text-brand-green" strokeWidth={1.8} />
                <h3 className="font-heading relative mb-2 text-2xl font-extrabold text-brand-teal uppercase">
                  {item.title}
                </h3>
                <p className="relative font-sans text-[15px] leading-relaxed text-[#365241]">
                  {item.description}
                </p>
              </RevealItem>
            );
          })}
        </RevealGroup>
      </div>
    </div>
  );
}
