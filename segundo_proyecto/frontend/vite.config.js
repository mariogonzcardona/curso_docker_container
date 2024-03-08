import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
 
// https://vitejs.dev/config/
export default defineConfig({
  server: {
    watch: {
      usePolling: true,
      interval: 1000
    },
    host: 'localhost',
    port: 5173,
    hmr: true,
  },
  plugins: [react()],
})