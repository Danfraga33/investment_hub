import OverviewPage from "@/app/components/DashboardComponents/DashboardPages/Overview";
import {
  CompanyNews,
  GetEPSSuprise,
  GetStockPrice,
  NewsData,
  StockData,
  getPortfolios,
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
  const collectionOfPortfolios = await getPortfolios();
  const selectedPortfolio = collectionOfPortfolios?.find(
    (portfolio) => portfolio.id === params.portfolioId,
  );

  const selectedStock = selectedPortfolio?.stocks.find(
    (stocks) => stocks.stock.symbol === params.symbol,
  );

  const companyNews = await CompanyNews(
    selectedStock?.stock.symbol ??
      collectionOfPortfolios[0].stocks[0].stock.symbol,
  );
  const epsRes: any = await GetEPSSuprise(
    selectedStock?.stock.symbol ??
      collectionOfPortfolios[0].stocks[0].stock.symbol,
  );

  const price = await GetStockPrice(
    selectedStock?.stock.symbol ??
      collectionOfPortfolios[0].stocks[0].stock.symbol,
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
