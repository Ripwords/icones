import { defineConfig } from 'vite'
import Pages from 'vite-plugin-pages'
import PurgeIcons from 'vite-plugin-purge-icons'
import Components from 'unplugin-vue-components/vite'
import AutoImport from 'unplugin-auto-import/vite'
import dayjs from 'dayjs'
import Vue from '@vitejs/plugin-vue'
import WindiCSS from 'vite-plugin-windicss'

export default defineConfig({
  plugins: [
    Vue(),
    Pages({
      importMode: 'sync',
    }),
    Components({
      dts: true,
    }),
    AutoImport({
      dts: true,
      imports: [
        'vue',
        '@vueuse/core',
      ],
    }),
    PurgeIcons(),
    WindiCSS({
      safelist: 'text-2xl text-3xl text-4xl',
      preflight: {
        enableAll: true,
      },
    }),
  ],
  define: {
    __BUILD_TIME__: JSON.stringify(dayjs().format('YYYY/MM/DD HH:mm')),
  },
})
