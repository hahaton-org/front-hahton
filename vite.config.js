import { defineConfig } from 'vite';
import plugin from '@vitejs/plugin-vue';
import { createHtmlPlugin } from 'vite-plugin-html'
import vueDevTools from 'vite-plugin-vue-devtools'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
      vueDevTools(),
      createHtmlPlugin({}),
      plugin(),
    ],
    server: {
        port: 10000,
    }
})
