import { Autarquia, Projeto } from '@prisma/client';
import type { NextApiRequest, NextApiResponse } from 'next';
import NextCors from 'nextjs-cors';
import { prisma } from '../../config/prisma';

type Output = { projects: (Projeto & { autarquias: Autarquia[]; })[] }

export default async function handler(req: NextApiRequest, res: NextApiResponse<Output>) {
  await NextCors(req, res, { methods: ['GET', 'PUT', 'POST', 'DELETE'], origin: '*', optionsSuccessStatus: 200 });

  const projects = await prisma.projeto.findMany({
    include: {
      autarquias: true
    }
  });
  projects ? res.status(200).json({ projects }) : res.status(404);
}