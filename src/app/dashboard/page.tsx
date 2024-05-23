import { Card } from "@/components/ui/card";
import MaxWidthWrapper from "../components/MaxWidthWrapper";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import {
  CreditCardIcon,
  Crown,
  LineChart,
  MoveUpRight,
  MoveVerticalIcon,
  PieChart,
  Sparkles,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableRow,
} from "@/components/ui/table";
import { cn } from "@/lib/utils";

const Holdings = async () => {
  return (
    <div className="h-screen  flex flex-col">
      <MaxWidthWrapper>
        <section className="bg-white">
          <section className="rounded-xl p-6 shadow-md sm:gap-4 sm:py-4 sm:pl-14 px-4">
            <div className="flex justify-between items-start mb-6">
              <div className="flex flex-col gap-2 py-6">
                <p className="text-xs">Total Balance</p>
                <div className="flex gap-4 items-end">
                  <h2 className="text-4xl font-semibold text-[#14142B]">
                    $36,254
                  </h2>
                  <div className="flex items-end gap-2">
                    <Badge className="bg-green-300 px-1 py-1">
                      <p className="text-xs p-0 m-0">+4.72%</p>
                    </Badge>
                    <p className="text-neutral-500/55 text-xs ">
                      Since Yesterday
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-2 pb-4">
              <Sparkles />
              <p className="text-xl tracking-tight">Overview</p>
            </div>
            <div className="grid grid-cols-3 gap-6 mb-8">
              <Card className="bg-[#EFF0F7] p-4 rounded-lg">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <LineChart className="text-[#6E7191] h-6 w-6" />
                    <Badge variant="secondary">-2.1%</Badge>
                  </div>
                  <div>
                    <p className="text-lg text-[#14142B]">$33,842 </p>
                    <p className="text-sm text-[#6E7191]">Daily Change</p>
                  </div>
                </div>
              </Card>
              <Card className="bg-[#EFF0F7] p-4 rounded-lg">
                <div className="flex items-center justify-between mb-4">
                  <Crown className="text-[#6E7191] h-6 w-6" />
                  <Badge variant="secondary">-2.1%</Badge>
                </div>
                <div>
                  <p className="text-lg text-[#14142B]">$700.00</p>
                  <p className="text-sm text-[#6E7191]">Top Performer</p>
                </div>
              </Card>
              <Card className="bg-[#EFF0F7] p-4 rounded-lg">
                <div className="flex items-center justify-between mb-4">
                  <PieChart className="text-[#6E7191] h-6 w-6" />
                  <Badge variant="secondary">-2.1%</Badge>
                </div>
                <div>
                  <p className="text-lg text-[#14142B]">$1,623</p>
                  <p className="text-sm text-[#6E7191]">
                    Top Performing Industry
                  </p>
                </div>
              </Card>
            </div>

            <section>
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-semibold text-[#14142B]">
                  Recent Transactions
                </h3>
                <Link
                  className="text-sm text-[#6E7191] hover:text-[#14142B]"
                  href="#"
                >
                  See All
                </Link>
              </div>
              <Table>
                {/* <TableHeader>
              <TableRow>
                <TableHead className="w-[100px]">Invoice</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Method</TableHead>
                <TableHead className="text-right">Amount</TableHead>
              </TableRow>
            </TableHeader> */}
                <TableBody>
                  <TableRow>
                    <TableCell className="font-medium">
                      <div className="flex items-center space-x-2">
                        <CreditCardIcon className="text-[#6E7191] h-6 w-6" />
                        <div>
                          <p className="text-sm font-medium text-[#14142B]">
                            AAPL
                          </p>
                          <p className="text-xs text-[#6E7191]">Apple Inc.</p>
                        </div>
                      </div>
                    </TableCell>
                    <TableCell>Technology</TableCell>
                    <TableCell className="text-right">+3.45%</TableCell>

                    <TableCell className="text-right">$4.41</TableCell>
                    <TableCell className="text-right">
                      <Button variant="outline">Analyze</Button>
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </section>
          </section>
        </section>
      </MaxWidthWrapper>
    </div>
  );
};

export default Holdings;
