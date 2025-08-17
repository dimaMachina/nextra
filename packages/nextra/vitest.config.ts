import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    globals: true,
    testTimeout: 16_000,
    setupFiles: ['./setup-files.ts']
  },
  server: {
    watch: {
      ignored: [
        '**/node_modules/**',
        '**/dist/**',
        // Otherwise vitest will infinity re-run in watch mode
        '**/generated-*'
      ]
    }
  }
})
