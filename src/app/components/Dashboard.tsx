"use client";
// import MaxWidthWrapper from "./MaxWidthWrapper";
import Main from "./DashboardComponents/MainContent";
import StockSection from "./DashboardComponents/SideBar";

// This data will come from the database. It was pass data/trigger the summarizer and visualizer.
const Dashboard = () => {
  return (
    <div className="grid grid-cols-4 gap-1 h-full">
      <div className="col-span-1 h-full">
        <StockSection />
      </div>
      <div className="col-span-3 h-full">
        <Main />
      </div>
    </div>
  );
};

export default Dashboard;
