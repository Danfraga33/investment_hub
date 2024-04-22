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
import { useState } from "react";
import { StocksTable } from "./StocksTable";
import ChatToPDFButton from "./ChatToPDFButton";
import { Separator } from "@/components/ui/separator";

const StockSection = () => {
  const [portfolio, setPortfolio] = useState("high-growth");

  return (
    <>
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
          </div>
          <ScrollArea className="h-80 w-full rounded-md border">
            <StocksTable portfolio={portfolio} />
          </ScrollArea>
        </div>
        <ChatToPDFButton />
      </div>
    </>
  );
};

export default StockSection;
