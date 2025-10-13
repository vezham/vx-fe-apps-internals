import { Icon } from '@iconify/react'
import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useScroll
} from 'framer-motion'
import React, { useRef, useState } from 'react'

import { useTheme } from '@vx-oss/use-theme'

interface NavbarProps {
  children: React.ReactNode
  className?: string
}

interface NavBodyProps {
  children: React.ReactNode
  className?: string
  visible?: boolean
  onMouseLeave?: () => void
}

interface NavItemsProps {
  items: { name: string; link: string }[]
  className?: string
  onItemClick?: () => void
}

interface MobileNavProps {
  children: React.ReactNode
  className?: string
  visible?: boolean
}

interface MobileNavHeaderProps {
  children: React.ReactNode
  className?: string
}

interface MobileNavMenuProps {
  children: React.ReactNode
  className?: string
  isOpen: boolean
  onClose: () => void
}

// Utility function to combine class names
const cn = (...classes: (string | undefined)[]) => {
  return classes.filter(Boolean).join(' ')
}

export const Navbar = ({ children, className }: NavbarProps) => {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollY } = useScroll({
    target: ref
  })
  const [visible, setVisible] = useState<boolean>(false)

  useMotionValueEvent(scrollY, 'change', latest => {
    if (latest > 100) {
      setVisible(true)
    } else {
      setVisible(false)
    }
  })

  return (
    <motion.div
      ref={ref}
      animate={{
        top: visible ? '10px' : undefined // When scrolling, move to top-10px regardless of banner state
      }}
      transition={{
        type: 'spring',
        stiffness: 300,
        damping: 30
      }}
      className={cn(
        'fixed inset-x-0 z-30 w-full transition-all duration-300',
        className
      )}>
      {React.Children.map(children, child =>
        React.isValidElement(child)
          ? React.cloneElement(
              child as React.ReactElement<{ visible?: boolean }>,
              { visible }
            )
          : child
      )}
    </motion.div>
  )
}

export const NavBody = ({
  children,
  className,
  visible,
  onMouseLeave
}: NavBodyProps) => {
  return (
    <motion.div
      animate={{
        backdropFilter: visible ? 'blur(10px)' : 'none',
        boxShadow: visible
          ? '0 1px 3px rgba(0, 0, 0, 0.1), 0 1px 2px rgba(0, 0, 0, 0.06)'
          : 'none',
        width: visible ? '90%' : '95%',
        y: visible ? 10 : 0
      }}
      transition={{ type: 'spring', stiffness: 200, damping: 50 }}
      style={{ maxWidth: '100%', isolation: 'isolate' }}
      className={cn(
        'max-w-8xl z-[60] mx-auto hidden flex-row items-center justify-between self-start rounded-full px-2 py-2 backdrop-blur-md backdrop-saturate-150 sm:px-4 lg:flex',
        visible && 'bg-background/100 dark:bg-content1/100',
        className
      )}
      onMouseLeave={onMouseLeave}>
      {children}
    </motion.div>
  )
}

export const NavItems = ({ items, className, onItemClick }: NavItemsProps) => {
  const [hovered, setHovered] = useState<number | null>(null)

  return (
    <motion.div
      onMouseLeave={() => setHovered(null)}
      className={cn(
        'text-foreground-500 hover:text-foreground inset-0 hidden flex-1 flex-row items-center justify-center space-x-2 text-sm font-medium transition duration-200 lg:flex lg:space-x-2',
        className
      )}>
      {items.map((item, idx) => (
        <a
          onMouseEnter={() => setHovered(idx)}
          onClick={onItemClick}
          className="text-foreground-600 dark:text-foreground-400 relative px-4 py-2"
          key={`link-${idx}`}
          href={item.link}>
          {hovered === idx && (
            <motion.div
              layoutId="hovered"
              className="bg-content2 dark:bg-content2 absolute inset-0 h-full w-full rounded-full"
            />
          )}
          <span className="relative z-20">{item.name}</span>
        </a>
      ))}
    </motion.div>
  )
}

