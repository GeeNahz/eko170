import { Reveal } from "@/components/motion/reveal";
import type { ShopProduct } from "../types";
import { ProductGrid } from "./product-grid";

export function ShopCatalogue({
  products,
  hasEmailAccess,
}: {
  products: ShopProduct[];
  hasEmailAccess: boolean;
}) {
  return (
    <div className="overflow-hidden bg-white px-5 pt-10 pb-11 sm:mx-4 sm:mt-4 sm:rounded-[22px] sm:px-10 sm:py-24">
      <div className="mx-auto w-full max-w-[1280px]">
        <Reveal className="mb-4 border-l-4 border-brand-green pl-3 font-mono text-xs tracking-wide text-brand-green uppercase">
          The Lineup
        </Reveal>
        <Reveal
          delay={0.1}
          className="font-heading mb-11 text-4xl leading-[0.95] font-black text-brand-teal uppercase italic sm:text-5xl"
        >
          Shop the Kit
        </Reveal>
        <ProductGrid products={products} interactive hasEmailAccess={hasEmailAccess} />
      </div>
    </div>
  );
}
