import Link from 'next/link'
import type { ComponentPropsWithoutRef, FC } from 'react'
import { EXTERNAL_URL_RE } from '../../server/constants.js'

type NextLinkProps = ComponentPropsWithoutRef<typeof Link>

type Props = Omit<NextLinkProps, 'href'> & {
  href?: NextLinkProps['href'] | undefined
}

export const Anchor: FC<Props> = ({ href = '', prefetch, ...props }) => {
  props = {
    ...props,
    className: ['x:focus-visible:nextra-focus', props.className]
      .filter(Boolean)
      .join(' ')
  }
  if (typeof href === 'string') {
    if (href.startsWith('#')) {
      return <a href={href} {...props} />
    }
    if (EXTERNAL_URL_RE.test(href)) {
      const { children } = props
      return (
        <a href={href} target="_blank" rel="noreferrer" {...props}>
          {children}
          {typeof children === 'string' && (
            <>
              &nbsp;
              <svg
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="1.7"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                // based on font-size
                height="1em"
                className="x:inline x:align-baseline x:shrink-0"
              >
                <path d="M7 17L17 7" />
                <path d="M7 7h10v10" />
              </svg>
            </>
          )}
        </a>
      )
    }
  }
  return <Link href={href} prefetch={prefetch} {...props} />
}
