import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tsconfigPaths from "vite-tsconfig-paths";
import { traeBadgePlugin } from 'vite-plugin-trae-solo-badge';

// https://vite.dev/config/
export default defineConfig({
  build: {
    sourcemap: 'hidden',
    // 代码分割配置
    rollupOptions: {
      output: {
        manualChunks: {
          // 第三方库单独打包
          vendor: ['react', 'react-dom', 'react-router-dom'],
          // 数据可视化相关库单独打包
          data: ['three'],
          // 工具库单独打包
          utils: ['lucide-react', 'zustand'],
        },
      },
    },
    // 启用压缩
    minify: 'terser',
    // 压缩选项
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
      },
    },
    // 控制chunk大小警告
    chunkSizeWarningLimit: 500,
  },
  plugins: [
    react({
      babel: {
        plugins: [
          'react-dev-locator',
        ],
      },
    }),
    traeBadgePlugin({
      variant: 'dark',
      position: 'bottom-right',
      prodOnly: true,
      clickable: true,
      clickUrl: 'https://www.trae.ai/solo?showJoin=1',
      autoTheme: true,
      autoThemeTarget: '#root'
    }), 
    tsconfigPaths()
  ],
})
