import { Check } from "lucide-react";
import { Reveal } from "@/components/motion/reveal";
import {
  DISTANCE_OPTIONS,
  DISTANCE_PRICES,
  resolveDistancePrice,
} from "../../register/constants";
import { WHATS_INCLUDED } from "../constants";

// Pricing is flat across both distances, so this reads off either
// option's config — same posture as EarlyBirdBanner/registration-form.
export function FeesIncluded() {
  const fee = resolveDistancePrice(DISTANCE_OPTIONS[0]) ?? 0;
  const earlyBird = DISTANCE_PRICES[DISTANCE_OPTIONS[0]].earlyBird;
  const earlyBirdActive = earlyBird && new Date() < new Date(earlyBird.endsAt);

  return (
    <div className="mx-3 mt-4 overflow-hidden rounded-[22px] bg-white px-5 py-11 sm:mx-4 sm:px-10 sm:py-20">
      <div className="mx-auto max-w-5xl">
        <Reveal className="mb-8 border-l-4 border-brand-green pl-3 font-mono text-xs tracking-wide text-brand-green uppercase">
          Fees &amp; What&apos;s Included
        </Reveal>
        <div className="flex flex-col gap-10 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <Reveal
              delay={0.1}
              className="font-heading text-4xl leading-none font-black text-brand-teal uppercase italic sm:text-5xl"
            >
              ₦{fee.toLocaleString("en-NG")}
            </Reveal>
            {earlyBirdActive && (
              <p className="mt-3 font-sans text-sm font-semibold text-brand-green">
                Early-bird price — one flat fee for both distances
              </p>
            )}
          </div>
          <ul className="flex flex-1 flex-col gap-3">
            {WHATS_INCLUDED.map((item) => (
              <li
                key={item}
                className="flex items-start gap-2.5 font-sans text-base text-brand-teal"
              >
                <Check className="mt-1 size-4 shrink-0 text-brand-green" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
