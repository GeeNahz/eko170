import "server-only";
import axios from "axios";

const FLW_API_BASE = "https://api.flutterwave.com/v3";

function flutterwave() {
  const secretKey = process.env.FLUTTERWAVE_SECRET_KEY;
  if (!secretKey) {
    throw new Error("FLUTTERWAVE_SECRET_KEY is not set");
  }
  return axios.create({
    baseURL: FLW_API_BASE,
    headers: {
      Authorization: `Bearer ${secretKey}`,
      "Content-Type": "application/json",
    },
  });
}

export type InitiatePaymentArgs = {
  txRef: string;
  amount: number;
  email: string;
  name: string;
  phone: string;
  redirectUrl: string;
  title: string;
  description: string;
  meta: Record<string, string>;
};

export type FlutterwaveTransaction = {
  id: number;
  tx_ref: string;
  flw_ref: string;
  amount: number;
  currency: string;
  status: string;
  customer: { email: string; name: string };
  meta: Record<string, string> | null;
};

// Flutterwave v3 Standard flow: this creates the hosted-checkout link the
// rider is redirected to. We never handle card details ourselves — the
// only thing that touches our server is the secret key (never the
// browser) and the verify call after the rider comes back.
export async function initiatePayment(args: InitiatePaymentArgs): Promise<string> {
  const response = await flutterwave().post("/payments", {
    tx_ref: args.txRef,
    amount: args.amount,
    currency: "NGN",
    redirect_url: args.redirectUrl,
    customer: { email: args.email, name: args.name, phonenumber: args.phone },
    customizations: { title: args.title, description: args.description },
    meta: args.meta,
  });
  return response.data.data.link as string;
}

// Re-verifies a transaction server-to-server — called by both the
// webhook and the redirect-back page. Never trust a status/amount
// reported anywhere else (webhook payload, query string); this is the
// one source of truth for "did the money actually arrive".
export async function verifyTransaction(
  transactionId: string,
): Promise<FlutterwaveTransaction> {
  const response = await flutterwave().get(`/transactions/${transactionId}/verify`);
  return response.data.data as FlutterwaveTransaction;
}
