import Dashboard from "../components/Dashboard";
import { getServerSession } from "next-auth";

const Page = async () => {
  return (
    <div className="mt-3">
      <Dashboard />;
    </div>
  );
};

export default Page;
