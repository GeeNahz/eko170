import "server-only";
import { getSheetRows, postToSheet } from "../../lib/server/sheets-client";
import { getActiveGateway } from "../../lib/server/payment";
import { sendShopOrderConfirmationEmail } from "../../lib/server/email-client";
import { SITE_URL } from "../../lib/constants";
import { buildGuideStockMeta, stockKey } from "../lib/size-guides";
import { STUB_PRODUCTS } from "../stubs";
import type { CartItem, ShopProduct } from "../types";

// Matches a Sheet cell written as "SIZE" or "SIZE (Variant)" — see
// CartItemSelection's column-value formatting in recordShopOrder.
const SELECTION_VALUE_PATTERN = /^(.*?)(?: \((.+)\))?$/;

function siteUrl() {
  if (!SITE_URL) throw new Error("SITE_URL is not set");
  return SITE_URL;
}

export function cartTotal(cart: CartItem[]): number {
  return cart.reduce((sum, item) => sum + item.priceValue * item.quantity, 0);
}

// Human-readable line for the Sheet / email, e.g. "Rider Bundle x1
// (Jersey — Men's: M, Short-Finger Gloves: M, Socks: M)".
export function describeCartItem(item: CartItem): string {
  const selections = item.selections
    .map((s) => `${s.guideLabel}: ${s.size}`)
    .join(", ");
  return `${item.name} x${item.quantity}${selections ? ` (${selections})` : ""}`;
}

export type VerifiedShopOrder = {
  refCode: string;
  amount: number;
  currency: string;
  gateway: string;
  gatewayRef: string;
  email: string;
  name: string;
  cart: CartItem[];
  source: "shop" | "registration";
};

// Shop-only order refs carry this prefix so the webhooks can tell them
// apart from registration refs (EKO170-XXXXXX) without needing a
// separate transaction-type lookup.
const SHOP_REF_PREFIX = "EKO170-SHOP-";

export function isShopOrderReference(reference: string): boolean {
  return reference.startsWith(SHOP_REF_PREFIX);
}

