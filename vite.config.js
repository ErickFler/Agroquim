import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/Agroquim/', // MUY importante
  plugins: [react()],
});