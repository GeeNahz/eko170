import type { ShopProduct, SizeGuide } from "../types";

// Guides sharing a `group` are alternatives (pick one) — e.g. the two
// jersey guides. Guides with no group are each their own required
// picker. This groups a product's sizeGuides into one entry per pick.
// Shared between the client-side detail sheet and the server-side
// stock lookup so both derive the same column/variant for a guide.
export function groupGuides(guides: SizeGuide[]) {
  const groups = new Map<string, SizeGuide[]>();
  for (const guide of guides) {
    const key = guide.group ?? guide.id;
    const existing = groups.get(key) ?? [];
    existing.push(guide);
    groups.set(key, existing);
  }
  return Array.from(groups.entries()).map(([key, options]) => ({
    key,
    // "Jersey — Men's" -> "Jersey" as the Sheet column name when grouped
    label:
      options.length > 1
        ? options[0].label.split("—")[0].trim()
        : options[0].label,
    options,
  }));
}

// "Jersey — Men's" -> "Men's" — only meaningful for a grouped guide
// (one of several alternatives); an ungrouped guide has nothing to
// disambiguate, so there's no variant.
export function variantLabel(
  guide: SizeGuide,
  groupSize: number,
): string | undefined {
  if (groupSize <= 1) return undefined;
  return guide.label.split("—")[1]?.trim() ?? guide.label;
}

// The one key format used everywhere stock is looked up or stored —
// matches exactly how CartItemSelection.column/variant/size are
// written into the shop-orders Sheet, so the two line up without any
// extra translation.
export function stockKey(
  column: string,
  variant: string | undefined,
  size: string,
): string {
  return `${column}::${variant ?? ""}::${size}`;
}

// Dedupes every distinct SizeGuide across all products (the same
// guide object is reused by several products, e.g. the jersey guides
// appear in both the Rider Bundle and the Complete Kit) and runs
// groupGuides once over that full set, so a guide's column/variant
// here is identical to what any product's own detail view would
// compute for it.
export function buildGuideStockMeta(
  products: ShopProduct[],
): Map<string, { column: string; variant?: string }> {
  const guidesById = new Map<string, SizeGuide>();
  for (const product of products) {
    for (const guide of product.sizeGuides) {
      guidesById.set(guide.id, guide);
    }
  }

  const groups = groupGuides(Array.from(guidesById.values()));
  const meta = new Map<string, { column: string; variant?: string }>();
  for (const group of groups) {
    for (const guide of group.options) {
      meta.set(guide.id, {
        column: group.label,
        variant: variantLabel(guide, group.options.length),
      });
    }
  }
  return meta;
}
