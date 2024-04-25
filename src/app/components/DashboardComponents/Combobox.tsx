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

const frameworks: Portfolio[] = [
  {
    value: "next.js",
    label: "Next.js",
    symbol: "TasdTT",
  },
  {
    value: "sveltekit",
    label: "SvelteKit",
    symbol: "asdasd",
  },
  {
    value: "nuxt.js",
    label: "Nuxt.js",
    symbol: "fddf",
  },
  {
    value: "remix",
    label: "Remix",
    symbol: "qqq",
  },
  {
    value: "astro",
    label: "Astro",
    symbol: "qwe",
  },
];
type Portfolio = {
  symbol: string;
  label: string;
  value: string;
};
export function ComboboxDemo({ portfolio, AddToCurrentPortfolio }) {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState<Portfolio | undefined>(undefined);
  console.log(value);
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
              className="w-[200px] justify-between"
            >
              {value
                ? frameworks.find(
                    (framework) => framework.value === value.value,
                  )?.label
                : "Select framework..."}
              <CaretSortIcon className="ml-2 h-4 w-4 shrink-0 opacity-50" />
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-[200px] p-0">
            <Command>
              <CommandInput placeholder="Search framework..." className="h-9" />
              <CommandEmpty>No framework found.</CommandEmpty>
              <CommandGroup>
                {frameworks.map((framework) => (
                  <CommandItem
                    key={framework.value}
                    value={framework.value}
                    onSelect={() => {
                      setValue(framework);
                      setOpen(false);
                    }}
                  >
                    {framework.label}
                    <CheckIcon
                      className={cn(
                        "ml-auto h-4 w-4",
                        value?.value === framework.value
                          ? "opacity-100"
                          : "opacity-0",
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
            onClick={() => AddToCurrentPortfolio(value?.symbol, value?.label)}
          >
            Save changes
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
