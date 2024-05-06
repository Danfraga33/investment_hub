import { PortfolioWithStocks } from "@/app/Dashboard/Insights/page";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { TrendingDown, TrendingUp } from "lucide-react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import React from "react";
import { startTransition } from "react";

const PortfolioSelection = ({
  collectionOfPortfolios,
}: {
  collectionOfPortfolios: PortfolioWithStocks[];
}) => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const number = 1999;
  const options = { style: "currency", currency: "USD" };
  const totalReturnPerPortfolio = Intl.NumberFormat("en-US", options).format(
    number,
  );
  const extractedNumber = parseFloat(
    totalReturnPerPortfolio.replace(/[^\d,.-]/g, "").replace(",", ","),
  );

  function handlePortfolioSelection(portfolioId: string, stockId: string) {
    const updatedSearchParams = new URLSearchParams(searchParams);
    updatedSearchParams.set("p", portfolioId);
    updatedSearchParams.set("s", stockId);
    startTransition(() => {
      router.replace(`${pathname}?${updatedSearchParams.toString()}`);
    });
  }
  return (
    <Card x-chunk="dashboard-01-chunk-5">
      <CardHeader>
        <CardTitle>Select a Portfolio</CardTitle>
      </CardHeader>
      <CardContent className="grid gap-8">
        {collectionOfPortfolios.map((portfolio) => (
          <div key={portfolio.id} className="flex items-center gap-4">
            <div className="bg-gray-100 rounded-xl p-1">
              {extractedNumber > 0 ? (
                <TrendingUp color="green" />
              ) : (
                <TrendingDown />
              )}
            </div>
            <div className="">
              <Button
                className="flex flex-col items-center cursor-pointer justify-center"
                variant="outline"
                onClick={() => {
                  handlePortfolioSelection(
                    portfolio.id,
                    portfolio.stocks[0].id,
                  );
                }}
                asChild
              >
                <p className="text-sm font-medium leading-none pb-0.5">
                  {portfolio.name}
                </p>
              </Button>
              {portfolio.stocks.map((stock) => (
                <div key={stock.id}>
                  <p className="text-[10px] text-muted-foreground leading-tight">
                    {stock.name}
                  </p>
                </div>
              ))}
            </div>
            <div className="ml-auto font-medium">
              +{totalReturnPerPortfolio}
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
};

export default PortfolioSelection;
