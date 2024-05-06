import { Prisma } from "@prisma/client";
import { DashboardData, StockData } from "../../DashboardData";
import { Dashboard } from "./Dashboard";
import { PortfolioWithStocks } from "@/app/Dashboard/Insights/page";

const Page = async () => {
  const res = await DashboardData();
  const collectionOfPortfolios: PortfolioWithStocks[] = await res.json();
  const stockRes = await StockData();
  if (stockRes) {
    //////////
  }

  const stocksDB = await stockRes.json();

  return (
    <Dashboard
      stocksDB={stocksDB}
      collectionOfPortfolios={collectionOfPortfolios}
    />
  );
};

export default Page;
