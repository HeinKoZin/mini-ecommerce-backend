-- CreateEnum
CREATE TYPE "ProductStatus" AS ENUM ('AVAILABLE', 'STOCK_OUT', 'PRE_ORDER');

-- CreateTable
CREATE TABLE "products" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "quantity" INTEGER NOT NULL,
    "product_code" TEXT NOT NULL,
    "status" "ProductStatus" NOT NULL,
    "shopId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "products_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "shops" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "address" TEXT,
    "phone" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "shops_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "products_id_key" ON "products"("id");

-- CreateIndex
CREATE INDEX "products_name_id_product_code_idx" ON "products"("name", "id", "product_code");

-- CreateIndex
CREATE UNIQUE INDEX "shops_id_key" ON "shops"("id");

-- CreateIndex
CREATE UNIQUE INDEX "shops_phone_key" ON "shops"("phone");

-- CreateIndex
CREATE INDEX "shops_name_id_idx" ON "shops"("name", "id");

-- AddForeignKey
ALTER TABLE "products" ADD CONSTRAINT "products_shopId_fkey" FOREIGN KEY ("shopId") REFERENCES "shops"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
