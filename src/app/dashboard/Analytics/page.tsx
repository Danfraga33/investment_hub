import AnalyticsPage from "@/app/components/DashboardComponents/Block/DashboardPages/Analytics";
import { PortfolioWithStocks } from "@/app/components/DashboardComponents/Block/DashboardPages/Insights";
import { DashboardData } from "@/app/components/DashboardData";
const Analytics = async () => {
  const res = await DashboardData();
  const collectionOfPortfolios: PortfolioWithStocks[] = await res.json();
  return <AnalyticsPage collectionOfPortfolios={collectionOfPortfolios} />;
};

export default Analytics;
