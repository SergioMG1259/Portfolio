// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

import icon from 'astro-icon';

// https://astro.build/config
export default defineConfig({
  vite: {
    base: '/Portfolio/',
    plugins: [tailwindcss()]
  },

  integrations: [icon()],

  site: 'https://sergiomg1259.github.io',
  base: '/Portfolio/',
});