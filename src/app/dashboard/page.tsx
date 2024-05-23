import { Card } from "@/components/ui/card";
import MaxWidthWrapper from "../components/MaxWidthWrapper";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import {
  CreditCardIcon,
  CuboidIcon,
  FileBoxIcon,
  LineChart,
  MoveVerticalIcon,
  PodcastIcon,
  TicketIcon,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const Holdings = async () => {
  return (
    <div className="h-screen flex flex-col">
      <MaxWidthWrapper>
        <section className="bg-white rounded-xl p-6 shadow-md sm:gap-4 sm:py-4 sm:pl-14 px-4  ">
          <div className="flex justify-between items-start mb-6">
            <div>
              <h2 className="text-3xl font-bold text-[#14142B]">
                Total Balance: $36,254
              </h2>

              <p className="text-sm text-[#6E7191] mt-1">+4.72% Daily Change</p>
            </div>
            <div className="flex space-x-2">
              <Button variant="ghost">View Analytics</Button>
              <Button variant="secondary">Send Money</Button>
              <Button variant="secondary">Add Money</Button>
              <MoveVerticalIcon className="text-[#6E7191] h-6 w-6" />
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
                <CreditCardIcon className="text-[#6E7191] h-6 w-6" />
                <Badge variant="secondary">-2.1%</Badge>
              </div>
              <div>
                <p className="text-lg text-[#14142B]">$700.00</p>
                <p className="text-sm text-[#6E7191]">Top Performer</p>
              </div>
            </Card>
            <Card className="bg-[#EFF0F7] p-4 rounded-lg">
              <div className="flex items-center justify-between mb-4">
                <CuboidIcon className="text-[#6E7191] h-6 w-6" />
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
          <div className=" gap-8">
            <div>
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
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <CreditCardIcon className="text-[#6E7191] h-6 w-6" />
                    <div>
                      <p className="text-sm font-medium text-[#14142B]">AAPL</p>
                      <p className="text-xs text-[#6E7191]">
                        Wed, 16 Feb, 18:11
                      </p>
                    </div>
                  </div>
                  <p className="text-sm font-medium text-[#34C759]">
                    +1,223.00
                  </p>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <FileBoxIcon className="text-[#6E7191] h-6 w-6" />
                    <div>
                      <p className="text-sm font-medium text-[#14142B]">
                        Dropbox
                      </p>
                      <p className="text-xs text-[#6E7191]">
                        Tue, 15 Feb, 14:24
                      </p>
                    </div>
                  </div>
                  <p className="text-sm font-medium text-[#FF3B30]">-200.00</p>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <TicketIcon className="text-[#6E7191] h-6 w-6" />
                    <div>
                      <p className="text-sm font-medium text-[#14142B]">
                        Zendesk
                      </p>
                      <p className="text-xs text-[#6E7191]">
                        Wed, 16 Feb, 18:11
                      </p>
                    </div>
                  </div>
                  <p className="text-sm font-medium text-[#FF3B30]">
                    -1,223.18
                  </p>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <PodcastIcon className="text-[#6E7191] h-6 w-6" />
                    <div>
                      <p className="text-sm font-medium text-[#14142B]">
                        Spotify
                      </p>
                      <p className="text-xs text-[#6E7191]">
                        Mon, 14 Feb, 16:40
                      </p>
                    </div>
                  </div>
                  <p className="text-sm font-medium text-[#FF3B30]">-19.00</p>
                </div>
              </div>
            </div>
            {/* <div>
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-semibold text-[#14142B]">
                  Cash Flow
                </h3>
                <Link
                  className="text-sm text-[#6E7191] hover:text-[#14142B]"
                  href="#"
                >
                  See All
                </Link>
              </div>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <p className="text-sm font-medium text-[#14142B]">MONEY IN</p>
                  <p className="text-sm font-medium text-[#34C759]">$5,083</p>
                </div>
                <div className="flex justify-between items-center">
                  <p className="text-sm font-medium text-[#14142B]">
                    MONEY OUT
                  </p>
                  <p className="text-sm font-medium text-[#FF3B30]">$485.64</p>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <Badge variant="secondary">Stripe</Badge>
                    <p className="text-sm text-[#14142B]">$3,514.72</p>
                  </div>
                  <div className="flex justify-between items-center">
                    <Badge variant="secondary">Crypto Academy</Badge>
                    <p className="text-sm text-[#14142B]">$1,017.49</p>
                  </div>
                  <div className="flex justify-between items-center">
                    <Badge variant="secondary">Wire Return</Badge>
                    <p className="text-sm text-[#14142B]">$318.44</p>
                  </div>
                </div>
              </div>
            </div> */}
          </div>
        </section>
        {/* <div className="flex flex-col h-full bg-[#010124]">
          <div className="h-full  sm:py-4 ">
            <div className="">
              <h1 className="text-[#eee] scroll-m-20 text-2xl font-semibold tracking-tight lg:text-4xl">
                Total Growth
              </h1>
            </div>
            <div className="flex gap-2 items-end w-full justify-around h-full">
              <PortfolioCard
                heading="Portfolio Name"
                description="Daily Growth"
                growth="$234"
              />
              <PortfolioCard
                heading="Apple"
                description="Top Performing"
                growth="4.47%"
              />
              <PortfolioCard
                heading="Technology"
                description="Top Performancing Sector"
                growth="7.22%"
              />
            </div>
          </div>
        </div> */}
        {/* <div className="bg-[#eee]">
          <Table>
            <TableCaption>A list of companies in your portfolio.</TableCaption>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[100px]">Ticker</TableHead>
                <TableHead>Name</TableHead>
                <TableHead className="text-right">Amount</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className="font-medium">AAPL</TableCell>
                <TableCell>Apple Inc.</TableCell>
                <TableCell className="text-right font-medium">+4.33%</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div> */}
      </MaxWidthWrapper>
    </div>
  );
};

export default Holdings;
