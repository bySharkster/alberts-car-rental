/*
  Warnings:

  - Added the required column `imgUrl` to the `Vehicle` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Vehicle" ADD COLUMN     "features" TEXT[],
ADD COLUMN     "imgUrl" TEXT NOT NULL;
