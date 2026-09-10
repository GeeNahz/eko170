import "server-only";
import { postToSheet } from "../../../lib/server/sheets-client";
import type { PartnerFormValues, PartnerSuccess } from "../types";

export const PartnerApplyService = {
  async submitPartnerRequest(values: PartnerFormValues): Promise<PartnerSuccess> {
    await postToSheet("partners", { ...values });
    return { organisation: values.organisation };
  },
};
