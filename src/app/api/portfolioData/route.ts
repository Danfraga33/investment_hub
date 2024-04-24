import { db } from "@/lib/db";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const data = await db.portfolio.findMany({
      include: {
        user: true,
        stocks: true,
      },
    });
    return NextResponse.json(data);
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Failed to fetch data" });
  }
}
