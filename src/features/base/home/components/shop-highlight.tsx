import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ProductGrid } from "../../shop/components/product-grid";
import { ShopService } from "../../shop/server/service";

export async function ShopHighlight() {
  const products = await ShopService.getProducts();
  const featured = products.slice(0, 3);

  return (
    <div
      id="shop"
      className="overflow-hidden bg-white px-5 pt-11 pb-12 sm:mx-4 sm:mt-4 sm:rounded-[22px] sm:px-10 sm:py-24"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 flex flex-col gap-6 sm:flex-row sm:flex-wrap sm:items-end sm:justify-between">
          <div>
            <div className="mb-4 border-l-4 border-brand-green pl-3 font-mono text-xs tracking-wide text-brand-green uppercase">
              Merch
            </div>
            <h2 className="font-heading text-4xl leading-[0.95] font-black text-brand-teal italic uppercase sm:text-[52px]">
              Shop
            </h2>
          </div>
          <Link
            href="/shop"
            className="inline-flex w-fit items-center gap-2.5 rounded-full border-2 border-brand-green px-6 py-4 font-sans text-sm font-semibold text-brand-green"
          >
            Visit the Shop
            <ArrowRight className="size-4" />
          </Link>
        </div>

        <ProductGrid products={featured} />
      </div>
    </div>
  );
}
