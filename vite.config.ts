import { defineConfig } from 'vite';
import { configDefaults } from 'vitest/config';
import react from '@vitejs/plugin-react-swc';
import { playwright } from '@vitest/browser-playwright';
import path from 'path';

// https://vite.dev/config/
export default defineConfig({
  base: '/portfolio/',
  plugins: [react()],
  resolve: {
    alias: {
      '@assets': path.resolve(
        path.dirname(new URL(import.meta.url).pathname),
        './src/assets'
      ),
      '@components': path.resolve(
        path.dirname(new URL(import.meta.url).pathname),
        './src/components'
      ),
      '@helpers': path.resolve(
        path.dirname(new URL(import.meta.url).pathname),
        './src/helpers'
      ),
    },
  },
  test: {
    ...configDefaults,
    environment: 'jsdom',
    globals: true,
    browser: {
      enabled: true,
      headless: true,
      provider: playwright(),
      // https://vitest.dev/config/browser/playwright
      instances: [{ browser: 'chromium' }],
    },
  },
});
