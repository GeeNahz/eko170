import "server-only";

// Apps Script Web App URL (see scripts/google-apps-script.gs) that all form
// submissions POST to. Not NEXT_PUBLIC_-prefixed, so Next.js never inlines
// it into the client bundle — only server code (sheets-client.ts) reads it.
export const GOOGLE_SHEETS_WEBHOOK_URL = process.env.GOOGLE_SHEETS_WEBHOOK_URL;

// Absolute site origin — used to build the redirect_url/callback_url
// sent to the active payment gateway.
export const SITE_URL = process.env.SITE_URL;

// Payment gateway (Flutterwave Standard flow / Paystack), gated behind
// server-to-server initiate + webhook-verified confirmation. See
// lib/server/payment/.
export const PAYMENT_GATEWAY = process.env.PAYMENT_GATEWAY;
export const FLUTTERWAVE_SECRET_KEY = process.env.FLUTTERWAVE_SECRET_KEY;
export const FLUTTERWAVE_SECRET_HASH = process.env.FLUTTERWAVE_SECRET_HASH;
export const PAYSTACK_SECRET_KEY = process.env.PAYSTACK_SECRET_KEY;

// Resend — sends the registration confirmation email once payment is
// verified. See lib/server/email-client.ts.
export const RESEND_API_KEY = process.env.RESEND_API_KEY;
export const EMAIL_FROM = process.env.EMAIL_FROM;
export const EMAIL_REPLY_TO = process.env.EMAIL_REPLY_TO;

// "pre-register" | "register" — resolved server-side only (see
// lib/server/registration.ts) and handed to Client Components as a
// prop; deliberately not NEXT_PUBLIC_-prefixed.
export const REGISTRATION_STATE = process.env.REGISTRATION_STATE;
