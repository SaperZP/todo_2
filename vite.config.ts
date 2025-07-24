import { defineConfig } from 'vite';
import svgr from 'vite-plugin-svgr';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [svgr(), react()],
  build: {
    outDir: 'build', // keep CRA’s output folder
  },
  server: {
    port: 3000, // CRA default
    open: true,
  },
  resolve: {
    alias: {
      '@': '/src', // optional path alias
    },
  },
});
