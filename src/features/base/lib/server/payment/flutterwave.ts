import "server-only";
import axios from "axios";
import type {
  InitiatePaymentArgs,
  PaymentGateway,
  VerifiedTransaction,
} from "../../types";
import { FLUTTERWAVE_SECRET_HASH, FLUTTERWAVE_SECRET_KEY } from "../../constants";

const FLW_API_BASE = "https://api.flutterwave.com/v3";

function client() {
  return axios.create({
    baseURL: FLW_API_BASE,
    headers: {
      Authorization: `Bearer ${FLUTTERWAVE_SECRET_KEY}`,
      "Content-Type": "application/json",
    },
  });
}

export const flutterwaveGateway: PaymentGateway = {
  id: "flutterwave",

  // The hash is required for the webhook half of the flow to ever
  // work, so this fails fast at initiate-time rather than letting a
  // rider pay into a registration that can never be recorded.
  assertConfigured() {
    if (!FLUTTERWAVE_SECRET_KEY) {
      throw new Error(
        "FLUTTERWAVE_SECRET_KEY is not set — required when PAYMENT_GATEWAY=flutterwave",
      );
    }
    if (!FLUTTERWAVE_SECRET_HASH) {
      throw new Error(
        "FLUTTERWAVE_SECRET_HASH is not set — required when PAYMENT_GATEWAY=flutterwave",
      );
    }
  },

  // Flutterwave v3 Standard flow: this creates the hosted-checkout
  // link the rider is redirected to. We never handle card details
  // ourselves — the only thing that touches our server is the secret
  // key (never the browser) and the verify call after the rider
  // comes back.
  async initiatePayment(args: InitiatePaymentArgs): Promise<string> {
    const response = await client().post("/payments", {
      tx_ref: args.txRef,
      amount: args.amount,
      currency: args.currency,
      redirect_url: args.redirectUrl,
      customer: { email: args.email, name: args.name, phonenumber: args.phone },
      customizations: { title: args.title, description: args.description },
      meta: args.meta,
    });
    return response.data.data.link as string;
  },

  // Re-verifies a transaction server-to-server, keyed by Flutterwave's
  // numeric transaction_id. Never trust a status/amount reported
  // anywhere else (webhook payload, query string) — this is the one
  // source of truth for "did the money actually arrive".
  async verifyTransaction(identifier: string): Promise<VerifiedTransaction> {
    const response = await client().get(`/transactions/${identifier}/verify`);
    const data = response.data.data;
    return {
      reference: data.tx_ref,
      gatewayRef: data.flw_ref,
      status: data.status === "successful" ? "successful" : data.status,
      amount: data.amount,
      currency: data.currency,
      meta: data.meta,
    };
  },
};
