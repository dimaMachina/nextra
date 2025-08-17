// should be used on server
'use no memo'

/*
 * ⚠️ Attention!
 * This file should be never used directly, only in loader.ts
 */
import { useMDXComponents as getMDXComponents } from 'next-mdx-import-source-file'
import type { MDXWrapper } from 'nextra'
import type { ComponentProps, FC } from 'react'
import { createElement } from 'react'

const Wrapper = getMDXComponents().wrapper

type WrapperProps = ComponentProps<MDXWrapper>

export function HOC_MDXWrapper(
  MDXContent: MDXWrapper,
  hocProps: Omit<WrapperProps, 'children'>
): FC<WrapperProps> {
  return function MDXWrapper(props) {
    const children = createElement(MDXContent, props)

    return Wrapper ? <Wrapper {...hocProps}>{children}</Wrapper> : children
  }
}
