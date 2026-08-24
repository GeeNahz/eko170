import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { RevealGroup, RevealItem } from "@/components/motion/reveal";
import { DISTANCE_CARDS } from "../constants";

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
              href="/routes"
              className="inline-flex items-center gap-2.5 rounded-full border-2 border-brand-green px-5 py-2.5 font-sans text-sm font-semibold text-brand-green sm:hidden"
            >
              Full Race Details
              <ArrowRight className="size-4" />
            </Link>
          </div>
          <h2 className="font-heading text-4xl leading-[0.95] font-black text-brand-teal italic uppercase sm:text-[52px]">
            Choose Your
            <br />
            Distance
          </h2>
          <Link
            href="/routes"
            className="hidden items-center gap-2.5 rounded-full border-2 border-brand-green px-6 py-4 font-sans text-sm font-semibold text-brand-green sm:inline-flex"
          >
            Full Race Details
            <ArrowRight className="size-4" />
          </Link>
        </div>

        <RevealGroup className="grid grid-cols-1 gap-10 lg:grid-cols-2">
          {DISTANCE_CARDS.map((card) => (
            <RevealItem
              key={card.id}
              className="overflow-hidden rounded-2xl border border-brand-cream-border"
            >
              <div className="group relative aspect-4/3 overflow-hidden">
                <Image
                  src={card.image}
                  alt={card.title}
                  fill
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/75 to-transparent to-55%" />
                <div className="absolute bottom-6 left-6">
                  <div className="flex items-baseline gap-1">
                    <span className="font-heading text-6xl leading-[0.95] font-black text-white italic">
                      {card.distanceValue}
                    </span>
                    <span className="font-heading text-2xl font-extrabold text-white">
                      {card.distanceSuffix}
                    </span>
                  </div>
                  <div className="font-sans text-base font-medium text-white/90">
                    {card.tagline}
                  </div>
                </div>
              </div>
              <div className="p-8">
                <h3 className="font-heading mb-4 text-2xl font-extrabold text-brand-teal uppercase">
                  {card.title}
                </h3>
                <p className="mb-6 font-sans text-base leading-relaxed text-gray-500">
                  {card.description}
                </p>
                <div className="flex flex-wrap gap-2 border-b border-brand-cream-border pb-6">
                  {card.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-brand-cream-border px-3.5 py-1.5 font-mono text-[11px] tracking-wide text-gray-600 uppercase"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex items-center justify-between pt-5">
                  <div>
                    <div className="mb-1 font-mono text-[11px] tracking-wide text-gray-400 uppercase">
                      Terrain
                    </div>
                    <div className="font-sans text-base font-semibold text-brand-teal">
                      {card.terrain}
                    </div>
                  </div>
                  <ArrowRight className="size-[18px] text-brand-green" />
                </div>
              </div>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </div>
  );
}
