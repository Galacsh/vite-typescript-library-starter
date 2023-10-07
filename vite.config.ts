/// <reference types="vitest" />

import { resolve } from 'path'
import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'
import packageJson from './package.json'

const PACKAGE_NAME = packageJson.name.split('/').pop()

// Configure Vitest (https://vitest.dev/config/)
// https://vitejs.dev/guide/build.html#library-mode
export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: PACKAGE_NAME,
      fileName: PACKAGE_NAME,
    },
    rollupOptions: {
      external: ['test'],
    },
  },
  plugins: [dts()],
  test: {
    dir: resolve(__dirname, 'src/test'),
  },
})
