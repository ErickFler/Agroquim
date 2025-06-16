import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/Agroquim/',
  build: {
    outDir: 'docs'
  },
  plugins: [react()],
})