import MaxWidthWrapper from "./MaxWidthWrapper";

const Dashboard = () => {
  return (
    <MaxWidthWrapper>
      <div className="flex">
        <div id="portfolio" className="p-2 border border-blue-500 max-w-50">
          <div>Portfolio</div>
        </div>
        <div className="border border-primary">
          <div id="chart">Chart</div>
        </div>
      </div>
      <div className="flex justify-center items-center h-[20rem]  ">
        <div className="inline bg-blue-500 py-2 px-8 items-center text-lg text-white tracking-wide rounded-2xl ">
          StockSelector
          {/* <StockSelector /> */}
        </div>
      </div>
    </MaxWidthWrapper>
  );
};

export default Dashboard;
