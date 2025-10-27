import React from 'react'

import { Switch, Tooltip } from '@vx-oss/react'
import { useTheme } from '@vx-oss/use-theme'

import { IconProps, ThemeSwitcherProps, useThemeSwitcherProps } from './types'

export const MoonIcon = (props: IconProps) => (
  <svg {...props} aria-hidden="true" focusable="false" viewBox="0 0 24 24">
    <path
      d="M21.53 15.93c-.16-.27-.61-.69-1.73-.49a8.46 8.46 0 01-1.88.13 8.409 8.409 0 01-5.91-2.82 8.068 8.068 0 01-1.44-8.66c.44-1.01.13-1.54-.09-1.76s-.77-.55-1.83-.11a10.318 10.318 0 00-6.32 10.21 10.475 10.475 0 007.04 8.99 10 10 0 002.89.55c.16.01.32.02.48.02a10.5 10.5 0 008.47-4.27c.67-.93.49-1.519.32-1.79z"
      fill="currentColor"
    />
  </svg>
)

export const SunIcon = (props: IconProps) => (
  <svg {...props} aria-hidden="true" focusable="false" viewBox="0 0 24 24">
    <g fill="currentColor">
      <path d="M19 12a7 7 0 11-7-7 7 7 0 017 7z" />
      <path d="M12 22.96a.969.969 0 01-1-.96v-.08a1 1 0 012 0 1.038 1.038 0 01-1 1.04zm7.14-2.82a1.024 1.024 0 01-.71-.29l-.13-.13a1 1 0 011.41-1.41l.13.13a1 1 0 010 1.41.984.984 0 01-.7.29zm-14.28 0a1.024 1.024 0 01-.71-.29 1 1 0 010-1.41l.13-.13a1 1 0 011.41 1.41l-.13.13a1 1 0 01-.7.29zM22 13h-.08a1 1 0 010-2 1.038 1.038 0 011.04 1 .969.969 0 01-.96 1zM2.08 13H2a1 1 0 010-2 1.038 1.038 0 011.04 1 .969.969 0 01-.96 1zm16.93-7.01a1.024 1.024 0 01-.71-.29 1 1 0 010-1.41l.13-.13a1 1 0 011.41 1.41l-.13.13a.984.984 0 01-.7.29zm-14.02 0a1.024 1.024 0 01-.71-.29l-.13-.14a1 1 0 011.41-1.41l.13.13a1 1 0 010 1.41.97.97 0 01-.7.3zM12 3.04a.969.969 0 01-1-.96V2a1 1 0 012 0 1.038 1.038 0 01-1 1.04z" />
    </g>
  </svg>
)

export const ThemeSwitcher: React.FC<ThemeSwitcherProps> = ({
  size,
  color
}) => {
  const { theme, setTheme } = useTheme()
  const isDark = theme === 'dark'
  const { getWrapperProps, getSwitchProps } = useThemeSwitcherProps({
    size,
    color
  })

  React.useEffect(() => {
    const storedTheme = localStorage.getItem('theme')
    if (!storedTheme) {
      const prefersDark = window.matchMedia(
        '(prefers-color-scheme: dark)'
      ).matches
      setTheme(prefersDark ? 'dark' : 'light')
      const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
      const handleChange = (e: MediaQueryListEvent) =>
        setTheme(e.matches ? 'dark' : 'light')
      mediaQuery.addEventListener('change', handleChange)
      return () => mediaQuery.removeEventListener('change', handleChange)
    }
  }, [setTheme])

  const handleToggle = () => {
    const newTheme = isDark ? 'light' : 'dark'
    setTheme(newTheme)
    localStorage.setItem('theme', newTheme)
  }

  return (
    <Tooltip
      content={`Switch to ${isDark ? 'light' : 'dark'} mode`}
      placement="bottom">
      <div {...getWrapperProps()}>
        <Switch
          isSelected={isDark}
          onValueChange={handleToggle}
          size="sm"
          color="primary"
          {...getSwitchProps()}
          startContent={<SunIcon />}
          endContent={<MoonIcon />}
        />
      </div>
    </Tooltip>
  )
}

export default ThemeSwitcher
