"use server";

import type { ActionResponse } from "@/lib/types";
import { EMAIL_PATTERN, FIELD_LABELS, REQUIRED_FIELDS } from "../constants";
import { AccommodationService } from "./service";
import type {
  AccommodationFieldErrors,
  AccommodationFormValues,
  AccommodationSuccess,
} from "../types";

export async function submitAccommodationBookingAction(
  _prevState: ActionResponse<AccommodationSuccess> | null,
  values: AccommodationFormValues,
): Promise<ActionResponse<AccommodationSuccess>> {
  const fieldErrors: AccommodationFieldErrors = {};

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

  const data = await AccommodationService.submitBooking(values);
  return { status: "success", data };
}
