import type { ShopProduct } from "./types";

// Placeholder catalogue — no real product photography or final
// pricing exists yet. Kept here so the page/section can be swapped to
// real data (and real images) without touching the components that
// render them.
export const STUB_PRODUCTS: ShopProduct[] = [
  {
    id: "product-jersey",
    name: "EKO170 Rider Jersey",
    price: "₦25,000",
    category: "Apparel",
    sizes: ["S", "M", "L", "XL", "XXL"],
  },
  {
    id: "product-cap",
    name: "EKO170 Rider Cap",
    price: "₦8,000",
    category: "Apparel",
  },
  {
    id: "product-bottle",
    name: "EKO170 Water Bottle",
    price: "₦5,000",
    category: "Gear",
  },
  {
    id: "product-tee",
    name: "EKO170 Tech Tee",
    price: "₦12,000",
    category: "Apparel",
    sizes: ["S", "M", "L", "XL", "XXL"],
  },
];
