import { RevealGroup, RevealItem } from "@/components/motion/reveal";
import type { ShopProduct } from "../types";
import { ProductCard } from "./product-card";

export function ProductGrid({
  products,
  showSizeGuides = false,
}: {
  products: ShopProduct[];
  showSizeGuides?: boolean;
}) {
  return (
    <RevealGroup className="grid grid-cols-1 gap-5 sm:grid-cols-3">
      {products.map((product) => (
        <RevealItem key={product.id}>
          <ProductCard product={product} showSizeGuides={showSizeGuides} />
        </RevealItem>
      ))}
    </RevealGroup>
  );
}
