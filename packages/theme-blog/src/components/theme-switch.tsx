'use client'

import { Button, MoonIcon, SunIcon, useMounted } from '@nextra/ui'
import { useTheme } from 'next-themes'

export function ThemeSwitch() {
  const { setTheme, resolvedTheme } = useTheme()
  const mounted = useMounted()
  const isDark = resolvedTheme === 'dark'

  // TODO: system theme
  const toggleTheme = () => {
    setTheme(isDark ? 'light' : 'dark')
  }

  const IconToUse = mounted && isDark ? MoonIcon : SunIcon

  return (
    <Button
      aria-label="Toggle Dark Mode"
      className="x:p-2"
      onClick={toggleTheme}
    >
      <IconToUse height="14" />
    </Button>
  )
}
