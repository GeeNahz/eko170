import "server-only";
import { Resend } from "resend";
import { EMAIL_FROM, EMAIL_REPLY_TO, RESEND_API_KEY } from "../constants";

export type RegistrationConfirmationEmail = {
  to: string;
  name: string;
  refCode: string;
  distance: string;
};

// `distance` arrives as the raw form value ("Gran Fondo · 170 KM" /
// "Medio Fondo · 94.5 KM") — reformatted here to match the client's
// exact requested copy ("170 km Gran Fondo"). Falls back to the raw
// value for any distance this map doesn't recognise, rather than
// hiding it.
const DISTANCE_EMAIL_LABELS: Record<string, string> = {
  "Gran Fondo · 170 KM": "170 km Gran Fondo",
  "Medio Fondo · 94.5 KM": "94.5 km Medio Fondo",
};

function formatDistance(distance: string) {
  return DISTANCE_EMAIL_LABELS[distance] ?? distance;
}

function buildHtml(data: RegistrationConfirmationEmail) {
  return `<!doctype html>
<html>
  <body style="margin:0;padding:0;background:#f1f5f2;font-family:Arial,Helvetica,sans-serif;">
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#f1f5f2;padding:32px 0;">
      <tr>
        <td align="center">
          <table role="presentation" width="100%" style="max-width:480px;background:#ffffff;border-radius:16px;overflow:hidden;">
            <tr>
              <td style="background:#0f3a44;padding:24px 32px;">
                <img src="https://www.eko170.com/_next/image?url=%2Feko170-logo.jpg&w=48&q=75" alt="EKO170" width="40" height="40" style="display:block;border-radius:999px;" />
              </td>
            </tr>
            <tr>
              <td style="padding:32px;">
                <p style="margin:0 0 16px;color:#444;font-size:15px;line-height:1.6;">Dear ${data.name},</p>
                <p style="margin:0 0 16px;color:#0f3a44;font-size:16px;font-weight:700;line-height:1.6;">
                  Your registration for EKO170 2027 is confirmed. Welcome to the ride!
                </p>
                <p style="margin:0 0 20px;color:#444;font-size:15px;line-height:1.6;font-style:italic;">
                  We look forward to welcoming you to Eko Atlantic, Lagos, on Sunday, 10 January 2027.
                </p>
                <p style="margin:0 0 10px;color:#0f3a44;font-size:15px;font-weight:700;">Your entry details</p>
                <table role="presentation" width="100%" style="margin:0 0 20px;border:1px solid #e5e7eb;border-radius:12px;">
                  <tr>
                    <td style="padding:12px 16px;color:#888;font-size:12px;text-transform:uppercase;letter-spacing:0.5px;">Registration reference</td>
                    <td style="padding:12px 16px;color:#0f3a44;font-size:14px;font-weight:700;text-align:right;">${data.refCode}</td>
                  </tr>
                  <tr>
                    <td style="padding:12px 16px;color:#888;font-size:12px;text-transform:uppercase;letter-spacing:0.5px;border-top:1px solid #e5e7eb;">Selected distance</td>
                    <td style="padding:12px 16px;color:#0f3a44;font-size:14px;font-weight:700;font-style:italic;text-align:right;border-top:1px solid #e5e7eb;">${formatDistance(data.distance)}</td>
                  </tr>
                </table>
                <p style="margin:0 0 16px;color:#0f3a44;font-size:15px;font-weight:700;line-height:1.6;">
                  You may choose either distance on race day, regardless of the distance selected during registration.
                </p>
                <p style="margin:0 0 24px;color:#444;font-size:15px;line-height:1.6;">
                  Please retain this email and your registration reference for race-pack collection.
                </p>
                <p style="margin:0 0 10px;color:#0f3a44;font-size:15px;font-weight:700;">Before race day</p>
                <p style="margin:0 0 16px;color:#444;font-size:15px;line-height:1.6;">
                  We&rsquo;ll send your rider guide with reporting times, route details, safety requirements and cut-offs.
                  Race-pack collection is planned for <strong>8 and 9 January</strong>; the venue and collection hours will be announced.
                  <strong>Race packs will not be available for collection on race day</strong>.
                </p>
                <p style="margin:0 0 16px;color:#444;font-size:15px;line-height:1.6;">
                  For now, keep training and ensure your bicycle is ready for the challenge. If your entry details need
                  correcting, please reply to this email with your registration reference.
                </p>
                <p style="margin:0 0 24px;color:#444;font-size:15px;line-height:1.6;">
                  Thank you for being part of EKO170. See you on the start line!
                </p>
                <p style="margin:0 0 24px;color:#444;font-size:15px;line-height:1.6;">
                  Warm regards,<br />
                  <strong>The EKO170 Organising Team</strong><br />
                  <a href="https://www.eko170.com" style="color:#16a34a;">www.eko170.com</a>
                </p>
                <p style="margin:0;color:#999;font-size:12px;line-height:1.6;">
                  This is a transactional email confirming your EKO170
                  registration — you're receiving it because you just
                  registered for the event.
                </p>
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </body>
</html>`;
}

