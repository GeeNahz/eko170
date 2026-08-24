import { Reveal, RevealGroup, RevealItem } from "@/components/motion/reveal";
import { RESULT_CATEGORIES } from "../constants";

export function ResultCategories() {
  return (
    <div className="overflow-hidden bg-white px-5 pt-11 pb-12 sm:mx-4 sm:mt-4 sm:rounded-[22px] sm:px-10 sm:py-16">
      <Reveal className="mb-8 font-mono text-xs tracking-wide text-brand-green uppercase">
        Race Categories
      </Reveal>
      <RevealGroup className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        {RESULT_CATEGORIES.map((category) => (
          <RevealItem
            key={category.id}
            className="rounded-2xl border border-brand-cream-border bg-brand-cream p-8"
          >
            <div className="mb-3 flex items-baseline gap-2.5">
              <span className="font-heading text-3xl font-black text-brand-teal italic">
                {category.distanceLabel}
              </span>
              <span className="font-heading text-lg font-extrabold text-brand-teal uppercase">
                {category.title}
              </span>
            </div>
            <p className="font-sans text-[15px] leading-relaxed text-gray-500">
              {category.description}
            </p>
          </RevealItem>
        ))}
      </RevealGroup>
    </div>
  );
}
