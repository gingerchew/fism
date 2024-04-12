// vite.config.js
import { resolve } from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    target: 'esnext',
    minify: 'esbuild',
    lib: {
      // Could also be a dictionary or array of multiple entry points
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'fisma',
      // the proper extensions will be added
      fileName: 'fisma',
      formats: ['es']
    }
  }
})