/*
  Warnings:

  - You are about to drop the column `value` on the `Persons` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Persons" DROP COLUMN "value",
ADD COLUMN     "price" TEXT;