export const ShopService = {
  // TODO(db): replace with a query against the `products` table once
  // the client supplies real merch data and the managed database is
  // wired up. Keep the return shape and method name stable so callers
  // don't need to change.
  async getProducts(): Promise<ShopProduct[]> {
    return STUB_PRODUCTS;
  },

  // Remaining units per item+size, keyed by stockKey(column, variant,
  // size) — null means the "shop-inventory" tab isn't configured yet,
  // so callers should render with no stock UI at all. The tab is
  // filled in by hand (see scripts/google-apps-script.gs's header
  // comment); "sold" is counted straight from the existing
  // shop-orders rows rather than decremented on write, since the Apps
  // Script has no locking to safely do that concurrently.
  async getStock(): Promise<Record<string, number> | null> {
    const inventoryRows = await getSheetRows("shop-inventory");
    if (inventoryRows.length === 0) return null;

    const guideMeta = buildGuideStockMeta(STUB_PRODUCTS);

    const totals = new Map<string, number>();
    for (const row of inventoryRows) {
      const meta = guideMeta.get(String(row.guideId));
      if (!meta) continue; // unknown guideId (likely a typo) — skip it
      totals.set(
        stockKey(meta.column, meta.variant, String(row.size)),
        Number(row.total) || 0,
      );
    }

    const knownColumns = new Set(
      Array.from(guideMeta.values(), (meta) => meta.column),
    );
    const orderRows = await getSheetRows("shop-orders");
    const sold = new Map<string, number>();
    for (const row of orderRows) {
      const quantity = Number(row.quantity) || 1;
      for (const column of knownColumns) {
        const raw = row[column];
        if (!raw) continue;
        const match = SELECTION_VALUE_PATTERN.exec(String(raw));
        if (!match) continue;
        const key = stockKey(column, match[2], match[1]);
        sold.set(key, (sold.get(key) ?? 0) + quantity);
      }
    }

    const remaining: Record<string, number> = {};
    for (const [key, total] of totals) {
      remaining[key] = Math.max(0, total - (sold.get(key) ?? 0));
    }
    return remaining;
  },

  // Standalone /shop checkout — mirrors
  // RegisterService.initiateRegistrationPayment. The whole cart rides
  // along as gateway meta (JSON-encoded, since a cart is variable
  // length); nothing is persisted before the rider pays.
  async initiateShopPurchase(
    cart: CartItem[],
    email: string,
    name: string,
  ): Promise<string> {
    const amount = cartTotal(cart);
    if (!amount) {
      throw new Error("Cannot initiate a shop purchase with an empty cart");
    }

    const refCode = `${SHOP_REF_PREFIX}${Math.random().toString(36).slice(2, 8).toUpperCase()}`;
    const meta: Record<string, string> = {
      refCode,
      email,
      name,
      amount: String(amount),
      cartJson: JSON.stringify(cart),
      source: "shop",
    };

    const gateway = getActiveGateway();
    return gateway.initiatePayment({
      txRef: refCode,
      amount,
      currency: "NGN",
      email,
      name,
      phone: "",
      redirectUrl: `${siteUrl()}/shop/verify`,
      title: "EKO170 Shop",
      description: "EKO170 merchandise order",
      meta,
    });
  },

  // Read-only re-verification, same posture as
  // RegisterService.verifyRegistrationPayment — safe to call from
  // both the redirect-back page and the webhook; writes nothing.
  async verifyShopPurchase(identifier: string): Promise<VerifiedShopOrder | null> {
    const gateway = getActiveGateway();
    const transaction = await gateway.verifyTransaction(identifier);
    const meta = transaction.meta as Record<string, string> | null;

    if (transaction.status !== "successful" || !meta?.refCode || !meta.cartJson) {
      return null;
    }

    const expectedAmount = Number(meta.amount);
    if (
      !expectedAmount ||
      transaction.currency !== "NGN" ||
      transaction.amount < expectedAmount ||
      transaction.reference !== meta.refCode
    ) {
      return null;
    }

    let cart: CartItem[];
    try {
      cart = JSON.parse(meta.cartJson);
    } catch {
      return null;
    }

    return {
      refCode: meta.refCode,
      amount: transaction.amount,
      currency: transaction.currency,
      gateway: gateway.id,
      gatewayRef: transaction.gatewayRef,
      email: meta.email ?? "",
      name: meta.name ?? "",
      cart,
      source: meta.source === "registration" ? "registration" : "shop",
    };
  },

  // The one place that writes a shop order — called by the webhook
  // for standalone purchases, and by RegisterService when a
  // registration included merch, so every order (whichever channel it
  // came from) lands in the same `shop-orders` tab.
  //
  // One Sheet row per cart item, not one JSON-packed row per order —
  // a cart is variable-length and each item carries a different set
  // of size selections, so a single flat row can't hold it all
  // without either a blob column or a combinatorial explosion of
  // item1_X/item2_X columns. A row per item keeps every selection in
  // its own named column (e.g. "Jersey", "Socks") and stays readable
  // regardless of cart size; all of an order's rows share `refCode`
  // so they can still be grouped/filtered together in the Sheet.
  // Written sequentially (not Promise.all) since the Apps Script side
  // has no locking around concurrent appendRow calls.
  async recordShopOrder(data: VerifiedShopOrder): Promise<void> {
    for (const item of data.cart) {
      // Include the variant (e.g. "Men's"/"Women's") in the cell
      // value, not just the size — a grouped pick's column name alone
      // (e.g. "Jersey") doesn't say which alternative was chosen, and
      // that distinction matters for fulfillment.
      const selectionColumns = Object.fromEntries(
        item.selections.map((s) => [
          s.column,
          s.variant ? `${s.size} (${s.variant})` : s.size,
        ]),
      );
      await postToSheet("shop-orders", {
        refCode: data.refCode,
        email: data.email,
        name: data.name,
        source: data.source,
        product: item.name,
        quantity: String(item.quantity),
        itemAmount: String(item.priceValue * item.quantity),
        ...selectionColumns,
        orderAmount: String(data.amount),
        currency: data.currency,
        gateway: data.gateway,
        gatewayRef: data.gatewayRef,
      });
    }

    const items = data.cart.map(describeCartItem).join("; ");
    await sendShopOrderConfirmationEmail({
      to: data.email,
      name: data.name,
      refCode: data.refCode,
      items,
      amount: data.amount,
    });
  },
};
