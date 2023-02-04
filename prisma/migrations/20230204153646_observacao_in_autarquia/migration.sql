/*
  Warnings:

  - You are about to drop the column `observacao_cliente` on the `Projeto` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Autarquia" ADD COLUMN     "observacao_cliente" TEXT;

-- AlterTable
ALTER TABLE "Projeto" DROP COLUMN "observacao_cliente";
