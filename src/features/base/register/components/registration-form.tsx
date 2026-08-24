"use client";

import { useActionState, useEffect } from "react";
import { useForm, type FieldError, type UseFormRegister } from "react-hook-form";
import { toast } from "sonner";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  DISTANCE_OPTIONS,
  EMAIL_PATTERN,
  FIELD_LABELS,
  GENDER_OPTIONS,
  ID_TYPE_OPTIONS,
  SPEED_OPTIONS,
} from "../constants";
import { registerAction } from "../server/actions";
import type { RegistrationFormValues } from "../types";
import { RegistrationSuccess } from "./registration-success";

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
    formState: { errors },
  } = useForm<RegistrationFormValues>({
    defaultValues: state?.status === "error" ? state.values : undefined,
  });

  useEffect(() => {
    if (state?.status === "success") {
      toast.success("Registration received", {
        description: `Reference ${state.data.refCode} — check your email for next steps.`,
      });
    } else if (state?.status === "error" && state.message) {
      toast.error(state.message);
    }
  }, [state]);

  if (state?.status === "success") {
    return (
      <div className="mx-auto w-full max-w-[920px] px-0 pb-24 sm:px-10">
        <RegistrationSuccess data={state.data} />
      </div>
    );
  }

  return (
    <div className="mx-auto w-full max-w-[920px] px-0 pb-24 sm:px-10">
      <form
        onSubmit={handleSubmit((values) => formAction(values))}
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
          <Button
            type="submit"
            disabled={isPending}
            className="h-14 rounded-full bg-brand-green px-11 font-sans text-base font-semibold text-white hover:bg-brand-green/90 disabled:opacity-70"
          >
            {isPending ? "Submitting…" : "Submit Registration"}
            {!isPending && <ArrowRight className="size-4" />}
          </Button>
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
