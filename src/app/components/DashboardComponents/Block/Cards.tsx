"use client";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useSearchParams } from "next/navigation";
import { Skeleton } from "@/components/ui/skeleton";
import {
  PortfolioWithStocks,
  epsSupriseProps,
} from "@/app/Dashboard/Insights/page";
export const Cards = ({
  collectionOfPortfolios = [],
  currentPrice,
  percentageChange,
  epsSuprise,
}: {
  epsSuprise: epsSupriseProps;
  percentageChange: number;
  currentPrice: number;
  collectionOfPortfolios: PortfolioWithStocks[];
}) => {
  const searchParams = useSearchParams();
  const portfolioIdParams = searchParams.get("p");
  let stockIdParams = searchParams.get("s");
  let selectedPortfolio = collectionOfPortfolios?.find(
    (portfolio) => portfolio.id === portfolioIdParams,
  );
  if (!selectedPortfolio) selectedPortfolio = collectionOfPortfolios[0];

  const selectedStock =
    selectedPortfolio?.stocks.find((stock) => stock.id === stockIdParams) ??
    collectionOfPortfolios[0].stocks[0];

  return (
    <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4">
      <Card className="sm:col-span-2" x-chunk="dashboard-05-chunk-0">
        {selectedStock ? (
          <CardHeader className="pb-3">
            <CardTitle>
              {selectedStock.name} {selectedStock.symbol}
            </CardTitle>
            <CardDescription className="max-w-lg text-balance leading-relaxed">
              Apple is a technology company specializing in consumer
              electronics, software, and digital services, generating revenue
              from iPhone, iPad, MacBook, and related services.
            </CardDescription>
          </CardHeader>
        ) : (
          <>
            <div className="h-full flex items-center space-x-4 w-full">
              <div className="space-y-2 p-4">
                <Skeleton className="h-10 w-[250px]" />
                <Skeleton className="h-4 w-[400px]" />
                <Skeleton className="h-4 w-[400px]" />
                <Skeleton className="h-4 w-[400px]" />
              </div>
            </div>
          </>
        )}
      </Card>
      <Card x-chunk="dashboard-05-chunk-1">
        <CardHeader className="pb-2">
          <CardDescription>Current Price</CardDescription>
          <CardTitle className="text-4xl">
            {currentPrice ? (
              `$${currentPrice.toFixed(2)}`
            ) : (
              <Skeleton className="h-10 w-20" />
            )}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-xs text-muted-foreground">
            {percentageChange ? (
              <div className="flex">
                <h1 className="font-medium">{percentageChange.toFixed(2)}</h1>%
                from yesterday
              </div>
            ) : (
              <Skeleton className="w-2 h-2" />
            )}
          </div>
        </CardContent>
      </Card>
      <Card x-chunk="dashboard-05-chunk-2">
        <CardHeader className="pb-2">
          <CardDescription>EPS Suprise</CardDescription>
          <CardTitle className="text-4xl">
            ${epsSuprise ? epsSuprise.actual : <Skeleton className="h-4 w-8" />}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-xs text-muted-foreground">
            {epsSuprise ? (
              <div className="flex">
                <h1>Suprise: </h1>
                <h1 className="font-medium">
                  {" "}
                  {epsSuprise.surprisePercent.toFixed(2)}
                </h1>
                %
              </div>
            ) : (
              <Skeleton className="h-4 w-8" />
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
