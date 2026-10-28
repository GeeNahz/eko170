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
// "guide-mens-jersey", guideLabel: "Jersey — Men's", column: "Jersey",
// variant: "Men's", size: "M" }. `column` is the group-level name
// (e.g. "Jersey" covers both the Men's and Women's guides) — used as
// the Sheets column header so a grouped pick lands in one consistent
// column regardless of which alternative was chosen. `variant` is
// only set for grouped picks (undefined when there's no alternative
// to disambiguate, e.g. gloves/socks) — without it, the Sheet would
// only show a jersey size with no way to tell Men's from Women's,
// which matters for fulfillment.
export type CartItemSelection = {
  guideId: string;
  guideLabel: string;
  column: string;
  variant?: string;
  size: string;
};

export type CartItem = {
  productId: string;
  name: string;
  priceValue: number;
  quantity: number;
  selections: CartItemSelection[];
};
