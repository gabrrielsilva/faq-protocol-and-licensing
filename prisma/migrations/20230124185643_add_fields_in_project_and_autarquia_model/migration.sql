-- AlterTable
ALTER TABLE "Autarquia" ADD COLUMN     "data_previsao_protocolo" TEXT,
ADD COLUMN     "data_real_protocolo" TEXT,
ADD COLUMN     "km_aereo" TEXT,
ADD COLUMN     "km_sub" TEXT,
ADD COLUMN     "protocolo" TEXT;

-- AlterTable
ALTER TABLE "Projeto" ADD COLUMN     "cidade" TEXT[],
ADD COLUMN     "cliente" TEXT,
ADD COLUMN     "data_acionamento" TEXT,
ADD COLUMN     "data_previsao_licenca" TEXT,
ADD COLUMN     "data_real_licenca" TEXT,
ADD COLUMN     "descricao" TEXT,
ADD COLUMN     "estado" TEXT,
ADD COLUMN     "observacao_cliente" TEXT,
ADD COLUMN     "orgao" TEXT;
