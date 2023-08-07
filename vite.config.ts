/// <reference types="vitest" />

import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
    base: '/duet-code-generator/',
    test: {
        globals: true,
        environment: 'jsdom',
    },
    build: {
        outDir: 'docs',
    },
});
