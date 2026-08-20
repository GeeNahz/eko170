"use server";

import type { ActionResponse } from "@/lib/types";
import { EMAIL_PATTERN, FIELD_LABELS, REQUIRED_FIELDS } from "../constants";
import { RegisterService } from "./service";
import type {
  RegistrationFieldErrors,
  RegistrationFormValues,
  RegistrationSuccess,
} from "../types";

export async function registerAction(
  _prevState: ActionResponse<RegistrationSuccess> | null,
  values: RegistrationFormValues,
): Promise<ActionResponse<RegistrationSuccess>> {
  // Client-side (React Hook Form) already validates this exact shape —
  // this is defense in depth, never trust that a form submission on the
  // wire actually went through the client validation.
  const fieldErrors: RegistrationFieldErrors = {};

  for (const field of REQUIRED_FIELDS) {
    if (!values[field]?.trim()) {
      fieldErrors[field] = `${FIELD_LABELS[field]} is required`;
    }
  }
  if (values.email && !EMAIL_PATTERN.test(values.email)) {
    fieldErrors.email = "Enter a valid email address";
  }

  if (Object.keys(fieldErrors).length > 0) {
    return { status: "error", fieldErrors, values };
  }

  const data = await RegisterService.submitRegistration(values);
  return { status: "success", data };
}
