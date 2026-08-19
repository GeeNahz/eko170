"use client";

import { useQuery } from "@tanstack/react-query";
import { RESULTS_QUERY_KEYS } from "../constants";
import { getResultsInfoFn } from "../dal";

export function useGetResultsInfo() {
  return useQuery({
    queryKey: RESULTS_QUERY_KEYS.info,
    queryFn: getResultsInfoFn,
    staleTime: 5 * 60 * 1000,
  });
}
