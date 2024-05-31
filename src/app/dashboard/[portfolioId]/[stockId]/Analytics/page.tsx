import AnalyticsPage from "@/app/components/DashboardComponents/DashboardPages/Analytics";
import { getPortfolio } from "@/app/components/DashboardData";
const Analytics = async () => {
  const res = await getPortfolio();
  return <AnalyticsPage />;
};

export default Analytics;
