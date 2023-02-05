import { Autarquia } from '@prisma/client';
import type { NextApiRequest, NextApiResponse } from 'next';
import NextCors from 'nextjs-cors';
import { Projeto } from '..';
import { prisma } from '../../config/prisma';

type Input = { id: string, projeto: Projeto, autarquia: Autarquia }

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  await NextCors(req, res, { methods: ['GET', 'PUT', 'POST', 'DELETE'], origin: '*', optionsSuccessStatus: 200 });
  
  if (req.method === 'POST') {
    const { projeto, autarquia } = req.body as Input;
    
    if (!projeto.id || !autarquia) throw Error('Missing params');

    await prisma.projeto.create({
      data: {
        id: projeto.id,
        descricao: projeto.descricao,
        data_acionamento: projeto.data_acionamento,
        cidade: projeto.cidade,
        estado: projeto.estado,
        data_previsao_licenca: projeto.data_previsao_licenca,
        data_real_licenca: projeto.data_real_licenca,
        cliente: projeto.cliente,
        orgao: projeto.orgao,
        prioridade: projeto.prioridade,
        autarquias: {
          connectOrCreate: {
            create: {
              nome: autarquia.nome,
              motivoAutarquiaSemProtocolo: autarquia.motivoAutarquiaSemProtocolo ? autarquia.motivoAutarquiaSemProtocolo : undefined,
              statusAutarquia: autarquia.statusAutarquia ? autarquia.statusAutarquia : undefined,
              contatoAutarquia: autarquia.contatoAutarquia ? autarquia.contatoAutarquia : undefined,
              ultimaInteracaoEPrazoResposta: autarquia.ultimaInteracaoEPrazoResposta ? autarquia.ultimaInteracaoEPrazoResposta : undefined,
              desenvolverContato: autarquia.desenvolverContato ? autarquia.desenvolverContato : undefined,
              proximosPassosEPrazo: autarquia.proximosPassosEPrazo ? autarquia.proximosPassosEPrazo : undefined,
              vigencia: autarquia.vigencia ? autarquia.vigencia : undefined ,
              km_aereo: autarquia.km_aereo ? autarquia.km_aereo : undefined,
              km_sub: autarquia.km_sub ? autarquia.km_sub : undefined,
              data_previsao_protocolo: autarquia.data_previsao_protocolo ? autarquia.data_previsao_protocolo : undefined,
              data_real_protocolo: autarquia.data_real_protocolo ? autarquia.data_real_protocolo : undefined,
              protocolo: autarquia.protocolo ? autarquia.protocolo : undefined,
              observacao_cliente: autarquia.observacao_cliente ? autarquia.observacao_cliente : undefined,
            },
            where: {
              id_nome: {
                id: projeto.id,
                nome: autarquia.nome
              }
            }
          },
        }
      }
    })
    res.status(201).end();
  }

  if (req.method === 'PUT') {
    const { projeto, autarquia } = req.body as Input;

    await prisma.projeto.update({
      data: {
        id: projeto.id,
        descricao: projeto.descricao,
        data_acionamento: projeto.data_acionamento,
        cidade: projeto.cidade,
        estado: projeto.estado,
        data_previsao_licenca: projeto.data_previsao_licenca,
        data_real_licenca: projeto.data_real_licenca,
        cliente: projeto.cliente,
        orgao: projeto.orgao,
        prioridade: projeto.prioridade,
        autarquias: {
          upsert: {
            create: {
              nome: autarquia.nome,
              motivoAutarquiaSemProtocolo: autarquia.motivoAutarquiaSemProtocolo ? autarquia.motivoAutarquiaSemProtocolo : undefined,
              statusAutarquia: autarquia.statusAutarquia ? autarquia.statusAutarquia : undefined,
              contatoAutarquia: autarquia.contatoAutarquia ? autarquia.contatoAutarquia : undefined,
              ultimaInteracaoEPrazoResposta: autarquia.ultimaInteracaoEPrazoResposta ? autarquia.ultimaInteracaoEPrazoResposta : undefined,
              desenvolverContato: autarquia.desenvolverContato ? autarquia.desenvolverContato : undefined,
              proximosPassosEPrazo: autarquia.proximosPassosEPrazo ? autarquia.proximosPassosEPrazo : undefined,
              vigencia: autarquia.vigencia ? autarquia.vigencia : undefined,
              km_aereo: autarquia.km_aereo ? autarquia.km_aereo : undefined,
              km_sub: autarquia.km_sub ? autarquia.km_sub : undefined,
              data_previsao_protocolo: autarquia.data_previsao_protocolo ? autarquia.data_previsao_protocolo : undefined,
              data_real_protocolo: autarquia.data_real_protocolo ? autarquia.data_real_protocolo : undefined,
              protocolo: autarquia.protocolo ? autarquia.protocolo : undefined,
              observacao_cliente: autarquia.observacao_cliente ? autarquia.observacao_cliente : undefined,
            },
            update: {
              nome: autarquia.nome,
              motivoAutarquiaSemProtocolo: autarquia.motivoAutarquiaSemProtocolo ? autarquia.motivoAutarquiaSemProtocolo : undefined,
              statusAutarquia: autarquia.statusAutarquia ? autarquia.statusAutarquia : undefined,
              contatoAutarquia: autarquia.contatoAutarquia ? autarquia.contatoAutarquia : undefined,
              ultimaInteracaoEPrazoResposta: autarquia.ultimaInteracaoEPrazoResposta ? autarquia.ultimaInteracaoEPrazoResposta : undefined,
              desenvolverContato: autarquia.desenvolverContato ? autarquia.desenvolverContato : undefined,
              proximosPassosEPrazo: autarquia.proximosPassosEPrazo ? autarquia.proximosPassosEPrazo : undefined,
              vigencia: autarquia.vigencia ? autarquia.vigencia : undefined,
              km_aereo: autarquia.km_aereo ? autarquia.km_aereo : undefined,
              km_sub: autarquia.km_sub ? autarquia.km_sub : undefined,
              data_previsao_protocolo: autarquia.data_previsao_protocolo ? autarquia.data_previsao_protocolo : undefined,
              data_real_protocolo: autarquia.data_real_protocolo ? autarquia.data_real_protocolo : undefined,
              protocolo: autarquia.protocolo ? autarquia.protocolo : undefined,
              observacao_cliente: autarquia.observacao_cliente ? autarquia.observacao_cliente : undefined,
            },
            where: {
              id_nome: {
                id: projeto.id,
                nome: autarquia.nome
              }
            }
          }
        }
      },
      where: {
        id: projeto.id,
      }
    })
    res.status(204).end();
  }
}