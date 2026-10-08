"use client";

import { startTransition, useActionState, useEffect } from "react";
import { useForm, type FieldError, type UseFormRegister } from "react-hook-form";
import { toast } from "sonner";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  DISTANCE_OPTIONS,
  DISTANCE_PRICES,
  EMAIL_PATTERN,
  FIELD_LABELS,
  GENDER_OPTIONS,
  ID_TYPE_OPTIONS,
  resolveDistancePrice,
  SPEED_OPTIONS,
} from "../constants";
import { registerAction } from "../server/actions";
import type { RegistrationFormValues } from "../types";

const inputClassName =
  "h-auto rounded-[10px] border-brand-cream-border px-4 py-3.5 font-sans text-[15px] text-brand-teal focus-visible:border-brand-green focus-visible:ring-brand-green/12";

function FieldLabel({ children }: { children: string }) {
  return (
    <Label className="font-mono text-[11px] tracking-wide text-gray-500 uppercase">
      {children}
    </Label>
  );
}

function FieldError({ error }: { error?: FieldError }) {
  if (!error) return null;
  return <span className="font-sans text-xs text-red-600">{error.message}</span>;
}

function TextField({
  name,
  label,
  type = "text",
  placeholder,
  required,
  pattern,
  register,
  error,
}: {
  name: keyof RegistrationFormValues;
  label: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
  pattern?: { value: RegExp; message: string };
  register: UseFormRegister<RegistrationFormValues>;
  error?: FieldError;
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <FieldLabel>{label}</FieldLabel>
      <Input
        type={type}
        placeholder={placeholder}
        aria-invalid={!!error}
        className={inputClassName}
        {...register(name, {
          required: required ? `${label} is required` : false,
          pattern,
        })}
      />
      <FieldError error={error} />
    </div>
  );
}

function SelectField({
  name,
  label,
  options,
  placeholder,
  required,
  register,
  error,
}: {
  name: keyof RegistrationFormValues;
  label: string;
  options: string[];
  placeholder: string;
  required?: boolean;
  register: UseFormRegister<RegistrationFormValues>;
  error?: FieldError;
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <FieldLabel>{label}</FieldLabel>
      <select
        aria-invalid={!!error}
        defaultValue=""
        className={`${inputClassName} appearance-none border bg-white outline-none aria-invalid:border-red-600`}
        {...register(
          name,
          required ? { required: `${label} is required` } : undefined,
        )}
      >
        <option value="">{placeholder}</option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
      <FieldError error={error} />
    </div>
  );
}

