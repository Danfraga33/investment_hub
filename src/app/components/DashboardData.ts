"use server";
const prisma = new PrismaClient();
import { db } from "@/lib/db";

import { PrismaClient } from "@prisma/client";

import { NextResponse } from "next/server";

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
  console.log("PROFLE", profileData);

  await prisma.stock.create({
    data: {
      name,
      symbol,
      portfolioId,
      last: data.c,
      // marketCapitalization: profileData.marketCapitalization,
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

export async function getFinancialsPastFiveYears(symbol: string) {
  try {
    const today = new Date();
    const to = today.toISOString().split("T")[0]; // Current date
    const from = new Date(
      today.getFullYear() - 5,
      today.getMonth(),
      today.getDate(),
    )
      .toISOString()
      .split("T")[0]; // Date 5 years ago

    const url = `https://finnhub.io/api/v1/stock/financials-reported?symbol=${symbol}&token=${process.env.FINNHUB_API_KEY}&from=${from}&to=${to}`;
    const response = await fetch(url);
    const data = await response.json();

    if (data && data.data) {
      type NetSalesData = {
        year: number;
        netSalesValue: number;
      };
      const netSales: NetSalesData[] = [];
      data.data.forEach((item) => {
        // Find the line item corresponding to net sales
        const incomeStatement = item.report.ic;
        const netSalesItem = incomeStatement[0];
        if (netSalesItem) {
          const netSalesValue = netSalesItem.value;
          const year = item.year;

          netSales.push({
            year,
            netSalesValue,
          });
        }
      });
    } else {
      throw new Error("No data found");
    }
  } catch (error: unknown) {
    error instanceof Error
      ? console.error("Error fetching financial data:", error.message)
      : console.error("Unknown error occurred while fetching financial data");
  }
  return null;
}
getFinancialsPastFiveYears("BFH");
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

// export async function GetYieldData() {
//   const res = await fetch(
//     "https://home.treasury.gov/sites/default/files/interest-rates/yield.xml",
//   );
//   const xmlData = await res.text();
//   const parser = new xml2js.Parser({ explicitArray: false });
//   const jsonData = await parser.parseStringPromise(xmlData);

//   const may10Data =
//     jsonData.QR_BC_CM.LIST_G_WEEK_OF_MONTH.G_WEEK_OF_MONTH.filter((week) =>
//       week.LIST_G_NEW_DATE.G_NEW_DATE.find(
//         (date) => date.NEW_DATE === "05-10-2024",
//       ),
//     );

//   const recentData = may10Data[0].LIST_G_NEW_DATE.G_NEW_DATE.filter(
//     (data) => data.BID_CURVE_DATE == "10-MAY-24",
//   )[0].LIST_G_BC_CAT;

//   console.log(recentData);
// }
