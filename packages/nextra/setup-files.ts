import fs from 'node:fs/promises'
import path from 'node:path'
import { generateTsFromZod } from '../tsdoc/src/zod-to-ts.js'
import { NextraConfigSchema } from './src/server/schemas.js'

const rawTs = `export interface NextraConfig ${generateTsFromZod(NextraConfigSchema)}`

await fs.writeFile(path.resolve('src', 'types.generated.ts'), rawTs)
