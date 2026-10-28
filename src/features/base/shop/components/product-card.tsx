import Image from "next/image";
import type { ShopProduct } from "../types";

export function ProductCard({
  product,
  onViewDetails,
}: {
  product: ShopProduct;
  onViewDetails?: () => void;
}) {
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
