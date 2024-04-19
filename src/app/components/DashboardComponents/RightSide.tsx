import React, { useState } from "react";

const Chart = () => {
  const [chartOrSummarize, setChartOrSummarize] = useState("chart");

  const activeClass = "flex-1";
  const inactiveClass = "w-full";

  return (
    <div className="flex flex-col gap-1.5 h-full">
      <div
        className={`flex flex-col justify-center col-span-3 border border-b-2 border-gray-400 border-l-2 items-center px-4 rounded-lg w-full transition-all duration-700 ease-in ${chartOrSummarize === "chart" ? activeClass : inactiveClass}`}
      >
        <button onClick={() => setChartOrSummarize("chart")}>Chart</button>
      </div>
      <div
        className={`flex flex-col justify-center col-span-3 border border-b-2 border-gray-400 border-l-2 items-center px-4 rounded-lg w-full transition-all duration-700 ease-in ${chartOrSummarize === "summarize" ? activeClass : inactiveClass}`}
      >
        <button onClick={() => setChartOrSummarize("summarize")}>
          Summarizer
        </button>
      </div>
    </div>
  );
};

export default Chart;
