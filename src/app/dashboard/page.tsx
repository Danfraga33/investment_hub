import { Prisma } from "@prisma/client";
import Dashboard from "../components/Dashboard";
import { DashboardData } from "../components/DashboardData";
export type PortfolioWithStocks = Prisma.PortfolioGetPayload<{
  include: { stocks: true };
}>;

const Page = async () => {
  const res = await DashboardData();
  const collectionOfPortfolios: PortfolioWithStocks[] = await res.json();

  // function AddToCurrentPortfolio(symbol: string, name: string) {
  //   /**
  //    * Add to stocks through a post req
  //    * Saved in same portfolio
  //    */
  //   console.log({ symbol, name });
  //   const addStock = async () => {
  //     try {
  //       const response = await fetch("/api/portfolioData", {
  //         method: "POST",
  //         headers: {
  //           "Content-Type": "application/json",
  //         },
  //         body: JSON.stringify({ portfolioId, symbol, name }),
  //       });

  //       console.log("Adding to portfolio:", portfolioId, name);
  //       if (!response.ok) {
  //         throw new Error("Failed to add stock to portfolio.");
  //       }

  //       console.log("Successfully added stock.");
  //       // setPortfolio((prev) => [...prev, response.body]);
  //     } catch (error) {
  //       console.error("Error adding stock to portfolio:", error);
  //     }
  //   };

  //   addStock();
  // }

  return (
    <div
      className="mt-3 px-3 h-screen overflow-hidden "
      style={{ height: "calc(100vh - 5rem)" }}
    >
      <Dashboard collectionOfPortfolios={collectionOfPortfolios} />;
    </div>
  );
};

export default Page;
