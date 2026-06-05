// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://allworldhistory.com',
  vite: {
    ssr: {
      noExternal: ['d3', 'leaflet'],
    },
    optimizeDeps: {
      include: ['d3', 'leaflet'],
    },
  },
});
