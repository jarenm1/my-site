// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import cloudflare from '@astrojs/cloudflare';

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()]
  },

  markdown: {
    shikiConfig: {
      // Don't syntax highlight mermaid - let client handle it
      langAlias: { mermaid: 'text' }
    }
  },

  adapter: cloudflare()
});