-- CreateEnum
CREATE TYPE "UserType" AS ENUM ('USER_ADMINISTRATOR', 'USER');

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "typeOfUser" "UserType" NOT NULL DEFAULT 'USER';
