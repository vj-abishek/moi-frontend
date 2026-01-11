// @ts-check

import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

import cloudflare from '@astrojs/cloudflare';

// https://astro.build/config
export default defineConfig({
  site: 'https://getmoi.in',
  integrations: [
    mdx(),
    sitemap({
      customPages: ['https://app.getmoi.in/signup'],
    }),
  ],

  vite: {
      plugins: [tailwindcss()],
	},

  markdown: {
      shikiConfig: {
          theme: 'github-dark-default',
          wrap: true,
      },
	},

  adapter: cloudflare(),
});