export const MobileNav = ({ children, className, visible }: MobileNavProps) => {
  return (
    <motion.div
      animate={{
        backdropFilter: visible ? 'blur(10px)' : 'none',
        boxShadow: visible
          ? '0 1px 3px rgba(0, 0, 0, 0.1), 0 1px 2px rgba(0, 0, 0, 0.06)'
          : 'none',
        width: visible ? '90%' : '100%',
        paddingRight: visible ? '12px' : '0px',
        paddingLeft: visible ? '12px' : '0px',
        borderRadius: '2rem',
        y: visible ? 10 : 0
      }}
      transition={{ type: 'spring', stiffness: 200, damping: 50 }}
      className={cn(
        'z-50 mx-auto flex w-full max-w-[calc(100vw-2rem)] flex-col items-center justify-between px-2 py-2 lg:hidden',
        visible && 'bg-background/60 dark:bg-content1/90',
        className
      )}>
      {children}
    </motion.div>
  )
}

export const MobileNavHeader = ({
  children,
  className
}: MobileNavHeaderProps) => {
  return (
    <div
      className={cn(
        'flex w-full flex-row items-center justify-between',
        className
      )}>
      {children}
    </div>
  )
}

export const MobileNavMenu = ({
  children,
  className,
  isOpen,
  onClose
}: MobileNavMenuProps) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
          className={cn(
            'bg-background dark:bg-content1 fixed inset-x-0 bottom-0 z-50 flex w-full flex-col items-start justify-start gap-4 overflow-y-auto rounded-t-lg px-4 py-8 shadow-lg',
            'max-h-[85vh]', // Add max height
            className
          )}>
          <div className="absolute top-2 right-2">
            <button
              onClick={onClose}
              className="hover:bg-content2 rounded-full p-2 transition-colors"
              aria-label="Close menu">
              <Icon
                icon="lucide:x"
                className="text-foreground dark:text-foreground"
                width={24}
                height={24}
              />
            </button>
          </div>
          <div className="w-full overflow-y-auto pb-16">{children}</div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export const MobileNavToggle = ({
  isOpen,
  onClick
}: {
  isOpen: boolean
  onClick: () => void
}) => {
  return isOpen ? (
    <Icon
      icon="lucide:x"
      className="text-foreground dark:text-foreground"
      onClick={onClick}
      width={24}
      height={24}
    />
  ) : (
    <Icon
      icon="lucide:menu"
      className="text-foreground dark:text-foreground"
      onClick={onClick}
      width={24}
      height={24}
    />
  )
}

interface NavbarLogoProps {
  visible?: boolean
}

export const NavbarLogo = ({ visible = false }: NavbarLogoProps) => {
  const { theme } = useTheme()
  const isDark = theme === 'dark'

  return (
    <a
      href="#"
      className="text-foreground relative z-20 flex items-center gap-2 px-1 py-1 text-sm font-normal sm:px-2">
      {isDark ? (
        <img
          src="https://static.cdn.vezham.com/images/logo-white.png"
          alt="Vezham Logo"
          className={`${visible ? 'h-8' : 'h-12'} w-auto transition-all duration-300`}
        />
      ) : (
        <img
          src="https://static.cdn.vezham.com/images/logo-black.png"
          alt="Vezham Logo"
          className={`${visible ? 'h-8' : 'h-12'} w-auto transition-all duration-300`}
        />
      )}
    </a>
  )
}

export const NavbarButton = ({
  href,
  as: Tag = 'a',
  children,
  className,
  variant = 'primary',
  size = 'md',
  ...props
}: {
  href?: string
  as?: React.ElementType
  children: React.ReactNode
  className?: string
  variant?: 'primary' | 'secondary' | 'dark' | 'gradient'
  size?: 'sm' | 'md' | 'lg'
} & (
  | React.ComponentPropsWithoutRef<'a'>
  | React.ComponentPropsWithoutRef<'button'>
)) => {
  const baseStyles =
    'flex cursor-pointer group transition-colors duration-200 items-center justify-center gap-1 text-center rounded-md font-medium'

  const sizeStyles = {
    sm: 'text-xs py-1 px-2',
    md: 'text-sm py-1.5 px-4',
    lg: 'text-sm py-2 px-5'
  }

  const variantStyles = {
    primary: 'bg-primary text-white shadow-sm hover:bg-primary-600',
    secondary:
      'bg-transparent text-foreground-500 hover:text-foreground dark:text-foreground-400 dark:hover:text-foreground',
    dark: 'bg-foreground text-background shadow-sm hover:bg-foreground-800',
    gradient:
      'bg-gradient-to-b from-primary-400 to-primary-600 text-white shadow-sm'
  }

  return (
    <Tag
      href={href || undefined}
      className={cn(
        baseStyles,
        sizeStyles[size],
        variantStyles[variant],
        className
      )}
      {...props}>
      {children}
    </Tag>
  )
}
