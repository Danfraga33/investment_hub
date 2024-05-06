"use client";
import { Eye } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Skeleton } from "@/components/ui/skeleton";
import { Separator } from "@/components/ui/separator";
import { CompanyNewsProps } from "./DashboardPages/Overview";
import { useSearchParams } from "next/navigation";
import { PortfolioWithStocks } from "@/app/Dashboard/Insights/page";
import { startTransition } from "react";
const CompanyNewsComponent = ({
  companyNews,
  collectionOfPortfolios,
}: {
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

  //////

  function translateTime(timeInSeconds: number) {
    const datetimeInMillis = timeInSeconds * 1000;
    const isoDate = new Date(datetimeInMillis).toISOString();
    const datePart = isoDate.split("T")[0];
    return datePart;
  }
  return (
    <div>
      <Card className="xl:col-span-2 " x-chunk="dashboard-01-chunk-4 ">
        <CardHeader className="flex flex-row items-center">
          <div className="grid gap-2">
            <CardTitle>Top News</CardTitle>
            <CardDescription>
              Top Articles of current market news
            </CardDescription>
          </div>
        </CardHeader>
        <CardContent className="overflow-x-scroll max-h-screen">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Source</TableHead>
                <TableHead>Article </TableHead>
                <TableHead>Date</TableHead>
                <TableHead>Link</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {companyNews.map((article) => (
                <>
                  <TableRow key={article.id.toString()}>
                    <TableCell id="articleSource">{article.source}</TableCell>
                    <TableCell id="articleName" className="w-full">
                      <h1 className="text-lg leading-snug hover:text-green-500">
                        {article.headline}
                      </h1>
                      <h3 className="hidden sm:block sm:text-xs">
                        {article.summary}
                      </h3>
                    </TableCell>
                    <TableCell id="articleDate">
                      {translateTime(article.datetime)}
                    </TableCell>
                    <TableCell id="articleLink" className="hover:text-red-500">
                      <Button variant="outline" asChild>
                        <a
                          target="_blank"
                          rel="noopener noreferrer"
                          href={article.url}
                        >
                          <Eye color="green" size={22} />
                        </a>
                      </Button>
                    </TableCell>
                  </TableRow>
                </>
              ))}
            </TableBody>
            <TableBody>
              <TableRow>
                <TableCell id="articleSource">
                  <Skeleton className="h-6 w-3/4" />
                </TableCell>
                <TableCell id="articleTitle">
                  <div className="mb-2">
                    <Skeleton className="h-4 w-1/2" />
                    <Skeleton className="h-4 w-[8rem] my-1" />
                  </div>
                  <Skeleton className="h-4 w-full my-1" />
                  <Skeleton className="h-4 w-full my-1" />
                  <Separator />
                </TableCell>
                <TableCell className="text-right">
                  <Skeleton className="h-4 w-full my-1" />
                  <Skeleton className="h-4 w-full" />
                </TableCell>
                <TableCell className="text-right">
                  <Button disabled>
                    <Eye />
                  </Button>
                </TableCell>
              </TableRow>
            </TableBody>
            <TableBody>
              <TableRow>
                <TableCell id="article">
                  <div className="mb-2">
                    <Skeleton className="h-6 w-1/2 my-1" />
                    <Skeleton className="h-4 w-[8rem] my-1" />
                  </div>
                  <Skeleton className="h-4 w-full my-1" />
                  <Skeleton className="h-4 w-full my-1" />
                  <Separator />
                </TableCell>
                <TableCell className="text-right">
                  {new Date().toDateString()}
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
};

export default CompanyNewsComponent;
