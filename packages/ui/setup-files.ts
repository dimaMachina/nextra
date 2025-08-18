import fs from 'node:fs/promises'
import path from 'node:path'
import { generateTsFromZod } from '../tsdoc/src/zod-to-ts.js'
import { HeadPropsSchema } from './src/components/head.js'

const rawTs = `export interface HeadProps ${generateTsFromZod(HeadPropsSchema)}`

await fs.writeFile(path.resolve('src', 'types.generated.ts'), rawTs)
