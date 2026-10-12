"use client";

import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import {
  MEDICAL_WAIVER_CHECKBOX_LABEL,
  MEDICAL_WAIVER_INTRO,
  MEDICAL_WAIVER_SECTIONS,
  MEDICAL_WAIVER_SUBTITLE,
  MEDICAL_WAIVER_TITLE,
} from "../constants";

export function MedicalWaiverDialog({
  open,
  onOpenChange,
  onAgree,
}: {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onAgree: () => void;
}) {
  const [checked, setChecked] = useState(false);

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-xl gap-0 overflow-hidden p-0 sm:max-w-xl">
        <DialogHeader className="px-6 pt-6 pb-4">
          <DialogTitle>{MEDICAL_WAIVER_TITLE}</DialogTitle>
          <DialogDescription>{MEDICAL_WAIVER_SUBTITLE}</DialogDescription>
        </DialogHeader>

        <div className="max-h-[48vh] overflow-y-auto border-t border-brand-cream-border px-6 py-4">
          <p className="mb-4 font-sans text-sm leading-relaxed text-gray-600">
            {MEDICAL_WAIVER_INTRO}
          </p>
          {MEDICAL_WAIVER_SECTIONS.map((section) => (
            <div key={section.title} className="mb-4 last:mb-0">
              <div className="mb-1 font-sans text-sm font-bold text-brand-teal">
                {section.title}
              </div>
              <p className="font-sans text-sm leading-relaxed text-gray-600">
                {section.body}
              </p>
            </div>
          ))}
        </div>

        <div className="flex items-start gap-2.5 border-t border-brand-cream-border px-6 py-4">
          <Checkbox
            id="medical-waiver-checkbox"
            checked={checked}
            onCheckedChange={setChecked}
            className="mt-0.5"
          />
          <label
            htmlFor="medical-waiver-checkbox"
            className="font-sans text-sm leading-relaxed text-gray-700"
          >
            {MEDICAL_WAIVER_CHECKBOX_LABEL}
          </label>
        </div>

        <DialogFooter className="bg-transparent px-6 pb-6">
          <Button
            type="button"
            disabled={!checked}
            onClick={() => {
              onAgree();
              onOpenChange(false);
            }}
            className="w-full rounded-full bg-brand-green font-sans text-base font-semibold text-white hover:bg-brand-green/90 disabled:opacity-70"
          >
            Agree &amp; Continue
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
