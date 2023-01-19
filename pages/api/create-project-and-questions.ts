import { Autarquia } from '@prisma/client';
import type { NextApiRequest, NextApiResponse } from 'next';
import NextCors from 'nextjs-cors';
import { prisma } from '../../config/prisma';

type Input = { id: string, autarquias: Autarquia[] }

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  await NextCors(req, res, { methods: ['GET', 'PUT', 'POST', 'DELETE'], origin: '*', optionsSuccessStatus: 200 });
  
  try {
    if (req.method === 'POST') {
      const { id, autarquias } = req.body as Input;
      
      if (!id || !autarquias) throw Error('Missing params');
  
      await prisma.projeto.create({
        data: {
          id: +id,
          autarquias: {
            create: autarquias.map(autarquia => {
              return autarquia;
            })
          }
        }
      })
      res.status(201).end();
    }

    if (req.method === 'PUT') {
      const { id, autarquias } = req.body as Input;

      await prisma.projeto.update({
        data: {
          id: +id,
          autarquias: {
            update: autarquias.map(autarquia => {
              return {
                data: autarquia,
                where: {
                  id_nome: {
                    id: autarquia.id,
                    nome: autarquia.nome
                  }  
                }
              }
            })
          }
        },
        where: {
          id: +id
        }
      })
      res.status(204).end();
    }
  } catch (e) {
    res.status(400).end();
  }
}