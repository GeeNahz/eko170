import type { Metadata } from "next";
import { PolicyPage } from "@/features/base/components/policy-page";

export const metadata: Metadata = {
  title: "Privacy Policy — EKO170",
  description:
    "How EKO170 collects, uses and protects the information riders, volunteers and partners share with us.",
};

export default function PrivacyPage() {
  return (
    <PolicyPage
      eyebrow="Legal"
      title="Privacy Policy"
      lastUpdated="20 November 2026"
      intro="EKO170 collects only the information needed to register riders, process payments, run race day safely, and keep you informed about the event. This policy explains what we collect, how we use it, and who we share it with."
      sections={[
        {
          heading: "Information We Collect",
          body: [
            "When you register for the Gran Fondo or Medio Fondo, we collect your name, email, phone number, distance selection, a government-issued ID type and number, and an emergency contact's name and phone number.",
            "Payment details (card or bank transfer information) are entered directly into our payment partners' secure checkout — Flutterwave or Paystack — and are never stored on our own systems.",
            "If you sign up to volunteer or submit a partnership enquiry, we collect the contact and role/interest details you provide on those forms.",
            "We use standard website analytics to understand how visitors use the site, and cookies to keep basic site functionality working.",
          ],
        },
        {
          heading: "How We Use Your Information",
          body: [
            "To process your registration and payment, confirm your entry by email, and get in touch about race-day logistics — start times, kit collection, and any changes to the event.",
            "To publish official results against your race number once timing data is finalised.",
            "To coordinate volunteer roles and respond to partnership enquiries.",
            "We do not use your information for anything beyond running and communicating about EKO170.",
          ],
        },
        {
          heading: "Who We Share It With",
          body: [
            "Flutterwave and Paystack process payments on our behalf under their own privacy and security standards.",
            "FinishTime, our official timing partner, receives the race-number and category information needed to produce and publish results.",
            "Resend, our email delivery provider, is used to send registration confirmations and event updates.",
            "We do not sell or rent your personal information to any third party.",
          ],
        },
        {
          heading: "Data Retention & Security",
          body: [
            "We keep registration and results records for as long as needed to support the current and future editions of EKO170, and delete or anonymise data we no longer need to retain.",
            "We take reasonable technical and organisational measures to protect the information we hold, but no online system can be guaranteed fully secure.",
          ],
        },
        {
          heading: "Your Rights",
          body: [
            "You can ask us to access, correct, or delete the personal information we hold about you by contacting us using the details below. We'll respond as quickly as we reasonably can.",
          ],
        },
        {
          heading: "Children's Privacy",
          body: [
            "EKO170 registration is intended for riders who meet the event's minimum age requirement. We do not knowingly collect information from children without a parent or guardian's involvement.",
          ],
        },
        {
          heading: "Changes to This Policy",
          body: [
            "We may update this policy as the event and our tools evolve. The date at the top of this page reflects the most recent update.",
          ],
        },
        {
          heading: "Contact",
          body: [
            "Questions about this policy or your information? Reach us using the contact details in the site footer.",
          ],
        },
      ]}
    />
  );
}
