
import { json } from '@sveltejs/kit';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

/** @type {import('./$types').RequestHandler} */
export async function POST({ request }) {
    

    try {
    const { date, year } = await request.json();
    const user = await prisma.user.create({
      data: {
        year,
        date
      },
    });
    return json("all good");
  } catch (error) {
    console.error(error);
    return json("all bad");
  }
}