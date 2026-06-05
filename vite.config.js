import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: '/hansung-python-tutoring/',
  plugins: [react()],
  build: {
    chunkSizeWarningLimit: 1500, // 500kB 제한 경고를 1500kB로 상향 조정하여 해결
  }
})


