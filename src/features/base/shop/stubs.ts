import type { ShopProduct, SizeGuide } from "./types";

// Transcribed from the client's Monton size-guide reference sheets
// (public/images/shop/*size guides*.jpeg) — those images are reference
// only, not rendered directly; the values below are what drive the UI.

const BIB_SHORTS_SIZE_GUIDE: SizeGuide = {
  id: "guide-bib-shorts",
  label: "Bib Shorts — Men & Women",
  note: "Monton YS2253M · same men's sizing for both genders · cm, unstretched garment",
  columns: ["Flat half-waist width", "Flat half-hip width", "Finished inseam"],
  rows: [
    { size: "S", values: ["32", "34", "26.5"] },
    { size: "M", values: ["34", "36", "27.5"] },
    { size: "L", values: ["36", "38", "28.5"] },
    { size: "XL", values: ["38", "40", "29.5"] },
    { size: "2XL", values: ["40", "42", "30.5"] },
    { size: "3XL", values: ["42", "44", "30.5"] },
  ],
};

const MENS_JERSEY_SIZE_GUIDE: SizeGuide = {
  id: "guide-mens-jersey",
  label: "Jersey — Men's",
  note: "Monton YS8206M · cm, garment measurements",
  columns: ["Flat half-chest width", "Front zipper length", "Back length"],
  rows: [
    { size: "S", values: ["37.5", "46", "57.5"] },
    { size: "M", values: ["39.5", "48", "59.5"] },
    { size: "L", values: ["41.5", "50", "61.5"] },
    { size: "XL", values: ["44.0", "52", "63.5"] },
    { size: "2XL", values: ["46.5", "54", "65.5"] },
    { size: "3XL", values: ["49.0", "54", "65.5"] },
  ],
};

const WOMENS_JERSEY_SIZE_GUIDE: SizeGuide = {
  id: "guide-womens-jersey",
  label: "Jersey — Women's",
  note: "Monton YS8206W · cm, garment measurements",
  columns: ["Flat half-chest width", "Front zipper length", "Back length"],
  rows: [
    { size: "XS", values: ["34.5", "38", "48"] },
    { size: "S", values: ["36.5", "40", "50"] },
    { size: "M", values: ["38.5", "42", "52"] },
    { size: "L", values: ["40.5", "44", "54"] },
    { size: "XL", values: ["43.0", "46", "56"] },
    { size: "2XL", values: ["45.5", "48", "58"] },
  ],
};

const GLOVES_SIZE_GUIDE: SizeGuide = {
  id: "guide-gloves",
  label: "Short-Finger Gloves",
  note: "Revised Monton size chart · cm",
  columns: ["Glove length", "Palm measurement", "Wrist measurement", "Thumb length"],
  rows: [
    { size: "XS", values: ["14.6", "18.6", "13.2", "2.6"] },
    { size: "S", values: ["15.2", "19.4", "14.0", "2.7"] },
    { size: "M", values: ["15.8", "20.2", "14.8", "2.8"] },
    { size: "L", values: ["16.4", "21.0", "15.6", "2.9"] },
    { size: "XL", values: ["17.0", "21.8", "16.4", "3.0"] },
    { size: "XXL", values: ["17.6", "22.6", "17.2", "3.1"] },
  ],
};

const SOCKS_SIZE_GUIDE: SizeGuide = {
  id: "guide-socks",
  label: "Socks",
  note: "Monton YS9940E · choose by EU shoe size",
  columns: ["EU shoe size"],
  rows: [
    { size: "S", values: ["36–39"] },
    { size: "M", values: ["39–42"] },
    { size: "L", values: ["42–45"] },
  ],
};

export const STUB_PRODUCTS: ShopProduct[] = [
  {
    id: "product-bib-shorts",
    name: "Flux Block Bib Shorts",
    price: "₦117,000",
    priceValue: 117000,
    image: "/images/shop/bib shorts.jpeg",
    category: "Apparel",
    sizeGuides: [BIB_SHORTS_SIZE_GUIDE],
  },
  {
    id: "product-rider-bundle",
    name: "Rider Bundle",
    price: "₦118,000",
    priceValue: 118000,
    image: "/images/shop/rider bundle.jpeg",
    category: "Bundle",
    description: "Jersey, short-finger gloves, and socks.",
    sizeGuides: [
      MENS_JERSEY_SIZE_GUIDE,
      WOMENS_JERSEY_SIZE_GUIDE,
      GLOVES_SIZE_GUIDE,
      SOCKS_SIZE_GUIDE,
    ],
  },
  {
    id: "product-complete-kit",
    name: "Complete Kit",
    price: "₦230,000",
    priceValue: 230000,
    image: "/images/shop/complete kit.jpeg",
    category: "Bundle",
    description:
      "The full Rider Bundle (jersey, gloves, socks) plus the Flux Block Bib Shorts.",
    savings: "Save ₦5,000 vs buying separately",
    sizeGuides: [
      MENS_JERSEY_SIZE_GUIDE,
      WOMENS_JERSEY_SIZE_GUIDE,
      GLOVES_SIZE_GUIDE,
      SOCKS_SIZE_GUIDE,
      BIB_SHORTS_SIZE_GUIDE,
    ],
  },
];
