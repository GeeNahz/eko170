import Image from "next/image";
import { Reveal, RevealGroup, RevealItem } from "@/components/motion/reveal";
import { ATTRACTIONS } from "../constants";

export function AttractionsSection() {
  return (
    <div
      id="attractions"
      className="mx-4 mt-4 scroll-mt-[140px] overflow-hidden rounded-[22px] border-t border-brand-cream-border bg-brand-cream px-6 py-24 sm:px-10"
    >
      <div className="mx-auto w-full max-w-[1280px]">
        <Reveal className="mb-4 border-l-4 border-brand-green pl-3 font-mono text-xs tracking-wide text-brand-green uppercase">
          See
        </Reveal>
        <Reveal
          delay={0.1}
          className="font-heading mb-5 text-4xl leading-[0.95] font-black text-brand-teal uppercase italic sm:text-5xl"
        >
          Attractions
        </Reveal>
        <Reveal
          delay={0.15}
          className="mb-11 max-w-[680px] font-sans text-lg leading-relaxed text-gray-500"
        >
          From contemporary art to hidden beaches, the city&apos;s icons
          sit minutes from the route.
        </Reveal>

        <RevealGroup className="grid grid-cols-1 gap-5 sm:grid-cols-3">
          {ATTRACTIONS.map((attraction) => (
            <RevealItem
              key={attraction.id}
              className="flex flex-col overflow-hidden rounded-2xl border border-brand-cream-border bg-white"
            >
              <div className="relative aspect-4/3">
                <Image
                  src={attraction.image}
                  alt={attraction.title}
                  fill
                  sizes="(min-width: 640px) 33vw, 100vw"
                  className="object-cover"
                />
                <span className="absolute top-3.5 left-3.5 rounded-full bg-brand-yellow px-2.5 py-1.5 font-mono text-[10px] tracking-wide text-brand-teal uppercase">
                  {attraction.category}
                </span>
              </div>
              <div className="flex-1 p-6.5">
                <h3 className="font-heading mb-2 text-2xl font-extrabold text-brand-teal uppercase">
                  {attraction.title}
                </h3>
                <p className="font-sans text-[15px] leading-relaxed text-gray-500">
                  {attraction.description}
                </p>
              </div>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </div>
  );
}
