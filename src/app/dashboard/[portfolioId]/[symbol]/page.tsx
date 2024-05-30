import OverviewPage from "@/app/components/DashboardComponents/DashboardPages/Overview";
import {
  CompanyNews,
  GetEPSSuprise,
  GetStockPrice,
  NewsData,
  StockData,
  PortfolioData,
} from "@/app/components/DashboardData";

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
  params: { portfolioId: string; symbol: string };
}) => {
  const res = await PortfolioData();
  const collectionOfPortfolios = await res.json();
  const selectedPortfolio = collectionOfPortfolios?.find(
    (portfolio) => portfolio.id === params.portfolioId,
  );

  const selectedStock = selectedPortfolio?.stocks.find(
    (stock) => stock.stockId === params.symbol,
  );

  const companyNews = await CompanyNews(
    selectedStock ?? collectionOfPortfolios[0].stocks[0].symbol,
  );
  const epsRes: any = await GetEPSSuprise(
    selectedStock ?? collectionOfPortfolios[0].stocks[0].symbol,
  );

  const price = await GetStockPrice(
    selectedStock ?? collectionOfPortfolios[0].stocks[0].symbol,
  );

  const newsData: NewsPageProps = await NewsData();
  const epsSuprise = epsRes[0];
  const currentPrice = price.c;
  const percentageChange = price.dp ?? 0;

  const stockRes = await StockData();
  const stocksDB = await stockRes.json();
  stocksDB;

  return (
    <OverviewPage
      currentPrice={currentPrice}
      percentageChange={percentageChange}
      epsSuprise={epsSuprise}
      companyNews={companyNews}
      newsData={newsData}
      collectionOfPortfolios={collectionOfPortfolios}
    />
  );
};

export default Overview;
