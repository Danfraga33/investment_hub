-- AlterTable
ALTER TABLE "Stock" ADD COLUMN     "last" DECIMAL(65,30),
ADD COLUMN     "logo" TEXT,
ADD COLUMN     "percentageChange" DECIMAL(65,30);
