// import { useState } from "react";
import { useUser } from "@clerk/nextjs";
import { redirect } from "next/navigation";
import MaxWidthWrapper from "../components/MaxWidthWrapper";
import db from "@/db/page";
import { useEffect } from "react";
import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";

import { currentUser } from "@clerk/nextjs";

const Dashboard = async () => {
  const user = await currentUser();
  console.log(user);

  if (!user?.primaryEmailAddress?.emailAddress || !user.id)
    redirect(`/auth-callback?origin=dashboard`);

  try {
    const dbUser = await db.user.findFirst({
      where: {
        id: Number(user.id),
      },
    });
    if (!dbUser) redirect(`/auth-callback?origin=dashboard`);
  } catch (err) {
    console.error(err);
  }

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
  return <Dashboard />;
};
// const response = await fetch(
//   `${url}${tslaUrl}item=${itemNumber}&token=${process.env.SEC_API_KEY}&type=${type}`,
// );
export default Dashboard;
