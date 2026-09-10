"use client";

import { startTransition, useActionState, useEffect } from "react";
import { useForm, type FieldError } from "react-hook-form";
import { toast } from "sonner";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { DISTANCE_OPTIONS } from "../constants";
import { submitVoteAction } from "../server/actions";
import type { RouteVoteFormValues } from "../types";

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

export function RouteVoteCastForm({
  optionId,
  onVoted,
}: {
  optionId: "a" | "b";
  onVoted: (optionId: string) => void;
}) {
  const [state, formAction, isPending] = useActionState(submitVoteAction, null);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RouteVoteFormValues>({
    defaultValues: { optionId },
  });

  useEffect(() => {
    if (state?.status === "success") {
      toast.success("Vote counted", {
        description: "We'll announce the confirmed 2027 course by email.",
      });
      onVoted(state.data.optionId);
    } else if (state?.status === "error" && state.message) {
      toast.error(state.message);
    }
  }, [state, onVoted]);

  return (
    <form
      onSubmit={handleSubmit((values) =>
        startTransition(() => formAction({ ...values, optionId })),
      )}
      noValidate
      className="flex flex-col gap-3.5 rounded-[18px] border border-brand-cream-border bg-white p-5"
    >
      <div className="border-b border-brand-cream-border pb-2.5 font-mono text-[10px] tracking-[2px] text-brand-green uppercase">
        Cast Your Vote
      </div>
      <div className="flex flex-col gap-1.5">
        <FieldLabel>Full Name</FieldLabel>
        <Input
          type="text"
          placeholder="First and last name"
          aria-invalid={!!errors.fullName}
          className={inputClassName}
          {...register("fullName", { required: "Full name is required" })}
        />
        <FieldError error={errors.fullName} />
      </div>
      <div className="flex flex-col gap-1.5">
        <FieldLabel>Email</FieldLabel>
        <Input
          type="email"
          placeholder="you@email.com"
          aria-invalid={!!errors.email}
          className={inputClassName}
          {...register("email", { required: "Email is required" })}
        />
        <FieldError error={errors.email} />
      </div>
      <div className="flex flex-col gap-1.5">
        <FieldLabel>Which distance will you ride?</FieldLabel>
        <select
          aria-invalid={!!errors.distance}
          defaultValue=""
          className={`${inputClassName} appearance-none border bg-white outline-none aria-invalid:border-red-600`}
          {...register("distance", { required: "Please choose a distance" })}
        >
          <option value="">Choose One</option>
          {DISTANCE_OPTIONS.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
        <FieldError error={errors.distance} />
      </div>
      <div className="flex flex-col gap-1.5">
        <FieldLabel>Why this route? (optional)</FieldLabel>
        <textarea
          rows={3}
          placeholder="Tell us what makes it the better ride"
          className={`${inputClassName} h-auto resize-y border bg-white py-3.5 outline-none`}
          {...register("reason")}
        />
      </div>
      <button
        type="submit"
        disabled={isPending}
        className="mt-1 flex h-14 w-full items-center justify-center rounded-full bg-brand-green font-sans text-base font-semibold text-white disabled:opacity-70"
      >
        {isPending ? "Submitting…" : "Submit My Vote"}
      </button>
      <p className="text-center font-sans text-xs text-gray-400">
        One vote per rider. Voting closes when the course is confirmed.
      </p>
    </form>
  );
}
