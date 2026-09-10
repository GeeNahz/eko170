"use client";

import { VOTE_STORAGE_KEY } from "../constants";

// Minimal external store for the "have I voted" flag, read via
// useSyncExternalStore in route-vote-section.tsx. This avoids the
// read-localStorage-in-an-effect pattern (which either mismatches SSR
// output or trips the set-state-in-effect lint rule) — useSyncExternalStore
// is the React-sanctioned way to read a browser-only external source
// without either problem.
let listeners: (() => void)[] = [];

export function getVotedOptionId(): string | null {
  if (typeof window === "undefined") return null;
  try {
    return window.localStorage.getItem(VOTE_STORAGE_KEY);
  } catch {
    return null;
  }
}

export function getServerVotedOptionId(): null {
  return null;
}

export function setVotedOptionId(optionId: string | null): void {
  try {
    if (optionId) {
      window.localStorage.setItem(VOTE_STORAGE_KEY, optionId);
    } else {
      window.localStorage.removeItem(VOTE_STORAGE_KEY);
    }
  } catch {
    // best-effort only — a failed write just means the picker reappears
  }
  for (const listener of listeners) listener();
}

export function subscribeVotedOptionId(callback: () => void): () => void {
  listeners.push(callback);
  return () => {
    listeners = listeners.filter((l) => l !== callback);
  };
}
