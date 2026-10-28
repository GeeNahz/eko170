import { Shirt } from "lucide-react";
import type { ShopProduct } from "../types";

export function ProductCard({ product }: { product: ShopProduct }) {
  return (
    <div className="rounded-2xl border border-brand-cream-border bg-white p-6">
      <div className="mb-5 flex aspect-square items-center justify-center rounded-xl bg-brand-cream">
        <Shirt className="size-10 text-brand-green/50" />
      </div>
      <div className="mb-1 font-mono text-[11px] tracking-wide text-gray-400 uppercase">
        {product.category}
      </div>
      <h3 className="font-heading mb-2 text-lg font-extrabold text-brand-teal uppercase">
        {product.name}
      </h3>
      <div className="font-sans text-base font-semibold text-brand-green">
        {product.price}
      </div>
      {product.sizes && (
        <div className="mt-2 font-sans text-xs text-gray-400">
          Sizes: {product.sizes.join(", ")}
        </div>
      )}
    </div>
  );
}
