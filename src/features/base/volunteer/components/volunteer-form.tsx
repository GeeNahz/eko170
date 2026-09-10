"use client";

import { startTransition, useActionState, useEffect, useState } from "react";
import { useForm, type FieldError, type UseFormRegister } from "react-hook-form";
import { toast } from "sonner";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { FIELD_LABELS, IN_COMMUNITY_OPTIONS, MIN_VOLUNTEER_AGE } from "../constants";
import { submitVolunteerAction } from "../server/actions";
import type { VolunteerFormValues } from "../types";
import { VolunteerSuccess } from "./volunteer-success";

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
  min,
  pattern,
  register,
  error,
}: {
  name: keyof VolunteerFormValues;
  label: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
  min?: number;
  pattern?: { value: RegExp; message: string };
  register: UseFormRegister<VolunteerFormValues>;
  error?: FieldError;
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <FieldLabel>{label}</FieldLabel>
      <Input
        type={type}
        placeholder={placeholder}
        min={min}
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

export function VolunteerForm() {
  // Remounting via `key` is the reset mechanism: useActionState has no
  // imperative reset, so "Sign Up Someone Else" bumps this counter to
  // remount VolunteerFormInner with a clean useActionState/useForm.
  const [formKey, setFormKey] = useState(0);
  return <VolunteerFormInner key={formKey} onReset={() => setFormKey((k) => k + 1)} />;
}

function VolunteerFormInner({ onReset }: { onReset: () => void }) {
  const [state, formAction, isPending] = useActionState(submitVolunteerAction, null);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<VolunteerFormValues>({
    defaultValues: state?.status === "error" ? state.values : undefined,
  });

  const inCommunity = watch("inCommunity");

  useEffect(() => {
    if (state?.status === "success") {
      toast.success("You're signed up", {
        description: "The volunteer team will email your role and briefing time.",
      });
    } else if (state?.status === "error" && state.message) {
      toast.error(state.message);
    }
  }, [state]);

  if (state?.status === "success") {
    return (
      <div className="mx-auto w-full max-w-[720px] px-0 pb-24 sm:px-10">
        <VolunteerSuccess onReset={onReset} />
      </div>
    );
  }

  return (
    <div className="mx-auto w-full max-w-[720px] px-0 pb-24 sm:px-10">
      <form
        onSubmit={handleSubmit((values) => startTransition(() => formAction(values)))}
        noValidate
        className="flex flex-col gap-6 bg-brand-cream px-5 pt-8 pb-11 sm:rounded-[20px] sm:border sm:border-brand-cream-border sm:bg-white sm:p-10"
      >
        <div>
          <div className="mb-5 border-b border-brand-cream-border pb-2.5 font-mono text-xs tracking-[2px] text-brand-green uppercase">
            Your Details
          </div>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            <TextField
              name="fullName"
              label={FIELD_LABELS.fullName}
              placeholder="First and last name"
              required
              register={register}
              error={errors.fullName}
            />
            <TextField
              name="age"
              label={FIELD_LABELS.age}
              type="number"
              min={MIN_VOLUNTEER_AGE}
              placeholder="Age"
              required
              register={register}
              error={errors.age}
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
              type="email"
              placeholder="you@email.com"
              required
              register={register}
              error={errors.email}
            />
          </div>
        </div>

        <div>
          <div className="mb-5 border-b border-brand-cream-border pb-2.5 font-mono text-xs tracking-[2px] text-brand-green uppercase">
            Community
          </div>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            <div className="flex flex-col gap-1.5">
              <FieldLabel>{FIELD_LABELS.inCommunity}</FieldLabel>
              <select
                aria-invalid={!!errors.inCommunity}
                defaultValue=""
                className={`${inputClassName} appearance-none border bg-white outline-none aria-invalid:border-red-600`}
                {...register("inCommunity", {
                  required: "Please choose an option",
                })}
              >
                <option value="">Choose One</option>
                {IN_COMMUNITY_OPTIONS.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
              <FieldError error={errors.inCommunity} />
            </div>
            {inCommunity === "Yes" && (
              <TextField
                name="organisation"
                label={FIELD_LABELS.organisation}
                placeholder="Organisation name"
                register={register}
              />
            )}
          </div>
        </div>

        <div className="flex flex-col items-center gap-3.5 pt-2">
          <Button
            type="submit"
            disabled={isPending}
            className="h-14 w-full rounded-full bg-brand-green px-11 font-sans text-base font-semibold text-white hover:bg-brand-green/90 disabled:opacity-70"
          >
            {isPending ? "Submitting…" : "Sign Me Up"}
            {!isPending && <ArrowRight className="size-4" />}
          </Button>
          <p className="font-sans text-sm text-gray-400">
            Questions about volunteering? Email{" "}
            <a href="mailto:crew@eko170.com" className="text-brand-green">
              crew@eko170.com
            </a>
          </p>
        </div>
      </form>
    </div>
  );
}
