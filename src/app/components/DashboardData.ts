"use server";
import { db } from "@/lib/db";
import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";
const prisma = new PrismaClient();
export async function DashboardData() {
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

export async function Simple(
  portfolioId: string,
  symbol: string,
  name: string,
) {
  await prisma.stock.create({
    data: {
      name,
      symbol,
      portfolioId,
    },
  });
}

export async function StockData() {
  try {
    const data = await db.stockDB.findMany({
      take: 15,
    });
    return NextResponse.json(data);
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Failed to fetch data" });
  }
}

export async function NewsData() {
  try {
    const res = await fetch(
      `https://finnhub.io/api/v1/news?category=general&token=${process.env.FINNHUB_API_KEY}`,
    );
    const data = await res.json();
    return data;
  } catch (error) {
    throw new Error(`Failed to fetch`);
  }
}
export async function CompanyNews(symbol: string) {
  try {
    const res = await fetch(
      `https://finnhub.io/api/v1/company-news?symbol=${symbol}&from=2024-01-01&to=2025-08-20&token=${process.env.FINNHUB_API_KEY}`,
    );
    const data = await res.json();
    return data;
  } catch (error) {
    throw new Error(`Failed to fetch`);
  }
}

export async function GetStockPrice(stockSymbol: string) {
  try {
    const res = await fetch(
      `https://finnhub.io/api/v1/quote?symbol=${stockSymbol}&token=${process.env.FINNHUB_API_KEY}`,
    );
    const data = await res.json();
    return data;
  } catch (error) {
    throw new Error(`Failed to fetch`);
  }
}
export async function GetEPSSuprise(stockSymbol: string) {
  try {
    const res = await fetch(
      `https://finnhub.io/api/v1/stock/earnings?symbol=${stockSymbol}&token=${process.env.FINNHUB_API_KEY}`,
    );
    const data = await res.json();
    return data;
  } catch (error) {
    throw new Error(`Failed to fetch`);
  }
}
