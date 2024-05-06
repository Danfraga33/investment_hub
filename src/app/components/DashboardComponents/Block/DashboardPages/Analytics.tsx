"use client";

import { Breadcrumbs } from "@/app/components/DashboardComponents/Block/Breadcrumbs";
import { MenuNav } from "@/app/components/DashboardComponents/Block/MenuNav";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { PanelLeft } from "lucide-react";
import { PortfolioWithStocks } from "./Insights";

const AnalyticsPage = ({
  collectionOfPortfolios,
}: {
  collectionOfPortfolios: PortfolioWithStocks[];
}) => {
  return (
    <div className="flex flex-col sm:gap-4 sm:py-4 sm:pl-14 h-screen overflow-hidden">
      <header className="sticky top-0 z-30 flex h-14 items-center gap-4 border-b bg-background px-4 sm:static sm:h-auto sm:border-0 sm:bg-transparent sm:px-6">
        <Sheet>
          <SheetTrigger asChild>
            <Button size="icon" variant="outline" className="sm:hidden">
              <PanelLeft className="h-5 w-5" />
              <span className="sr-only">Toggle Menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="sm:max-w-xs">
            <MenuNav />
          </SheetContent>
        </Sheet>

        <Breadcrumbs />
      </header>
      <div className=" h-screen overflow-">
        <div className="relative isolate px-6 lg:px-8">
          <div className="mx-auto max-w-2xl py-16 sm:py-14 lg:py-28">
            <div className="hidden sm:mb-8 sm:flex sm:justify-center">
              <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-600 ring-1 bg-primary-foreground-900/10 hover:ring-gray-900/20">
                Visualize your financial statements with our new analysis tools.
              </div>
            </div>
            <div className="text-center">
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                Something Amazing is on the Way
              </h1>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                We&apos;re working hard to bring you something new and exciting.
                Stay tuned for updates and thank you for your patience. In the
                meantime, connect with us on our social platforms for the latest
                news and sneak peeks.
              </p>
            </div>
          </div>
          <div
            className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
            aria-hidden="true"
          >
            <div
              className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
              style={{
                clipPath:
                  "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnalyticsPage;
