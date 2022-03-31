/*
  Warnings:

  - The primary key for the `stocks` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `shopId` on the `stocks` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "stocks" DROP CONSTRAINT "stocks_shopId_fkey";

-- DropIndex
DROP INDEX "stocks_shopId_productId_idx";

-- AlterTable
ALTER TABLE "stocks" DROP CONSTRAINT "stocks_pkey",
DROP COLUMN "shopId",
ADD CONSTRAINT "stocks_pkey" PRIMARY KEY ("id", "productId");

-- CreateIndex
CREATE INDEX "stocks_productId_idx" ON "stocks"("productId");
