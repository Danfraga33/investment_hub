"use client";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import { StockDB } from "@prisma/client";
import {
  AreaChart,
  Check,
  ChevronsUpDown,
  Command,
  PencilLine,
  Plus,
} from "lucide-react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
import { useTransition } from "react";
import { PortfolioWithStocks } from "./DashboardPages/Insights";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "@/components/ui/command";
import { cn } from "@/lib/utils";

export const StockList = ({
  collectionOfPortfolios,
  stocksDB,
}: {
  stocksDB: StockDB[];
  collectionOfPortfolios: PortfolioWithStocks[];
}) => {
  // To share with other pages
  // localStorage.setItem("portfolioId", collectionOfPortfolios[0].id);
  ////
  const searchParams = useSearchParams();
  const [portfolioName, setPortfolioName] = useState(
    collectionOfPortfolios[0].name,
  );
  const router = useRouter();
  const pathname = usePathname();
  const [isPending, startTransition] = useTransition();
  function handlePortfolioSelection(portfolioName: string) {
    const selectedPortfolio = collectionOfPortfolios.find(
      (portfolio) => portfolio.name === portfolioName,
    );
    if (!selectedPortfolio) throw new Error("PORTFOLIO NOT FOUND");
    const stockId = selectedPortfolio.stocks[0].id;
    const updatedSearchParams = new URLSearchParams(searchParams);
    updatedSearchParams.set("p", selectedPortfolio.id);
    updatedSearchParams.set("s", stockId);
    startTransition(() => {
      router.replace(`${pathname}?${updatedSearchParams.toString()}`);
    });
  }
  function handleStockSelection(stockId: string) {
    const selectedPortfolio = collectionOfPortfolios.find(
      (portfolio) => portfolio.name === portfolioName,
    );
    if (!selectedPortfolio) throw new Error("PORTFOLIO NOT FOUND");
    const updatedSearchParams = new URLSearchParams(searchParams);
    updatedSearchParams.set("p", selectedPortfolio.id);
    updatedSearchParams.set("s", stockId);
    startTransition(() => {
      router.replace(`${pathname}?${updatedSearchParams.toString()}`);
    });
  }

  const selectedPortfolio = collectionOfPortfolios?.filter(
    (portfolio) => portfolio.name === portfolioName,
  )[0];
  const stocks = selectedPortfolio?.stocks;

  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");
  function capitalizeEveryWord(sentence: string) {
    const words = sentence.split(" ");

    const capitalizedWords = words.map((word: string) => {
      if (word.length === 0) return word;
      const firstLetter = word.charAt(0).toUpperCase();
      const restOfWord = word.slice(1).toLowerCase();
      return firstLetter + restOfWord;
    });
    const completeSentence = capitalizedWords.join(" ");
    setValue(completeSentence);
    return completeSentence;
  }

  return (
    <Tabs
      onValueChange={(value) => {
        setPortfolioName(value);
        handlePortfolioSelection(value);
      }}
      defaultValue={collectionOfPortfolios[0].name}
    >
      <TabsList>
        {collectionOfPortfolios.map((portfolio) => (
          <TabsTrigger
            key={portfolio.id}
            value={portfolio.name}
            // onClick={() => {
            //   setportfolioId(portfolio.id);
            //   handlePortfolioSelection(portfolio.id);
            // }}
          >
            {portfolio.name}
          </TabsTrigger>
        ))}
      </TabsList>
      <Card className="overflow-hidden" x-chunk="dashboard-05-chunk-4">
        <CardHeader className="flex flex-row items-start bg-muted/50">
          <div className="grid gap-0.5">
            <CardTitle className="group flex items-center gap-2 text-lg">
              Stock List
            </CardTitle>
            <CardDescription>{new Date().toDateString()}</CardDescription>
          </div>

          <div className="ml-auto flex items-center gap-1">
            <Dialog>
              <DialogTrigger asChild>
                <Button size="sm" variant="outline" className="h-8 gap-1">
                  <Plus className="h-3.5 w-3.5" />
                  <span className="lg:sr-only xl:not-sr-only xl:whitespace-nowrap">
                    Add
                  </span>
                </Button>
              </DialogTrigger>
              <DialogContent className="flex items-center">
                <Popover open={open} onOpenChange={setOpen}>
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      role="combobox"
                      aria-expanded={open}
                      className="w-[200px] justify-between overflow-hidden"
                    >
                      {value ? value : "Select a company..."}
                      <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-[200px] p-0">
                    <Command>
                      <CommandInput placeholder="Company name..." />
                      <CommandEmpty>No stock found.</CommandEmpty>
                      <CommandGroup className="h-[15rem] overflow-scroll">
                        {stocksDB.map((stock) => (
                          <CommandItem
                            key={stock.id}
                            value={stock.Name}
                            onSelect={(currentValue) => {
                              capitalizeEveryWord(currentValue);
                              setOpen(false);
                            }}
                          >
                            <Check
                              className={cn(
                                "mr-2 h-4 w-4",
                                value === stock.Name
                                  ? "opacity-100"
                                  : "opacity-0",
                              )}
                            />
                            ({stock.Symbol}){":"} {stock.Name}
                          </CommandItem>
                        ))}
                      </CommandGroup>
                    </Command>
                  </PopoverContent>
                </Popover>
                <Button
                  variant="outline"
                  className="w-1/2 text justify-between"
                >
                  <Plus className="h-3.5 w-3.5" />
                  <span className="xl:whitespace-nowrap">Add</span>
                </Button>
              </DialogContent>
            </Dialog>
          </div>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Visualize</TableHead>
                <TableHead>Summarize</TableHead>
              </TableRow>
            </TableHeader>

            <TableBody>
              {stocks ? (
                stocks.map((stock) => (
                  <TableRow className="bg-accent" key={stock.id}>
                    <TableCell
                      className="cursor-pointer"
                      onClick={() => handleStockSelection(stock.id)}
                    >
                      <div className="font-medium">{stock.symbol}</div>
                      <div className="hidden text-sm text-muted-foreground md:inline">
                        {stock.name}
                      </div>
                    </TableCell>

                    <TooltipProvider>
                      <Tooltip>
                        <TableCell>
                          <TooltipTrigger asChild>
                            <Button variant="destructive">
                              <AreaChart size={20} />
                            </Button>
                          </TooltipTrigger>
                          <TooltipContent side="right">
                            Visualize
                          </TooltipContent>
                        </TableCell>
                        <TooltipProvider>
                          <Tooltip>
                            <TableCell>
                              <TooltipTrigger asChild>
                                <Button variant="outline">
                                  <PencilLine size={20} />
                                </Button>
                              </TooltipTrigger>
                              <TooltipContent side="right">
                                Summarize
                              </TooltipContent>
                            </TableCell>
                          </Tooltip>
                        </TooltipProvider>
                      </Tooltip>
                    </TooltipProvider>
                  </TableRow>
                ))
              ) : (
                <TableRow className="bg-accent">
                  <TableCell>
                    <div className="text-xs text-wrap">
                      Click the <strong>Add</strong> button above to add a stock
                      to your portfolio.
                    </div>
                  </TableCell>
                  <TableCell>
                    <Button variant="outline" disabled>
                      <AreaChart size={20} />
                    </Button>
                  </TableCell>
                  <TableCell>
                    <Button variant="outline" disabled>
                      <PencilLine size={20} />
                    </Button>
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </CardContent>
        <CardFooter className="flex flex-row items-center border-t bg-muted/50 px-6 py-3">
          <div className="text-xs text-muted-foreground">
            Updated <time dateTime="2023-11-23">November 23, 2023</time>
          </div>
        </CardFooter>
      </Card>
    </Tabs>
  );
};
