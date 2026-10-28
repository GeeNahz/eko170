import "server-only";
import { postToSheet } from "../../lib/server/sheets-client";
import { getActiveGateway } from "../../lib/server/payment";
import { sendRegistrationConfirmationEmail } from "../../lib/server/email-client";
import { SITE_URL } from "../../lib/constants";
import { cartTotal, ShopService } from "../../shop/server/service";
import type { CartItem } from "../../shop/types";
import { resolveDistancePrice } from "../constants";
import type { RegistrationFormValues, VerifiedRegistration } from "../types";

function siteUrl() {
  if (!SITE_URL) throw new Error("SITE_URL is not set");
  return SITE_URL;
}

export const RegisterService = {
  // Kicks off payment — the registration itself isn't recorded anywhere
  // yet. The entire form payload rides along as gateway `meta`, so
  // there's nothing else to persist before redirecting: once the rider
  // pays, the gateway hands all of it straight back on verify.
  //
  // The resolved amount is snapshotted into `meta.amount` here, at
  // initiation time — verification must check against this snapshot,
  // not re-resolve the price from scratch (see verifyRegistrationPayment).
  //
  // `merchCart` is the optional upsell pick (see
  // register/components/merch-upsell-section.tsx) — when present, its
  // total is folded into the one combined charge and snapshotted
  // alongside the distance fee, same posture as `amount`.
  async initiateRegistrationPayment(
    values: RegistrationFormValues,
    merchCart: CartItem[] = [],
  ): Promise<string> {
    const baseAmount = resolveDistancePrice(values.distance);
    if (!baseAmount) {
      throw new Error(`No price configured for distance "${values.distance}"`);
    }
    const merchAmount = cartTotal(merchCart);
    const amount = baseAmount + merchAmount;

    const refCode = `EKO170-${Math.random().toString(36).slice(2, 8).toUpperCase()}`;
    const meta: Record<string, string> = {
      ...values,
      refCode,
      amount: String(amount),
      ...(merchCart.length > 0
        ? { merchCartJson: JSON.stringify(merchCart), merchTotal: String(merchAmount) }
        : {}),
    };

    const gateway = getActiveGateway();
    return gateway.initiatePayment({
      txRef: refCode,
      amount,
      currency: "NGN",
      email: values.email,
      name: `${values.firstName} ${values.lastName}`,
      phone: values.phone,
      redirectUrl: `${siteUrl()}/register/verify`,
      title: "EKO170 Registration",
      description: `${values.distance} registration`,
      meta,
    });
  },

  // Read-only: re-verifies the transaction server-to-server and checks
  // it actually matches what we expect — status, currency, amount (the
  // amount snapshotted into `meta` at initiation time, never re-derived
  // from "now" — an early-bird price that was valid when the rider
  // started paying must not be rejected just because the deadline
  // passed while they were on the checkout page), and that the
  // reference matches the refCode we minted. Safe to call from both
  // the redirect-back page and the webhook; writes nothing.
  async verifyRegistrationPayment(
    identifier: string,
  ): Promise<VerifiedRegistration | null> {
    const gateway = getActiveGateway();
    const transaction = await gateway.verifyTransaction(identifier);
    const meta = transaction.meta as
      | (Record<string, string> & Partial<RegistrationFormValues>)
      | null;

    if (transaction.status !== "successful" || !meta?.refCode || !meta.distance) {
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

    // Built explicitly (not spread) so a field the gateway ever dropped
    // from `meta` fails loudly as a missing property, not silently via
    // a type cast.
    const fields: RegistrationFormValues = {
      firstName: meta.firstName ?? "",
      lastName: meta.lastName ?? "",
      phone: meta.phone ?? "",
      email: meta.email ?? "",
      gender: meta.gender ?? "",
      dob: meta.dob ?? "",
      distance: meta.distance,
      speed: meta.speed ?? "",
      country: meta.country ?? "",
      license: meta.license ?? "",
      club: meta.club ?? "",
      idType: meta.idType ?? "",
      idNumber: meta.idNumber ?? "",
      insProvider: meta.insProvider ?? "",
      insNumber: meta.insNumber ?? "",
      emergencyName: meta.emergencyName ?? "",
      emergencyPhone: meta.emergencyPhone ?? "",
      medicalWaiverAgreed: meta.medicalWaiverAgreed ?? "false",
    };

    let merchCart: CartItem[] | undefined;
    if (meta.merchCartJson) {
      try {
        merchCart = JSON.parse(meta.merchCartJson);
      } catch {
        merchCart = undefined;
      }
    }

    return {
      refCode: meta.refCode,
      distance: meta.distance,
      amount: transaction.amount,
      currency: transaction.currency,
      gateway: gateway.id,
      gatewayRef: transaction.gatewayRef,
      name: meta.firstName ?? "",
      email: meta.email ?? "",
      fields,
      merchCart,
      merchTotal: meta.merchTotal ? Number(meta.merchTotal) : undefined,
    };
  },

  // The one place that writes. Called only by the webhook — see the
  // webhook routes for why the redirect-back page never calls this (no
  // database to dedupe a double-write against).
  async recordPaidRegistration(data: VerifiedRegistration): Promise<void> {
    await postToSheet("registrations", {
      ...data.fields,
      refCode: data.refCode,
      amountPaid: String(data.amount),
      currency: data.currency,
      gateway: data.gateway,
      gatewayRef: data.gatewayRef,
    });
    await sendRegistrationConfirmationEmail({
      to: data.email,
      name: data.name,
      refCode: data.refCode,
      distance: data.distance,
    });

    // Merch picked during the upsell lands in the same shop-orders
    // tab as standalone /shop purchases, tagged by source, and gets
    // its own confirmation email alongside the registration one.
    if (data.merchCart?.length) {
      await ShopService.recordShopOrder({
        refCode: data.refCode,
        amount: data.merchTotal ?? cartTotal(data.merchCart),
        currency: data.currency,
        gateway: data.gateway,
        gatewayRef: data.gatewayRef,
        email: data.email,
        name: data.name,
        cart: data.merchCart,
        source: "registration",
      });
    }
  },
};
