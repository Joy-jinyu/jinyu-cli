import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import postcssPresetEnv from 'postcss-preset-env';
import path from 'path';

export default defineConfig({
  build: {
    minify: false,
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src/components/index.ts'),
      'request': path.resolve(__dirname, 'src/utils/request.ts'),
      'pages': path.resolve(__dirname, 'src/pages'),
      '~': path.resolve(__dirname, 'src'),
    }
  },
  css: {
    modules: {
      generateScopedName: '[local]',
    },
    preprocessorOptions: {
      less: {
        javascriptEnabled: true,
      },
    },
    postcss: {
      plugins: [postcssPresetEnv],
    },
  },
  plugins: [react()]
})
