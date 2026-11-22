import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react({ babel: { babelrc: false, configFile: false } }), tailwindcss()],
  server: {
    port: 5173,
    host: true,
    hmr: { overlay: true },
    proxy: {
      '/api': 'http://localhost:4001',
      '/uploads': 'http://localhost:4001'
    }
  }
})
