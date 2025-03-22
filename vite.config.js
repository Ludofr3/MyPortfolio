import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: '/MyPortfolio/', // Base pour GitHub Pages
  publicDir: "public",
  build: {
    outDir: "dist",
  },
  plugins: [react()],
  optimizeDeps: {
    include: ['tailwindcss']
  }
})
