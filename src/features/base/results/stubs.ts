import type { ResultsInfo } from "./types";

// The real EKO170 results page on FinishTime (2026 edition — the most
// recent run event; 2027 results will replace this once race day
// happens and the new event is timed). Confirmed against the live
// production site (eko170.com's own "View Results" button links here
// too) and verified directly in a real browser. No public API or iframe
// embedding is available from FinishTime (no dev docs; results.aspx
// sits behind a Cloudflare bot challenge for automated/headless
// requests, and sends x-frame-options: SAMEORIGIN) — an external link
// is the whole integration, matching what the production site does.
// The `EId` param toggles between EKO170 (1) and EKO70 (2) results
// client-side on FinishTime's own page, so one link covers both.
export const STUB_RESULTS_INFO: ResultsInfo = {
  resultsUrl: "https://results.finishtime.co.za/results.aspx?CId=35&RId=5568&EId=1",
};
