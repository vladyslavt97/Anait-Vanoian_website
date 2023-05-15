
import { json } from '@sveltejs/kit';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

/** @type {import('./$types').RequestHandler} */
export async function GET({ request }) {
    

    try {
    const user = await prisma.schedule.findMany();
    console.log(user);
    
    return json("all good");
  } catch (error) {
    console.error(error);
    return json("all bad");
  }
}