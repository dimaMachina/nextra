'use client'

import { MoonIcon, Select, SunIcon, useMounted } from '@nextra/ui'
import cn from 'clsx'
import { useTheme } from 'next-themes'
import type { FC } from 'react'
import { useThemeConfig } from '../stores'

type ThemeSwitchProps = {
  lite?: boolean
  className?: string
}

export const ThemeSwitch: FC<ThemeSwitchProps> = ({ lite, className }) => {
  const { setTheme, resolvedTheme, theme } = useTheme()
  const mounted = useMounted()
  const { darkMode, themeSwitch } = useThemeConfig()
  if (!darkMode) {
    return null
  }
  const IconToUse = mounted && resolvedTheme === 'dark' ? MoonIcon : SunIcon
  const id = mounted ? (theme as keyof typeof themeSwitch) : 'light'
  return (
    <Select
      className={cn('x:flex x:items-center x:gap-2', className)}
      title="Change theme"
      options={[
        { id: 'light', name: themeSwitch.light },
        { id: 'dark', name: themeSwitch.dark },
        { id: 'system', name: themeSwitch.system }
      ]}
      onChange={setTheme}
      value={id}
      selectedOption={
        <>
          <IconToUse height="12" />
          {!lite && themeSwitch[id]}
        </>
      }
    />
  )
}
