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
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

const StockSection = () => {
  const [portfolio, setPortfolio] = useState<string>("high-growth");
  console.log(portfolio);
  const [portfolioId, setPortfolioId] = useState<string>("");
  console.log(portfolioId);

  useEffect(() => {
    const fetchPortfolioId = async () => {
      try {
        const selectedPortfolio = await prisma.portfolio.findFirst({
          where: {
            name: portfolio,
          },
        });

        if (selectedPortfolio) {
          setPortfolioId(selectedPortfolio?.id); // Set the ID to the state
        } else {
          console.error("Portfolio not found");
        }
      } catch (error) {
        console.error("Error fetching portfolio ID:", error);
      }
    };

    fetchPortfolioId(); // Fetch the ID when component mounts or portfolioName changes
  }, [portfolio]);

  // Check if there is a portfolio with same name. If yes, return an error - if no add a portfolio
  //   const savePortfolio = async  () => {
  //     const addToPortfolio = await db.portfolio.create({
  //       data: {
  //         name:

  //      }
  //    })
  //  }
  return (
    <>
      <div className="flex flex-col justify-between p-2 border rounded-lg border-r-2 border-b-2 border-gray-400 gap-2 h-full ">
        <div>
          <div className="flex gap-2 items-center justify-between py-1">
            <Select.Root onValueChange={setPortfolio}>
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

                  <SelectItem value="high-growth" className="font-semibold">
                    High Growth Tech
                  </SelectItem>
                  <SelectItem value="defensive" className="font-semibold">
                    Defensive
                  </SelectItem>
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
            <StocksTable portfolioId={portfolioId} />
          </ScrollArea>
        </div>
        <ChatToPDFButton />
      </div>
    </>
  );
};

export default StockSection;
