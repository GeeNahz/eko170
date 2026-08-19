import "server-only";
import { STUB_RESULTS_INFO } from "../stubs";
import type { ResultsInfo } from "../types";

export const ResultsService = {
  // TODO(finishtime): replace with a query against the `events` table
  // once the managed database is wired up, so an admin can update this
  // URL to the 2027 event's own RId after it's timed on FinishTime
  // without a code deploy. Keep the return shape and method name stable
  // so the route handler and its callers don't need to change.
  async getResultsInfo(): Promise<ResultsInfo> {
    return STUB_RESULTS_INFO;
  },
};
