import "server-only";
import axios from "axios";
import type {
  InitiatePaymentArgs,
  PaymentGateway,
  VerifiedTransaction,
} from "../../types";
import { PAYSTACK_SECRET_KEY } from "../../constants";

const PAYSTACK_API_BASE = "https://api.paystack.co";

function client() {
  return axios.create({
    baseURL: PAYSTACK_API_BASE,
    headers: {
      Authorization: `Bearer ${PAYSTACK_SECRET_KEY}`,
      "Content-Type": "application/json",
    },
  });
}

export const paystackGateway: PaymentGateway = {
  id: "paystack",

  // Unlike Flutterwave, Paystack has no separate dashboard-configured
  // webhook secret — it signs webhooks with an HMAC of this same
  // secret key (see api/webhooks/paystack/route.ts), so the secret key
  // alone is sufficient to power the full flow.
  assertConfigured() {
    if (!PAYSTACK_SECRET_KEY) {
      throw new Error(
        "PAYSTACK_SECRET_KEY is not set — required when PAYMENT_GATEWAY=paystack",
      );
    }
  },

  // Paystack's Standard flow: creates the hosted-checkout link the
  // rider is redirected to. Amount is in kobo (the smallest NGN unit),
  // so whole-naira amounts are multiplied by 100 going in.
  async initiatePayment(args: InitiatePaymentArgs): Promise<string> {
    const response = await client().post("/transaction/initialize", {
      reference: args.txRef,
      amount: Math.round(args.amount * 100),
      currency: args.currency,
      email: args.email,
      callback_url: args.redirectUrl,
      metadata: args.meta,
    });
    return response.data.data.authorization_url as string;
  },

  // Paystack verifies by the reference *we* generated — no separate
  // gateway-issued id needed, unlike Flutterwave's transaction_id.
  // Never trust a status/amount reported anywhere else; this is the
  // one source of truth for "did the money actually arrive".
  async verifyTransaction(identifier: string): Promise<VerifiedTransaction> {
    const response = await client().get(
      `/transaction/verify/${encodeURIComponent(identifier)}`,
    );
    const data = response.data.data;
    return {
      reference: data.reference,
      gatewayRef: String(data.id),
      status: data.status === "success" ? "successful" : data.status,
      amount: data.amount / 100,
      currency: data.currency,
      meta: data.metadata ?? null,
    };
  },
};
