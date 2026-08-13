"use client";

import { useQuery } from "@tanstack/react-query";
import { EVENT_QUERY_KEYS } from "../constants";
import { getEventDetailsFn } from "../dal";

export function useGetEventDetails() {
  return useQuery({
    queryKey: EVENT_QUERY_KEYS.details,
    queryFn: getEventDetailsFn,
    staleTime: 5 * 60 * 1000,
  });
}
