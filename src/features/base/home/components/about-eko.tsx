import { Bike, Globe, Route, TrafficCone } from "lucide-react";
import { Reveal, RevealGroup, RevealItem } from "@/components/motion/reveal";
import { ABOUT_FEATURE_CARDS } from "../constants";

const CARD_ICONS = [Bike, Route, Globe];

export function AboutEko() {
  return (
    <div
      id="about-eko"
      className="overflow-hidden bg-white px-5 pt-11 pb-12 sm:mx-4 sm:mt-4 sm:rounded-[22px] sm:px-10 sm:pt-24 sm:pb-10"
    >
      <div className="mx-auto mb-14 max-w-3xl text-center">
        <div className="mb-4 border-l-4 border-brand-green pl-3 font-mono text-xs tracking-wide text-brand-green uppercase">
          About The Ride
        </div>
        <h2 className="font-heading mb-6 text-4xl leading-[0.95] font-black text-brand-teal italic uppercase sm:text-[52px]">
          What is EKO170?
        </h2>
        <Reveal className="mb-7 -mt-3.5 font-heading text-xl font-semibold tracking-wide text-gray-500 uppercase">
          An Exhilarating Experience
        </Reveal>
        <p className="font-sans text-lg leading-relaxed text-gray-600">
          EKO170 is more than a ride — it&apos;s a celebration of cycling,
          community, and the unstoppable spirit of Lagos. Covering a full 170
          kilometres, this challenge is designed to push limits, showcase the
          city&apos;s heartbeat, and unite riders of all levels.
        </p>
      </div>

      <div className="mx-auto max-w-6xl">
        <Reveal className="relative flex flex-wrap items-center gap-6 overflow-hidden rounded-[20px] bg-linear-120 from-brand-teal to-brand-green p-9 shadow-[0_24px_60px_rgba(16,24,40,0.14)] sm:p-11">
          <div
            aria-hidden
            className="absolute inset-x-0 top-0 h-2 opacity-90"
            style={{
              background:
                "repeating-linear-gradient(45deg, #fdc700 0, #fdc700 14px, #0f3a44 14px, #0f3a44 28px)",
            }}
          />
          <div className="flex size-18 shrink-0 items-center justify-center rounded-2xl bg-white/15">
            <TrafficCone className="size-8.5 text-white" />
          </div>
          <div className="min-w-0 flex-1 sm:min-w-70">
            <div className="font-heading mb-2 text-2xl leading-none font-extrabold text-white uppercase sm:text-[30px]">
              Major roads completely{" "}
              <span className="text-yellow-400">closed to traffic</span>
            </div>
            <p className="font-sans text-[17px] leading-relaxed text-white/88">
              No cars. No okadas. No chaos. Just you, your bike, and the open
              road.
            </p>
          </div>
        </Reveal>

        <RevealGroup className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-3">
          {ABOUT_FEATURE_CARDS.map((card, i) => {
            const Icon = CARD_ICONS[i];
            return (
              <RevealItem
                key={card.id}
                className="rounded-2xl border border-brand-cream-border p-9"
              >
                <div className="mb-5.5 flex size-14 items-center justify-center rounded-[14px] bg-green-50">
                  <Icon className="size-7 text-brand-green" />
                </div>
                <h3 className="font-heading mb-2.5 text-2xl font-extrabold text-brand-teal uppercase">
                  {card.title}
                </h3>
                <p className="font-sans text-[15px] leading-relaxed text-gray-500">
                  {card.description}
                </p>
              </RevealItem>
            );
          })}
        </RevealGroup>
      </div>
    </div>
  );
}
