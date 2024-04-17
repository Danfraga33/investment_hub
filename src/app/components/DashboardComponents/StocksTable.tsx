import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";

const companies = [
  {
    Ticker: "AAPL",
    Name: "Apple ",
    Price: "$100",
    Portfolio: "high-growth",
  },
  {
    Ticker: "AMZN",
    Name: "Amazon",
    Price: "$150",
    Portfolio: "high-growth",
  },
  {
    Ticker: "GOOGL",
    Name: "Alphabet ",
    Price: "$175",
    Portfolio: "high-growth",
  },
  {
    Ticker: "MSFT",
    Name: "Microsoft",
    Price: "$120",
    Portfolio: "defensive",
  },
  {
    Ticker: "TSLA",
    Name: "Tesla ",
    Price: "$250",
    Portfolio: "high-growth",
  },
  {
    Ticker: "FB",
    Name: "Facebook ",
    Price: "$180",
    Portfolio: "high-growth",
  },
  {
    Ticker: "NFLX",
    Name: "Netflix ",
    Price: "$200",
    Portfolio: "high-growth",
  },
  {
    Ticker: "NVDA",
    Name: "NVIDIA ",
    Price: "$190",
    Portfolio: "defensive",
  },
  {
    Ticker: "PYPL",
    Name: "PayPal",
    Price: "$130",
    Portfolio: "defensive",
  },
  { Ticker: "V", Name: "Visa", Price: "$160", Portfolio: "defensive" },
];

type Portfolio = {
  portfolio: string;
};

export function StocksTable({ portfolio }: Portfolio) {
  console.log(portfolio);
  const stockList = companies.filter(
    (company) => company.Portfolio === portfolio,
  );
  return (
    <ScrollArea className="h-screen w-full rounded-md border p-2">
      <h4 className="mb-4 text-sm font-medium leading-none">Companies</h4>
      {stockList.map((company) => (
        <>
          <Button className="w-full items-start text-start" variant="secondary">
            <div key={company.Name} className="text-sm">
              {company.Name}
            </div>
          </Button>
          <Separator className="my-2" />
        </>
      ))}
    </ScrollArea>
  );
}
