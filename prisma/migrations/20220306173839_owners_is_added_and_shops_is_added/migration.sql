/*
  Warnings:

  - The `role` column on the `users` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- CreateEnum
CREATE TYPE "UserType" AS ENUM ('ADMIN', 'USER');

-- AlterTable
ALTER TABLE "users" DROP COLUMN "role",
ADD COLUMN     "role" "UserType" NOT NULL DEFAULT E'USER';

-- DropEnum
DROP TYPE "UserRole";

-- CreateTable
CREATE TABLE "owners_on_shops" (
    "shopId" INTEGER NOT NULL,
    "userId" INTEGER NOT NULL,
    "assignedby" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "owners_on_shops_pkey" PRIMARY KEY ("shopId","userId")
);

-- CreateIndex
CREATE INDEX "owners_on_shops_shopId_userId_idx" ON "owners_on_shops"("shopId", "userId");

-- AddForeignKey
ALTER TABLE "owners_on_shops" ADD CONSTRAINT "owners_on_shops_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "owners_on_shops" ADD CONSTRAINT "owners_on_shops_shopId_fkey" FOREIGN KEY ("shopId") REFERENCES "shops"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
