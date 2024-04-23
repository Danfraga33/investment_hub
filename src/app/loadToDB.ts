import { PrismaClient } from "@prisma/client";

export const db = new PrismaClient();
const FINNHUB_API_URL =
  "https://finnhub.io/api/v1/stock/symbol?exchange=US&token=co44i4hr01qqksebmuggco44i4hr01qqksebmuh0";

async function fetchDataAndStore() {
  try {
    const response = await fetch(FINNHUB_API_URL);
    console.log("fetch finished");
    const responseArr = await response.json();

    await db.stockDB.createMany({
      data: responseArr.map((stock: any) => ({
        Name: stock.description,
        Symbol: stock.displaySymbol,
        Exchange: stock.mic,
      })),
      skipDuplicates: true,
    });

    console.log("This has been added", responseArr.length);
  } catch (err) {
    console.error(err);
  }
}
fetchDataAndStore();
