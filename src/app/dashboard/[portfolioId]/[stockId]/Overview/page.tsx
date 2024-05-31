import OverviewPage from "@/app/components/DashboardComponents/DashboardPages/Overview";
import {
  CompanyNews,
  GetEPSSuprise,
  GetStockPrice,
  StockData,
  getPortfolio,
} from "@/app/components/DashboardData";
import MaxWidthWrapper from "@/app/components/MaxWidthWrapper";
import { auth } from "@/lib/auth";

export type NewsPageProps = {
  category: string;
  datetime: number;
  headline: string;
  id: number;
  image: string;
  related: string;
  source: string;
  summary: string;
  url: string;
}[];

const Overview = async ({
  params,
}: {
  params: { portfolioId: string; stockId: string };
}) => {
  const session = await auth();
  if (!session || !session.user) {
    return <h1>USER NOT FOUND</h1>;
  }
  const userId = session?.user?.id ?? "";

  const Portfolio = await getPortfolio(userId);
  if (!Portfolio) {
    return <p>NO PORTFOLIO FOUND</p>;
  }

  const selectedStock = Portfolio.stocks.find(
    (stock) => stock.stock.id === params.stockId,
  );

  if (!selectedStock) {
    return (
      <MaxWidthWrapper>
        <p>NO STOCK SELECTED</p>
      </MaxWidthWrapper>
    );
  }

  const companyNews = await CompanyNews(selectedStock.stock.symbol);
  const epsRes = await GetEPSSuprise(selectedStock.stock.symbol);
  const price = await GetStockPrice(selectedStock?.stock.symbol);

  const epsSuprise = epsRes[0];
  const currentPrice = price.c;
  const percentageChange = price.dp;
  const stockRes = await StockData();
  const stocksDB = await stockRes.json();
  stocksDB;

  return (
    <OverviewPage
      currentPrice={currentPrice}
      percentageChange={percentageChange}
      epsSuprise={epsSuprise}
      companyNews={companyNews}
      selectedPortfolio={Portfolio}
    />
  );
};

export default Overview;
