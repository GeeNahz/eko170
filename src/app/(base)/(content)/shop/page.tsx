import type { Metadata } from "next";
import { MERCH_UPSELL_ENABLED } from "@/features/base/lib/constants";
import { ShopCartProvider } from "@/features/base/shop/components/shop-cart-provider";
import { ShopCartSheet } from "@/features/base/shop/components/shop-cart-sheet";
import { ShopCatalogue } from "@/features/base/shop/components/shop-catalogue";
import { ShopHero } from "@/features/base/shop/components/shop-hero";
import { ShopService } from "@/features/base/shop/server/service";

export const metadata: Metadata = {
  title: "Shop — EKO170",
  description:
    "Official EKO170 merchandise — rider jerseys, caps, and gear. Coming soon.",
};

export default async function ShopPage({
  searchParams,
}: {
  searchParams: Promise<{ email?: string }>;
}) {
  const products = await ShopService.getProducts();
  const { email } = await searchParams;

  return (
    <ShopCartProvider>
      <ShopHero />
      <ShopCatalogue products={products} interactive={MERCH_UPSELL_ENABLED} />
      {MERCH_UPSELL_ENABLED && <ShopCartSheet prefilledEmail={email} />}
    </ShopCartProvider>
  );
}
