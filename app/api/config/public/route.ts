import { logger } from "@/lib/logger";
import { NextResponse } from "next/server";
import { createPublicRoute } from "@/lib/api-middleware";
import { getPublicAppConfig } from "@/lib/app-config";
export const dynamic = "force-dynamic";

export const GET = createPublicRoute(
  async () => {
    try {
      const config = await getPublicAppConfig();
      return NextResponse.json(config);
    } catch (error) {
  console.error("FULL ERROR:", error);

  if (error instanceof Error) {
    console.error(error.stack);
  }

  return NextResponse.json(
    {
      error: error instanceof Error ? error.message : String(error),
    },
    { status: 500 },
  );
}
  },
  { rateLimit: false },
);
