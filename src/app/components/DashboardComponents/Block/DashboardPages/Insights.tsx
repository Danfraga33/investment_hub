"use client";
import { Prisma, StockDB } from "@prisma/client";
import { PanelLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetTrigger } from "@/components/ui/sheet";
import { SummaryData } from "../Summary";
import { StockList } from "../StockList";
import { Breadcrumbs } from "../Breadcrumbs";
import { epsSupriseProps } from "@/app/Dashboard/Insights/page";

export type DashboardProps = {
  collectionOfPortfolios: PortfolioWithStocks[];
};

export type PortfolioWithStocks = Prisma.PortfolioGetPayload<{
  include: { stocks: true };
}>;

const InsightsPage = ({
  collectionOfPortfolios,
  stocksDB,
}: {
  epsSuprise: epsSupriseProps;
  percentageChange: number;
  currentPrice: number;
  collectionOfPortfolios: PortfolioWithStocks[];
  stocksDB: StockDB[];
}) => {
  return (
    <div className="flex min-h-screen w-full flex-col bg-muted/40">
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
        <main className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8 lg:grid-cols-3 xl:grid-cols-3">
          <div className="grid auto-rows-max items-start gap-4 md:gap-8 lg:col-span-2">
            <SummaryData />
          </div>

          <StockList
            stocksDB={stocksDB}
            collectionOfPortfolios={collectionOfPortfolios}
          />
        </main>
      </div>
    </div>
  );
};

export default InsightsPage;
