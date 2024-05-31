"use client";
import { Button } from "@/components/ui/button";
import {
  ActivityIcon,
  CreditCardIcon,
  DollarSignIcon,
  UsersIcon,
} from "lucide-react";
// import { PortfolioWithStocks } from "./Insights";
// import { NewsPageProps } from "@/app/Dashboard/page";
// import { StockList } from "../StockList";
import { epsSupriseProps } from "@/app/Dashboard/[portfolioId]/[stockId]/Insights/page";
// import { StockDB } from "@prisma/client";
import CompanyNewsComponent from "../CompanyNews";
import { AddStock, Portfolios } from "../../DashboardData";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

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
  selectedPortfolio,
  companyNews,
  epsSuprise,
  percentageChange,
  currentPrice,
}: {
  epsSuprise: epsSupriseProps;
  percentageChange: number;
  currentPrice: number;
  selectedPortfolio: Portfolios;
  companyNews: CompanyNewsProps[];
}) => {
  return (
    <div className="flex min-h-screen w-full flex-col bg-muted/40 sm:gap-4 sm:py-4 sm:pl-14">
      <main className="flex-1 grid gap-8 p-4 md:p-10">
        <Button
          onClick={() =>
            AddStock("clws67wnn0000vqcmpydqnk68", "RIO TINTO", "RIO")
          }
        >
          BUTTON
        </Button>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">EPS suprise</CardTitle>
              <DollarSignIcon className="w-4 h-4 text-gray-500 dark:text-gray-400" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">
                {epsSuprise.actual.toFixed(2)}
              </div>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                Estimate: {epsSuprise.estimate}
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">
                Percentage Change
              </CardTitle>
              <UsersIcon className="w-4 h-4 text-gray-500 dark:text-gray-400" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">
                {percentageChange.toFixed(2)}%
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">
                Current Price
              </CardTitle>
              <CreditCardIcon className="w-4 h-4 text-gray-500 dark:text-gray-400" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">${currentPrice}</div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Market Cap</CardTitle>
              <ActivityIcon className="w-4 h-4 text-gray-500 dark:text-gray-400" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">1.100M</div>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                Placeholder
              </p>
            </CardContent>
          </Card>
        </div>
        <div>
          <Card>
            <CardHeader>
              <CardTitle>Latest News</CardTitle>
              <CardDescription>
                Check out the latest updates and announcements from Acme Inc.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4">
                <CompanyNewsComponent
                  selectedPortfolio={selectedPortfolio}
                  companyNews={companyNews}
                />
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default OverviewPage;
