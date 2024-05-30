import { Sheet, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { PanelLeft } from "lucide-react";
import { Breadcrumbs } from "@/app/components/DashboardComponents/Breadcrumbs";
import { SummaryData } from "@/app/components/DashboardComponents/Summary";

const Analyze = async ({ params }: { params: { slug: string } }) => {
  return (
    <div className="flex min-h-screen w-full flex-col bg-muted/40 sm:gap-4 sm:py-4 sm:pl-14">
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
      <main className="grid flex-1 items-start gap-2 p-4 sm:px-6 sm:py-0 md:gap-2 lg:grid-cols-4 xl:grid-cols-4 w-fit">
        <div className="grid auto-rows-max items-start gap-4 md:gap-2 lg:col-span-4 h-screen">
          <SummaryData />
        </div>
      </main>
    </div>
  );
};

export default Analyze;
