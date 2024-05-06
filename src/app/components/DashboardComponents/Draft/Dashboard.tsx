// "use client";
// // import MaxWidthWrapper from "./MaxWidthWrapper";
// import { useSearchParams } from "next/navigation";
// import { Prisma, StockDB } from "@prisma/client";
// import { PanelLeft } from "lucide-react";
// import { Button } from "@/components/ui/button";
// import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
// import { Cards } from "./DashboardComponents/Block/Cards";
// import { SummaryData } from "./DashboardComponents/Block/Summary";
// import { StockList } from "./DashboardComponents/Block/StockList";
// import { MenuNav } from "./DashboardComponents/Block/MenuNav";
// import { Breadcrumbs } from "./DashboardComponents/Block/Breadcrumbs";

// export type DashboardProps = {
//   collectionOfPortfolios: PortfolioWithStocks[];
// };

// export type PortfolioWithStocks = Prisma.PortfolioGetPayload<{
//   include: { stocks: true };
// }>;

// export function Dashboard({
//   collectionOfPortfolios,
//   stocksDB,
// }: {
//   collectionOfPortfolios: PortfolioWithStocks[];
//   stocksDB: StockDB;
// }) {
//   const searchParams = useSearchParams();
//   const portfolioId = searchParams.get("p");

//   const selectedPortfolio = collectionOfPortfolios?.filter(
//     (portfolio) => portfolio.id === portfolioId,
//   )[0];

//   return (
//     <div className="flex min-h-screen w-full flex-col bg-muted/40">
//       <div className="flex flex-col sm:gap-4 sm:py-4 sm:pl-14">
//         <header className="sticky top-0 z-30 flex h-14 items-center gap-4 border-b bg-background px-4 sm:static sm:h-auto sm:border-0 sm:bg-transparent sm:px-6">
//           <Sheet>
//             <SheetTrigger asChild>
//               <Button size="icon" variant="outline" className="sm:hidden">
//                 <PanelLeft className="h-5 w-5" />
//                 <span className="sr-only">Toggle Menu</span>
//               </Button>
//             </SheetTrigger>
//             <SheetContent side="left" className="sm:max-w-xs">
//               <MenuNav />
//             </SheetContent>
//           </Sheet>

//           <Breadcrumbs />
//         </header>
//         <main className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8 lg:grid-cols-3 xl:grid-cols-3">
//           <div className="grid auto-rows-max items-start gap-4 md:gap-8 lg:col-span-2">
//             <Cards collectionOfPortfolios={collectionOfPortfolios} />
//             <SummaryData />
//           </div>

//           <StockList collectionOfPortfolios={collectionOfPortfolios} />
//         </main>
//       </div>
//     </div>
//   );
// }
