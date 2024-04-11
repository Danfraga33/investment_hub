import MaxWidthWrapper from "./MaxWidthWrapper";

const Dashboard = () => {
  return (
    <MaxWidthWrapper>
      <div className="grid grid-cols-4 h-[25rem] gap-2">
        <div
          id="portfolio"
          className="grid p-2 border rounded-lg border-blue-500 h-full "
        >
          <div id="Portfolio">
            <div id="heading" className="mb-2 pb-0.5">
              <h1 className="mb-0.5 text-lg">Portfolio</h1>
              <hr style={{ color: "black" }} />
            </div>
            <ul className="flex flex-col gap-1">
              <li className="border-2 border-orange-400 rounded-lg py-0.5 px-0.5">
                Portfolio 1
              </li>
              <li className="border-2 border-orange-400 rounded-lg py-0.5 px-0.5">
                Portfolio 2
              </li>
              <li className="border-2 border-orange-400 rounded-lg py-0.5 px-0.5">
                Portfolio 3
              </li>
            </ul>
          </div>
          <div id="Stock Selection">
            <div id="heading" className="mb-2 pb-0.5">
              <h1 className="mb-0.5 text-lg">Stock Selection</h1>
              <hr style={{ color: "black" }} />
            </div>
            <ul className="flex flex-col gap-1 ">
              <li className="border-2 border-gray-400 rounded-lg py-0.5 px-0.5">
                <h2 className="ml-1">Stock 1</h2>
              </li>
              <li className="border-2 border-gray-400 rounded-lg py-0.5 px-0.5">
                <h2 className="ml-1">Stock 2</h2>
              </li>
              <li className="border-2 border-gray-400 rounded-lg py-0.5 px-0.5">
                <h2 className="ml-1">Stock 3</h2>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex justify-center col-span-3 border border-primary items-center px-4 rounded-lg">
          <div id="chart">Chart</div>
        </div>
      </div>
      <div className="flex justify-center items-center pt-5">
        <div className="inline bg-blue-500 py-2 px-8 items-center text-lg text-white tracking-wide rounded-2xl">
          <h1>Stock Selector</h1>
          {/* <StockSelector /> */}
        </div>
      </div>
    </MaxWidthWrapper>
  );
};

export default Dashboard;
