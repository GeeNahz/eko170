import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { REGISTRATION } from "../lib/server/registration";
import type { RaceOptionCardData } from "../lib/types";

// Shared by Home's "Race Options" section and /routes' "Two Distances.
// One City." section — both render the exact same card now.
export function RaceOptionCard({ card }: { card: RaceOptionCardData }) {
  return (
    <div className="overflow-hidden rounded-2xl border border-brand-cream-border bg-white">
      <Link href={card.href} className="group block">
        <div className="relative aspect-[16/8] overflow-hidden bg-white">
          <Image
            src={card.image}
            alt={card.title}
            fill
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          />
        </div>
        <div className="px-8 pt-8">
          <div className="mb-4 flex items-baseline gap-1">
            <span className="font-heading text-6xl leading-[0.95] font-black text-brand-teal italic">
              {card.distanceValue}
            </span>
            <span className="font-heading text-2xl font-extrabold text-brand-teal">
              {card.distanceSuffix}
            </span>
          </div>
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
        </div>
      </Link>
      <div className="px-8 pb-8">
        <Link
          href={REGISTRATION.href}
          className="group/cta flex items-center justify-between pt-5"
        >
          <div>
            <div className="mb-1 font-mono text-[11px] tracking-wide text-gray-400 uppercase">
              Terrain
            </div>
            <div className="font-sans text-base font-semibold text-brand-teal">
              {card.terrain}
            </div>
          </div>
          <ArrowRight className="size-[18px] text-brand-green transition-transform group-hover/cta:translate-x-1" />
        </Link>
      </div>
    </div>
  );
}