function buildText(data: RegistrationConfirmationEmail) {
  return [
    `Dear ${data.name},`,
    "",
    "Your registration for EKO170 2027 is confirmed. Welcome to the ride!",
    "",
    "We look forward to welcoming you to Eko Atlantic, Lagos, on Sunday, 10 January 2027.",
    "",
    "Your entry details",
    `- Registration reference: ${data.refCode}`,
    `- Selected distance: ${formatDistance(data.distance)}`,
    "",
    "You may choose either distance on race day, regardless of the distance selected during registration.",
    "",
    "Please retain this email and your registration reference for race-pack collection.",
    "",
    "Before race day",
    "We'll send your rider guide with reporting times, route details, safety requirements and cut-offs. " +
      "Race-pack collection is planned for 8 and 9 January; the venue and collection hours will be announced. " +
      "Race packs will not be available for collection on race day.",
    "",
    "For now, keep training and ensure your bicycle is ready for the challenge. If your entry details need " +
      "correcting, please reply to this email with your registration reference.",
    "",
    "Thank you for being part of EKO170. See you on the start line!",
    "",
    "Warm regards,",
    "The EKO170 Organising Team",
    "www.eko170.com",
    "",
    "This is a transactional email confirming your EKO170 registration — you're receiving it because you just registered for the event.",
  ].join("\n");
}

// Never throws — a failed confirmation email must not undo an already
//-verified, already-recorded registration. Same posture as
// sheets-client.ts's postToSheet.
export async function sendRegistrationConfirmationEmail(
  data: RegistrationConfirmationEmail,
): Promise<void> {
  const apiKey = RESEND_API_KEY;
  const from = EMAIL_FROM;
  const replyTo = EMAIL_REPLY_TO;
  if (!apiKey || !from || !replyTo) {
    console.error(
      "[email-client] RESEND_API_KEY/EMAIL_FROM/EMAIL_REPLY_TO not set — skipped confirmation email",
      { to: data.to, refCode: data.refCode },
    );
    return;
  }

  try {
    const resend = new Resend(apiKey);
    const { error } = await resend.emails.send({
      from,
      to: data.to,
      replyTo,
      subject: "You're registered for EKO170 2027",
      html: buildHtml(data),
      text: buildText(data),
    });
    if (error) {
      // Logged with recipient + reference so a failed send can be
      // manually followed up on rather than just knowing *that*
      // something failed.
      console.error("[email-client] confirmation email failed", {
        to: data.to,
        refCode: data.refCode,
        error,
      });
    }
  } catch (error) {
    console.error("[email-client] confirmation email errored", {
      to: data.to,
      refCode: data.refCode,
      error,
    });
  }
}

export type ShopOrderConfirmationEmail = {
  to: string;
  name: string;
  refCode: string;
  items: string; // human-readable summary, e.g. from describeCartItem
  amount: number;
};

function formatNaira(amount: number) {
  return `₦${amount.toLocaleString("en-NG")}`;
}

