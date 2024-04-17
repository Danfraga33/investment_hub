import {
  Select,
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

const StockSection = () => {
  const [portfolio, setPortfolio] = useState("high-growth");

  return (
    <div className="flex flex-col justify-between p-2 border rounded-lg border-r-2 border-b-2 border-gray-400 gap-2 h-full ">
      <div>
        <div className="py-1">
          <Select>
            <SelectTrigger className="w-full">
              <SelectValue
                placeholder="Select a portfolio"
                style={{ color: "white" }}
              />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Portfolio</SelectLabel>
                <SelectItem value="high-growth">
                  <div
                    onClick={() => {
                      setPortfolio("high-growth");
                      console.log("Portfolio updated:", portfolio);
                    }}
                  >
                    High Growth Tech
                  </div>
                </SelectItem>
                <SelectItem
                  value="defensive"
                  onClick={() => setPortfolio("defensive")}
                >
                  Defensive
                </SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
        <ScrollArea className="h-80 w-full rounded-md border">
          <StocksTable portfolio={portfolio} />
        </ScrollArea>
      </div>
    </div>
  );
};

export default StockSection;
