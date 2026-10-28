"use client";

import { startTransition, useActionState, useEffect, useState } from "react";
import { toast } from "sonner";
import { Minus, Plus, ShoppingBag, X } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { shopCheckoutAction } from "../server/actions";
import { useShopCart } from "./shop-cart-provider";

const inputClassName =
  "h-auto rounded-[10px] border-brand-cream-border px-4 py-3 font-sans text-[15px] text-brand-teal focus-visible:border-brand-green focus-visible:ring-brand-green/12";

function formatNaira(amount: number) {
  return `₦${amount.toLocaleString("en-NG")}`;
}

export function ShopCartSheet({
  prefilledEmail,
  hasEmailAccess,
}: {
  prefilledEmail?: string;
  hasEmailAccess: boolean;
}) {
  const { items, removeItem, updateQuantity, total } = useShopCart();
  const [open, setOpen] = useState(false);
  const [email, setEmail] = useState(prefilledEmail ?? "");
  const [name, setName] = useState("");
  const [state, formAction, isPending] = useActionState(shopCheckoutAction, null);

  useEffect(() => {
    if (state?.status === "error" && state.message) {
      toast.error(state.message);
    }
  }, [state]);

  const itemCount = items.reduce((n, item) => n + item.quantity, 0);
  // Gated on ?email= having been present on page load, not on the
  // live field value — typing an email in without that link does not
  // unlock checkout. See the /shop page for where this is computed.
  const canCheckout = items.length > 0 && hasEmailAccess && name.trim().length > 0;

  function submitCheckout() {
    startTransition(() => formAction({ cart: items, email, name }));
  }

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger
        render={
          <button
            type="button"
            className="fixed right-6 bottom-6 z-30 flex items-center gap-2 rounded-full bg-brand-green px-5 py-3.5 font-sans text-sm font-semibold text-white shadow-[0_10px_30px_rgba(22,163,74,0.4)]"
          />
        }
      >
        <ShoppingBag className="size-4" />
        Cart{itemCount > 0 ? ` (${itemCount})` : ""}
      </SheetTrigger>
      <SheetContent side="right" className="w-full sm:max-w-md">
        <SheetHeader>
          <SheetTitle className="font-heading text-xl font-extrabold text-brand-teal uppercase">
            Your Cart
          </SheetTitle>
        </SheetHeader>

        <div className="flex-1 overflow-y-auto px-4">
          {items.length === 0 ? (
            <p className="font-sans text-sm text-gray-400">
              Your cart is empty — add a kit from the shop to get started.
            </p>
          ) : (
            <div className="flex flex-col gap-4">
              {items.map((item, index) => (
                <div
                  key={`${item.productId}-${index}`}
                  className="rounded-xl border border-brand-cream-border p-4"
                >
                  <div className="mb-1 flex items-start justify-between gap-2">
                    <div className="font-sans text-sm font-semibold text-brand-teal">
                      {item.name}
                    </div>
                    <button
                      type="button"
                      onClick={() => removeItem(index)}
                      aria-label={`Remove ${item.name}`}
                      className="text-gray-400 hover:text-red-600"
                    >
                      <X className="size-4" />
                    </button>
                  </div>
                  {item.selections.length > 0 && (
                    <div className="mb-2 font-sans text-xs text-gray-400">
                      {item.selections.map((s) => `${s.guideLabel}: ${s.size}`).join(", ")}
                    </div>
                  )}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <button
                        type="button"
                        onClick={() => updateQuantity(index, item.quantity - 1)}
                        disabled={item.quantity <= 1}
                        className="flex size-7 items-center justify-center rounded-full border border-brand-cream-border text-gray-500 disabled:opacity-40"
                      >
                        <Minus className="size-3" />
                      </button>
                      <span className="w-5 text-center font-sans text-sm text-brand-teal">
                        {item.quantity}
                      </span>
                      <button
                        type="button"
                        onClick={() => updateQuantity(index, item.quantity + 1)}
                        className="flex size-7 items-center justify-center rounded-full border border-brand-cream-border text-gray-500"
                      >
                        <Plus className="size-3" />
                      </button>
                    </div>
                    <span className="font-sans text-sm font-semibold text-brand-green">
                      {formatNaira(item.priceValue * item.quantity)}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        <SheetFooter className="border-t border-brand-cream-border">
          <div className="mb-3 flex items-center justify-between">
            <span className="font-sans text-sm font-semibold text-gray-500">Total</span>
            <span className="font-heading text-xl font-extrabold text-brand-teal">
              {formatNaira(total)}
            </span>
          </div>

          <div className="mb-3 flex flex-col gap-2.5">
            <div className="flex flex-col gap-1">
              <Label className="font-mono text-[11px] tracking-wide text-gray-500 uppercase">
                Email
              </Label>
              <Input
                type="email"
                placeholder="you@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={!hasEmailAccess}
                className={inputClassName}
              />
            </div>
            <div className="flex flex-col gap-1">
              <Label className="font-mono text-[11px] tracking-wide text-gray-500 uppercase">
                Name
              </Label>
              <Input
                type="text"
                placeholder="Your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                disabled={!hasEmailAccess}
                className={inputClassName}
              />
            </div>
          </div>

          <button
            type="button"
            disabled={!canCheckout || isPending}
            onClick={submitCheckout}
            className="inline-flex w-full items-center justify-center gap-2.5 rounded-full bg-brand-green px-6 py-3.5 font-sans text-sm font-semibold text-white disabled:cursor-not-allowed disabled:opacity-40"
          >
            {isPending ? "Redirecting…" : `Pay ${formatNaira(total)}`}
          </button>
          {!canCheckout && items.length > 0 && (
            <p className="mt-2 font-sans text-xs text-gray-400">
              {hasEmailAccess
                ? "Enter your name to pay."
                : "Purchasing is only available via your personal EKO170 link."}
            </p>
          )}
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
