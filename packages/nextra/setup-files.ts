import fs from 'node:fs/promises'
import path from 'node:path'
import { generateTsFromZod } from '../tsdoc/src/zod-to-ts.js'
import { HeadPropsSchema } from './src/client/components/head.js'
import { NextraConfigSchema } from './src/server/schemas.js'

const rawTs = `export interface NextraConfig ${generateTsFromZod(NextraConfigSchema)}

export interface HeadProps ${generateTsFromZod(HeadPropsSchema)}`

await fs.writeFile(path.resolve('src', 'types.generated.ts'), rawTs)
