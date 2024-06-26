import { resolve } from 'path';
import { defineConfig, loadEnv } from 'vite';
import vue2 from '@vitejs/plugin-vue2';
// const { VITE_PORT, VITE_BASE_URL } = loadEnv(mode, process.cwd());
// console.log(VITE_BASE_URL);
export default ({ mode }) => {
  const { VITE_PORT } = loadEnv(mode, process.cwd());

  return defineConfig({
    base: '/',
    plugins: [vue2()],
    resolve: {
      alias: {
        '@': resolve(__dirname, 'src'),
      },
    },
    css: {
      preprocessorOptions: {
        less: {
          modifyVars: {
            hack: `true; @import (reference) "${resolve('src/style/variables.less')}";`,
          },
          math: 'strict',
          javascriptEnabled: true,
        },
      },
      postcss: {
        // options here will be passed to postcss-loader
        plugins: [],
      },
    },
    server: {
      // 是否开启 https
      https: false,
      // 端口号
      port: VITE_PORT,
      // 监听所有地址
      host: '0.0.0.0',
      // 服务启动时是否自动打开浏览器
      open: false,
      // 允许跨域
      cors: false,
      // 自定义代理规则
      // proxy: {
      //   '/api': {
      //     target: VITE_BASE_URL,
      //     changeOrigin: true,
      //     rewrite: (path) => path.replace(/^\/api/, ''),
      //   },
      // },
    },
    build: {
      // 设置最终构建的浏览器兼容目标
      target: 'es2015',
      // 构建后是否生成 source map 文件
      sourcemap: false,
      //  chunk 大小警告的限制（以 kbs 为单位）
      chunkSizeWarningLimit: 2000,
      // 启用/禁用 gzip 压缩大小报告
      reportCompressedSize: false,
    },
  });
};
