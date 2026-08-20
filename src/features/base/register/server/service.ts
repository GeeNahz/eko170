import "server-only";
import type { RegistrationFormValues, RegistrationSuccess } from "../types";

export const RegisterService = {
  // TODO(db): persist to a `registrations` table once the managed
  // database is wired up, and send a real confirmation email with the
  // payment link and race-day details. For now this just mints a
  // reference code, matching the source design's client-side mock.
  async submitRegistration(
    values: RegistrationFormValues,
  ): Promise<RegistrationSuccess> {
    const refCode = `EKO170-${Math.random().toString(36).slice(2, 8).toUpperCase()}`;
    return { name: values.firstName, email: values.email, refCode };
  },
};
