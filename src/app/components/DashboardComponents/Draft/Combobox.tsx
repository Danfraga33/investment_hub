"use client";
import * as React from "react";
import { CaretSortIcon, CheckIcon } from "@radix-ui/react-icons";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Plus } from "lucide-react";
import { useState } from "react";

type StockProps = {
  id: string;
  Name: string;
  Symbol: string;
  Exchange: string;
};

type ComboBoxProps = {
  stocksDB: StockProps[];
};

export function ComboboxDemo({ stocksDB }: ComboBoxProps) {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState<string>("");

  const stocks = stocksDB;

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">
          <Plus />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Add a Stock</DialogTitle>
          <DialogDescription>Insert a company name</DialogDescription>
        </DialogHeader>
        <Popover open={open} onOpenChange={setOpen}>
          <PopoverTrigger asChild>
            <Button
              variant="outline"
              role="combobox"
              aria-expanded={open}
              className="w-fit justify-between"
            >
              {value ? value : "Select a Stock"}

              <CaretSortIcon className="ml-2 h-4 w-4 shrink-0 opacity-50" />
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-[200px] p-0">
            <Command>
              <CommandInput placeholder="Search Stock..." className="h-9 w-8" />
              <CommandEmpty>No Stock found.</CommandEmpty>
              <CommandGroup>
                {stocks.map((stock) => (
                  <CommandItem
                    key={stock.id}
                    value={stock.Name}
                    onSelect={() => {
                      setValue(stock.Name);
                      setOpen(false);
                    }}
                  >
                    {stock.Name}
                    <CheckIcon
                      className={cn(
                        "ml-auto h-4 w-4",
                        value === stock.Symbol ? "opacity-100" : "opacity-0",
                      )}
                    />
                  </CommandItem>
                ))}
              </CommandGroup>
            </Command>
          </PopoverContent>
        </Popover>
        <DialogFooter>
          <Button
            type="submit"
            // onClick={() => AddToCurrentPortfolio(value?.symbol, value?.label)}
          >
            Save changes
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
