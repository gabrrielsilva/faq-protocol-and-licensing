import { Questions } from '@prisma/client';
import type { NextApiRequest, NextApiResponse } from 'next';
import { prisma } from '../../config/prisma';

type Input = { id: string }
type Output = { questions: Questions }

export default async function handler(req: NextApiRequest, res: NextApiResponse<Output>) {
  const { id } = req.query as Input;
  if (!id) throw Error('Missing params');
  const questions = await prisma.questions.findUnique({ where: { id: +id } });
  questions ? res.status(200).json({ questions }) : res.status(404);
}