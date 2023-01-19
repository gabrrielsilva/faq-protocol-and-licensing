import { Autarquia, NomeAutarquia } from '@prisma/client';
import type { NextApiRequest, NextApiResponse } from 'next';
import NextCors from 'nextjs-cors';
import { prisma } from '../../config/prisma';

type Input = { id: string, nome: NomeAutarquia }
type Output = { autarquia: Autarquia }

export default async function handler(req: NextApiRequest, res: NextApiResponse<Output>) {
  await NextCors(req, res, { methods: ['GET', 'PUT', 'POST', 'DELETE'], origin: '*', optionsSuccessStatus: 200 });

  const { id, nome } = req.query as Input;
  if (!id) throw Error('Missing params');
  const autarquia = await prisma.autarquia.findUnique({ where: { id_nome: {
    id: +id,
    nome
  } } });
  autarquia ? res.status(200).json({ autarquia }) : res.status(404).end();
}