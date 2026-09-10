"use client";

import { useState, useSyncExternalStore } from "react";
import { Check } from "lucide-react";
import { Reveal } from "@/components/motion/reveal";
import { cn } from "@/lib/utils";
import { RouteMapEmbed } from "../../../lib/components/route-map-embed";
import { ROUTE_VOTE_OPTIONS } from "../constants";
import {
  getServerVotedOptionId,
  getVotedOptionId,
  setVotedOptionId,
  subscribeVotedOptionId,
} from "../lib/vote-store";
import { RouteVoteCastForm } from "./route-vote-cast-form";

export function RouteVoteSection() {
  const votedOptionId = useSyncExternalStore(
    subscribeVotedOptionId,
    getVotedOptionId,
    getServerVotedOptionId,
  );
  const [pickedOptionId, setPickedOptionId] = useState<"a" | "b" | null>(null);

  function handleVoted(optionId: string) {
    setVotedOptionId(optionId);
  }

  function handleChangeVote() {
    setVotedOptionId(null);
    setPickedOptionId(null);
  }

  const votedOption = ROUTE_VOTE_OPTIONS.find((o) => o.id === votedOptionId);

  return (
    <div
      id="routevote"
      className="overflow-hidden bg-white px-5 pt-11 pb-12 sm:mx-4 sm:mt-4 sm:rounded-[22px] sm:px-10 sm:py-24"
    >
      <div className="mx-auto max-w-6xl">
        <Reveal className="mb-4 border-l-4 border-brand-green pl-3 font-mono text-xs tracking-wide text-brand-green uppercase">
          Rider Vote · Open Now
        </Reveal>
        <Reveal
          delay={0.1}
          className="font-heading mb-4 text-4xl leading-[0.95] font-black text-brand-teal italic uppercase sm:text-[52px]"
        >
          Which Route
          <br />
          Should We Ride?
        </Reveal>
        <Reveal
          delay={0.15}
          className="mb-8 max-w-2xl font-sans text-base leading-relaxed text-gray-600 sm:text-lg"
        >
          The 2027 Gran Fondo course is not final. Two options are on the
          table and the riders decide. Pick the one you want to ride and we
          will publish the result with the confirmed course.
        </Reveal>

        {votedOption ? (
          <div className="mx-auto max-w-2xl rounded-[18px] border border-brand-cream-border bg-brand-cream px-6 py-10 text-center sm:px-10 sm:py-14">
            <div className="mx-auto mb-4.5 flex size-16 items-center justify-center rounded-full bg-green-100">
              <Check className="size-7 text-brand-green" strokeWidth={2.4} />
            </div>
            <h3 className="font-heading mb-2.5 text-3xl font-extrabold text-brand-teal uppercase">
              Vote Counted
            </h3>
            <p className="mx-auto mb-6 max-w-[440px] font-sans text-sm leading-relaxed text-gray-600">
              You voted for{" "}
              <strong className="text-brand-teal">{votedOption.title}</strong>. We
              will announce the confirmed 2027 Gran Fondo course by email once
              voting closes.
            </p>
            <button
              type="button"
              onClick={handleChangeVote}
              className="inline-flex items-center gap-2 rounded-full border-2 border-brand-green px-6 py-3 font-sans text-sm font-semibold text-brand-green"
            >
              Change my vote
            </button>
          </div>
        ) : (
          <div className="flex flex-col gap-6">
            <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-6">
              {ROUTE_VOTE_OPTIONS.map((option) => {
                const picked = option.id === pickedOptionId;
                return (
                  <div
                    key={option.id}
                    className={cn(
                      "overflow-hidden rounded-[18px] border-[1.5px] transition-colors",
                      picked
                        ? "border-brand-green bg-green-50/60"
                        : "border-brand-cream-border bg-white",
                    )}
                  >
                    <button
                      type="button"
                      onClick={() => setPickedOptionId(picked ? null : option.id)}
                      className="flex w-full items-start gap-3 px-4 pt-4 pb-3.5 text-left sm:px-6 sm:pt-6"
                    >
                      <span
                        className={cn(
                          "mt-0.5 flex size-5.5 shrink-0 items-center justify-center rounded-full border-2",
                          picked
                            ? "border-brand-green bg-brand-green text-white"
                            : "border-brand-cream-border bg-white",
                        )}
                      >
                        {picked && <Check className="size-3" strokeWidth={3} />}
                      </span>
                      <div className="min-w-0 flex-1">
                        <div className="mb-1 flex items-center gap-2">
                          <span className="font-mono text-[10px] tracking-wide text-gray-400 uppercase">
                            {option.eyebrow}
                          </span>
                          {picked && (
                            <span className="rounded bg-brand-green px-1.5 py-0.5 font-mono text-[9px] tracking-wide text-white uppercase">
                              Your Pick
                            </span>
                          )}
                        </div>
                        <div className="font-heading mb-1.5 text-2xl leading-none font-extrabold text-brand-teal uppercase sm:text-[28px]">
                          {option.title}
                        </div>
                        <div className="font-sans text-sm leading-relaxed text-gray-600">
                          {option.description}
                        </div>
                      </div>
                    </button>
                    <div className="h-[140px] border-t border-brand-cream-border sm:h-[180px]">
                      <RouteMapEmbed path={option.path} height="100%" startLabel="Start" />
                    </div>
                    <div className="flex gap-5 border-t border-brand-cream-border px-4 py-3 sm:px-6">
                      <div>
                        <div className="font-mono text-[9px] tracking-wide text-gray-400 uppercase">
                          Shape
                        </div>
                        <div className="font-sans text-sm font-semibold text-brand-teal">
                          {option.shape}
                        </div>
                      </div>
                      <div>
                        <div className="font-mono text-[9px] tracking-wide text-gray-400 uppercase">
                          Character
                        </div>
                        <div className="font-sans text-sm font-semibold text-brand-teal">
                          {option.character}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
            {pickedOptionId && (
              <div className="mx-auto w-full max-w-2xl">
                <RouteVoteCastForm optionId={pickedOptionId} onVoted={handleVoted} />
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
