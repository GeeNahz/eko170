import "server-only";
import type { PaymentGateway } from "../../types";
import { PAYMENT_GATEWAY } from "../../constants";
import { flutterwaveGateway } from "./flutterwave";
import { paystackGateway } from "./paystack";

const GATEWAYS: Record<PaymentGateway["id"], PaymentGateway> = {
  flutterwave: flutterwaveGateway,
  paystack: paystackGateway,
};

// Picks the gateway named by PAYMENT_GATEWAY (defaulting to Flutterwave,
// today's working, already-configured gateway) and asserts its required
// env vars are present before handing it back — callers never need to
// check configuration themselves.
export function getActiveGateway(): PaymentGateway {
  const id = PAYMENT_GATEWAY ?? "flutterwave";
  const gateway = GATEWAYS[id as PaymentGateway["id"]];
  if (!gateway) {
    throw new Error(
      `PAYMENT_GATEWAY="${id}" is not a supported gateway (expected "flutterwave" or "paystack")`,
    );
  }
  gateway.assertConfigured();
  return gateway;
}
