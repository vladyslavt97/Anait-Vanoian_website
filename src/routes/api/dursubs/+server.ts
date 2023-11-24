import { json } from "@sveltejs/kit";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

/** @type {import('./$types').RequestHandler} */
export async function POST({ request }) {
    try {
        const { email } = await request.json();
        console.log("email: ", email);

        const emails = await prisma.emails.create({
            data: {
                email: email,
                date: new Date(),
            },
        });
        return json(emails);
    } catch (error) {
        console.error(error);
        return json("all bad");
    }
}
