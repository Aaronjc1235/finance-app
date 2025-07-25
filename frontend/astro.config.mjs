import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';
import clerk from '@clerk/astro';
import vercel from '@astrojs/vercel/serverless';

export default defineConfig({
  integrations: [
    clerk(),
    react(),
    tailwind()
  ],
  output: 'server',
  adapter: vercel()
});
