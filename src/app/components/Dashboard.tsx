"use client";
import { BarChart4, NotebookPen } from "lucide-react";
import MaxWidthWrapper from "./MaxWidthWrapper";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { SelectGroup } from "@radix-ui/react-select";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { useState } from "react";

// This data will come from the database. It was pass data/trigger the summarizer and visualizer.
const Dashboard = () => {
  const [position, setPosition] = useState("bottom");

  return (
    <MaxWidthWrapper>
      <div className="grid grid-cols-4 h-[25rem] gap-2">
        <div
          id="portfolio"
          className="grid p-2 border rounded-lg border-blue-500 h-full "
        >
          <div id="Portfolio">
            <div id="heading" className="mb-2 pb-0.5">
              <h1 className="mb-0.5 text-lg">Portfolio</h1>
              <hr style={{ color: "black" }} />
            </div>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button className="w-full" variant="outline">
                  Portfolio
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56">
                <DropdownMenuLabel>Select a Portfolio</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuRadioGroup
                  value={position}
                  onValueChange={setPosition}
                >
                  <DropdownMenuRadioItem value="top">
                    Portfolio 1
                  </DropdownMenuRadioItem>
                  <DropdownMenuRadioItem value="bottom">
                    Portfolio 2
                  </DropdownMenuRadioItem>
                  <DropdownMenuRadioItem value="right">
                    Portfolio 3
                  </DropdownMenuRadioItem>
                </DropdownMenuRadioGroup>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
          <div id="Stock Selection">
            <div id="heading" className="mb-2 pb-0.5">
              <h1 className="mb-0.5 text-lg">Stock Selection</h1>
              <hr />
            </div>
            <ul className="flex flex-col gap-1">
              <li className="font-medium border p-0.5 rounded-lg ">
                <Select>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Stock" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup className="flex gap-1 items-center">
                      <SelectItem value="summary">
                        <Button className="bg-white hover:bg-white transition-all">
                          <NotebookPen color="#444" size={20} />
                        </Button>
                      </SelectItem>
                      <SelectItem value="visualize">
                        <Button className="bg-white hover:bg-white transition-all">
                          <BarChart4 color="green" size={20} />
                        </Button>
                      </SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </li>
              <li className="font-medium border p-0.5 rounded-lg ">
                <Select>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Stock" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup className="flex gap-1 items-center">
                      <SelectItem value="summary">
                        <Button className="bg-white hover:bg-white transition-all">
                          <NotebookPen color="#444" size={20} />
                        </Button>
                      </SelectItem>
                      <SelectItem value="visualize">
                        <Button className="bg-white hover:bg-white transition-all">
                          <BarChart4 color="green" size={20} />
                        </Button>
                      </SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </li>
              <li className="font-medium border p-0.5 rounded-lg  ">
                <Select>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Stock" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup className="flex gap-1 items-center">
                      <SelectItem value="summary">
                        <Button className="bg-white hover:bg-white transition-all">
                          <NotebookPen color="#444" size={20} />
                        </Button>
                      </SelectItem>
                      <SelectItem value="visualize">
                        <Button className="bg-white hover:bg-white transition-all">
                          <BarChart4 color="green" size={20} />
                        </Button>
                      </SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex justify-center col-span-3 border border-primary items-center px-4 rounded-lg">
          <div id="chart">Chart</div>
        </div>
      </div>
      <div className="flex justify-center items-center pt-5">
        <div className="inline bg-blue-500 py-2 px-8 items-center text-lg text-white tracking-wide rounded-2xl">
          <h1>Stock Selector</h1>
          {/* <StockSelector /> */}
        </div>
      </div>
    </MaxWidthWrapper>
  );
};

export default Dashboard;
