import { Autarquia, NomeAutarquia, Projeto } from '@prisma/client';
import type { NextApiRequest, NextApiResponse } from 'next';
import NextCors from 'nextjs-cors';
import { prisma } from '../../config/prisma';

type Input = { id: string, nome: NomeAutarquia }
type Output = { projeto: Projeto & { autarquias: Autarquia[] } }

export default async function handler(req: NextApiRequest, res: NextApiResponse<Output>) {
  await NextCors(req, res, { methods: ['GET', 'PUT', 'POST', 'DELETE'], origin: '*', optionsSuccessStatus: 200 });

  const { id } = req.query as Input;
  if (!id) throw Error('Missing params');
  const projeto = await prisma.projeto.findUnique({ 
    where: {
      id: +id,
    },
    include: {autarquias: true} 
  });
  projeto ? res.status(200).json({ projeto }) : res.status(404).end();
}