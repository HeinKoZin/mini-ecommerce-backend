/*
  Warnings:

  - Added the required column `cover_photo` to the `products` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "products" ADD COLUMN     "cover_photo" TEXT NOT NULL;

-- CreateTable
CREATE TABLE "feature_photos" (
    "id" SERIAL NOT NULL,
    "photo" TEXT NOT NULL,
    "productId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "feature_photos_pkey" PRIMARY KEY ("id","productId")
);

-- CreateIndex
CREATE UNIQUE INDEX "feature_photos_id_key" ON "feature_photos"("id");

-- CreateIndex
CREATE INDEX "feature_photos_productId_id_idx" ON "feature_photos"("productId", "id");

-- AddForeignKey
ALTER TABLE "feature_photos" ADD CONSTRAINT "feature_photos_productId_fkey" FOREIGN KEY ("productId") REFERENCES "products"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
