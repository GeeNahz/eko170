"use client";

import { useState } from "react";
import { X } from "lucide-react";
import { ProductCard } from "../../shop/components/product-card";
import { ProductDetailSheet } from "../../shop/components/product-detail-sheet";
import type { CartItem, ShopProduct } from "../../shop/types";

export function MerchUpsellSection({
  products,
  cart,
  onAddToCart,
  onRemoveFromCart,
  hasEmailAccess,
}: {
  products: ShopProduct[];
  cart: CartItem[];
  onAddToCart: (item: CartItem) => void;
  onRemoveFromCart: (index: number) => void;
  hasEmailAccess: boolean;
}) {
  const [selected, setSelected] = useState<ShopProduct | null>(null);
  const [open, setOpen] = useState(false);

  function handleAdd(item: CartItem) {
    onAddToCart(item);
    setOpen(false);
  }

  return (
    <div>
      <div className="mb-2 border-b border-brand-cream-border pb-2.5 font-mono text-xs tracking-[2px] text-brand-green uppercase">
        Add Merch to Your Order? (Optional)
      </div>
      {!hasEmailAccess && (
        <p className="mb-4 font-sans text-xs text-gray-400">
          Enter your email above first to add merch to your order.
        </p>
      )}
      <div className="grid grid-cols-3 gap-2.5">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            compact
            onViewDetails={() => {
              setSelected(product);
              setOpen(true);
            }}
          />
        ))}
      </div>

      {cart.length > 0 && (
        <div className="mt-5 flex flex-col gap-2.5">
          {cart.map((item, index) => (
            <div
              key={`${item.productId}-${index}`}
              className="flex items-center justify-between gap-3 rounded-xl border border-brand-cream-border bg-brand-cream px-4 py-3"
            >
              <div>
                <div className="font-sans text-sm font-semibold text-brand-teal">
                  {item.name}
                </div>
                <div className="font-sans text-xs text-gray-500">
                  {item.selections.map((s) => `${s.guideLabel}: ${s.size}`).join(", ")}
                </div>
              </div>
              <div className="flex items-center gap-3">
                <span className="font-sans text-sm font-semibold text-brand-green">
                  ₦{item.priceValue.toLocaleString("en-NG")}
                </span>
                <button
                  type="button"
                  onClick={() => onRemoveFromCart(index)}
                  aria-label={`Remove ${item.name}`}
                  className="text-gray-400 hover:text-red-600"
                >
                  <X className="size-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      <ProductDetailSheet
        product={selected}
        open={open}
        onOpenChange={setOpen}
        onAddToCart={handleAdd}
        hasEmailAccess={hasEmailAccess}
        noEmailAccessMessage="Enter your email above to add merch to your order."
        singleAction
        singleActionLabel="Add to Order"
      />
    </div>
  );
}
