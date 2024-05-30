"use client";

import { CompanyNewsProps } from "./DashboardPages/Overview";
import { useSearchParams } from "next/navigation";
import { PortfolioWithStocks } from "@/app/Dashboard/Insights/page";
import { NewsPageProps } from "@/app/Dashboard/page";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";

const CompanyNewsComponent = ({
  companyNews,
  collectionOfPortfolios,
  newsData,
}: {
  newsData: NewsPageProps;
  collectionOfPortfolios: PortfolioWithStocks[];
  companyNews: CompanyNewsProps[];
}) => {
  const searchParams = useSearchParams();
  const portfolioParams = searchParams.get("p");
  const stockParams = searchParams.get("s");

  const selectedPortfolio = collectionOfPortfolios?.find(
    (portfolio) => portfolio.id === portfolioParams,
  );
  const selectedStock = selectedPortfolio?.stocks?.find(
    (stock) => stock.symbol === stockParams,
  );

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1 grid gap-8">
        <div>
          <Card>
            {companyNews.map((article) => (
              <CardContent key={article.id}>
                <div className="grid gap-4">
                  <div className="grid grid-cols-[100px_1fr] gap-4">
                    <img
                      alt="News Thumbnail"
                      className="rounded-lg object-cover"
                      height="100"
                      src={article.image}
                      style={{
                        aspectRatio: "100/100",
                        objectFit: "cover",
                      }}
                      width="100"
                    />
                    <div className="grid gap-1">
                      <Link
                        className="text-sm font-medium hover:underline"
                        href={article.url}
                      >
                        {article.headline}
                      </Link>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        {article.summary}
                      </p>
                      <Link
                        className="text-sm font-medium text-blue-500 hover:underline"
                        href={article.url}
                      >
                        Read More
                      </Link>
                    </div>
                  </div>
                </div>
              </CardContent>
            ))}
          </Card>
        </div>
      </main>
    </div>
  );
};

export default CompanyNewsComponent;
