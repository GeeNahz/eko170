"use server";

import type { ActionResponse } from "@/lib/types";
import { EMAIL_PATTERN } from "../constants";
import { RouteVoteService } from "./service";
import type { RouteVoteFieldErrors, RouteVoteFormValues, RouteVoteSuccess } from "../types";

export async function submitVoteAction(
  _prevState: ActionResponse<RouteVoteSuccess> | null,
  values: RouteVoteFormValues,
): Promise<ActionResponse<RouteVoteSuccess>> {
  const fieldErrors: RouteVoteFieldErrors = {};

  if (!values.fullName?.trim()) fieldErrors.fullName = "Full name is required";
  if (!values.email?.trim()) {
    fieldErrors.email = "Email is required";
  } else if (!EMAIL_PATTERN.test(values.email)) {
    fieldErrors.email = "Enter a valid email address";
  }
  if (!values.distance?.trim()) fieldErrors.distance = "Please choose a distance";

  if (Object.keys(fieldErrors).length > 0) {
    return { status: "error", fieldErrors, values };
  }

  const data = await RouteVoteService.submitVote(values);
  return { status: "success", data };
}
