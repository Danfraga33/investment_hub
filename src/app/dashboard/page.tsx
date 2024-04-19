import Dashboard from "../components/Dashboard";

const Page = () => {
  return (
    <div
      className="mt-3 px-3 h-screen overflow-hidden "
      style={{ height: "calc(100vh - 5rem)" }}
    >
      <Dashboard />;
    </div>
  );
};

export default Page;
