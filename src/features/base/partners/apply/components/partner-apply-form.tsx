"use client";

import { startTransition, useActionState, useEffect, useState } from "react";
import { useForm, type FieldError, type UseFormRegister } from "react-hook-form";
import { toast } from "sonner";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { FIELD_LABELS, PARTNERSHIP_TYPE_OPTIONS } from "../constants";
import { submitPartnerAction } from "../server/actions";
import type { PartnerFormValues } from "../types";
import { PartnerApplySuccess } from "./partner-apply-success";

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
  name: keyof PartnerFormValues;
  label: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
  pattern?: { value: RegExp; message: string };
  register: UseFormRegister<PartnerFormValues>;
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

function TextAreaField({
  name,
  label,
  placeholder,
  register,
}: {
  name: keyof PartnerFormValues;
  label: string;
  placeholder?: string;
  register: UseFormRegister<PartnerFormValues>;
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <FieldLabel>{label}</FieldLabel>
      <textarea
        rows={4}
        placeholder={placeholder}
        className={`${inputClassName} h-auto resize-y border bg-white py-3.5 outline-none`}
        {...register(name)}
      />
    </div>
  );
}

export function PartnerApplyForm() {
  // Remounting via `key` is the reset mechanism: useActionState has no
  // imperative reset, so "Submit another enquiry" bumps this counter to
  // remount PartnerApplyFormInner with a clean useActionState/useForm.
  const [formKey, setFormKey] = useState(0);
  return <PartnerApplyFormInner key={formKey} onReset={() => setFormKey((k) => k + 1)} />;
}

function PartnerApplyFormInner({ onReset }: { onReset: () => void }) {
  const [state, formAction, isPending] = useActionState(submitPartnerAction, null);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<PartnerFormValues>({
    defaultValues: state?.status === "error" ? state.values : undefined,
  });

  useEffect(() => {
    if (state?.status === "success") {
      toast.success("Partnership request received", {
        description: "The EKO170 commercial team will follow up by email.",
      });
    } else if (state?.status === "error" && state.message) {
      toast.error(state.message);
    }
  }, [state]);

  if (state?.status === "success") {
    return (
      <div className="mx-auto w-full max-w-[720px] px-0 pb-24 sm:px-10">
        <PartnerApplySuccess onReset={onReset} />
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
            Organisation
          </div>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            <TextField
              name="organisation"
              label={FIELD_LABELS.organisation}
              placeholder="Organisation name"
              required
              register={register}
              error={errors.organisation}
            />
            <TextField
              name="contactName"
              label={FIELD_LABELS.contactName}
              placeholder="Full name"
              required
              register={register}
              error={errors.contactName}
            />
            <TextField
              name="email"
              label={FIELD_LABELS.email}
              type="email"
              placeholder="you@company.com"
              required
              register={register}
              error={errors.email}
            />
            <TextField
              name="phone"
              label={FIELD_LABELS.phone}
              placeholder="+234…"
              required
              register={register}
              error={errors.phone}
            />
          </div>
        </div>

        <div>
          <div className="mb-5 border-b border-brand-cream-border pb-2.5 font-mono text-xs tracking-[2px] text-brand-green uppercase">
            Partnership
          </div>
          <div className="flex flex-col gap-5">
            <div className="flex flex-col gap-1.5">
              <FieldLabel>
                What type of partnership are you interested in?
              </FieldLabel>
              <select
                aria-invalid={!!errors.partnershipType}
                defaultValue=""
                className={`${inputClassName} appearance-none border bg-white outline-none aria-invalid:border-red-600`}
                {...register("partnershipType", {
                  required: "Partnership type is required",
                })}
              >
                <option value="">Choose One</option>
                {PARTNERSHIP_TYPE_OPTIONS.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
              <FieldError error={errors.partnershipType} />
            </div>
            <TextAreaField
              name="howToPartner"
              label="How would you like to partner with EKO170?"
              placeholder="Your answer"
              register={register}
            />
            <TextAreaField
              name="goals"
              label="What would you like to achieve through the partnership?"
              placeholder="Your answer"
              register={register}
            />
          </div>
        </div>

        <div className="flex flex-col items-center gap-3.5 pt-2">
          <Button
            type="submit"
            disabled={isPending}
            className="h-14 w-full rounded-full bg-brand-yellow px-11 font-sans text-base font-semibold text-brand-teal hover:bg-brand-yellow/90 disabled:opacity-70"
          >
            {isPending ? "Submitting…" : "Submit Partnership Request"}
            {!isPending && <ArrowRight className="size-4" />}
          </Button>
          <p className="font-sans text-sm text-gray-400">
            Prefer email? Write to{" "}
            <a href="mailto:info@eko170.com" className="text-brand-green">
              info@eko170.com
            </a>
          </p>
        </div>
      </form>
    </div>
  );
}
