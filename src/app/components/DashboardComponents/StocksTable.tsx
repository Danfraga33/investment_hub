import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { ComboboxDemo } from "./Combobox";
import { Prisma } from "@prisma/client";
type PortfolioWithStocks = Prisma.PortfolioGetPayload<{
  include: { stocks: true };
}>;

type AddToCurrentPortfolio = (portfolioId: string, name: string) => void;
export function StocksTable({
  portfolio,
  AddToCurrentPortfolio,
}: {
  portfolio: PortfolioWithStocks;
  AddToCurrentPortfolio: AddToCurrentPortfolio;
}) {
  return (
    <ScrollArea className="h-full w-full rounded-md border p-2">
      <div className="mb-4 px-2 py-1 flex items-center justify-between">
        <h4 className="text-md font-semibold leading-none">Companies</h4>
        <ComboboxDemo
          portfolio={portfolio}
          AddToCurrentPortfolio={AddToCurrentPortfolio}
        />
      </div>

      {portfolio.stocks.map((company) => (
        <div key={company.id}>
          <Button
            className="w-full items-start text-start "
            variant="secondary"
          >
            {company.name}
          </Button>
          <Separator className="my-2" />
        </div>
      ))}
    </ScrollArea>
  );
}
