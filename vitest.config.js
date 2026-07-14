import { defineConfig } from 'vitest/config'

export default defineConfig({
  esbuild: {
    jsx: 'automatic',
  },
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/test/setup.js',
    css: false,
    coverage: {
      provider: 'v8',
      reporter: ['text', 'text-summary', 'html'],
      include: ['src/**/*.{js,jsx}'],
      exclude: [
        'src/main.jsx',
        'src/**/*.test.{js,jsx}',
        'src/test/**',
      ],
    },
  },
})
