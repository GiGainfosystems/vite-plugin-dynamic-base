import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    exclude: ['examples/**'],
    globals: true,
  },
})