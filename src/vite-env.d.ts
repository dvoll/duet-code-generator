/// <reference types="vite/client" />

import type { Alpine } from 'alpinejs';

declare module '*.svg' {
    const content: string;
    export default content;
}

declare global {
    interface Window {
        Alpine: Alpine;
    }
}
