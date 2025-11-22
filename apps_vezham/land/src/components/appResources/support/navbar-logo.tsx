import { useTheme } from '@vx-oss/use-theme'

import { NavbarLogoProps } from './types'

const NavbarLogo = ({ visible = false }: NavbarLogoProps) => {
  const { theme } = useTheme()
  const isDark = theme === 'dark'
  return (
    <a href="#">
      <img
        src={
          isDark
            ? 'https://static.cdn.vezham.com/images/logo-white.png'
            : 'https://static.cdn.vezham.com/images/logo-black.png'
        }
        alt="Vezham Logo"
        className="h-8 w-8 w-auto transition-all duration-300"
      />
    </a>
  )
}

export { NavbarLogo }
