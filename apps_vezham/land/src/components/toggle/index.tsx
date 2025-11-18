import { Moon, Sun } from 'lucide-react'
import React from 'react'

import { forwardRef } from '@vezham/react-utils'

import { Switch, Tooltip } from '@vx-oss/react'
import { useTheme } from '@vx-oss/use-theme'

import { Props, useProps } from './types'

const ThemeSwitcher = forwardRef<'div', Props>((props, ref) => {
  const { theme, setTheme } = useTheme()
  const isDark = theme === 'dark'

  const {
    getBaseProps,
    getSwitchProps,
    size = 'sm',
    color = 'primary'
  } = useProps({
    ...props,
    ref
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

  const iconSize = size === 'sm' ? 16 : size === 'md' ? 18 : 20

  return (
    <Tooltip
      content={`Switch to ${isDark ? 'light' : 'dark'} mode`}
      placement="bottom">
      <div {...getBaseProps()}>
        <Switch
          isSelected={isDark}
          onValueChange={handleToggle}
          size="sm"
          color={color}
          {...getSwitchProps()}
          startContent={<Sun size={iconSize} />}
          endContent={<Moon size={iconSize} />}
        />
      </div>
    </Tooltip>
  )
})

ThemeSwitcher.displayName = 'ThemeSwitcher'

export { ThemeSwitcher }
