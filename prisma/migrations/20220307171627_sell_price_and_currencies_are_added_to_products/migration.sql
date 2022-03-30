-- CreateTable
CREATE TABLE "currencies" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "code" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "currencies_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "currencies_on_products" (
    "id" SERIAL NOT NULL,
    "sell_price" DOUBLE PRECISION NOT NULL,
    "productId" INTEGER NOT NULL,
    "currencyId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "currencies_on_products_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "currencies_name_id_idx" ON "currencies"("name", "id");

-- CreateIndex
CREATE INDEX "currencies_on_products_productId_currencyId_idx" ON "currencies_on_products"("productId", "currencyId");

-- AddForeignKey
ALTER TABLE "currencies_on_products" ADD CONSTRAINT "currencies_on_products_productId_fkey" FOREIGN KEY ("productId") REFERENCES "products"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "currencies_on_products" ADD CONSTRAINT "currencies_on_products_currencyId_fkey" FOREIGN KEY ("currencyId") REFERENCES "currencies"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
