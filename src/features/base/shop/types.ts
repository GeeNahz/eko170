export type SizeGuideRow = {
  size: string;
  values: string[];
};

export type SizeGuide = {
  id: string;
  label: string;
  note?: string;
  // Guides sharing a group are alternatives — e.g. the two jersey
  // guides share group "jersey", since a buyer picks Men's OR
  // Women's, not both. Guides with no group are always required
  // on their own (gloves, socks, bib shorts).
  group?: string;
  columns: string[];
  rows: SizeGuideRow[];
};

export type ShopProduct = {
  id: string;
  name: string;
  price: string;
  priceValue: number;
  image: string;
  category: string;
  description?: string;
  savings?: string;
  sizeGuides: SizeGuide[];
};

// One picked guide + size for a cart line item — e.g. { guideId:
// "guide-mens-jersey", guideLabel: "Jersey — Men's", size: "M" }.
export type CartItemSelection = {
  guideId: string;
  guideLabel: string;
  size: string;
};

export type CartItem = {
  productId: string;
  name: string;
  priceValue: number;
  quantity: number;
  selections: CartItemSelection[];
};
