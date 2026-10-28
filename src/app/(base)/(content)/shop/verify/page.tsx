import type { Metadata } from "next";
import { ShopOrderFailed } from "@/features/base/shop/components/shop-order-failed";
import { ShopOrderSuccess } from "@/features/base/shop/components/shop-order-success";
import { ShopService, describeCartItem } from "@/features/base/shop/server/service";

export const metadata: Metadata = {
  title: "Order Confirmation — EKO170",
};

export default async function ShopVerifyPage({
  searchParams,
}: {
  searchParams: Promise<{ transaction_id?: string; reference?: string }>;
}) {
  // Same dual-gateway param handling as register/verify/page.tsx —
  // only one gateway is ever active, so only its own param is present.
  const { transaction_id: transactionId, reference } = await searchParams;
  const identifier = transactionId ?? reference;

  // Read-only — never writes. The webhook is the only path that
  // records a shop order (see ShopService.recordShopOrder / the
  // webhook routes).
  let verified = null;
  if (identifier) {
    try {
      verified = await ShopService.verifyShopPurchase(identifier);
    } catch (error) {
      console.error("[shop/verify] verification failed", error);
    }
  }

  return (
    <div className="mx-auto w-full max-w-[920px] px-5 pt-10 pb-24 sm:px-10 sm:pt-16">
      {verified ? (
        <ShopOrderSuccess
          data={{
            name: verified.name,
            email: verified.email,
            refCode: verified.refCode,
            items: verified.cart.map(describeCartItem).join("; "),
          }}
        />
      ) : (
        <ShopOrderFailed />
      )}
    </div>
  );
}
