// @ts-check

import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

import cloudflare from '@astrojs/cloudflare';

// https://astro.build/config
export default defineConfig({
  site: 'https://example.com',
  integrations: [mdx(), sitemap()],

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