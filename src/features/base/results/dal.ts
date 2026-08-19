import { httpClient } from "@/lib/http-client";
import type { ResultsInfo } from "./types";

export async function getResultsInfoFn(): Promise<ResultsInfo> {
  const { data } = await httpClient.get<ResultsInfo>("/results");
  return data;
}
