"use client";

import { Button } from "@/components/ui/button";
import { Sheet, SheetTrigger } from "@/components/ui/sheet";
import { PanelLeft } from "lucide-react";
import { Breadcrumbs } from "../Breadcrumbs";
import { SummaryData } from "../Summary";

const InsightsPage = () => {
  return (
    <div className="flex min-h-screen w-full flex-col bg-muted/40">
      <div className="flex flex-col sm:gap-4 sm:py-4 sm:pl-14">
        <header className="sticky top-0 z-30 flex h-14 items-center gap-4 border-b bg-background px-4 sm:static sm:h-auto sm:border-0 sm:bg-transparent sm:px-6">
          <Sheet>
            <SheetTrigger asChild>
              <Button size="icon" variant="outline" className="sm:hidden">
                <PanelLeft className="h-5 w-5" />
                <span className="sr-only">Toggle Menu</span>
              </Button>
            </SheetTrigger>
          </Sheet>

          <Breadcrumbs />
        </header>
        <main className=" flex-1 items-start gap-2 p-4 sm:px-6 sm:py-0 md:gap-2  w-fit">
          <div className=" items-start gap-4 md:gap-2  h-screen">
            <SummaryData />
          </div>
        </main>
      </div>
    </div>
  );
};

export default InsightsPage;
