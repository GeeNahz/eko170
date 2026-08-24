import { Ban, HeartPulse, Package, Timer } from "lucide-react";
import { Reveal, RevealGroup, RevealItem } from "@/components/motion/reveal";
import { SUPPORT_FEATURES } from "../constants";

const ICONS = [Package, HeartPulse, Ban, Timer];

export function RouteSupport() {
  return (
    <div className="mx-3 overflow-hidden rounded-[22px] bg-brand-cream px-5 pt-11 pb-12 sm:mx-0 sm:rounded-none sm:bg-transparent sm:px-0 sm:py-0">
      <div className="mx-auto w-full max-w-[1280px] sm:px-10 sm:py-20">
        <Reveal className="mb-4 border-l-4 border-brand-green pl-3 font-mono text-xs tracking-wide text-brand-green uppercase">
          On the Day
        </Reveal>
        <Reveal
          delay={0.1}
          className="font-heading mb-12 text-4xl leading-[0.95] font-black text-brand-teal uppercase sm:text-5xl"
        >
          Support Along the Way
        </Reveal>

        <RevealGroup className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {SUPPORT_FEATURES.map((feature, i) => {
            const Icon = ICONS[i];
            return (
              <RevealItem
                key={feature.id}
                className="rounded-2xl border border-brand-cream-border p-7"
              >
                <div className="mb-4 flex size-11 items-center justify-center rounded-xl bg-brand-cream">
                  <Icon className="size-5 text-brand-green" />
                </div>
                <h3 className="font-heading mb-2 text-xl font-extrabold text-brand-teal uppercase">
                  {feature.title}
                </h3>
                <p className="font-sans text-sm leading-relaxed text-gray-500">
                  {feature.description}
                </p>
              </RevealItem>
            );
          })}
        </RevealGroup>
      </div>
    </div>
  );
}
