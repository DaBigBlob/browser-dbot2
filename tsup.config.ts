import { defineConfig } from 'tsup'

export default defineConfig({
  entry: ['./src/main.ts'],
  splitting: false,
  sourcemap: false,
  clean: true,
  minify: true,
  minifyWhitespace: true,
  outDir: './pub',
  platform: 'neutral',
  treeshake: 'safest',
  cjsInterop: true,
  dts: false,
  shims: true,
  format: ["esm"],
  target: ['chrome120', 'edge120', 'firefox120', 'safari16']
})