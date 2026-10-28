"use client";

import { useState } from "react";
import { toast } from "sonner";
import { RevealGroup, RevealItem } from "@/components/motion/reveal";
import type { CartItem, ShopProduct } from "../types";
import { ProductCard } from "./product-card";
import { ProductDetailSheet } from "./product-detail-sheet";
import { useShopCart } from "./shop-cart-provider";

export function ProductGrid({
  products,
  interactive = false,
  hasEmailAccess = false,
}: {
  products: ShopProduct[];
  interactive?: boolean;
  hasEmailAccess?: boolean;
}) {
  // Always called (rules of hooks) — callers that pass
  // interactive=false must still wrap this component in a
  // ShopCartProvider, even though nothing here will use it.
  const cart = useShopCart();
  const [selected, setSelected] = useState<ShopProduct | null>(null);
  const [open, setOpen] = useState(false);

  function handleAddToCart(item: CartItem) {
    cart.addItem(item);
    toast.success(`${item.name} added to cart`);
    setOpen(false);
  }

  function handleBuyNow(item: CartItem) {
    cart.addItem(item);
    setOpen(false);
  }

  return (
    <>
      <RevealGroup className="grid grid-cols-1 gap-5 sm:grid-cols-3">
        {products.map((product) => (
          <RevealItem key={product.id}>
            <ProductCard
              product={product}
              onViewDetails={
                interactive
                  ? () => {
                      setSelected(product);
                      setOpen(true);
                    }
                  : undefined
              }
            />
          </RevealItem>
        ))}
      </RevealGroup>
      {interactive && (
        <ProductDetailSheet
          product={selected}
          open={open}
          onOpenChange={setOpen}
          onAddToCart={handleAddToCart}
          onBuyNow={handleBuyNow}
          hasEmailAccess={hasEmailAccess}
        />
      )}
    </>
  );
}
