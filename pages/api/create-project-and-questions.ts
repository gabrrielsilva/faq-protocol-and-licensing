import { Prisma } from '@prisma/client';
import type { NextApiRequest, NextApiResponse } from 'next';
import { prisma } from '../../config/prisma';

type Input = { id: string, questions: Prisma.QuestionsCreateInput }

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const { id, questions } = req.body as Input;
    
    if (!id || !questions) throw Error('Missing params');

    await prisma.projeto.create({
      data: {
        id: +id,
        questions: {
          create: questions
        }
      }
    })
    res.status(201);
  } catch (e) {
    res.status(400);
  }
}