/*
  Warnings:

  - You are about to drop the `feature_photos` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `phone_on_shops` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `wish_lists` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "feature_photos" DROP CONSTRAINT "feature_photos_productId_fkey";

-- DropForeignKey
ALTER TABLE "phone_on_shops" DROP CONSTRAINT "phone_on_shops_shopId_fkey";

-- DropForeignKey
ALTER TABLE "wish_lists" DROP CONSTRAINT "wish_lists_productId_fkey";

-- DropForeignKey
ALTER TABLE "wish_lists" DROP CONSTRAINT "wish_lists_userId_fkey";

-- DropTable
DROP TABLE "feature_photos";

-- DropTable
DROP TABLE "phone_on_shops";

-- DropTable
DROP TABLE "wish_lists";

-- CreateTable
CREATE TABLE "wishlists" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "productId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "wishlists_pkey" PRIMARY KEY ("id","userId","productId")
);

-- CreateTable
CREATE TABLE "phone_shops" (
    "id" SERIAL NOT NULL,
    "phone" TEXT NOT NULL,
    "shopId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "phone_shops_pkey" PRIMARY KEY ("id","shopId")
);

-- CreateTable
CREATE TABLE "featured_photos" (
    "id" SERIAL NOT NULL,
    "photo" TEXT NOT NULL,
    "productId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "featured_photos_pkey" PRIMARY KEY ("id","productId")
);

-- CreateTable
CREATE TABLE "orders" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "productId" INTEGER NOT NULL,
    "total_price" DOUBLE PRECISION NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "orders_pkey" PRIMARY KEY ("id","userId","productId")
);

-- CreateTable
CREATE TABLE "ordered_products" (
    "id" SERIAL NOT NULL,
    "quantity" INTEGER NOT NULL,
    "price" DOUBLE PRECISION NOT NULL,
    "total" DOUBLE PRECISION NOT NULL,
    "sub_total" DOUBLE PRECISION NOT NULL,
    "discount" DOUBLE PRECISION NOT NULL,
    "orderId" INTEGER NOT NULL,
    "productId" INTEGER NOT NULL,
    "optionId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "ordered_products_pkey" PRIMARY KEY ("id","orderId","productId")
);

-- CreateTable
CREATE TABLE "options" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "value" TEXT NOT NULL,
    "productId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "options_pkey" PRIMARY KEY ("id","productId")
);

-- CreateTable
CREATE TABLE "addresses" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "adress" TEXT NOT NULL,
    "townshipId" INTEGER NOT NULL,
    "userId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "addresses_pkey" PRIMARY KEY ("id","userId")
);

-- CreateTable
CREATE TABLE "states" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "states_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "townships" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "stateId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "townships_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "shipping_address" (
    "id" SERIAL NOT NULL,
    "addressId" INTEGER NOT NULL,
    "orderId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "shipping_address_pkey" PRIMARY KEY ("id","orderId")
);

-- CreateIndex
CREATE UNIQUE INDEX "wishlists_id_key" ON "wishlists"("id");

-- CreateIndex
CREATE INDEX "wishlists_userId_productId_idx" ON "wishlists"("userId", "productId");

-- CreateIndex
CREATE UNIQUE INDEX "wishlists_productId_key" ON "wishlists"("productId");

-- CreateIndex
CREATE UNIQUE INDEX "phone_shops_id_key" ON "phone_shops"("id");

-- CreateIndex
CREATE INDEX "phone_shops_shopId_id_idx" ON "phone_shops"("shopId", "id");

-- CreateIndex
CREATE UNIQUE INDEX "featured_photos_id_key" ON "featured_photos"("id");

-- CreateIndex
CREATE INDEX "featured_photos_productId_id_idx" ON "featured_photos"("productId", "id");

-- CreateIndex
CREATE UNIQUE INDEX "orders_id_key" ON "orders"("id");

-- CreateIndex
CREATE INDEX "orders_userId_productId_idx" ON "orders"("userId", "productId");

-- CreateIndex
CREATE UNIQUE INDEX "ordered_products_id_key" ON "ordered_products"("id");

-- CreateIndex
CREATE INDEX "ordered_products_orderId_productId_idx" ON "ordered_products"("orderId", "productId");

-- CreateIndex
CREATE UNIQUE INDEX "ordered_products_productId_key" ON "ordered_products"("productId");

-- CreateIndex
CREATE UNIQUE INDEX "options_id_key" ON "options"("id");

-- CreateIndex
CREATE INDEX "options_productId_id_idx" ON "options"("productId", "id");

-- CreateIndex
CREATE UNIQUE INDEX "addresses_id_key" ON "addresses"("id");

-- CreateIndex
CREATE INDEX "addresses_userId_id_idx" ON "addresses"("userId", "id");

-- CreateIndex
CREATE UNIQUE INDEX "states_id_key" ON "states"("id");

-- CreateIndex
CREATE INDEX "states_name_idx" ON "states"("name");

-- CreateIndex
CREATE UNIQUE INDEX "townships_id_key" ON "townships"("id");

-- CreateIndex
CREATE INDEX "townships_name_idx" ON "townships"("name");

-- CreateIndex
CREATE UNIQUE INDEX "shipping_address_id_key" ON "shipping_address"("id");

-- CreateIndex
CREATE INDEX "shipping_address_orderId_id_idx" ON "shipping_address"("orderId", "id");

-- CreateIndex
CREATE UNIQUE INDEX "shipping_address_orderId_key" ON "shipping_address"("orderId");

-- CreateIndex
CREATE UNIQUE INDEX "shipping_address_addressId_key" ON "shipping_address"("addressId");

-- AddForeignKey
ALTER TABLE "wishlists" ADD CONSTRAINT "wishlists_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "wishlists" ADD CONSTRAINT "wishlists_productId_fkey" FOREIGN KEY ("productId") REFERENCES "products"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "phone_shops" ADD CONSTRAINT "phone_shops_shopId_fkey" FOREIGN KEY ("shopId") REFERENCES "shops"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "featured_photos" ADD CONSTRAINT "featured_photos_productId_fkey" FOREIGN KEY ("productId") REFERENCES "products"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "orders" ADD CONSTRAINT "orders_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ordered_products" ADD CONSTRAINT "ordered_products_productId_fkey" FOREIGN KEY ("productId") REFERENCES "products"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ordered_products" ADD CONSTRAINT "ordered_products_orderId_fkey" FOREIGN KEY ("orderId") REFERENCES "orders"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ordered_products" ADD CONSTRAINT "ordered_products_optionId_fkey" FOREIGN KEY ("optionId") REFERENCES "options"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "options" ADD CONSTRAINT "options_productId_fkey" FOREIGN KEY ("productId") REFERENCES "products"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "addresses" ADD CONSTRAINT "addresses_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "addresses" ADD CONSTRAINT "addresses_townshipId_fkey" FOREIGN KEY ("townshipId") REFERENCES "townships"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "townships" ADD CONSTRAINT "townships_stateId_fkey" FOREIGN KEY ("stateId") REFERENCES "states"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "shipping_address" ADD CONSTRAINT "shipping_address_orderId_fkey" FOREIGN KEY ("orderId") REFERENCES "orders"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "shipping_address" ADD CONSTRAINT "shipping_address_addressId_fkey" FOREIGN KEY ("addressId") REFERENCES "addresses"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
