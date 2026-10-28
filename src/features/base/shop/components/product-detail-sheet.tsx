"use client";

import { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import type { CartItem, CartItemSelection, ShopProduct, SizeGuide } from "../types";

// Guides sharing a `group` are alternatives (pick one) — e.g. the two
// jersey guides. Guides with no group are each their own required
// picker. This groups a product's sizeGuides into one entry per pick.
function groupGuides(guides: SizeGuide[]) {
  const groups = new Map<string, SizeGuide[]>();
  for (const guide of guides) {
    const key = guide.group ?? guide.id;
    const existing = groups.get(key) ?? [];
    existing.push(guide);
    groups.set(key, existing);
  }
  return Array.from(groups.entries()).map(([key, options]) => ({
    key,
    // "Jersey — Men's" -> "Men's" as the toggle label when grouped
    label: options.length > 1 ? options[0].label.split("—")[0].trim() : options[0].label,
    options,
  }));
}

function DetailBody({
  product,
  onAddToCart,
  onBuyNow,
}: {
  product: ShopProduct;
  onAddToCart: (item: CartItem) => void;
  onBuyNow: (item: CartItem) => void;
}) {
  const guideGroups = useMemo(() => groupGuides(product.sizeGuides), [product]);

  // One active guide per group (for alternatives, which guide is
  // picked) plus one chosen size per group.
  const [activeGuide, setActiveGuide] = useState<Record<string, SizeGuide>>(
    () => Object.fromEntries(guideGroups.map((g) => [g.key, g.options[0]])),
  );
  const [size, setSize] = useState<Record<string, string>>({});

  useEffect(() => {
    setActiveGuide(Object.fromEntries(guideGroups.map((g) => [g.key, g.options[0]])));
    setSize({});
  }, [guideGroups]);

  const allSelected = guideGroups.every((g) => size[g.key]);

  function buildSelections(): CartItemSelection[] {
    return guideGroups.map((g) => ({
      guideId: activeGuide[g.key].id,
      guideLabel: activeGuide[g.key].label,
      size: size[g.key],
    }));
  }

  function buildItem(): CartItem {
    return {
      productId: product.id,
      name: product.name,
      priceValue: product.priceValue,
      quantity: 1,
      selections: buildSelections(),
    };
  }

  return (
    <div className="flex flex-col gap-5">
      <div className="relative aspect-square w-full overflow-hidden rounded-xl bg-white">
        <Image src={product.image} alt={product.name} fill className="object-cover" />
      </div>

      {product.description && (
        <p className="font-sans text-sm leading-relaxed text-gray-500">
          {product.description}
        </p>
      )}

      <div className="flex items-baseline gap-2">
        <span className="font-sans text-lg font-semibold text-brand-green">
          {product.price}
        </span>
        {product.savings && (
          <span className="font-sans text-xs font-semibold text-brand-yellow">
            {product.savings}
          </span>
        )}
      </div>

      <div className="flex flex-col gap-5">
        {guideGroups.map((group) => (
          <div key={group.key}>
            <div className="mb-2 font-mono text-[11px] tracking-wide text-gray-500 uppercase">
              {group.options.length > 1 ? group.label : group.options[0].label}
            </div>

            {group.options.length > 1 && (
              <div className="mb-2 flex flex-wrap gap-2">
                {group.options.map((option) => {
                  const optionLabel = option.label.split("—")[1]?.trim() ?? option.label;
                  const active = activeGuide[group.key].id === option.id;
                  return (
                    <button
                      key={option.id}
                      type="button"
                      onClick={() => {
                        setActiveGuide((prev) => ({ ...prev, [group.key]: option }));
                        setSize((prev) => ({ ...prev, [group.key]: "" }));
                      }}
                      className={cn(
                        "rounded-full border-2 px-4 py-1.5 font-sans text-xs font-semibold",
                        active
                          ? "border-brand-green bg-brand-green text-white"
                          : "border-brand-cream-border text-gray-600",
                      )}
                    >
                      {optionLabel}
                    </button>
                  );
                })}
              </div>
            )}

            <div className="flex flex-wrap gap-2">
              {activeGuide[group.key].rows.map((row) => {
                const active = size[group.key] === row.size;
                return (
                  <button
                    key={row.size}
                    type="button"
                    onClick={() =>
                      setSize((prev) => ({ ...prev, [group.key]: row.size }))
                    }
                    className={cn(
                      "min-w-10 rounded-lg border-2 px-3 py-1.5 font-sans text-xs font-semibold",
                      active
                        ? "border-brand-green bg-brand-green text-white"
                        : "border-brand-cream-border text-gray-600",
                    )}
                  >
                    {row.size}
                  </button>
                );
              })}
            </div>
          </div>
        ))}
      </div>

      <div className="flex flex-col gap-2.5 border-t border-brand-cream-border pt-4 sm:flex-row">
        <button
          type="button"
          disabled={!allSelected}
          onClick={() => onAddToCart(buildItem())}
          className="inline-flex flex-1 items-center justify-center gap-2.5 rounded-full border-2 border-brand-green px-6 py-3.5 font-sans text-sm font-semibold text-brand-green disabled:cursor-not-allowed disabled:opacity-40"
        >
          Add to Cart
        </button>
        <button
          type="button"
          disabled={!allSelected}
          onClick={() => onBuyNow(buildItem())}
          className="inline-flex flex-1 items-center justify-center gap-2.5 rounded-full bg-brand-green px-6 py-3.5 font-sans text-sm font-semibold text-white disabled:cursor-not-allowed disabled:opacity-40"
        >
          Buy Now
        </button>
      </div>
      {!allSelected && (
        <p className="-mt-3 font-sans text-xs text-gray-400">
          Choose a size for every item above to continue.
        </p>
      )}
    </div>
  );
}

export function ProductDetailSheet({
  product,
  open,
  onOpenChange,
  onAddToCart,
  onBuyNow,
}: {
  product: ShopProduct | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onAddToCart: (item: CartItem) => void;
  onBuyNow: (item: CartItem) => void;
}) {
  if (!product) return null;

  return (
    <>
      <div className="hidden sm:block">
        <Dialog open={open} onOpenChange={onOpenChange}>
          <DialogContent className="max-h-[85vh] w-full max-w-lg overflow-y-auto sm:max-w-lg">
            <DialogHeader>
              <DialogTitle className="font-heading text-xl font-extrabold text-brand-teal uppercase">
                {product.name}
              </DialogTitle>
            </DialogHeader>
            <DetailBody product={product} onAddToCart={onAddToCart} onBuyNow={onBuyNow} />
          </DialogContent>
        </Dialog>
      </div>
      <div className="sm:hidden">
        <Sheet open={open} onOpenChange={onOpenChange}>
          <SheetContent side="bottom" className="max-h-[88vh] overflow-y-auto rounded-t-2xl">
            <SheetHeader>
              <SheetTitle className="font-heading text-xl font-extrabold text-brand-teal uppercase">
                {product.name}
              </SheetTitle>
            </SheetHeader>
            <div className="px-4 pb-4">
              <DetailBody product={product} onAddToCart={onAddToCart} onBuyNow={onBuyNow} />
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </>
  );
}
