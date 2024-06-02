"use server";
const prisma = new PrismaClient();
import { db } from "@/lib/db";

import { PrismaClient } from "@prisma/client";

import { NextResponse } from "next/server";

/**
 * Get all the portfolios
 * @returns {Portfolios} Collections of portfolios
 */
export async function getAllPortfolios(userId: string) {
  // TODO: Protect by checking user
  return await db.portfolio.findMany({
    where: {
      userId,
    },
    select: {
      name: true,
      id: true,
      stocks: {
        select: {
          stock: {
            select: {
              id: true,
              industry: true,
              symbol: true,
              percentageChange: true,
              logo: true,
              exchange: true,
              last: true,
              marketCapitalization: true,
              name: true,
            },
          },
        },
      },
    },
  });
}

export async function getPortfolio(userId: string) {
  /** @todo Protect by checking user */
  // This is excessive, you are drilling down just for the stock information.
  return await db.portfolio.findFirst({
    where: {
      userId,
    },
    select: {
      name: true,
      id: true,
      stocks: {
        select: {
          stock: {
            select: {
              id: true,
              industry: true,
              symbol: true,
              percentageChange: true,
              logo: true,
              exchange: true,
              last: true,
              marketCapitalization: true,
              name: true,
              updatedAt: true,
              createdAt: true,
            },
          },
        },
      },
    },
  });
}

export type Portfolios = Awaited<ReturnType<typeof getPortfolio>>;

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

  const stock = await prisma.stock.update({
    where: {
      symbol: symbol,
    },
    data: {
      last: data.c,
      percentageChange: data.dp,
      logo: profileData.logo,
      industry: profileData.finnhubIndustry,
      marketCapitalization: profileData.marketCapitalization,
    },
  });

  await prisma.stocksInPortfolio.create({
    data: {
      portfolioId,
      stockId: stock.id,
    },
  });
}

export async function DeleteStock(portfolioId: string, stockId: string) {
  await prisma.stocksInPortfolio.delete({
    where: {
      portfolioId,
      stockId,
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
    const data = await db.stock.findMany({
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

      type financialData = {
        report: {
          ic: {
            concept: string;
            unit: string;
            label: string;
            value: number;
          };
        };
        year: number;
      };

      const netSales: NetSalesData[] = [];
      data.data.forEach((item: financialData) => {
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

    return await res.json();
  } catch (error) {
    throw new Error(`Failed to fetch`);
  }
}
export async function GetEPSSuprise(stockSymbol: string) {
  try {
    const res = await fetch(
      `https://finnhub.io/api/v1/stock/earnings?symbol=${stockSymbol}&token=${process.env.FINNHUB_API_KEY}`,
    );
    return await res.json();
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

// }
