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

export async function AddStock(
  portfolioId: string,
  name: string,
  symbol: string,
) {
  const res = await fetch(
    `https://finnhub.io/api/v1/quote?symbol=${symbol}&token=${process.env.FINNHUB_API_KEY}`,
  );
  const data = await res.json();
  /////////
  const profile = await fetch(
    `https://finnhub.io/api/v1/stock/profile2?symbol=${symbol}&token=${process.env.FINNHUB_API_KEY}`,
  );
  const profileData = await profile.json();
  console.log(profileData);

  await prisma.stock.create({
    data: {
      name,
      symbol,
      portfolioId,
      last: data.c,
      percentageChange: data.dp,
      logo: profileData.logo,
    },
  });
}
export async function DeleteStock(
  portfolioId: string,
  name: string,
  symbol: string,
) {
  await prisma.stock.delete({
    where: {
      name,
      symbol,
      portfolioId,
    },
  });
}
export async function AddPortfolio(name: string, userId: string) {
  console.log(name, userId);
  await prisma.portfolio.create({
    data: {
      name,
      userId,
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
