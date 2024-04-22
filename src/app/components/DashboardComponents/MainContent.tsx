"use client";
import React, { useEffect, useState } from "react";
import PdfChat from "./PdfChat";
import Summarizer from "./Summarizer";
import getData from "@/app/api/query/route";

const Main = () => {
  const [chartOrSummarize, setChartOrSummarize] = useState("chart");

  const activeClass = "flex-1";
  const inactiveClass = "w-full";

  useEffect(() => {
    const data = async () => {
      const userData = await fetch("/api/query");
      const { data } = await userData.json();
      console.log(data);
    };
    data();
  }, []);

  return (
    <div className="flex flex-col gap-1.5 h-full">
      <div
        className={`flex flex-col justify-center col-span-3 border border-b-2 shadow-sm border-gray-400 border-l-2 items-center px-4 rounded-lg w-full transition-all duration-700 ease-in ${chartOrSummarize === "chart" ? activeClass : inactiveClass}`}
      >
        <button onClick={() => setChartOrSummarize("chart")}>
          <Summarizer />
        </button>
      </div>
      <div
        className={`flex flex-col justify-center col-span-3 border border-b-2 shadow-sm border-gray-400 border-l-2 items-center px-4 rounded-lg w-full transition-all duration-700 ease-in ${chartOrSummarize === "summarize" ? activeClass : inactiveClass}`}
      >
        <button onClick={() => setChartOrSummarize("summarize")}>
          <PdfChat />
        </button>
      </div>
    </div>
  );
};

export default Main;
