import { Portfolio } from "@/app/components/DashboardComponents/Draft/StocksTable";
import { Select, SelectTrigger, SelectValue } from "@/components/ui/select";

const StockSelector = ({ selectedPortfolio }: Portfolio) => {
  return (
    <Select>
      <SelectTrigger className="w-[180px] text-black ">
        <SelectValue placeholder="Select a Stock" />
      </SelectTrigger>

      {/* <SelectContent>
        {selectedPortfolio &&
          stocks.slice(0, 10)?.map((stock) => (
            <SelectGroup key={stock.id}>
              <SelectLabel>{stock.symbol}</SelectLabel>
              <SelectItem value="apple">{stock.name}</SelectItem>
              <Separator />
            </SelectGroup>
          ))}
      </SelectContent> */}
    </Select>
    //  <DropdownMenuItem>Summary 📝</DropdownMenuItem>
    //   <DropdownMenuItem>Visualize 📊</DropdownMenuItem>
  );
};

export default StockSelector;
