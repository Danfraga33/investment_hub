import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
export const SummaryData = () => {
  return (
    <Tabs defaultValue="risk">
      <TabsList>
        <TabsTrigger value="section1">Section 1</TabsTrigger>
        <TabsTrigger value="section2">Section 2</TabsTrigger>
        {/* <TabsTrigger value="earnings">Earnings</TabsTrigger>
        <TabsTrigger value="valuation">Valuation</TabsTrigger>
        <TabsTrigger value="drivers">Key Drivers</TabsTrigger>
        <TabsTrigger value="EconomicAnalysis">
          Economic/Industry Analysis
        </TabsTrigger>
        <TabsTrigger value="conclusion">Conclusion</TabsTrigger> */}
      </TabsList>
      <div className="flex items-center">
        <div className="ml-auto flex items-center gap-2"></div>
      </div>
      <TabsContent value="section1">
        <Card x-chunk="dashboard-05-chunk-3">
          <CardHeader className="px-7">
            <CardTitle>Insights</CardTitle>
            <CardDescription>
              Insights from the recent annual report
            </CardDescription>
            <div
              id="summaries"
              className="bg-gray-100/50 border-2 border-solid border-gray-400 rounded-lg p-1"
            >
              <ul id="heading">
                <li className="text-lg font-semibold mb-1">APPLE Inc.</li>
                <li className="text-md font-bold mb-1">Business</li>
                <li className="text-sm mb-2">
                  Risk factors in an annual report outline possible events,
                  conditions, or uncertainties that may adversely affect a
                  company&apos;s business, financial condition, results of
                  operations, or stock price.
                </li>
              </ul>
              <Separator />

              <div id="summary-detail" className="py-1">
                <h3 className="text-sm font-semibold">Market Competition</h3>
                <p>asdsad</p>
                <br />

                <h3 className="text-sm font-semibold">
                  Supply Chain Disruptions
                </h3>
                <p>
                  Our business relies on a complex global supply chain.
                  Disruptions, such as natural disasters, political instability,
                  or pandemics, could affect our ability to manufacture and
                  deliver products on time, impacting sales and profitability.
                </p>
                <br />
                <h3 className="text-sm font-semibold">Intellectual Property</h3>
                <p>
                  We invest heavily in intellectual property to protect our
                  products and innovations. However, unauthorized use or
                  infringement by competitors can harm our business. Legal
                  disputes over intellectual property rights could result in
                  costly litigation.
                </p>
                <br />
                <h3 className="text-sm font-semibold">Regulatory Changes</h3>
                <p>
                  Our industry is subject to government regulations, which vary
                  across regions. Changes in regulations, taxes, or trade
                  policies could increase costs or restrict our business
                  operations, impacting our financial results.
                </p>
                <br />
                <h3 className="text-sm font-semibold">
                  Global Economic Conditions
                </h3>
                <p>
                  Our financial performance is influenced by global economic
                  trends. Economic downturns, currency fluctuations, or trade
                  tensions could reduce consumer spending, leading to lower
                  sales and profitability.
                </p>
                <br />
                <h3 className="text-sm font-semibold">
                  Data Security and Privacy
                </h3>
                <p>
                  We handle sensitive customer data and must comply with data
                  protection laws. Security breaches or privacy violations could
                  lead to reputational damage, fines, and loss of customer
                  trust.
                </p>

                <p>
                  These are not the only risk factors; others may exist or
                  emerge over time. Investors should consider all risks when
                  making investment decisions.
                </p>
              </div>
            </div>
          </CardHeader>
        </Card>
      </TabsContent>
      <TabsContent value="section2">
        <Card x-chunk="dashboard-05-chunk-3">
          <CardHeader className="px-7">
            <CardTitle>Insights</CardTitle>
            <CardDescription>
              Insights from the recent annual report
            </CardDescription>
            <div
              id="summaries"
              className="bg-gray-100/50 border-2 border-solid border-gray-400 rounded-lg p-1"
            >
              <ul id="heading">
                <li className="text-lg font-semibold mb-1">APPLE Inc.</li>
                <li className="text-md font-bold mb-1">Risk Factors</li>
                <li className="text-sm mb-2">
                  Risk factors in an annual report outline possible events,
                  conditions, or uncertainties that may adversely affect a
                  company&apos;s business, financial condition, results of
                  operations, or stock price.
                </li>
              </ul>
              <Separator />
              {/* {summaryData ?? ""} */}
              <div id="summary-detail" className="py-1">
                <h3 className="text-sm font-semibold">Market Competition</h3>
                <p>
                  The technology industry is highly competitive, with rapid
                  innovation and evolving customer preferences. We face intense
                  competition from other major tech companies, which may impact
                  our market share and revenue.
                </p>
                <br />

                <h3 className="text-sm font-semibold">
                  Supply Chain Disruptions
                </h3>
                <p>
                  Our business relies on a complex global supply chain.
                  Disruptions, such as natural disasters, political instability,
                  or pandemics, could affect our ability to manufacture and
                  deliver products on time, impacting sales and profitability.
                </p>
                <br />
                <h3 className="text-sm font-semibold">Intellectual Property</h3>
                <p>
                  We invest heavily in intellectual property to protect our
                  products and innovations. However, unauthorized use or
                  infringement by competitors can harm our business. Legal
                  disputes over intellectual property rights could result in
                  costly litigation.
                </p>
                <br />
                <h3 className="text-sm font-semibold">Regulatory Changes</h3>
                <p>
                  Our industry is subject to government regulations, which vary
                  across regions. Changes in regulations, taxes, or trade
                  policies could increase costs or restrict our business
                  operations, impacting our financial results.
                </p>
                <br />
                <h3 className="text-sm font-semibold">
                  Global Economic Conditions
                </h3>
                <p>
                  Our financial performance is influenced by global economic
                  trends. Economic downturns, currency fluctuations, or trade
                  tensions could reduce consumer spending, leading to lower
                  sales and profitability.
                </p>
                <br />
                <h3 className="text-sm font-semibold">
                  Data Security and Privacy
                </h3>
                <p>
                  We handle sensitive customer data and must comply with data
                  protection laws. Security breaches or privacy violations could
                  lead to reputational damage, fines, and loss of customer
                  trust.
                </p>

                <p>
                  These are not the only risk factors; others may exist or
                  emerge over time. Investors should consider all risks when
                  making investment decisions.
                </p>
              </div>
            </div>
          </CardHeader>
        </Card>
      </TabsContent>
    </Tabs>
  );
};
