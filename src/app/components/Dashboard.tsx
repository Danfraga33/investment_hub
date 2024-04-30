"use client";
// import MaxWidthWrapper from "./MaxWidthWrapper";
import Main from "./DashboardComponents/MainContent/MainContent";
import SideBar from "./DashboardComponents/SideBar";
import { PortfolioWithStocks } from "@/app/dashboard/page";

export type DashboardProps = {
  collectionOfPortfolios: PortfolioWithStocks[];
};
export default function Dashboard({ collectionOfPortfolios }: DashboardProps) {
  return (
    <div className="grid grid-cols-4 gap-1 h-full">
      <div className="col-span-1 h-full">
        <SideBar collectionOfPortfolios={collectionOfPortfolios} />
      </div>
      <div className="col-span-3 h-full">
        <Main />
      </div>
    </div>
  );
}
