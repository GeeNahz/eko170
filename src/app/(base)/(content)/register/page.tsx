import type { Metadata } from "next";
import { RegisterHero } from "@/features/base/register/components/register-hero";
import { RegistrationForm } from "@/features/base/register/components/registration-form";

export const metadata: Metadata = {
  title: "Register — EKO170",
  description:
    "Enter the race. Register for EKO170 — choose your distance, provide your details, and secure your place on the start line.",
};

export default function RegisterPage() {
  return (
    <>
      <RegisterHero />
      <RegistrationForm />
    </>
  );
}
