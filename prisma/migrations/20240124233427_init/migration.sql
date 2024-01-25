/*
  Warnings:

  - You are about to drop the `roles` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Users" DROP CONSTRAINT "users_roleId_foreign";

-- DropTable
DROP TABLE "roles";

-- CreateTable
CREATE TABLE "Roles" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Roles_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Users" ADD CONSTRAINT "users_roleId_foreign" FOREIGN KEY ("roleId") REFERENCES "Roles"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;
