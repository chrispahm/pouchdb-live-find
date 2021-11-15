import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import { terser } from 'rollup-plugin-terser'
import nodePolyfills from 'rollup-plugin-polyfill-node';
import pkg from './package.json'

export default [
  // browser-friendly (minified) UMD build
  {
    input: 'lib/index.js',
    output: {
      name: 'pouchdb-live-find',
      file: pkg.browser,
      format: 'umd'
    },
    plugins: [
      nodePolyfills(),
      resolve({
        browser: true,
        preferBuiltins: true
      }),
      commonjs(),
      terser()
    ]
  },
  {
    input: 'lib/index.js',
    output: {
      name: 'pouchdb-live-find',
      file: pkg.module,
      format: 'es'
    },
    plugins: [
      nodePolyfills(),
      resolve({
        browser: true,
        preferBuiltins: true
      }),
      commonjs(),
      terser()
    ]
  }
]