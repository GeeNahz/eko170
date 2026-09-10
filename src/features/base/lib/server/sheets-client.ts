import "server-only";
import { GOOGLE_SHEETS_WEBHOOK_URL as WEBHOOK_URL } from "../constants";

export type SheetFormType =
  | "registrations"
  | "partners"
  | "volunteers"
  | "route-votes";

// Posts one row to the given tab of the shared Google Sheet via the Apps
// Script Web App (see scripts/google-apps-script.gs). Never throws — a
// missing/unreachable webhook must not break the form's own success flow,
// since the Sheet is the only record store we have and the user already
// sees a confirmation screen either way.
export async function postToSheet(
  formType: SheetFormType,
  fields: Record<string, string>,
): Promise<void> {
  if (!WEBHOOK_URL) {
    console.error(
      `[sheets-client] GOOGLE_SHEETS_WEBHOOK_URL is not set — skipped ${formType} submission`,
    );
    return;
  }

  try {
    const response = await fetch(WEBHOOK_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ formType, ...fields }),
    });
    if (!response.ok) {
      console.error(
        `[sheets-client] ${formType} submission failed: ${response.status} ${response.statusText}`,
      );
    }
  } catch (error) {
    console.error(`[sheets-client] ${formType} submission errored`, error);
  }
}
