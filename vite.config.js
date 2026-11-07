import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/vocab-anglais/', // Remplacez 'vocab-anglais' par le nom exact de votre dépôt GitHub
})