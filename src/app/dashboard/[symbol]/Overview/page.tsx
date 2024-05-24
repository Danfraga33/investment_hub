import OverviewPage from "@/app/components/DashboardComponents/DashboardPages/Overview";
import { PortfolioWithStocks } from "@/app/components/DashboardComponents/DashboardPages/Insights";
import {
  CompanyNews,
  DashboardData,
  GetEPSSuprise,
  GetStockPrice,
  NewsData,
  StockData,
} from "@/app/components/DashboardData";
import { epsSupriseProps } from "../../Insights/page";

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
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) => {
  const res = await DashboardData();
  const collectionOfPortfolios: PortfolioWithStocks[] = await res.json();
  const selectedPortfolio = collectionOfPortfolios?.find(
    (portfolio) => portfolio.id === searchParams.p,
  );

  const selectedStock = selectedPortfolio?.stocks.find(
    (stock) => stock.id === searchParams.s,
  )?.symbol;

  const lastPrice = await GetStockPrice(selectedStock ?? "");

  const companyNews = await CompanyNews(
    selectedStock ?? collectionOfPortfolios[0].stocks[0].symbol,
  );
  const epsRes: epsSupriseProps[] = await GetEPSSuprise(
    selectedStock ?? collectionOfPortfolios[0].stocks[0].symbol,
  );

  const price = await GetStockPrice(
    selectedStock ?? collectionOfPortfolios[0].stocks[0].symbol,
  );
  const newsData: NewsPageProps = await NewsData();
  const epsSuprise = epsRes[0];
  const currentPrice = price.c;
  const percentageChange = price.dp;

  const stockRes = await StockData();
  const stocksDB = await stockRes.json();

  return (
    <OverviewPage
      currentPrice={currentPrice}
      percentageChange={percentageChange}
      epsSuprise={epsSuprise}
      stocksDB={stocksDB}
      companyNews={companyNews}
      newsData={newsData}
      collectionOfPortfolios={collectionOfPortfolios}
    />
  );
};

export default Overview;
