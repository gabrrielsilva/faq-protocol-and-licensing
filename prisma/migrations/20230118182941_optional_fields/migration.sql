-- CreateEnum
CREATE TYPE "Autarquia" AS ENUM ('PREFEITURA', 'CONVIAS', 'RODOVIA', 'FERROVIA', 'ENERGIA');

-- CreateEnum
CREATE TYPE "StatusAutarquia" AS ENUM ('ANALISE', 'APROVADO', 'REPROVADO', 'PARADO', 'CANCELADO');

-- CreateTable
CREATE TABLE "Projeto" (
    "id" INTEGER NOT NULL,

    CONSTRAINT "Projeto_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Questions" (
    "id" INTEGER NOT NULL,
    "autarquias" "Autarquia"[],
    "motivoAutarquiaSemProtocolo" TEXT,
    "statusAutarquia" "StatusAutarquia",
    "contatoAutarquia" TEXT,
    "ultimaInteracaoEPrazoResposta" TEXT,
    "desenvolverContato" TEXT,
    "proximosPassosEPrazo" TEXT,
    "vigencia" TEXT,

    CONSTRAINT "Questions_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Questions" ADD CONSTRAINT "Questions_id_fkey" FOREIGN KEY ("id") REFERENCES "Projeto"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
