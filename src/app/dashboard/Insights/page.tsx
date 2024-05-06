import {
  DashboardData,
  GetEPSSuprise,
  GetStockPrice,
  StockData,
} from "../../components/DashboardData";
import Insights from "@/app/components/DashboardComponents/Block/DashboardPages/Insights";
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
  const res = await DashboardData();
  const collectionOfPortfolios: PortfolioWithStocks[] = await res.json();
  const selectedPortfolio = collectionOfPortfolios?.find(
    (portfolio) => portfolio.id === searchParams.p,
  );
  const selectedStock = selectedPortfolio?.stocks.find(
    (stock) => stock.id === searchParams.s,
  )?.symbol;

  const stockRes = await StockData();
  const price = await GetStockPrice(selectedStock);
  const currentPrice = price.c;
  const percentageChange = price.dp;

  const epsRes: epsSupriseProps[] = await GetEPSSuprise(selectedStock);
  const epsSuprise = epsRes[0];

  // if (stockRes) {
  //   //////////
  // }

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
