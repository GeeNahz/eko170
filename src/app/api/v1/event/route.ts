import { NextResponse } from "next/server";
import { EventService } from "@/features/base/event/server/service";

export async function GET() {
  const event = await EventService.getEventDetails();
  return NextResponse.json(event);
}
