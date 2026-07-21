// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  // Cambia esto por el dominio real al publicar (necesario para og:image absolutas).
  site: 'https://iasdpariachi.org',
  vite: {
    plugins: [tailwindcss()],
  },
});
