import Image from "next/image";
import Link from "next/link";
import { Reveal, RevealGroup, RevealItem } from "@/components/motion/reveal";
import { ROUTE_CATEGORY_CARDS } from "../constants";

export function RouteCategories() {
  return (
    <div className="mx-4 mt-4 overflow-hidden rounded-[22px] bg-brand-cream px-6 py-24 sm:px-10">
      <div className="mx-auto max-w-[1280px]">
        <Reveal className="mb-4 border-l-4 border-brand-green pl-3 font-mono text-xs tracking-wide text-brand-green uppercase">
          Race Categories
        </Reveal>
        <Reveal
          delay={0.1}
          className="font-heading mb-12 text-4xl leading-[0.95] font-black text-brand-teal uppercase italic sm:text-5xl"
        >
          Two Distances. One City.
        </Reveal>

        <RevealGroup className="grid grid-cols-1 gap-10 sm:grid-cols-2">
          {ROUTE_CATEGORY_CARDS.map((card) => (
            <RevealItem key={card.id}>
              <Link
                href={card.href}
                className="block overflow-hidden rounded-2xl border border-brand-cream-border bg-white"
              >
                <div className="relative aspect-video">
                  <Image
                    src={card.image}
                    alt={card.title}
                    fill
                    sizes="(min-width: 640px) 50vw, 100vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/75 to-transparent" />
                  <div className="absolute bottom-5 left-6 flex items-baseline gap-1">
                    <span className="font-heading text-5xl leading-none font-black text-white italic">
                      {card.distanceValue}
                    </span>
                    <span className="font-heading text-xl font-extrabold text-white">
                      {card.distanceSuffix}
                    </span>
                  </div>
                </div>
                <div className="p-7">
                  <h3 className="font-heading mb-3 text-2xl font-extrabold text-brand-teal uppercase">
                    {card.title}
                  </h3>
                  <p className="font-sans text-[15px] leading-relaxed text-gray-500">
                    {card.description}
                  </p>
                </div>
              </Link>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </div>
  );
}
