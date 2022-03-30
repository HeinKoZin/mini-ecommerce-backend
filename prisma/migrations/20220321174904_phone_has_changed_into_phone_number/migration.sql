/*
  Warnings:

  - You are about to drop the column `phone` on the `shops` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX "shops_phone_key";

-- AlterTable
ALTER TABLE "shops" DROP COLUMN "phone";

-- CreateTable
CREATE TABLE "phone_on_shops" (
    "id" SERIAL NOT NULL,
    "phone" TEXT NOT NULL,
    "shopId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "phone_on_shops_pkey" PRIMARY KEY ("id","shopId")
);

-- CreateIndex
CREATE UNIQUE INDEX "phone_on_shops_id_key" ON "phone_on_shops"("id");

-- CreateIndex
CREATE INDEX "phone_on_shops_shopId_id_idx" ON "phone_on_shops"("shopId", "id");

-- AddForeignKey
ALTER TABLE "phone_on_shops" ADD CONSTRAINT "phone_on_shops_shopId_fkey" FOREIGN KEY ("shopId") REFERENCES "shops"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
