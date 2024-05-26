import { Card } from "@/components/ui/card";
import MaxWidthWrapper from "../components/MaxWidthWrapper";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import {
  CreditCardIcon,
  Crown,
  PieChart,
  ShieldAlert,
  Sparkles,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table";
import { DashboardData } from "../components/DashboardData";
import { cn } from "@/lib/utils";
import Image from "next/image";

const Holdings = async () => {
  const Portfolio = await DashboardData();
  const PortfolioData = await Portfolio.json();
  const DPortfolio = PortfolioData.find(
    (portfolio) => portfolio.name === "Defensive",
  );

  const topStock = DPortfolio.stocks.reduce(
    (max, stock) =>
      stock.percentageChange > max.percentageChange ? stock : max,
    DPortfolio.stocks[0],
  );

  return (
    <div className="h-screen flex flex-col">
      <MaxWidthWrapper>
        <section className="bg-white rounded-xl p-6 shadow-md sm:gap-4 sm:py-4 sm:pl-14 px-4">
          <div className="flex justify-between items-center mb-6">
            <div className="flex flex-col gap-2 py-6">
              <p className="text-xs">Portfolio Performance</p>
              <div className="flex gap-4 items-end">
                <h2 className="text-4xl font-semibold text-[#14142B]">
                  +7.22%
                </h2>
              </div>
            </div>
            <div className="flex space-x-2">
              <Button variant="secondary">Edit Portfolio</Button>
            </div>
          </div>
          <div className="flex items-center gap-2 pb-4">
            <Sparkles />
            <p className="text-xl tracking-tight">Overview</p>
          </div>

          <div className="grid grid-cols-3 gap-6 mb-8">
            <Card className="bg-[#EFF0F7] gap-1 p-4 rounded-lg">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <ShieldAlert color="#911111" />
                  <Badge variant="secondary" className="cursor-default">
                    -2.1%
                  </Badge>
                </div>
                <div>
                  <span className="text-lg align-bottom font-semibold">
                    4.5
                  </span>
                  <p className="text-sm text-[#6E7191]">Volatilty Index</p>
                </div>
              </div>
            </Card>
            <Card className="bg-[#EFF0F7] p-4 rounded-lg">
              <div className="flex items-center justify-between mb-4">
                <Crown color="#E3D206" />
                <Badge
                  variant="secondary"
                  className={cn("font-semibold text-right cursor-default  ", {
                    "bg-green-300": Number(topStock.percentageChange) > 0,
                    "bg-red-300": Number(topStock.percentageChange) < 0,
                  })}
                >
                  {Number(topStock.percentageChange).toFixed(2)}%
                </Badge>
              </div>
              <div>
                <p className="text-lg text-[#14142B] font-semibold">
                  {topStock.symbol}
                </p>
                <p className="text-sm text-[#6E7191]">Top Performing Stock</p>
              </div>
            </Card>
            <Card className="bg-[#EFF0F7] p-4 rounded-lg">
              <div className="flex items-center justify-between mb-4">
                <PieChart color="#0665AB" />
                <Badge
                  variant="secondary"
                  className={cn("font-semibold cursor-default")}
                >
                  -2.1%
                </Badge>
              </div>
              <div>
                <p className="text-lg text-[#14142B]">Technology</p>
                <p className="text-sm text-[#6E7191]">
                  Top Performing Industry
                </p>
              </div>
            </Card>
          </div>

          <section>
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold text-[#14142B]">
                Portfolio
              </h3>
              <Link
                className="text-sm text-[#6E7191] hover:text-[#14142B]"
                href="#"
              >
                See All
              </Link>
            </div>
            <Table>
              <TableBody>
                {DPortfolio.stocks.map((stock) => (
                  <TableRow className="cursor-default" key={stock.id}>
                    <TableCell className="font-medium">
                      <div className="flex items-center space-x-2">
                        <Image
                          src={
                            stock.logo ??
                            "https://static2.finnhub.io/file/publicdatany/finnhubimage/stock_logo/BHP.AX.png"
                          }
                          className="rounded-xl"
                          alt="logo"
                          width={24}
                          height={24}
                        />
                        <CreditCardIcon className="text-[#6E7191] h-6 w-6" />
                        <div>
                          <p className="text-sm font-medium text-[#14142B]">
                            {stock.symbol}
                          </p>
                          <p className="text-xs text-[#6E7191]">{stock.name}</p>
                        </div>
                      </div>
                    </TableCell>
                    <TableCell>Technology</TableCell>
                    <TableCell
                      className={cn("font-semibold text-right", {
                        "text-green-500/95": Number(stock.percentageChange) > 0,
                        "text-red-500/95": Number(stock.percentageChange) < 0,
                      })}
                    >
                      {Number(stock.percentageChange).toFixed(2) ?? 0}%
                    </TableCell>

                    <TableCell className="text-right font-bold">
                      ${stock.last}
                    </TableCell>
                    <TableCell className="text-right">
                      <Button variant="outline" asChild>
                        <Link href={`/Dashboard/${stock.symbol}`}>Analyze</Link>
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </section>
        </section>
      </MaxWidthWrapper>
    </div>
  );
};

export default Holdings;
