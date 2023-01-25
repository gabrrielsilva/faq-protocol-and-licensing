import { Autarquia } from '@prisma/client';
import type { NextApiRequest, NextApiResponse } from 'next';
import NextCors from 'nextjs-cors';
import { prisma } from '../../config/prisma';

type Input = { id: string, autarquia: Autarquia }

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  await NextCors(req, res, { methods: ['GET', 'PUT', 'POST', 'DELETE'], origin: '*', optionsSuccessStatus: 200 });
  console.log(req.method, req.body);
  
  if (req.method === 'POST') {
    const { id, autarquia } = req.body as Input;
    
    if (!id || !autarquia) throw Error('Missing params');

    await prisma.projeto.create({
      data: {
        id: +id,
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
            },
            where: {
              id_nome: {
                id: +id,
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
    const { id, autarquia } = req.body as Input;

    await prisma.projeto.update({
      data: {
        id: +id,
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
            },
            where: {
              id_nome: {
                id: +id,
                nome: autarquia.nome
              }
            }
          }
        }
      },
      where: {
        id: +id,
      }
    })
    res.status(204).end();
  }
}