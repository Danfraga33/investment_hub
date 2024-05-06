"use client";
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
import { type ReactNode, useTransition } from "react";
import ChatToPDFButton from "./ChatToPDFButton";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { DashboardProps } from "@/app/components/DashboardComponents/Draft/DashboardDraft";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
///////////////////////////////

type SideBarProps = {
  collectionOfPortfolios: DashboardProps["collectionOfPortfolios"];
  children: ReactNode;
};

const SideBar = ({ collectionOfPortfolios, children }: SideBarProps) => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [isPending, startTransition] = useTransition();

  function handleURLChange(portfolioId: string) {
    let updatedSearchParams = new URLSearchParams(searchParams);

    updatedSearchParams.set("p", portfolioId);
    startTransition(() => {
      router.replace(`${pathname}?${updatedSearchParams.toString()}`);
    });
  }
  return (
    <div className="flex flex-col justify-between p-2 border rounded-lg border-r-2 border-b-2 border-gray-400 gap-2 h-full ">
      <div>
        <div className="flex gap-2 items-center justify-between py-1">
          <Select.Root
            onValueChange={(value) => {
              handleURLChange(value);
            }}
          >
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
                {collectionOfPortfolios.map((portfolio) => (
                  <SelectItem
                    key={portfolio.id}
                    value={portfolio.id}
                    className="font-semibold"
                  >
                    {portfolio.name}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select.Root>
          {/* Save Button */}
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="default">Save</Button>
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetTitle>Portfolio</SheetTitle>
                <SheetDescription>
                  Enter a portfolio name below and press save.
                </SheetDescription>
              </SheetHeader>
              <div className="grid gap-4 py-4">
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="name" className="text-right">
                    Name
                  </Label>
                  <Input id="name" className="col-span-3" />
                </div>
              </div>
              <SheetFooter>
                <SheetClose asChild>
                  <Button type="submit">Save changes</Button>
                </SheetClose>
              </SheetFooter>
            </SheetContent>
          </Sheet>
        </div>
        <ScrollArea className="h-80 w-full rounded-md border">
          {children}
        </ScrollArea>
      </div>
      <ChatToPDFButton />
    </div>
  );
};

export default SideBar;
