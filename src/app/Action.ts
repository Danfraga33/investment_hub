"use server";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export async function NOPE(portfolioId: string, symbol: string, name: string) {
  await prisma.stock.create({
    data: {
      name,
      symbol,
      portfolioId,
    },
  });
}
