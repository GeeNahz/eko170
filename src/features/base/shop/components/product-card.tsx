import Image from "next/image";
import type { ShopProduct } from "../types";

// Compact: a small thumbnail + name + price, no description/category
// — used wherever the grid must stay 3-across even on narrow screens
// (the /register upsell, and /shop's own catalogue). Regular: the
// fuller card used on Home's highlight section.
export function ProductCard({
  product,
  onViewDetails,
  compact = false,
}: {
  product: ShopProduct;
  onViewDetails?: () => void;
  compact?: boolean;
}) {
  if (compact) {
    return (
      <button
        type="button"
        onClick={onViewDetails}
        className="flex flex-col overflow-hidden rounded-xl border border-brand-cream-border bg-white text-left"
      >
        <div className="relative aspect-square w-full overflow-hidden bg-white">
          <Image src={product.image} alt={product.name} fill className="object-cover" />
        </div>
        <div className="flex flex-col gap-0.5 p-2">
          <div className="line-clamp-2 font-sans text-[11px] leading-tight font-semibold text-brand-teal">
            {product.name}
          </div>
          <div className="font-sans text-[11px] font-semibold text-brand-green">
            {product.price}
          </div>
          {product.savings && (
            <div className="line-clamp-1 font-sans text-[9px] font-semibold text-brand-yellow">
              {product.savings}
            </div>
          )}
        </div>
      </button>
    );
  }

  return (
    <div className="overflow-hidden rounded-2xl border border-brand-cream-border bg-white">
      <div className="relative aspect-square overflow-hidden bg-white">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover"
        />
      </div>
      <div className="p-6">
        <div className="mb-1 font-mono text-[11px] tracking-wide text-gray-400 uppercase">
          {product.category}
        </div>
        <h3 className="font-heading mb-2 text-lg font-extrabold text-brand-teal uppercase">
          {product.name}
        </h3>
        {product.description && (
          <p className="mb-3 font-sans text-sm leading-relaxed text-gray-500">
            {product.description}
          </p>
        )}
        <div className="flex items-baseline gap-2">
          <span className="font-sans text-base font-semibold text-brand-green">
            {product.price}
          </span>
        </div>
        {product.savings && (
          <div className="mt-1 font-sans text-xs font-semibold text-brand-yellow">
            {product.savings}
          </div>
        )}

        {onViewDetails && (
          <button
            type="button"
            onClick={onViewDetails}
            className="mt-5 w-full border-t border-brand-cream-border pt-4 text-left font-sans text-sm font-semibold text-brand-green"
          >
            View Details
          </button>
        )}
      </div>
    </div>
  );
}
