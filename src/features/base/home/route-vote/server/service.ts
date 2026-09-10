import "server-only";
import { postToSheet } from "../../../lib/server/sheets-client";
import type { RouteVoteFormValues, RouteVoteSuccess } from "../types";

export const RouteVoteService = {
  async submitVote(values: RouteVoteFormValues): Promise<RouteVoteSuccess> {
    await postToSheet("route-votes", { ...values });
    return { optionId: values.optionId };
  },
};
