"use client";

import { startTransition, useActionState, useState } from "react";
import { useForm, type FieldError, type UseFormRegister } from "react-hook-form";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { FIELD_LABELS } from "../constants";
import { submitAccommodationBookingAction } from "../server/actions";
import type { AccommodationFormValues } from "../types";
import { AccommodationSuccess } from "./accommodation-success";

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
  register,
  error,
}: {
  name: keyof AccommodationFormValues;
  label: string;
  type?: string;
  placeholder?: string;
  register: UseFormRegister<AccommodationFormValues>;
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
          required: `${label} is required`,
        })}
      />
      <FieldError error={error} />
    </div>
  );
}

export function AccommodationForm() {
  // Remounting via `key` is the reset mechanism: useActionState has no
  // imperative reset, so "Submit Another Request" bumps this counter
  // to remount AccommodationFormInner with a clean useActionState/useForm.
  const [formKey, setFormKey] = useState(0);
  return (
    <AccommodationFormInner key={formKey} onReset={() => setFormKey((k) => k + 1)} />
  );
}

function AccommodationFormInner({ onReset }: { onReset: () => void }) {
  const [state, formAction, isPending] = useActionState(
    submitAccommodationBookingAction,
    null,
  );
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<AccommodationFormValues>({
    defaultValues: state?.status === "error" ? state.values : undefined,
  });

  if (state?.status === "success") {
    return (
      <div className="mx-auto w-full max-w-[720px] px-5 pb-24 sm:px-10">
        <AccommodationSuccess onReset={onReset} />
      </div>
    );
  }

  return (
    <div className="mx-auto w-full max-w-[720px] px-5 pb-24 sm:px-10">
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
              name="name"
              label={FIELD_LABELS.name}
              placeholder="First and last name"
              register={register}
              error={errors.name}
            />
            <TextField
              name="phone"
              label={FIELD_LABELS.phone}
              placeholder="+234…"
              register={register}
              error={errors.phone}
            />
            <TextField
              name="email"
              label={FIELD_LABELS.email}
              type="email"
              placeholder="you@email.com"
              register={register}
              error={errors.email}
            />
            <TextField
              name="address"
              label={FIELD_LABELS.address}
              placeholder="Street, city, country"
              register={register}
              error={errors.address}
            />
          </div>
        </div>

        <div className="flex flex-col items-center gap-3.5 pt-2">
          <Button
            type="submit"
            disabled={isPending}
            className="h-14 w-full rounded-full bg-brand-green px-11 font-sans text-base font-semibold text-white hover:bg-brand-green/90 disabled:opacity-70"
          >
            {isPending ? "Submitting…" : "Request Booking"}
            {!isPending && <ArrowRight className="size-4" />}
          </Button>
          <p className="font-sans text-sm text-gray-400">
            Questions about accommodation? Email{" "}
            <a href="mailto:info@eko170.com" className="text-brand-green">
              info@eko170.com
            </a>
          </p>
        </div>
      </form>
    </div>
  );
}
