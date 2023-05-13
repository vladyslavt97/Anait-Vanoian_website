import dotenv from 'dotenv';
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

dotenv.config();

export default defineConfig({
	plugins: [sveltekit()],
	define: {
    // map your .env variables to Vite build variables
    'process.env': Object.fromEntries(
      Object.entries(process.env).map(([key, value]) => [key, JSON.stringify(value)])
    ),
  },
});
