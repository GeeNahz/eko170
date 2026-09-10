// Apps Script Web App URL (see scripts/google-apps-script.gs) that all form
// submissions POST to. Not NEXT_PUBLIC_-prefixed, so Next.js never inlines
// it into the client bundle — only server code (sheets-client.ts) reads it.
export const GOOGLE_SHEETS_WEBHOOK_URL = process.env.GOOGLE_SHEETS_WEBHOOK_URL;
