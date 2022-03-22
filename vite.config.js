import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
const path = require('path');
import ViteRequireContext from '@originjs/vite-plugin-require-context';

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  plugins: [vue(), , ViteRequireContext()],
});
