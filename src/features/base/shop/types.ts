export type SizeGuideRow = {
  size: string;
  values: string[];
};

export type SizeGuide = {
  id: string;
  label: string;
  note?: string;
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
