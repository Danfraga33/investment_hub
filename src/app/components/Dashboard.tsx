"use client";
// import MaxWidthWrapper from "./MaxWidthWrapper";
import RightSide from "./DashboardComponents/RightSide";
import StockSection from "./DashboardComponents/StockSection";

// This data will come from the database. It was pass data/trigger the summarizer and visualizer.
const Dashboard = () => {
  return (
    <div className="grid grid-cols-4 gap-1">
      <div className="col-span-1 h-full">
        <StockSection />
      </div>
      <div className="col-span-3 h-full">
        <RightSide />
      </div>
    </div>
  );
};

export default Dashboard;
