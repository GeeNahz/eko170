import "server-only";
import { postToSheet } from "../../lib/server/sheets-client";
import {
  initiatePayment,
  verifyTransaction,
} from "../../lib/server/flutterwave-client";
import { sendRegistrationConfirmationEmail } from "../../lib/server/email-client";
import { DISTANCE_PRICES } from "../constants";
import type { RegistrationFormValues, VerifiedRegistration } from "../types";

function siteUrl() {
  const url = process.env.SITE_URL;
  if (!url) throw new Error("SITE_URL is not set");
  return url;
}

export const RegisterService = {
  // Kicks off payment — the registration itself isn't recorded anywhere
  // yet. The entire form payload rides along as Flutterwave `meta`, so
  // there's nothing else to persist before redirecting: once the rider
  // pays, Flutterwave hands all of it straight back on verify.
  async initiateRegistrationPayment(values: RegistrationFormValues): Promise<string> {
    const amount = DISTANCE_PRICES[values.distance];
    if (!amount) {
      throw new Error(`No price configured for distance "${values.distance}"`);
    }

    const refCode = `EKO170-${Math.random().toString(36).slice(2, 8).toUpperCase()}`;
    const meta: Record<string, string> = { ...values, refCode };

    return initiatePayment({
      txRef: refCode,
      amount,
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
  // it actually matches what we expect — status, currency, amount (never
  // trust the amount Flutterwave's webhook payload or query string
  // claims, recompute it from the distance in `meta`), and that the
  // tx_ref matches the refCode we minted. Safe to call from both the
  // redirect-back page and the webhook; writes nothing.
  async verifyRegistrationPayment(
    transactionId: string,
  ): Promise<VerifiedRegistration | null> {
    const transaction = await verifyTransaction(transactionId);
    const meta = transaction.meta as
      | (Record<string, string> & Partial<RegistrationFormValues>)
      | null;

    if (transaction.status !== "successful" || !meta?.refCode || !meta.distance) {
      return null;
    }

    const expectedAmount = DISTANCE_PRICES[meta.distance];
    if (
      !expectedAmount ||
      transaction.currency !== "NGN" ||
      transaction.amount < expectedAmount ||
      transaction.tx_ref !== meta.refCode
    ) {
      return null;
    }

    // Built explicitly (not spread) so a field Flutterwave ever dropped
    // from `meta` fails loudly as a missing property, not silently via a
    // type cast.
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
    };

    return {
      refCode: meta.refCode,
      distance: meta.distance,
      amount: transaction.amount,
      currency: transaction.currency,
      flwRef: transaction.flw_ref,
      name: meta.firstName ?? "",
      email: meta.email ?? "",
      fields,
    };
  },

  // The one place that writes. Called only by the webhook — see
  // flutterwave webhook route for why the redirect-back page never
  // calls this (no database to dedupe a double-write against).
  async recordPaidRegistration(data: VerifiedRegistration): Promise<void> {
    await postToSheet("registrations", {
      ...data.fields,
      refCode: data.refCode,
      amountPaid: String(data.amount),
      currency: data.currency,
      flwRef: data.flwRef,
    });
    await sendRegistrationConfirmationEmail({
      to: data.email,
      name: data.name,
      refCode: data.refCode,
      distance: data.distance,
      amount: data.amount,
    });
  },
};
