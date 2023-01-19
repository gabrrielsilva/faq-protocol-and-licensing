/*
  Warnings:

  - You are about to drop the `Questions` table. If the table is not empty, all the data it contains will be lost.

*/
-- CreateEnum
CREATE TYPE "NomeAutarquia" AS ENUM ('PREFEITURA', 'CONVIAS', 'RODOVIA', 'FERROVIA', 'ENERGIA');

-- DropForeignKey
ALTER TABLE "Questions" DROP CONSTRAINT "Questions_id_fkey";

-- DropTable
DROP TABLE "Questions";

-- DropEnum
DROP TYPE "Autarquia";

-- CreateTable
CREATE TABLE "Autarquia" (
    "id" INTEGER NOT NULL,
    "nome" "NomeAutarquia" NOT NULL,
    "motivoAutarquiaSemProtocolo" TEXT,
    "statusAutarquia" "StatusAutarquia",
    "contatoAutarquia" TEXT,
    "ultimaInteracaoEPrazoResposta" TEXT,
    "desenvolverContato" TEXT,
    "proximosPassosEPrazo" TEXT,
    "vigencia" TEXT,

    CONSTRAINT "Autarquia_pkey" PRIMARY KEY ("id","nome")
);

-- AddForeignKey
ALTER TABLE "Autarquia" ADD CONSTRAINT "Autarquia_id_fkey" FOREIGN KEY ("id") REFERENCES "Projeto"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
