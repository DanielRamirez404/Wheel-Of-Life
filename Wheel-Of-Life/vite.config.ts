import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vite.dev/config/
export default defineConfig({
  base: '/Wheel-Of-Life/',
  plugins: [vue()],
  build: {
    rollupOptions: {
      output:{
        manualChunks(id) {
          if (id.includes('node_modules'))
            return id.toString().split('node_modules/')[1].split('/')[0].toString();
        }
      }
    }
  },
})
