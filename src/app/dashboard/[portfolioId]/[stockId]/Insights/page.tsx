"use server";
import {
  GetEPSSuprise,
  GetStockPrice,
  getPortfolio,
} from "../../../../components/DashboardData";
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
  params,
}: {
  params: { portfolioid: string; stockId: string };
}) => {
  console.log(params);
  const selectedPortfolio = await getPortfolio(params.portfolioid);
  const selectedStock = selectedPortfolio?.stocks.find(
    (stock) => stock.stock.id === params.stockId,
  );
  const price = await GetStockPrice(selectedStock?.stock.symbol ?? "");
  const currentPrice = price.c;
  const percentageChange = price.dp;

  const epsRes: epsSupriseProps[] = await GetEPSSuprise(
    selectedStock?.stock.symbol ?? "",
  );
  const epsSuprise = epsRes[0];

  return (
    <Insights
      epsSuprise={epsSuprise}
      percentageChange={percentageChange}
      currentPrice={currentPrice}
    />
  );
};

export default Page;
