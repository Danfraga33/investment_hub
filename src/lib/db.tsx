import { PrismaClient } from "@prisma/client";
import { Pool, neonConfig } from "@neondatabase/serverless";
import { PrismaNeon } from "@prisma/adapter-neon";
import dotenv from "dotenv";
import ws from "ws";

dotenv.config();
neonConfig.webSocketConstructor = ws;
const connectionString = `${process.env.DATABASE_URL}`;

const pool = new Pool({ connectionString });
const adapter = new PrismaNeon(pool);
export const db = new PrismaClient({ adapter });

// This is to mitigate the error message: Prisma client is initialized constantly (>10 times)
// const globalForPrisma = globalThis as unknown as {
//   prisma: PrismaClient | undefined;
// };

// export const prisma =
//   globalForPrisma.prisma ?? new PrismaClient().$extends(withAccelerate());
// if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;

// export const db = new PrismaClient().$extends(withAccelerate());
// export const db = new PrismaClient();
