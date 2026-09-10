"use server";

import type { ActionResponse } from "@/lib/types";
import { EMAIL_PATTERN, FIELD_LABELS, MIN_VOLUNTEER_AGE, REQUIRED_FIELDS } from "../constants";
import { VolunteerService } from "./service";
import type { VolunteerFieldErrors, VolunteerFormValues, VolunteerSuccess } from "../types";

export async function submitVolunteerAction(
  _prevState: ActionResponse<VolunteerSuccess> | null,
  values: VolunteerFormValues,
): Promise<ActionResponse<VolunteerSuccess>> {
  const fieldErrors: VolunteerFieldErrors = {};

  for (const field of REQUIRED_FIELDS) {
    if (!values[field]?.trim()) {
      fieldErrors[field] = `${FIELD_LABELS[field]} is required`;
    }
  }
  if (values.email && !EMAIL_PATTERN.test(values.email)) {
    fieldErrors.email = "Enter a valid email address";
  }
  if (values.age && Number(values.age) < MIN_VOLUNTEER_AGE) {
    fieldErrors.age = `Volunteers must be at least ${MIN_VOLUNTEER_AGE}`;
  }

  if (Object.keys(fieldErrors).length > 0) {
    return { status: "error", fieldErrors, values };
  }

  const data = await VolunteerService.submitVolunteer(values);
  return { status: "success", data };
}
