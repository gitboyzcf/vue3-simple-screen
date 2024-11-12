import path from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import Icons from 'unplugin-icons/vite'
// import basicSsl from '@vitejs/plugin-basic-ssl'
import Unocss from 'unocss/vite'
import { presetUno, presetAttributify, presetIcons } from 'unocss'
import { PrimeVueResolver } from '@primevue/auto-import-resolver'

// https://vitejs.dev/config/
export default ({ mode, command }) => {
  // const env = loadEnv(mode, process.cwd())
  return defineConfig({
    base: './',
    build: {
      outDir: 'dist',
      sourcemap: false,
      minify: true,
      emptyOutDir: true,
      rollupOptions: {
        output: {
          chunkFileNames: 'js/[hash].js',
          entryFileNames: 'js/[hash].js',
          assetFileNames: (assetsFile) => {
            if (/\.(vue|scss)$/i.test(assetsFile.name)) {
              return 'del/[name]-[hash].[ext]'
            } else {
              return 'static/[hash].[ext]'
            }
          }
        }
      }
    },
    plugins: [
      vue(),
      vueJsx(),
      // basicSsl(),
      Unocss({
        presets: [presetUno(), presetAttributify(), presetIcons()]
      }),
      AutoImport({
        imports: [
          'vue',
          'vue-router',
          'pinia',
          '@vueuse/core',
          {
            '@/api': ['useRequest']
          },
          {
            '@/locales': ['useI18n', 'locale']
          }
        ],
        eslintrc: {
          enabled: false, // Default `false`
          filepath: './.eslintrc-auto-import.json', // Default `./.eslintrc-auto-import.json`
          globalsPropValue: true // Default `true`, (true | false | 'readonly' | 'readable' | 'writable' | 'writeable')
        }
      }),
      Components({
        dirs: ['src/components'],
        dts: false,
        resolvers: [PrimeVueResolver()],
        include: [/\.vue$/, /\.vue\?vue/, /\.jsx$/]
      }),
      Icons({
        compiler: 'vue3'
      })
    ],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src'),
        assets: path.resolve(__dirname, 'src/assets'),
        util: path.resolve(__dirname, 'src/util'),
        views: path.resolve(__dirname, 'src/views'),
        layout: path.resolve(__dirname, 'src/layout'),
        'vue-i18n': 'vue-i18n/dist/vue-i18n.cjs.js'
      }
    },
    preprocessorOptions: {
      scss: {
        // additionalData: `@import "@/assets/base.scss";`
      }
    },
    define: {
      __DEV__: mode === 'development',
      __TEST__: mode === 'test'
    }
    // server:{
    //   proxy:{
    //     '/alarm':{
    //       target: 'https://127.0.0.1',
    //       changeOrigin: true,
    //       rewrite: (path) => path.replace(/^api/, ''),
    //     }
    //   }
    // }
  })
}
