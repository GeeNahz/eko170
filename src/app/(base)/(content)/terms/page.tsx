import type { Metadata } from "next";
import { PolicyPage } from "@/features/base/components/policy-page";

export const metadata: Metadata = {
  title: "Terms & Conditions — EKO170",
  description:
    "The terms that apply to registering, riding, volunteering, ordering kit, and partnering with EKO170.",
};

export default function TermsPage() {
  return (
    <PolicyPage
      eyebrow="Legal"
      title="Terms & Conditions"
      lastUpdated="20 November 2026"
      intro="By registering for EKO170, ordering kit, signing up to volunteer, or submitting a partnership enquiry, you agree to the terms below."
      sections={[
        {
          heading: "Eligibility & Registration",
          body: [
            "One registration covers your entry fee and your choice of distance — Gran Fondo (170km) or Medio Fondo (94.5km) — confirmed on race day rather than locked in at sign-up.",
            "You're responsible for providing accurate registration details, including the ID and emergency contact information requested, so we can identify riders and reach someone on your behalf if needed.",
          ],
        },
        {
          heading: "Fees & Payment",
          body: [
            "Registration fees follow the early-bird and late-bird pricing shown at checkout, processed securely through Flutterwave or Paystack. Your entry is confirmed once payment clears.",
          ],
        },
        {
          heading: "Cancellations & Refunds",
          body: [
            "Entry fees are generally non-refundable, except where required by law. If you're unable to ride, contact us — we may be able to help with options such as a deferral, depending on availability.",
          ],
        },
        {
          heading: "Medical Waiver & Assumption of Risk",
          body: [
            "Cycling on closed or shared roads carries inherent risk. As part of registration you confirm the medical waiver presented at checkout, confirming you're fit to ride and accepting the risks of participating.",
            "Please disclose any medical conditions relevant to your safety on course, and follow all instructions from marshals, medical staff, and event officials on race day.",
          ],
        },
        {
          heading: "Code of Conduct & Safety",
          body: [
            "Riders must follow the published route, obey traffic and marshal instructions, wear a helmet at all times on course, and ride in a way that doesn't endanger themselves, other riders, or road users.",
            "We reserve the right to remove any rider from the course for unsafe conduct.",
          ],
        },
        {
          heading: "Kit & Shop Orders",
          body: [
            "Jersey, bib shorts, and kit bundle orders are confirmed at checkout and collected alongside race packs ahead of race day — exact collection details are published closer to the event.",
            "Because kit is sized and ordered per rider, we're unable to accept returns on worn items; please check the published size charts carefully before ordering.",
          ],
        },
        {
          heading: "Volunteering",
          body: [
            "Volunteer roles, training, and duty dates are coordinated directly with our volunteer team once you sign up. Volunteering doesn't constitute an employment relationship with EKO170.",
          ],
        },
        {
          heading: "Event Photography & Media",
          body: [
            "By attending EKO170 as a rider, volunteer, or spectator, you agree that photos and video captured at the event may be used by EKO170 for promotional and editorial purposes.",
          ],
        },
        {
          heading: "Liability",
          body: [
            "To the extent permitted by law, EKO170 and its organisers are not liable for loss, injury, or damage arising from participation in the event, except where caused by our negligence.",
          ],
        },
        {
          heading: "Changes to These Terms",
          body: [
            "We may update these terms as the event evolves. The date at the top of this page reflects the most recent update — continued registration or participation means you accept the current version.",
          ],
        },
        {
          heading: "Governing Law",
          body: [
            "These terms are governed by the laws of the Federal Republic of Nigeria.",
          ],
        },
        {
          heading: "Contact",
          body: [
            "Questions about these terms? Reach us using the contact details in the site footer.",
          ],
        },
      ]}
    />
  );
}
