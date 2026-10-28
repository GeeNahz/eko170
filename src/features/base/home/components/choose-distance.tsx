import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { RevealGroup, RevealItem } from "@/components/motion/reveal";
import { RaceOptionCard } from "../../components/race-option-card";
import { RACE_OPTION_CARDS } from "../../routes/constants";

export function ChooseDistance() {
  return (
    <div
      id="race"
      className="overflow-hidden bg-brand-cream px-5 pt-11 pb-12 sm:mx-4 sm:mt-4 sm:rounded-[22px] sm:bg-white sm:px-10 sm:py-24"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-14 flex flex-col gap-6 sm:flex-row sm:flex-wrap sm:items-end sm:justify-between">
          <div className="flex items-center justify-between gap-6 sm:block">
            <div className="border-l-4 border-brand-green pl-3 font-mono text-xs tracking-wide text-brand-green uppercase sm:mb-4">
              Race Categories
            </div>
            <Link
              href="/routes/170"
              className="inline-flex items-center gap-2.5 rounded-full border-2 border-brand-green px-5 py-2.5 font-sans text-sm font-semibold text-brand-green sm:hidden"
            >
              Full Race Details
              <ArrowRight className="size-4" />
            </Link>
          </div>
          <h2 className="font-heading text-4xl leading-[0.95] font-black text-brand-teal italic uppercase sm:text-[52px]">
            Courses
          </h2>
          <Link
            href="/routes/170"
            className="hidden items-center gap-2.5 rounded-full border-2 border-brand-green px-6 py-4 font-sans text-sm font-semibold text-brand-green sm:inline-flex"
          >
            Full Race Details
            <ArrowRight className="size-4" />
          </Link>
        </div>

        <RevealGroup className="grid grid-cols-1 gap-10 lg:grid-cols-2">
          {RACE_OPTION_CARDS.map((card) => (
            <RevealItem key={card.id}>
              <RaceOptionCard card={card} />
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </div>
  );
}
