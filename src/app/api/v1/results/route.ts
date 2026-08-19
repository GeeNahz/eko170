import { NextResponse } from "next/server";
import { ResultsService } from "@/features/base/results/server/service";

export async function GET() {
  const results = await ResultsService.getResultsInfo();
  return NextResponse.json(results);
}
