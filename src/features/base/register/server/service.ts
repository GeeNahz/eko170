import "server-only";
import { postToSheet } from "../../lib/server/sheets-client";
import type { RegistrationFormValues, RegistrationSuccess } from "../types";

export const RegisterService = {
  // TODO(db): persist to a `registrations` table once the managed
  // database is wired up, and send a real confirmation email with the
  // payment link and race-day details. For now this mints a reference
  // code (matching the source design's client-side mock) and records the
  // submission in the shared Google Sheet.
  async submitRegistration(
    values: RegistrationFormValues,
  ): Promise<RegistrationSuccess> {
    const refCode = `EKO170-${Math.random().toString(36).slice(2, 8).toUpperCase()}`;
    await postToSheet("registrations", { ...values, refCode });
    return { name: values.firstName, email: values.email, refCode };
  },
};
