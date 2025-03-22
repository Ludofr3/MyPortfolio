import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  publicDir: "public", // Dossier public par défaut
  base: "/", // Chemin de base, ajustez si vous déployez dans un sous-dossier
  build: {
    outDir: "dist", // Dossier de sortie du build
  },
  plugins: [react()],
  optimizeDeps: {
    include: ['tailwindcss']
  }
})
