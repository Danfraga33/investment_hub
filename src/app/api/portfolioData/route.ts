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
export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { portfolioId, name, symbol } = body;
    if (!portfolioId || !name || !symbol) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 },
      );
    }
    const data = await db.stock.create({
      data: {
        name,
        symbol,
        portfolioId,
      },
    });
    return NextResponse.json(data);
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Failed to fetch data" });
  }
}
