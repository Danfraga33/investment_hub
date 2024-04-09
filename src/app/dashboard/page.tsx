"use client";
// import { useState } from "react";
import { useUser } from "@clerk/nextjs";
import { redirect } from "next/navigation";
import MaxWidthWrapper from "../components/MaxWidthWrapper";
import db from "@/db/page";
import { useEffect } from "react";

const Dashboard = () => {
  const { user } = useUser();
  console.log(user);

  if (!user?.primaryEmailAddress?.emailAddress || !user.id)
    redirect(`/auth-callback?origin=dashboard`);

  // useEffect(() => {
  //   const CheckIfUserIsInDatabase = async () => {
  //     try {
  //       const dbUser = await db.user.findFirst({
  //         where: {
  //           id: user.id,
  //         },
  //       });

  //       if (!dbUser) redirect("/auth-callback?origin=dashboard");
  //     } catch (err) {
  //       console.error("messsage:", err);
  //     }
  //   };
  // }, []);

  // const [sec, setSec] = useState("");
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

  // console.log(sec);
  return (
    <>
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
    </>
  );
};
// const response = await fetch(
//   `${url}${tslaUrl}item=${itemNumber}&token=${process.env.SEC_API_KEY}&type=${type}`,
// );
export default Dashboard;
