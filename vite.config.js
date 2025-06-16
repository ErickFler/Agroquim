// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/Agroquim/', // muy importante: debe coincidir con el nombre del repo
  plugins: [react()],
})
