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
    <div className="h-screen flex flex-col">
      <MaxWidthWrapper>
        <section className="bg-blue-700">
          <section className="rounded-xl p-6 shadow-md sm:gap-4 sm:py-4 sm:pl-14 px-4">
            <div className="flex justify-between items-start mb-6">
              <div className="flex gap-2">
                <h2 className="text-3xl font-bold text-[#14142B]">
                  Total Balance: $36,254
                </h2>
                <Badge className={cn("", "bg-green-300")}>
                  <MoveUpRight size={8} />
                </Badge>

                <p className="text-sm text-[#6E7191] mt-1">
                  +4.72% Daily Change
                </p>
              </div>
              <div className="flex space-x-2">
                <Button variant="ghost">View Analytics</Button>
                <Button variant="secondary">Send Money</Button>
                <Button variant="secondary">Add Money</Button>
              </div>
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
          </section>
        </section>
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
                      <p className="text-sm font-medium text-[#14142B]">AAPL</p>
                      <p className="text-xs text-[#6E7191]">Name</p>
                    </div>
                  </div>
                </TableCell>
                <TableCell>Technology</TableCell>
                <TableCell>+3.45%</TableCell>

                <TableCell className="text-right">$4.41</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">
                  <div className="flex items-center space-x-2">
                    <CreditCardIcon className="text-[#6E7191] h-6 w-6" />
                    <div>
                      <p className="text-sm font-medium text-[#14142B]">AAPL</p>
                      <p className="text-xs text-[#6E7191]">Name</p>
                    </div>
                  </div>
                </TableCell>
                <TableCell>Technology</TableCell>
                <TableCell>+3.45%</TableCell>

                <TableCell className="text-right">$4.41</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </section>
      </MaxWidthWrapper>
    </div>
  );
};

export default Holdings;
