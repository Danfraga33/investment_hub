"use client";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Bot, Home, LineChart, NotebookText } from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";
import { UserNav } from "./UserNav";
import { cn } from "@/lib/utils";

export const Sidebar = () => {
  const [selected, setSelected] = useState("/Dashboard");
  return (
    <aside className="z-99 fixed inset-y-0 left-0 z-10 hidden w-14 mt-14 flex-col border-r bg-background sm:flex">
      <nav className="flex flex-col items-center gap-4 px-2 sm:py-5 ">
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Link
                href="/Dashboard/Overview"
                className={cn(
                  "flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8",
                  selected === "/Dashboard"
                    ? "bg-accent"
                    : "text-muted-foreground",
                )}
                onClick={() => setSelected("/Dashboard/Overview")}
              >
                <Home className="h-5 w-5" />
                <span className="sr-only">Overview</span>
              </Link>
            </TooltipTrigger>
            <TooltipContent side="right">Overview</TooltipContent>
          </Tooltip>
        </TooltipProvider>
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Link
                href="/Dashboard/Insights"
                className={cn(
                  "flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8",
                  selected === "/Dashboard/Insights"
                    ? "bg-accent"
                    : "text-muted-foreground",
                )}
                onClick={() => setSelected("/Dashboard/Portfolio")}
              >
                <NotebookText className="h-5 w-5" />
                <span className="sr-only">Insights</span>
              </Link>
            </TooltipTrigger>
            <TooltipContent side="right">Insights</TooltipContent>
          </Tooltip>
        </TooltipProvider>
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Link
                href="/Dashboard/PDFChat"
                className={cn(
                  "flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8",
                  selected === "/Dashboard/PDFChat"
                    ? "bg-accent"
                    : "text-muted-foreground",
                )}
                onClick={() => setSelected("/Dashboard/PDFChat")}
              >
                <Bot className="h-5 w-5" />
                <span className="sr-only">Annual Report Assistant</span>
              </Link>
            </TooltipTrigger>
            <TooltipContent side="right">
              Annual Report Assistant
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>

        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Link
                href="/Dashboard/Analytics"
                className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
                onClick={() => setSelected("/Dashboard/Analytics")}
              >
                <LineChart className="h-5 w-5" />
                <span className="sr-only">Analytics</span>
              </Link>
            </TooltipTrigger>
            <TooltipContent side="right">Analytics</TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </nav>
      <nav className="mt-auto flex flex-col items-center gap-4 px-2 sm:py-5">
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <UserNav />
            </TooltipTrigger>
            <TooltipContent side="right">Settings</TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </nav>
    </aside>
  );
};
