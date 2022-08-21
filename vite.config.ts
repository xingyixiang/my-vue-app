import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { resolve } from 'path';
import AutoImport from 'unplugin-auto-import/vite';
import Components from 'unplugin-vue-components/vite';
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers';
import ElementPlus from 'unplugin-element-plus/vite';
import vueI18n from '@intlify/vite-plugin-vue-i18n';

const pathResolve = (dir: string): string => {
  return resolve(__dirname, '.', dir);
};

// 设置别名
const alias: Record<string, string> = {
  '@': pathResolve('src'),
};

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias,
    extensions: ['.js', '.ts', '.jsx', '.tsx', '.vue'],
  },
  // 服务端渲染
  server: {
    // 是否开启 https
    https: false,
    // 端口号
    port: 7420,
    host: '0.0.0.0',
    // 本地跨域代理
    proxy: {},
  },
  plugins: [
    vue({
      reactivityTransform: true,
    }),
    vueI18n({
      // if you want to use Vue I18n Legacy API, you need to set `compositionOnly: false`
      // compositionOnly: false,

      // you need to set i18n resource including paths !
      include: resolve('src/locales/**'),
    }),
    AutoImport({
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      resolvers: [ElementPlusResolver()],
    }),
    ElementPlus(),
  ],
  optimizeDeps: {
    include: ['pinia'],
  },
  build: {
    sourcemap: false,
    // 消除打包大小超过500kb警告
    chunkSizeWarningLimit: 4000,
  },
});
