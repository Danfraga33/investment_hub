// import { useState } from "react";

import Dashboard from "../components/Dashboard";
import { getServerSession } from "next-auth";

const Page = async () => {
  const session = await getServerSession();

  return (
    <div className="mt-3">
      <Dashboard />;
    </div>
  );
};

export default Page;