export function RegistrationForm() {
  const [state, formAction, isPending] = useActionState(registerAction, null);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<RegistrationFormValues>({
    defaultValues: state?.status === "error" ? state.values : undefined,
  });

  const selectedDistance = watch("distance");
  const fee = resolveDistancePrice(selectedDistance);
  const earlyBird = DISTANCE_PRICES[selectedDistance]?.earlyBird;
  const earlyBirdActive = earlyBird && new Date() < new Date(earlyBird.endsAt);

  useEffect(() => {
    if (state?.status === "error" && state.message) {
      toast.error(state.message);
    }
  }, [state]);

  return (
    <div className="mx-auto w-full max-w-[920px] px-0 pb-24 sm:px-10">
      <form
        onSubmit={handleSubmit((values) => startTransition(() => formAction(values)))}
        noValidate
        className="flex flex-col gap-6 bg-brand-cream px-5 pt-8 pb-11 sm:rounded-[20px] sm:border sm:border-brand-cream-border sm:bg-white sm:p-10"
      >
        <div>
          <div className="mb-5 border-b border-brand-cream-border pb-2.5 font-mono text-xs tracking-[2px] text-brand-green uppercase">
            Personal Information
          </div>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            <TextField
              name="firstName"
              label={FIELD_LABELS.firstName}
              placeholder="First name"
              required
              register={register}
              error={errors.firstName}
            />
            <TextField
              name="lastName"
              label={FIELD_LABELS.lastName}
              placeholder="Last name"
              required
              register={register}
              error={errors.lastName}
            />
            <TextField
              name="phone"
              label={FIELD_LABELS.phone}
              placeholder="+234…"
              required
              register={register}
              error={errors.phone}
            />
            <TextField
              name="email"
              label={FIELD_LABELS.email}
              placeholder="you@email.com"
              required
              pattern={{ value: EMAIL_PATTERN, message: "Enter a valid email address" }}
              register={register}
              error={errors.email}
            />
            <SelectField
              name="gender"
              label={FIELD_LABELS.gender}
              options={GENDER_OPTIONS}
              placeholder="Choose Gender"
              required
              register={register}
              error={errors.gender}
            />
            <TextField
              name="dob"
              label={FIELD_LABELS.dob}
              placeholder="DD / MM / YYYY"
              required
              register={register}
              error={errors.dob}
            />
            <SelectField
              name="distance"
              label={FIELD_LABELS.distance}
              options={DISTANCE_OPTIONS}
              placeholder="Choose Preferred Distance"
              required
              register={register}
              error={errors.distance}
            />
            <SelectField
              name="speed"
              label="Expected Average Speed (kph)"
              options={SPEED_OPTIONS}
              placeholder="Choose Speed"
              required
              register={register}
              error={errors.speed}
            />
          </div>
        </div>

        <div>
          <div className="mb-5 border-b border-brand-cream-border pb-2.5 font-mono text-xs tracking-[2px] text-brand-green uppercase">
            Cycling Affiliation
          </div>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            <TextField
              name="country"
              label={FIELD_LABELS.country}
              placeholder="Country"
              required
              register={register}
              error={errors.country}
            />
            <TextField
              name="license"
              label={FIELD_LABELS.license}
              placeholder="Optional"
              register={register}
            />
            <TextField
              name="club"
              label={FIELD_LABELS.club}
              placeholder="Optional"
              register={register}
            />
          </div>
        </div>

        <div>
          <div className="mb-5 border-b border-brand-cream-border pb-2.5 font-mono text-xs tracking-[2px] text-brand-green uppercase">
            Identification
          </div>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            <SelectField
              name="idType"
              label={FIELD_LABELS.idType}
              options={ID_TYPE_OPTIONS}
              placeholder="Choose One"
              required
              register={register}
              error={errors.idType}
            />
            <TextField
              name="idNumber"
              label={FIELD_LABELS.idNumber}
              placeholder="ID number"
              required
              register={register}
              error={errors.idNumber}
            />
          </div>
        </div>

        <div>
          <div className="mb-5 border-b border-brand-cream-border pb-2.5 font-mono text-xs tracking-[2px] text-brand-green uppercase">
            Medical Insurance Information
          </div>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            <TextField
              name="insProvider"
              label={FIELD_LABELS.insProvider}
              placeholder="Insurance provider (optional)"
              register={register}
            />
            <TextField
              name="insNumber"
              label={FIELD_LABELS.insNumber}
              placeholder="Enrollee number (optional)"
              register={register}
            />
          </div>
        </div>

        <div>
          <div className="mb-5 border-b border-brand-cream-border pb-2.5 font-mono text-xs tracking-[2px] text-brand-green uppercase">
            Emergency Contact
          </div>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            <TextField
              name="emergencyName"
              label={FIELD_LABELS.emergencyName}
              placeholder="Contact name"
              required
              register={register}
              error={errors.emergencyName}
            />
            <TextField
              name="emergencyPhone"
              label={FIELD_LABELS.emergencyPhone}
              placeholder="Contact phone"
              required
              register={register}
              error={errors.emergencyPhone}
            />
          </div>
        </div>

        <div className="flex flex-col items-center gap-3.5 pt-2">
          <div className="flex w-full max-w-[420px] items-center justify-between rounded-[14px] border border-brand-cream-border bg-brand-cream px-5 py-4">
            <span className="font-mono text-[11px] tracking-wide text-gray-500 uppercase">
              Registration Fee
            </span>
            <span className="font-sans text-lg font-bold text-brand-teal">
              {fee ? `₦${fee.toLocaleString("en-NG")}` : "Choose a distance"}
            </span>
          </div>
          {earlyBirdActive && (
            <p className="max-w-[420px] text-center font-sans text-xs font-semibold text-brand-green">
              Early-bird price — ends{" "}
              {new Date(earlyBird.endsAt).toLocaleDateString("en-NG", {
                day: "numeric",
                month: "long",
                year: "numeric",
              })}
            </p>
          )}
          <p className="max-w-[420px] text-center font-sans text-xs text-gray-400">
            You&apos;ll be taken to a secure checkout to pay this amount —
            your registration is only confirmed once payment goes through.
          </p>
          <Button
            type="submit"
            disabled={isPending}
            className="h-14 rounded-full bg-brand-green px-11 font-sans text-base font-semibold text-white hover:bg-brand-green/90 disabled:opacity-70"
          >
            {isPending ? "Redirecting to payment…" : "Continue to Payment"}
            {!isPending && <ArrowRight className="size-4" />}
          </Button>

          <div className="flex w-full max-w-[420px] items-center gap-3">
            <span className="h-px flex-1 bg-brand-cream-border" />
            <span className="font-mono text-[10px] tracking-[2px] text-gray-400 uppercase">
              Not Riding?
            </span>
            <span className="h-px flex-1 bg-brand-cream-border" />
          </div>
          <Link
            href="/volunteer"
            className="flex h-14 w-full max-w-[420px] items-center justify-between rounded-full border-[1.5px] border-brand-green px-5.5 font-sans text-base font-bold text-brand-green"
          >
            Volunteer Instead
            <ArrowRight className="size-4" />
          </Link>
          <Link
            href="/partners/apply"
            className="flex h-14 w-full max-w-[420px] items-center justify-between rounded-full border-[1.5px] border-brand-teal px-5.5 font-sans text-base font-bold text-brand-teal"
          >
            Become a Partner
            <ArrowRight className="size-4" />
          </Link>

          <p className="font-sans text-sm text-gray-400">
            Have questions? Email us at{" "}
            <a href="mailto:info@eko170.com" className="text-brand-green">
              info@eko170.com
            </a>
          </p>
        </div>
      </form>
    </div>
  );
}
