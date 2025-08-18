import { useMDXComponents as getDocsMDXComponents } from '@nextra/theme-docs'
import { GitHubIcon, Pre, withIcons } from '@nextra/ui'
import type { UseMDXComponents } from 'nextra/mdx-components'

const docsComponents = getDocsMDXComponents({
  pre: withIcons(Pre, { js: GitHubIcon })
})

export const useMDXComponents: UseMDXComponents<typeof docsComponents> = <T>(
  components?: T
) => ({
  ...docsComponents,
  ...components
})
