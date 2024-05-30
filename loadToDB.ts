import { PrismaClient } from "@prisma/client";

export const db = new PrismaClient();
const FINNHUB_STOCK_API =
  "https://finnhub.io/api/v1/stock/symbol?exchange=US&token=co44i4hr01qqksebmuggco44i4hr01qqksebmuh0";
type StockAPIResponse = {
  currency: string;
  description: string;
  displaySymbol: string;
  figi: string;
  mic: string;
  symbol: string;
  type: string;
};

async function fetchDataAndStore() {
  try {
    const stockInfo = await fetch(FINNHUB_STOCK_API);
    const stockInfoArr =
      (await stockInfo.json()) as unknown as StockAPIResponse[];

    console.log("fetch finished");

    await db.stock.createMany({
      data: stockInfoArr.map((stock) => ({
        name: stock.description,
        symbol: stock.displaySymbol,
        exchange: stock.mic,
      })),
      skipDuplicates: true,
    });

    // console.log("This has been added", responseArr.length);
  } catch (err) {
    console.error(err);
  }
}
fetchDataAndStore();
