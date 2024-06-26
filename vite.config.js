import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react' 

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/jobfinder/",
  server: {
    port: 3000, 
    proxy: { // type this
      '/api': {
        target: 'http://localhost:8000',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
      }
    }
  }
})
