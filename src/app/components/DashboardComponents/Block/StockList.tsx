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
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

import { StockDB } from "@prisma/client";
import {
  AreaChart,
  Check,
  ChevronDown,
  Hexagon,
  MoreVertical,
  PencilLine,
  Plus,
  X,
} from "lucide-react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { ChangeEvent, useState } from "react";
import { useTransition } from "react";
import { PortfolioWithStocks } from "./DashboardPages/Insights";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "@/components/ui/command";
import { cn } from "@/lib/utils";
import { AddPortfolio, AddStock, DeleteStock } from "../../DashboardData";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import Link from "next/link";

export const StockList = ({
  collectionOfPortfolios,
  stocksDB,
  percentageChange,
  currentPrice,
}: {
  percentageChange: number;
  currentPrice: number;
  stocksDB: StockDB[];
  collectionOfPortfolios: PortfolioWithStocks[];
}) => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");
  const [portfolioName, setPortfolioName] = useState(
    collectionOfPortfolios[0].name,
  );
  const [stockSymbol, setStockSymbol] = useState("BHP");
  const [newPortfolioName, setNewPortfolioName] = useState("");
  const [isPending, startTransition] = useTransition();
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();
  console.log(pathname);

  // Portfolio Selection
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

  // Stock Selection
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

  // Selected Portfolio
  const selectedPortfolio: PortfolioWithStocks = collectionOfPortfolios?.filter(
    (portfolio) => portfolio.name === portfolioName,
  )[0];

  // Selected Stocks
  const selectedStocks = selectedPortfolio?.stocks;
  // Setting New Portfolio Name
  function handlePortfolioNameChange(e: ChangeEvent<HTMLInputElement>) {
    console.log(e.target.value);
    setNewPortfolioName(e.target.value);
  }
  const userId = selectedPortfolio.userId;

  // MISC: CAPITALIZE STOCKDB NAMES
  function capitalizeEachWord(sentence: string) {
    if (!sentence || typeof sentence !== "string") {
      throw new Error("Input must be a valid string");
    }
    return sentence
      .split(" ")
      .map((word) => {
        return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
      })
      .join(" ");
  }
  console.log(selectedStocks);
  // const isDesktop = useMediaQuery("(min-width: 768px)");
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
          <TabsTrigger key={portfolio.id} value={portfolio.name}>
            {portfolio.name}
          </TabsTrigger>
        ))}
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="ghost">
              <Plus />
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Add Watchlist</DialogTitle>
              <DialogDescription>Create a new watchlist.</DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="name" className="text-right">
                  Name
                </Label>
                <Input
                  id="name"
                  defaultValue="NextGen AI Stocks"
                  className="col-span-3"
                  onChange={handlePortfolioNameChange}
                  required
                />
              </div>
            </div>
            <DialogFooter>
              <Button
                type="submit"
                onClick={() => {
                  AddPortfolio(newPortfolioName, userId);
                }}
              >
                Add Watchlist
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </TabsList>
      <Card className="overflow-hidden" x-chunk="dashboard-05-chunk-4">
        <CardHeader className="flex flex-row items-start bg-muted/50">
          <div className="grid gap-0.5">
            <CardTitle className="group flex items-center gap-2 text-lg">
              {portfolioName}
            </CardTitle>
            <CardDescription>{new Date().toDateString()}</CardDescription>
          </div>

          <div className="ml-auto flex items-center gap-1">
            <Dialog>
              <DialogTrigger asChild>
                <Button variant="outline">Add</Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Edit profile</DialogTitle>
                  <DialogDescription>
                    Start typing to find the stock you want to add. <br />
                    Click <strong>Add</strong> when you&apos;re done.
                  </DialogDescription>
                </DialogHeader>
                <div className="block sm:flex gap-2">
                  <Popover open={open} onOpenChange={setOpen}>
                    <PopoverTrigger asChild>
                      <Button
                        variant="outline"
                        className="w-3/4 overflow-hidden justify-between"
                      >
                        {value ? value : "Type to find your stock..."}
                        <ChevronDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-[250px] p-0">
                      <Command>
                        <CommandInput placeholder="Search a stock..." />
                        <CommandEmpty>No Stock found.</CommandEmpty>
                        <CommandGroup>
                          {stocksDB.map((stock) => (
                            <CommandItem
                              key={stock.id}
                              value={capitalizeEachWord(stock.Name)}
                              onSelect={(currentValue) => {
                                setValue(capitalizeEachWord(currentValue));
                                setStockSymbol(stock.Symbol);
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
                              {capitalizeEachWord(stock.Name)}
                            </CommandItem>
                          ))}
                        </CommandGroup>
                      </Command>
                    </PopoverContent>
                  </Popover>
                  <Button
                    className="md:w-[10rem] w-[200px] flex items-center"
                    variant="outline"
                    onClick={() =>
                      AddStock(selectedPortfolio.id, value, stockSymbol)
                    }
                  >
                    <Plus className="h-4 w-4" />
                    Add
                  </Button>
                </div>
              </DialogContent>
            </Dialog>
          </div>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Symbol</TableHead>

                <TableHead>Last</TableHead>
                <TableHead>Chg%</TableHead>
                <TableHead>Edit</TableHead>
              </TableRow>
            </TableHeader>

            <TableBody>
              {selectedStocks ? (
                selectedStocks.map((stock) => (
                  <TableRow className="bg-accent" key={stock.id}>
                    <TableCell
                      className="cursor-pointer "
                      onClick={() => handleStockSelection(stock.id)}
                    >
                      <div className="flex items-center  ">
                        <Image
                          src={stock.logo ? stock.logo : "/default.jpg"}
                          alt={`${stock.name} Logo`}
                          width={22}
                          height={22}
                          className="rounded-2xl mr-1.5"
                          quality={100}
                          layout="fixed"
                        />
                        <div className="font-medium">{stock.symbol}</div>
                      </div>
                      {/* <div className="hidden text-sm text-muted-foreground md:inline">
                        {stock.name}
                      </div> */}
                    </TableCell>

                    <TableCell>
                      <span className="font-semibold">
                        {stock.last ?? 1.23}
                      </span>
                    </TableCell>
                    <TableCell>
                      <span
                        className={cn("font-semibold", {
                          "text-green-500": stock?.percentageChange > 0,
                          "text-red-400": stock?.percentageChange < 0,
                        })}
                      >
                        {Number(stock.percentageChange).toFixed(2) ?? "2.33"}
                      </span>
                    </TableCell>

                    <TableCell>
                      <div>
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button
                              size="icon"
                              variant="outline"
                              className="h-8 w-8"
                            >
                              <MoreVertical className="h-3.5 w-3.5" />
                              <span className="sr-only">More</span>
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end">
                            <DropdownMenuItem
                              onClick={() => console.log("Summarize")}
                            >
                              Summarize
                            </DropdownMenuItem>
                            <DropdownMenuItem
                              onClick={() => console.log("visualize")}
                            >
                              <Link href="/Dashboard/Analytics">Visualize</Link>
                            </DropdownMenuItem>
                            <DropdownMenuItem
                              onClick={() =>
                                DeleteStock(
                                  selectedPortfolio.id,
                                  value,
                                  stockSymbol,
                                )
                              }
                            >
                              Delete
                            </DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </div>
                    </TableCell>
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
                  <TableCell>
                    <Button variant="outline">
                      <X size={20} />
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
