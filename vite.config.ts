import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import postcssPresetEnv from 'postcss-preset-env';
import path from 'path';

export default defineConfig({
    build: {
        minify: false
    },
    resolve: {
        alias: {
            '@': path.resolve(__dirname, 'src'),
            '@pages': path.resolve(__dirname, 'src/pages'),
            '@hooks': path.resolve(__dirname, 'src/hooks'),
            '@shared': path.resolve(__dirname, 'src/shared'),
            '@components': path.resolve(__dirname, 'src/components/index.ts'),
            '@utils': path.resolve(__dirname, 'src/utils/index.ts'),
            request: path.resolve(__dirname, 'src/utils/request.ts'),
        }
    },
    css: {
        modules: {
            generateScopedName: '[dev]'
        },
        preprocessorOptions: {
            less: {
                javascriptEnabled: true
            }
        },
        postcss: {
            plugins: [postcssPresetEnv]
        }
    },
    plugins: [react()]
});
