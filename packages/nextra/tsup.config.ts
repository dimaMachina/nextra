import { defineConfig } from 'tsup'
import { defaultEntry } from './default-entry.js'
import packageJson from './package.json'
import { IS_PRODUCTION } from './src/server/constants.js'

export default defineConfig({
  name: packageJson.name,
  entry: defaultEntry,
  format: 'esm',
  dts: true,
  splitting: IS_PRODUCTION,
  clean: IS_PRODUCTION,
  bundle: false,
  external: ['shiki', 'webpack'],
  plugins: [
    {
      // Strip `node:` prefix from imports
      // Next.js only polyfills `path` and not `node:path` for browser
      name: 'strip-node-colon',
      renderChunk(code) {
        // (?<= from ")
        // Positive lookbehind asserts that the pattern we're trying to match is preceded by
        // ` from "`, but does not include ` from "` in the actual match.
        //
        // (?=";)
        // Positive lookahead asserts that the pattern is followed by `";`, but does not include
        // `";` in the match.
        const replaced = code.replaceAll(/(?<= from ")node:(.+)(?=";)/g, '$1')
        return { code: replaced }
      }
    }
  ]
})
