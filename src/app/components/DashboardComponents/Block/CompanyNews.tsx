"use client";

import { CompanyNewsProps } from "./DashboardPages/Overview";
import { useSearchParams } from "next/navigation";
import { PortfolioWithStocks } from "@/app/Dashboard/Insights/page";
import { NewsPageProps } from "@/app/Dashboard/page";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { MenuIcon, NewspaperIcon } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

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
    (stock) => stock.id === stockParams,
  );

  console.log(companyNews[0].image);

  return (
    <>
      <div className="grid grid-cols-12 grid-rows-10 gap-0 h-screen">
        <div className="col-start-1 col-end-4 overflow-scroll h-full row-start-1 row-end-11">
          {newsData.map((article) => (
            <main className="py-2 md:px-2 " key={article.id}>
              <div className="flex flex-cols gap-2">
                <div className="bg-white rounded-lg shadow-md overflow-hidden">
                  <div className="py-1.5 px-3">
                    <h3 className="text-xl font-bold mb-2">
                      <a href="">{article.headline} </a>
                    </h3>
                    <p
                      className="text-gray-600 mb-2    text-ellipsis 
                    whitespace-nowrap 
                    md:whitespace-normal 
                    md:max-h-[3em] 
                    md:overflow-hidden 
                    md:text-ellipsis
                    md:line-clamp-2"
                    >
                      {article.summary}
                    </p>
                  </div>
                </div>
              </div>
            </main>
          ))}
        </div>
        <div className="col-start-4 col-end-13 row-start-1 row-end-11 h-full">
          <div className="flex flex-col">
            <div className="space-y-6">
              <div className="relative h-[400px] overflow-hidden rounded-xl border">
                <img
                  alt="Featured Article"
                  className="h-full w-full object-cover"
                  height={400}
                  src={
                    companyNews[0].image !== ""
                      ? companyNews[0].image
                      : "/defaultHeader.jpg"
                  }
                  width={100}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent p-6 sm:p-8 md:p-12">
                  <div className="flex h-full flex-col justify-end space-y-4">
                    <div className="rounded-md bg-gray-900/60 px-3 py-1 text-xs font-medium text-gray-50">
                      {companyNews[0].source}
                    </div>
                    <h2 className="text-2xl font-bold tracking-tight text-gray-50 sm:text-3xl md:text-4xl">
                      {companyNews[0].headline}
                    </h2>
                    <p className="text-gray-300 md:text-lg">
                      {companyNews[0].summary}
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col h-screen w-full gap-2 overflow-scroll ">
                {companyNews.map((article) => {
                  const unixTimestamp = article.datetime;
                  const targetTime = new Date(unixTimestamp * 1000);
                  const currentTime = new Date();
                  const timeDifference = targetTime - currentTime;
                  console.log(article.summary.length);

                  const days = Math.abs(
                    Math.floor(timeDifference / (1000 * 60 * 60 * 24)),
                  );
                  let readableDifference = `${days} day ago`;
                  return (
                    <Card
                      className="w-full rounded-lg shadow-md border border-gray-200 dark:border-gray-700"
                      key={article.id}
                    >
                      <CardContent className="hover:shadow-md hover:transition-all hover:duration-200 p-4 flex gap-4">
                        <a
                          href={article.url}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <div className="flex-1 space-y-2">
                            <div className="flex items-center gap-2">
                              <div className="font-medium">
                                {article.source}
                              </div>
                              <div className="text-gray-500 dark:text-gray-400">
                                @{article.source.toLowerCase()}
                              </div>
                              <div className="text-gray-500 dark:text-gray-400 ml-auto text-sm">
                                {readableDifference}
                              </div>
                            </div>
                            <p>
                              {article.summary.length > 100
                                ? article.summary
                                : article.headline}
                            </p>
                          </div>
                          <div className="flex flex-col items-center py-2  rounded-4xl">
                            <img
                              src={
                                article.image !== ""
                                  ? article.image
                                  : "/defaultHeader.jpg"
                              }
                              className="rounded-2xl aspect-auto"
                            />
                          </div>
                        </a>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CompanyNewsComponent;
