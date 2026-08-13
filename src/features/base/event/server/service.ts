import "server-only";
import { STUB_EVENT_DETAILS } from "../stubs";
import type { EventDetails } from "../types";

export const EventService = {
  // TODO(db): replace with a query against the `events` table once the
  // managed database is wired up. Keep the return shape and method name
  // stable so the route handler and its callers don't need to change.
  async getEventDetails(): Promise<EventDetails> {
    return STUB_EVENT_DETAILS;
  },
};
