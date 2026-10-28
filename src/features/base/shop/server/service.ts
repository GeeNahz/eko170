import "server-only";
import { STUB_PRODUCTS } from "../stubs";
import type { ShopProduct } from "../types";

export const ShopService = {
  // TODO(db): replace with a query against the `products` table once
  // the client supplies real merch data and the managed database is
  // wired up. Keep the return shape and method name stable so callers
  // don't need to change.
  async getProducts(): Promise<ShopProduct[]> {
    return STUB_PRODUCTS;
  },
};
