import type { Metadata } from "next";
import { ShopCatalogue } from "@/features/base/shop/components/shop-catalogue";
import { ShopHero } from "@/features/base/shop/components/shop-hero";
import { ShopService } from "@/features/base/shop/server/service";

export const metadata: Metadata = {
  title: "Shop — EKO170",
  description:
    "Official EKO170 merchandise — rider jerseys, caps, and gear. Coming soon.",
};

export default async function ShopPage() {
  const products = await ShopService.getProducts();

  return (
    <>
      <ShopHero />
      <ShopCatalogue products={products} />
    </>
  );
}
