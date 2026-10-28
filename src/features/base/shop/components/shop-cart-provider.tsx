"use client";

import { createContext, useContext, useMemo, useState } from "react";
import type { CartItem } from "../types";

// A cart line is uniquely identified by its product + exact size
// selections — adding the same product/size combo again bumps its
// quantity instead of creating a duplicate line.
function lineKey(item: CartItem) {
  return [
    item.productId,
    ...item.selections.map((s) => `${s.guideId}:${s.size}`),
  ].join("|");
}

type ShopCartContextValue = {
  items: CartItem[];
  addItem: (item: CartItem) => void;
  removeItem: (index: number) => void;
  updateQuantity: (index: number, quantity: number) => void;
  clear: () => void;
  total: number;
};

const ShopCartContext = createContext<ShopCartContextValue | null>(null);

export function ShopCartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);

  const value = useMemo<ShopCartContextValue>(() => {
    function addItem(item: CartItem) {
      setItems((prev) => {
        const key = lineKey(item);
        const existingIndex = prev.findIndex((line) => lineKey(line) === key);
        if (existingIndex === -1) return [...prev, item];
        return prev.map((line, i) =>
          i === existingIndex
            ? { ...line, quantity: line.quantity + item.quantity }
            : line,
        );
      });
    }

    function removeItem(index: number) {
      setItems((prev) => prev.filter((_, i) => i !== index));
    }

    function updateQuantity(index: number, quantity: number) {
      if (quantity < 1) return;
      setItems((prev) =>
        prev.map((line, i) => (i === index ? { ...line, quantity } : line)),
      );
    }

    function clear() {
      setItems([]);
    }

    const total = items.reduce(
      (sum, item) => sum + item.priceValue * item.quantity,
      0,
    );

    return { items, addItem, removeItem, updateQuantity, clear, total };
  }, [items]);

  return (
    <ShopCartContext.Provider value={value}>{children}</ShopCartContext.Provider>
  );
}

export function useShopCart() {
  const ctx = useContext(ShopCartContext);
  if (!ctx) throw new Error("useShopCart must be used within a ShopCartProvider");
  return ctx;
}
