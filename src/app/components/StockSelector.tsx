"use client ";
import { Separator } from "@/components/ui/separator";
import { Portfolio } from "@/app/components/DashboardComponents/StocksTable";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const StockSelector = ({ selectedPortfolio }: Portfolio) => {
  console.log(selectedPortfolio.stocks);
  const stocks = selectedPortfolio.stocks;
  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       // const response =
  //       //   await fetch(`https://eodhd.com/api/exchange-symbol-list/US?api_token=6502dfcec69906.21613678&fmt=json
  //       // `);
  //       const response = await fetch(`https://www.google.com`);
  //       if (!response.ok) {
  //         throw new Error("Failed to fetch data");
  //       }
  //       const data = await response.json();
  //       const typedData = data as Stock[];
  //       const nasdaqStocks = typedData.filter(
  //         (stock) =>
  //           stock.Exchange === "NASDAQ" &&
  //           typeof stock.Code === "string" &&
  //           stock.Code.match(/[a-zA-Z]+/),
  //       );

  //       setStocks(nasdaqStocks);
  //     } catch (error) {
  //       throw new Error("Error fetching Data, error");
  //     }
  //   };
  //   fetchData();
  // }, []);

  return (
    <Select>
      <SelectTrigger className="w-[180px] text-black ">
        <SelectValue placeholder="Select a Stock" />
      </SelectTrigger>

      <SelectContent>
        {selectedPortfolio &&
          stocks.slice(0, 10)?.map((stock) => (
            <SelectGroup key={stock.id}>
              <SelectLabel>{stock.symbol}</SelectLabel>
              <SelectItem value="apple">{stock.name}</SelectItem>
              <Separator />
            </SelectGroup>
          ))}
      </SelectContent>
    </Select>
    //  <DropdownMenuItem>Summary 📝</DropdownMenuItem>
    //   <DropdownMenuItem>Visualize 📊</DropdownMenuItem>
  );
};

export default StockSelector;
