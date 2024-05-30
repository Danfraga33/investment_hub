"use server";
import {
  getPortfolios,
  GetEPSSuprise,
  GetStockPrice,
  StockData,
} from "../../components/DashboardData";
import Insights from "@/app/components/DashboardComponents/DashboardPages/Insights";
import { Prisma } from "@prisma/client";
export type PortfolioWithStocks = Prisma.PortfolioGetPayload<{
  include: { stocks: true };
}>;
export type epsSupriseProps = {
  actual: number;
  estimate: number;
  period: string;
  quarter: number;
  surprise: number;
  surprisePercent: number;
  symbol: string;
  year: number;
};

const Page = async ({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) => {
  const collectionOfPortfolios = await getPortfolios();

  if (collectionOfPortfolios.length === 0) {
    return <p>No portofolio selected</p>;
  }
  const selectedPortfolio = collectionOfPortfolios.find(
    (portfolio) => portfolio.id === searchParams.p,
  );

  const selectedStock =
    selectedPortfolio?.stocks.find(
      (stocks) => stocks.stock.id === searchParams.s,
    )?.stock.id ?? collectionOfPortfolios[0].stocks[0].stock.symbol;

  const stockRes = await StockData();
  const price = await GetStockPrice(selectedStock);
  const currentPrice = price.c;
  const percentageChange = price.dp;

  const epsRes: epsSupriseProps[] = await GetEPSSuprise(selectedStock);
  const epsSuprise = epsRes[0];

  const stocksDB = await stockRes.json();
  return (
    <Insights
      epsSuprise={epsSuprise}
      percentageChange={percentageChange}
      currentPrice={currentPrice}
      stocksDB={stocksDB}
      collectionOfPortfolios={collectionOfPortfolios}
    />
  );
};

export default Page;
