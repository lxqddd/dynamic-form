import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import {ElementPlusResolver} from 'unplugin-vue-components/resolvers'
import UnoCSS from 'unocss/vite'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(),
    vueJsx(),
    AutoImport({
      resolvers: [ElementPlusResolver()]
    }),
    Components({
      resolvers: [ElementPlusResolver()]
    }),
    UnoCSS()
  ],
  server: {
    host: '0.0.0.0',
    port: 10086,
    watch: {
      usePolling: true
    },
    proxy: {
      '/api': {
        target: 'http://realworld.liuxiangqian.cn/api',
        changeOrigin: true,
        rewrite: path => path.replace(/^\/api/, '')
      }
    },
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src')
    }
  }
})
