import { Prisma } from '@prisma/client';
import type { NextApiRequest, NextApiResponse } from 'next';
import { prisma } from '../../config/prisma';

type Output = { projects: Prisma.ProjetoCreateInput[] }

export default async function handler(req: NextApiRequest, res: NextApiResponse<Output>) {
  const projects = await prisma.projeto.findMany();
  projects ? res.status(200).json({ projects }) : res.status(404);
}