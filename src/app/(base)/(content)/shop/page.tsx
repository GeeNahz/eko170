import type { Metadata } from "next";
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
  // Purchasing (Add to Cart / Buy Now / Pay) is gated purely on
  // whether this page load carries ?email=... — the client sends
  // this link to riders who are registering now or already
  // registered. Browsing the catalogue itself is always open.
  const hasEmailAccess = Boolean(email && email.trim());

  return (
    <ShopCartProvider>
      <ShopHero />
      <ShopCatalogue products={products} hasEmailAccess={hasEmailAccess} />
      <ShopCartSheet prefilledEmail={email} hasEmailAccess={hasEmailAccess} />
    </ShopCartProvider>
  );
}
