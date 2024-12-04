import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  server: {
    proxy: {
      '/send-otp': {
        target: 'http://localhost:3000', // Серверный адрес
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/send-otp/, '/send-otp'),
      },
    },
  },
})
