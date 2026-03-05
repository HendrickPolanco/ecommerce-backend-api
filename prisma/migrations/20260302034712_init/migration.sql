-- DropForeignKey
ALTER TABLE "Product" DROP CONSTRAINT "Product_userID_fkey";

-- AlterTable
ALTER TABLE "Product" ALTER COLUMN "userID" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "Product" ADD CONSTRAINT "Product_userID_fkey" FOREIGN KEY ("userID") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;
