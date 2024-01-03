// Ändere den Import zu
import { fileURLToPath, URL } from 'url';

// und füge dies am Anfang der Datei hinzu
/* eslint-disable no-undef */
/* eslint-enable no-undef */

import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        vue(),
    ],
    resolve: {
        alias: {
            '@': fileURLToPath(new URL('./src', import.meta.url))
        }
    },
    build: {
        outDir: 'dist',
    },
});