import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = fileURLToPath(new URL('.', import.meta.url));

export default defineConfig({
  plugins: [react()],

  build: {
    rollupOptions: {
      /* Two pages are built:
         index.html -> the FirstDash studio site
         demo.html  -> the demo template viewer (/demo.html?t=<slug>)

         Plain .html files mean the demos work on any static host with no
         server rewrites, and each one can be linked or shared directly. */
      input: {
        main: resolve(root, 'index.html'),
        demo: resolve(root, 'demo.html'),
      },
    },
  },

  server: {
    port: 5173,
    open: true,
  },
});