function buildShopOrderHtml(data: ShopOrderConfirmationEmail) {
  return `<!doctype html>
<html>
  <body style="margin:0;padding:0;background:#f1f5f2;font-family:Arial,Helvetica,sans-serif;">
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#f1f5f2;padding:32px 0;">
      <tr>
        <td align="center">
          <table role="presentation" width="100%" style="max-width:480px;background:#ffffff;border-radius:16px;overflow:hidden;">
            <tr>
              <td style="background:#0f3a44;padding:24px 32px;">
                <img src="https://www.eko170.com/_next/image?url=%2Feko170-logo.jpg&w=48&q=75" alt="EKO170" width="40" height="40" style="display:block;border-radius:999px;" />
              </td>
            </tr>
            <tr>
              <td style="padding:32px;">
                <p style="margin:0 0 16px;color:#444;font-size:15px;line-height:1.6;">Dear ${data.name},</p>
                <p style="margin:0 0 16px;color:#0f3a44;font-size:16px;font-weight:700;line-height:1.6;">
                  Your EKO170 merchandise order is confirmed.
                </p>
                <table role="presentation" width="100%" style="margin:0 0 20px;border:1px solid #e5e7eb;border-radius:12px;">
                  <tr>
                    <td style="padding:12px 16px;color:#888;font-size:12px;text-transform:uppercase;letter-spacing:0.5px;">Order reference</td>
                    <td style="padding:12px 16px;color:#0f3a44;font-size:14px;font-weight:700;text-align:right;">${data.refCode}</td>
                  </tr>
                  <tr>
                    <td style="padding:12px 16px;color:#888;font-size:12px;text-transform:uppercase;letter-spacing:0.5px;border-top:1px solid #e5e7eb;">Items</td>
                    <td style="padding:12px 16px;color:#0f3a44;font-size:14px;font-weight:700;text-align:right;border-top:1px solid #e5e7eb;">${data.items}</td>
                  </tr>
                  <tr>
                    <td style="padding:12px 16px;color:#888;font-size:12px;text-transform:uppercase;letter-spacing:0.5px;border-top:1px solid #e5e7eb;">Amount paid</td>
                    <td style="padding:12px 16px;color:#0f3a44;font-size:14px;font-weight:700;text-align:right;border-top:1px solid #e5e7eb;">${formatNaira(data.amount)}</td>
                  </tr>
                </table>
                <p style="margin:0 0 24px;color:#444;font-size:15px;line-height:1.6;">
                  We'll be in touch with delivery/collection details closer to race day. Please retain this email
                  and your order reference.
                </p>
                <p style="margin:0 0 24px;color:#444;font-size:15px;line-height:1.6;">
                  Warm regards,<br />
                  <strong>The EKO170 Organising Team</strong><br />
                  <a href="https://www.eko170.com" style="color:#16a34a;">www.eko170.com</a>
                </p>
                <p style="margin:0;color:#999;font-size:12px;line-height:1.6;">
                  This is a transactional email confirming your EKO170 merchandise order — you're receiving it
                  because you just placed one.
                </p>
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </body>
</html>`;
}

function buildShopOrderText(data: ShopOrderConfirmationEmail) {
  return [
    `Dear ${data.name},`,
    "",
    "Your EKO170 merchandise order is confirmed.",
    "",
    `Order reference: ${data.refCode}`,
    `Items: ${data.items}`,
    `Amount paid: ${formatNaira(data.amount)}`,
    "",
    "We'll be in touch with delivery/collection details closer to race day. Please retain this email and your order reference.",
    "",
    "Warm regards,",
    "The EKO170 Organising Team",
    "www.eko170.com",
    "",
    "This is a transactional email confirming your EKO170 merchandise order — you're receiving it because you just placed one.",
  ].join("\n");
}

// Same never-throws posture as sendRegistrationConfirmationEmail.
export async function sendShopOrderConfirmationEmail(
  data: ShopOrderConfirmationEmail,
): Promise<void> {
  const apiKey = RESEND_API_KEY;
  const from = EMAIL_FROM;
  const replyTo = EMAIL_REPLY_TO;
  if (!apiKey || !from || !replyTo) {
    console.error(
      "[email-client] RESEND_API_KEY/EMAIL_FROM/EMAIL_REPLY_TO not set — skipped shop order email",
      { to: data.to, refCode: data.refCode },
    );
    return;
  }

  try {
    const resend = new Resend(apiKey);
    const { error } = await resend.emails.send({
      from,
      to: data.to,
      replyTo,
      subject: "Your EKO170 merchandise order is confirmed",
      html: buildShopOrderHtml(data),
      text: buildShopOrderText(data),
    });
    if (error) {
      console.error("[email-client] shop order email failed", {
        to: data.to,
        refCode: data.refCode,
        error,
      });
    }
  } catch (error) {
    console.error("[email-client] shop order email errored", {
      to: data.to,
      refCode: data.refCode,
      error,
    });
  }
}
