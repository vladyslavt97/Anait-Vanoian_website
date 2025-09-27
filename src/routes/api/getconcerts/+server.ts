
import { json } from '@sveltejs/kit';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

/** @type {import('./$types').RequestHandler} */
export async function GET({ }) {
    

    try {
    const schedule = await prisma.schedule.findMany();
    return json(schedule);
  } catch (error) {
    console.error(error);
    return json("something is wrong");
  }
}