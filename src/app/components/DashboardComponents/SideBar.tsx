import * as Select from "@radix-ui/react-select";
import {
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useEffect, useState } from "react";
import { StocksTable } from "./StocksTable";
import ChatToPDFButton from "./ChatToPDFButton";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
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
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Prisma } from "@prisma/client";

type PortfolioWithStocks = Prisma.PortfolioGetPayload<{
  include: { stocks: true };
}>;

///////////////////////////////

const StockSection = () => {
  const [portfolioId, setPortfolioId] = useState<string>("");
  const [portfolio, setPortfolio] = useState<PortfolioWithStocks[]>([]);

  const selectedPortfolio = portfolio.find((item) => item.id === portfolioId);
  console.log(selectedPortfolio);

  function AddToCurrentPortfolio(symbol: string, name: string) {
    /**
     * Add to stocks through a post req
     * Saved in same portfolio
     */
    console.log({ portfolioId, symbol, name });
    const addStock = async () => {
      try {
        const response = await fetch("/api/portfolioData", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ portfolioId, symbol, name }),
        });

        console.log("Adding to portfolio:", portfolioId, name);
        if (!response.ok) {
          throw new Error("Failed to add stock to portfolio.");
        }

        console.log("Successfully added stock.");
        // setPortfolio((prev) => [...prev, response.body]);
      } catch (error) {
        console.error("Error adding stock to portfolio:", error);
      }
    };

    addStock();
  }

  /* GET PORTFOLIO DATA */
  useEffect(() => {
    const fetchPortfolioData = async () => {
      const portfolioData = await fetch("/api/portfolioData");
      const data = await portfolioData.json();
      setPortfolio(data);
    };
    fetchPortfolioData();
  }, [portfolioId]);

  return (
    <>
      <div className="flex flex-col justify-between p-2 border rounded-lg border-r-2 border-b-2 border-gray-400 gap-2 h-full ">
        <div>
          <div className="flex gap-2 items-center justify-between py-1">
            <Select.Root onValueChange={setPortfolioId}>
              <SelectTrigger className="w-full">
                <SelectValue
                  placeholder="Select a portfolio"
                  style={{ color: "white" }}
                />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Portfolio</SelectLabel>
                  <Separator className="my-1 mx-4" />
                  {portfolio.map((portfolio) => (
                    <SelectItem
                      key={portfolio.id}
                      value={portfolio.id}
                      className="font-semibold"
                    >
                      {portfolio.name}
                    </SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select.Root>
            {/* Save Button */}
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="default">Save</Button>
              </SheetTrigger>
              <SheetContent>
                <SheetHeader>
                  <SheetTitle>Portfolio</SheetTitle>
                  <SheetDescription>
                    Enter a portfolio name below and press save.
                  </SheetDescription>
                </SheetHeader>
                <div className="grid gap-4 py-4">
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="name" className="text-right">
                      Name
                    </Label>
                    <Input id="name" className="col-span-3" />
                  </div>
                </div>
                <SheetFooter>
                  <SheetClose asChild>
                    <Button type="submit">Save changes</Button>
                  </SheetClose>
                </SheetFooter>
              </SheetContent>
            </Sheet>
          </div>
          <ScrollArea className="h-80 w-full rounded-md border">
            {portfolio.length > 0 &&
              (selectedPortfolio && selectedPortfolio.stocks ? (
                <StocksTable
                  portfolio={selectedPortfolio}
                  AddToCurrentPortfolio={AddToCurrentPortfolio}
                />
              ) : (
                <p>Please select a portfolio.</p>
              ))}
          </ScrollArea>
        </div>
        <ChatToPDFButton />
      </div>
    </>
  );
};

export default StockSection;
