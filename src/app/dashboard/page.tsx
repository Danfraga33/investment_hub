// import { useState } from "react";

import { useSession } from "next-auth/react";
import Dashboard from "../components/Dashboard";
import db from "@/db/page";
import { getServerSession } from "next-auth";

const Page = async () => {
  const user = await getServerSession();

  const userData = await db.user.findMany();

  return (
    <div className="mt-3">
      <Dashboard />;
    </div>
  );
};

export default Page;
