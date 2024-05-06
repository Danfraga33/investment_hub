"use client";
// import MaxWidthWrapper from "./MaxWidthWrapper";
import Main from "./MainContent/MainContent";
import SideBar from "./SideBarDraft";
import { StocksTable } from "./StocksTable";
import { useSearchParams } from "next/navigation";
import { StockDB } from "@prisma/client";
import { PortfolioWithStocks } from "@/app/Dashboard/Insights/page";

export type DashboardProps = {
  collectionOfPortfolios: PortfolioWithStocks[];
};

export function DashboardDraft({
  collectionOfPortfolios,
  stocksDB,
}: {
  collectionOfPortfolios: PortfolioWithStocks[];
  stocksDB: StockDB;
}) {
  const searchParams = useSearchParams();
  const portfolioId = searchParams.get("p");

  const selectedPortfolio = collectionOfPortfolios.filter(
    (portfolio) => portfolio.id === portfolioId,
  )[0];

  return (
    <div className="grid grid-cols-4 gap-1 h-full">
      <div className="col-span-1 h-full">
        <SideBar collectionOfPortfolios={collectionOfPortfolios}>
          <StocksTable
            stocksDB={stocksDB}
            selectedPortfolio={selectedPortfolio}
          />
        </SideBar>
      </div>
      <div className="col-span-3 h-full">
        <Main />
      </div>
    </div>
  );
}
