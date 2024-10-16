import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: 'https://firebasestorage.googleapis.com/v0/b/api-app-deportes.appspot.com/o/',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
      '/soccer': {
        target: 'https://www.scorebat.com/video-api/v3/',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/soccer/, ''),
      },
    },
  },

})
