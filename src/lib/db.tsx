import { PrismaClient } from "@prisma/client";

// This is to mitigate the error message: Prisma client is initialized constantly (>10 times)
const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined;
};

export const prisma = globalForPrisma.prisma ?? new PrismaClient();
if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;

export const db = prisma;
