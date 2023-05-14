// import { json } from '@sveltejs/kit';
// import { PrismaClient } from '@prisma/client';

// const prisma = new PrismaClient();


// export async function POST(event: any) {

//   try {
//     const { year, date } = JSON.parse(event.body);
//     const user = await prisma.user.create({
//       data: {
//         year,
//         date
//       },
//     });
//     return { statusCode: 200, body: JSON.stringify(user) };
//   } catch (error) {
//     console.error(error);
//     return { statusCode: 500, body: 'Internal Server Error' };
//   }
// };

// import { json } from '@sveltejs/kit';

// /** @type {import('./$types').RequestHandler} */
// export async function POST(event) {
    
//     return json({
//         say: "hello"
//     });
// }

import { json } from '@sveltejs/kit';
import type { Request } from '@sveltejs/kit';

export async function POST(request: Request) {
  try {
    // You can access the request body using request.locals.parsedBody
    const { name, age } = request.locals.parsedBody;

    // Do something with the data
    console.log(`Received data: ${name}, ${age}`);

    // Return a JSON response
    return json({ status: 'success', message: 'Data received' });
  } catch (error) {
    console.error(error);
    return json({ status: 'error', message: 'Internal server error' });
  }
}
