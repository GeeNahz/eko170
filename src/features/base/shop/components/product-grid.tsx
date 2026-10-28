import { RevealGroup, RevealItem } from "@/components/motion/reveal";
import type { ShopProduct } from "../types";
import { ProductCard } from "./product-card";

export function ProductGrid({ products }: { products: ShopProduct[] }) {
  return (
    <RevealGroup className="grid grid-cols-2 gap-5 sm:grid-cols-4">
      {products.map((product) => (
        <RevealItem key={product.id}>
          <ProductCard product={product} />
        </RevealItem>
      ))}
    </RevealGroup>
  );
}
