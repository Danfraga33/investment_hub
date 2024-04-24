import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Plus } from "lucide-react";
import type { Stock } from "@prisma/client";

export function StocksTable({ portfolioStocks }: { portfolioStocks: Stock[] }) {
  console.log(portfolioStocks);

  return (
    <ScrollArea className="h-full w-full rounded-md border p-2">
      <div className="mb-4 px-2 py-1 flex items-center justify-between">
        <h4 className="text-md font-semibold leading-none">Companies</h4>
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="default">
              <Plus strokeWidth={2} />
            </Button>
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetTitle>Stock Details</SheetTitle>
              <SheetDescription>
                Enter either name or ticker below to search and add to
                portfolio.
              </SheetDescription>
            </SheetHeader>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="name" className="text-right">
                  Name
                </Label>
                <Input id="name" className="col-span-3" />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="username" className="text-right">
                  Ticker
                </Label>
                <Input id="username" className="col-span-3" />
              </div>
            </div>
            <SheetFooter>
              <SheetClose asChild>
                <Button type="submit">Save</Button>
              </SheetClose>
            </SheetFooter>
          </SheetContent>
        </Sheet>
      </div>

      {portfolioStocks.map((company) => (
        <div key={company.id}>
          <Button
            className="w-full items-start text-start "
            variant="secondary"
          >
            {company.name}
          </Button>
          <Separator className="my-2" />
        </div>
      ))}
    </ScrollArea>
  );
}
