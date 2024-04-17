import { cn } from "@/lib/utils";
import React, { useState } from "react";

const Chart = () => {
  const [chartOrSummarize, setChartOrSummarize] = useState("chart");

  return (
    <div className="flex flex-col gap-1.5 h-full">
      <div
        className={cn(
          "flex flex-col justify-center col-span-3 border border-b-2 border-gray-400 border-l-2 items-center px-4 rounded-lg w-full transition-all duration-700",
          { "flex-1": chartOrSummarize === "chart" },
        )}
      >
        <button
          onClick={() => {
            setChartOrSummarize("chart");
          }}
        >
          Chart
        </button>
      </div>

      <div
        className={cn(
          "flex flex-col justify-center col-span-3 border border-b-2 border-gray-400 border-l-2 items-center px-4 rounded-lg w-full transition duration-700 ease-in",
          { "flex-1": chartOrSummarize === "summarize" },
        )}
      >
        <button
          onClick={() => {
            setChartOrSummarize("summarize");
          }}
        >
          Summarizer
        </button>
      </div>
    </div>
  );
};

export default Chart;
