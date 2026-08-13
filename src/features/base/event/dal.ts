import { httpClient } from "@/lib/http-client";
import type { EventDetails } from "./types";

export async function getEventDetailsFn(): Promise<EventDetails> {
  const { data } = await httpClient.get<EventDetails>("/event");
  return data;
}
