"use client";

import { Reveal } from "@/components/motion/reveal";
import type { ShopProduct } from "../types";
import { ProductGrid } from "./product-grid";

export function ShopCatalogue({
  products,
  stock,
}: {
  products: ShopProduct[];
  stock?: Record<string, number> | null;
}) {
  return (
    <div className="overflow-hidden bg-white px-5 pt-10 pb-11 sm:mx-4 sm:mt-4 sm:rounded-[22px] sm:px-10 sm:py-24">
      <div className="mx-auto w-full max-w-7xl">
        <Reveal className="mb-4 border-l-4 border-brand-green pl-3 font-mono text-xs tracking-wide text-brand-green uppercase">
          The Lineup
        </Reveal>
        <Reveal
          delay={0.1}
          className="font-heading mb-4 text-4xl leading-[0.95] font-black text-brand-teal uppercase italic sm:text-5xl"
        >
          Shop the Kit
        </Reveal>
        <Reveal
          delay={0.15}
          className="mb-11 max-w-[560px] font-sans text-sm leading-relaxed text-gray-500"
        >
          Order collection details will be communicated to participants
          before race day.
        </Reveal>
        <ProductGrid products={products} interactive compact stock={stock} />
      </div>
    </div>
  );
}
