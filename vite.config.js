import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/fsweb-s8-challenge-pizza-v2/',
  plugins: [react()],
})
