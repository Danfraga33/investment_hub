"use client";
import { Button } from "@/components/ui/button";
import { Sheet, SheetTrigger } from "@/components/ui/sheet";
import { Breadcrumbs } from "@/app/components/DashboardComponents/Breadcrumbs";
import { PanelLeft } from "lucide-react";
import { PortfolioWithStocks } from "./Insights";
import { NewsPageProps } from "@/app/Dashboard/page";
import { StockList } from "../StockList";
import { epsSupriseProps } from "@/app/Dashboard/Insights/page";
import { StockDB } from "@prisma/client";
import { Cards } from "../Cards";
import CompanyNewsComponent from "../CompanyNews";

export type CompanyNewsProps = {
  category: string;
  datetime: number;
  headline: string;
  id: number;
  image: string;
  related: string;
  source: string;
  summary: string;
  url: string;
};

const OverviewPage = ({
  collectionOfPortfolios,
  companyNews,
  stocksDB,
  epsSuprise,
  percentageChange,
  currentPrice,
  newsData,
}: {
  epsSuprise: epsSupriseProps;
  percentageChange: number;
  currentPrice: number;
  collectionOfPortfolios: PortfolioWithStocks[];
  stocksDB: StockDB[];
  companyNews: CompanyNewsProps[];
  newsData: NewsPageProps;
}) => {
  return (
    <div className="flex min-h-screen w-full flex-col bg-muted/40 ">
      <div className="flex flex-col sm:gap-4 sm:py-4 sm:pl-14">
        <header className="sticky top-0 z-30 flex h-14 items-center gap-4 border-b bg-background px-4 sm:static sm:h-auto sm:border-0 sm:bg-transparent sm:px-6">
          <Sheet>
            <SheetTrigger asChild>
              <Button size="icon" variant="outline" className="sm:hidden">
                <PanelLeft className="h-5 w-5" />
                <span className="sr-only">Toggle Menu</span>
              </Button>
            </SheetTrigger>
          </Sheet>

          <Breadcrumbs />
        </header>
        <main className="grid flex-1 items-start gap-2 p-4 sm:px-6 sm:py-0 md:gap-2 lg:grid-cols-4 xl:grid-cols-4 w-full">
          <div className="grid auto-rows-max items-start gap-4 md:gap-2 lg:col-span-3 h-screen">
            <Cards
              epsSuprise={epsSuprise}
              percentageChange={percentageChange}
              currentPrice={currentPrice}
              collectionOfPortfolios={collectionOfPortfolios}
            />
            <CompanyNewsComponent
              newsData={newsData}
              collectionOfPortfolios={collectionOfPortfolios}
              companyNews={companyNews}
            />
          </div>
          <div>
            {/* <StockList
              percentageChange={percentageChange}
              currentPrice={currentPrice}
              collectionOfPortfolios={collectionOfPortfolios}
              stocksDB={stocksDB}
            /> */}
          </div>
        </main>
      </div>
    </div>
  );
};

export default OverviewPage;
