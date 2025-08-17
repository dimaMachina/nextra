import type { Heading as MDASTHeading } from 'mdast'
import type { Metadata } from 'next'
import type { FC, ReactElement, ReactNode } from 'react'
import type { z } from 'zod'
import type {
  MathJaxOptionsSchema,
  menuSchema,
  metaSchema,
  NextraConfigSchema,
  separatorItemSchema
} from './server/schemas.js'

export type { NextraConfig } from './types.generated.js'

type NextraConfigFromZod = z.infer<typeof NextraConfigSchema>

export interface LoaderOptions extends NextraConfigFromZod {
  isPageImport?: boolean
  locales: string[]
  contentDir?: string
  shouldAddLocaleToLinks?: boolean
}

type TPageItem = { name: string; route: string; __pagePath: string }
type TMetaItem = { __metaPath: string }

interface TFolder<T = TItem> {
  name: string
  route: string
  children: T[]
}

export type TItem = TPageItem | TMetaItem | TFolder

export interface Folder<FileType = PageMapItem> {
  name: string
  route: string
  children: FileType[]
}

export type Import = {
  importName: string
  filePath: string
}

export type MetaJsonFile = {
  data: {
    [fileName: string]: Meta
  }
}

export type DynamicFolder = {
  items: DynamicMeta
  title?: string
}

export type DynamicMetaItem = Meta | DynamicFolder

export type DynamicMeta = Record<string, DynamicMetaItem>

export type FrontMatter = Record<string, any>
export type Meta = string | Record<string, any>

export type MdxFile<FrontMatterType = FrontMatter> = {
  name: string
  route: string
  frontMatter?: FrontMatterType
}

export type PageMapItem = Folder | MdxFile | MetaJsonFile

// PageMapItem without MetaJsonFile and with its meta from _meta.json
export type Page = (MdxFile | Folder<Page>) & {
  meta?: Exclude<Meta, string>
}

export type Heading = {
  depth: Exclude<MDASTHeading['depth'], 1>
  value: string | ReactElement
  id: string
}

export type $NextraMetadata = Omit<Metadata, 'title'> & {
  title: string
  filePath: string
  timestamp?: number
  readingTime?: ReadingTime
}

export type ReadingTime = {
  text: string
  minutes: number
  time: number
  words: number
}

export type MathJaxOptions = z.infer<typeof MathJaxOptionsSchema>

export type MDXWrapper = FC<
  {
    children: ReactNode
    bottomContent?: ReactNode
  } & Omit<EvaluateResult, 'default'>
>

export type MetaRecord = Record<string, z.infer<typeof metaSchema>>

export type SeparatorItem = z.infer<typeof separatorItemSchema>
export type MenuItem = z.infer<typeof menuSchema>

export type NextraMetadata = Metadata & {
  asIndexPage?: boolean
  sidebarTitle?: string
}

export type EvaluateResult = {
  /** The MDX component to render. */
  default: FC<any>
  /** Table of contents list. */
  toc: Heading[]
  /** Page's front matter or `metadata` object including `title`, `description`, etc. */
  metadata: $NextraMetadata
  /** Raw MDX source code */
  sourceCode: string
}
