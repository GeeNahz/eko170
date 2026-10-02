import "server-only";
import { Resend } from "resend";

export type RegistrationConfirmationEmail = {
  to: string;
  name: string;
  refCode: string;
  distance: string;
  amount: number;
};

function formatNaira(amount: number) {
  return `₦${amount.toLocaleString("en-NG")}`;
}

function buildHtml(data: RegistrationConfirmationEmail, replyTo: string) {
  return `<!doctype html>
<html>
  <body style="margin:0;padding:0;background:#f1f5f2;font-family:Arial,Helvetica,sans-serif;">
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#f1f5f2;padding:32px 0;">
      <tr>
        <td align="center">
          <table role="presentation" width="100%" style="max-width:480px;background:#ffffff;border-radius:16px;overflow:hidden;">
            <tr>
              <td style="background:#0f3a44;padding:24px 32px;">
                <span style="color:#ffffff;font-size:20px;font-weight:800;letter-spacing:0.5px;">EKO<span style="color:#16a34a;">170</span></span>
              </td>
            </tr>
            <tr>
              <td style="padding:32px;">
                <h1 style="margin:0 0 16px;color:#0f3a44;font-size:22px;">You're in, ${data.name}!</h1>
                <p style="margin:0 0 16px;color:#444;font-size:15px;line-height:1.6;">
                  Your EKO170 registration has been received and your payment
                  has been confirmed. Here's your receipt:
                </p>
                <table role="presentation" width="100%" style="margin:0 0 20px;border:1px solid #e5e7eb;border-radius:12px;">
                  <tr>
                    <td style="padding:12px 16px;color:#888;font-size:12px;text-transform:uppercase;letter-spacing:0.5px;">Reference</td>
                    <td style="padding:12px 16px;color:#0f3a44;font-size:14px;font-weight:700;text-align:right;">${data.refCode}</td>
                  </tr>
                  <tr>
                    <td style="padding:12px 16px;color:#888;font-size:12px;text-transform:uppercase;letter-spacing:0.5px;border-top:1px solid #e5e7eb;">Distance</td>
                    <td style="padding:12px 16px;color:#0f3a44;font-size:14px;font-weight:700;text-align:right;border-top:1px solid #e5e7eb;">${data.distance}</td>
                  </tr>
                  <tr>
                    <td style="padding:12px 16px;color:#888;font-size:12px;text-transform:uppercase;letter-spacing:0.5px;border-top:1px solid #e5e7eb;">Amount Paid</td>
                    <td style="padding:12px 16px;color:#16a34a;font-size:14px;font-weight:700;text-align:right;border-top:1px solid #e5e7eb;">${formatNaira(data.amount)}</td>
                  </tr>
                </table>
                <p style="margin:0 0 24px;color:#444;font-size:15px;line-height:1.6;">
                  Race-day details and further updates will follow by email.
                  Questions in the meantime? Write to
                  <a href="mailto:${replyTo}" style="color:#16a34a;">${replyTo}</a>.
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

function buildText(data: RegistrationConfirmationEmail, replyTo: string) {
  return [
    `You're in, ${data.name}!`,
    "",
    "Your EKO170 registration has been received and your payment has been confirmed.",
    "",
    `Reference: ${data.refCode}`,
    `Distance: ${data.distance}`,
    `Amount Paid: ${formatNaira(data.amount)}`,
    "",
    "Race-day details and further updates will follow by email.",
    `Questions in the meantime? Write to ${replyTo}.`,
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
  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.EMAIL_FROM;
  const replyTo = process.env.EMAIL_REPLY_TO;
  if (!apiKey || !from || !replyTo) {
    console.error(
      "[email-client] RESEND_API_KEY/EMAIL_FROM/EMAIL_REPLY_TO not set — skipped confirmation email",
    );
    return;
  }

  try {
    const resend = new Resend(apiKey);
    const { error } = await resend.emails.send({
      from,
      to: data.to,
      replyTo,
      subject: `Your EKO170 registration is confirmed — Ref ${data.refCode}`,
      html: buildHtml(data, replyTo),
      text: buildText(data, replyTo),
    });
    if (error) {
      console.error("[email-client] confirmation email failed", error);
    }
  } catch (error) {
    console.error("[email-client] confirmation email errored", error);
  }
}
