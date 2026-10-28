"use server";

import { redirect } from "next/navigation";
import type { ActionResponse } from "@/lib/types";
import { ShopService } from "./service";
import type { CartItem } from "../types";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export type ShopCheckoutInput = {
  cart: CartItem[];
  email: string;
  name: string;
};

export async function shopCheckoutAction(
  _prevState: ActionResponse<never> | null,
  input: ShopCheckoutInput,
): Promise<ActionResponse<never>> {
  if (!input.cart.length) {
    return { status: "error", message: "Your cart is empty." };
  }
  if (!input.email.trim() || !EMAIL_PATTERN.test(input.email)) {
    return { status: "error", message: "Enter a valid email address." };
  }
  if (!input.name.trim()) {
    return { status: "error", message: "Enter your name." };
  }

  let link: string;
  try {
    link = await ShopService.initiateShopPurchase(
      input.cart,
      input.email.trim(),
      input.name.trim(),
    );
  } catch (error) {
    console.error("[shop] checkout initiation failed", error);
    return {
      status: "error",
      message: "We couldn't start your payment. Please try again.",
    };
  }

  // Outside the try/catch — redirect() throws internally and must not
  // be swallowed by the error handling above (same posture as
  // register/server/actions.ts).
  redirect(link);
}
