import {
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useState } from "react";
import { StocksTable } from "./StocksTable";
import * as Select from "@radix-ui/react-select";

const StockSection = () => {
  const [portfolio, setPortfolio] = useState("high-growth");
  console.log(portfolio);

  return (
    <div className="flex flex-col justify-between p-2 border rounded-lg border-r-2 border-b-2 border-gray-400 gap-2 h-full ">
      <div>
        <div className="py-1">
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
                <SelectItem value="high-growth">High Growth Tech</SelectItem>
                <SelectItem value="defensive">Defensive</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select.Root>
        </div>
        <ScrollArea className="h-80 w-full rounded-md border">
          <StocksTable portfolio={portfolio} />
        </ScrollArea>
      </div>
    </div>
  );
};

export default StockSection;
