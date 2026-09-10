import "server-only";
import { postToSheet } from "../../lib/server/sheets-client";
import type { VolunteerFormValues, VolunteerSuccess } from "../types";

export const VolunteerService = {
  async submitVolunteer(values: VolunteerFormValues): Promise<VolunteerSuccess> {
    await postToSheet("volunteers", { ...values });
    return { name: values.fullName };
  },
};
