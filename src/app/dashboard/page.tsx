"use client";
import { useEffect, useState } from "react";
import StockSelector from "../components/StockSelector";
const Dashboard = () => {
  const OpenAiKey = process.env.OPENAI_API_KEY;
  const url = "https://api.sec-api.io/extractor?url=";
  const tslaUrl =
    "https://www.sec.gov/Archives/edgar/data/1318605/000156459021004599/tsla-10k_20201231.txt?";
  const itemNumber = "8";
  const type = "text";

  const [sec, setSec] = useState("");
  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await fetch(
  //         `https://api.sec-api.io/extractor?url=https://www.sec.gov/Archives/edgar/data/1318605/000156459021004599/tsla-10k_20201231.txt&item=8&token=7eb8303a3bdb5248b15e5ff835ed92e618c6ed592c119c885df68b018f3553d2&type=text`,
  //         // const response = await fetch(
  //         //   `https://api.sec-api.io/extractor?url=https://www.sec.gov/Archives/edgar/data/1318605/000156459021004599/tsla-10k_20201231.htm&item=${itemNumber}&token=${process.env.SEC_API_KEY}&type=${type}`,
  //         // );
  //       );

  //       const data = await response.text();
  //       setSec(data);
  //     } catch (err) {
  //       console.log(err);
  //     }
  //   };
  //   fetchData();
  // }, []);

  console.log(sec);
  return (
    <div className="flex justify-center items-center h-[20rem]  ">
      <div className="inline bg-blue-500 py-2 px-8 items-center text-lg text-white tracking-wide rounded-2xl ">
        <StockSelector />
      </div>
    </div>
  );
};
// const response = await fetch(
//   `${url}${tslaUrl}item=${itemNumber}&token=${process.env.SEC_API_KEY}&type=${type}`,
// );
export default Dashboard;
