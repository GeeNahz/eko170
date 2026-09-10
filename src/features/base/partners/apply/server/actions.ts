"use server";

import type { ActionResponse } from "@/lib/types";
import { EMAIL_PATTERN, FIELD_LABELS, REQUIRED_FIELDS } from "../constants";
import { PartnerApplyService } from "./service";
import type { PartnerFieldErrors, PartnerFormValues, PartnerSuccess } from "../types";

export async function submitPartnerAction(
  _prevState: ActionResponse<PartnerSuccess> | null,
  values: PartnerFormValues,
): Promise<ActionResponse<PartnerSuccess>> {
  const fieldErrors: PartnerFieldErrors = {};

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

  const data = await PartnerApplyService.submitPartnerRequest(values);
  return { status: "success", data };
}
