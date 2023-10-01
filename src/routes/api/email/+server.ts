import { json } from '@sveltejs/kit';
import { YOUR_SERVICE_ID, YOUR_TEMPLATE_ID, YOUR_PUBLIC_KEY} from '$env/static/private';

/** @type {import('./$types').RequestHandler} */
export async function GET({ request }) {
    const myVar = {YOUR_SERVICE_ID, YOUR_TEMPLATE_ID, YOUR_PUBLIC_KEY};

    try {
    return json(myVar);
  } catch (error) {
    console.error(error);
    return json("all bad");
  }
}