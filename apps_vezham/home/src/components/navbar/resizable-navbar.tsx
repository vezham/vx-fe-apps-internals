// import { Icon } from '@iconify/react'
// import {
//   AnimatePresence,
//   motion,
//   useMotionValueEvent,
//   useScroll
// } from 'framer-motion'
// import React, { useRef, useState } from 'react'
// import { useTheme } from '@vx-oss/use-theme'
// import {
//   MobileNavHeaderProps,
//   MobileNavMenuProps,
//   MobileNavProps,
//   NavBodyProps,
//   NavItemsProps,
//   NavbarButtonProps,
//   NavbarLogoProps,
//   NavbarProps
// } from './types'
// import { navbarVariants } from './variant'
// const cn = (...classes: (string | undefined)[]) =>
//   classes.filter(Boolean).join(' ')
// export const Navbar = ({ children, className }: NavbarProps) => {
//   const ref = useRef<HTMLDivElement>(null)
//   const { scrollY } = useScroll({ target: ref })
//   const [visible, setVisible] = useState(false)
//   useMotionValueEvent(scrollY, 'change', latest => setVisible(latest > 100))
//   return (
//     <motion.div
//       ref={ref}
//       animate={{ top: visible ? '10px' : undefined }}
//       transition={{ type: 'spring', stiffness: 300, damping: 30 }}
//       className={cn(navbarVariants.base.wrapper, className)}>
//       {React.Children.map(children, child =>
//         React.isValidElement(child)
//           ? React.cloneElement(
//               child as React.ReactElement<{ visible?: boolean }>,
//               { visible }
//             )
//           : child
//       )}
//     </motion.div>
//   )
// }
// export const NavBody = ({
//   children,
//   className,
//   visible,
//   onMouseLeave
// }: NavBodyProps) => {
//   return (
//     <motion.div
//       animate={{
//         backdropFilter: visible ? 'blur(10px)' : 'none',
//         boxShadow: visible
//           ? '0 1px 3px rgba(0,0,0,0.1),0 1px 2px rgba(0,0,0,0.06)'
//           : 'none',
//         width: visible ? '90%' : '95%',
//         y: visible ? 10 : 0
//       }}
//       transition={{ type: 'spring', stiffness: 200, damping: 50 }}
//       className={cn(
//         navbarVariants.base.navBody,
//         visible ? navbarVariants.variants.navBody.visible : '',
//         className
//       )}
//       onMouseLeave={onMouseLeave}>
//       {children}
//     </motion.div>
//   )
// }
// export const NavItems = ({ items, className, onItemClick }: NavItemsProps) => {
//   const [hovered, setHovered] = useState<number | null>(null)
//   return (
//     <motion.div
//       onMouseLeave={() => setHovered(null)}
//       className={cn(navbarVariants.base.navItems, className)}>
//       {items.map((item, idx) => (
//         <a
//           onMouseEnter={() => setHovered(idx)}
//           onClick={onItemClick}
//           className={cn(navbarVariants.base.navItem)}
//           key={`link-${idx}`}
//           href={item.link}>
//           {hovered === idx && (
//             <motion.div className={navbarVariants.variants.navItemHover} />
//           )}
//           <span className="relative z-20">{item.name}</span>
//         </a>
//       ))}
//     </motion.div>
//   )
// }
// export const MobileNav = ({ children, className, visible }: MobileNavProps) => (
//   <motion.div
//     animate={{
//       backdropFilter: visible ? 'blur(10px)' : 'none',
//       boxShadow: visible
//         ? '0 1px 3px rgba(0,0,0,0.1),0 1px 2px rgba(0,0,0,0.06)'
//         : 'none',
//       width: visible ? '90%' : '100%',
//       paddingRight: visible ? '12px' : '0px',
//       paddingLeft: visible ? '12px' : '0px',
//       borderRadius: '2rem',
//       y: visible ? 10 : 0
//     }}
//     transition={{ type: 'spring', stiffness: 200, damping: 50 }}
//     className={cn(
//       navbarVariants.base.mobileNav,
//       visible ? navbarVariants.variants.mobileNav.visible : '',
//       className
//     )}>
//     {children}
//   </motion.div>
// )
// export const MobileNavHeader = ({
//   children,
//   className
// }: MobileNavHeaderProps) => (
//   <div className={cn(navbarVariants.base.mobileNavHeader, className)}>
//     {children}
//   </div>
// )
// export const MobileNavMenu = ({
//   children,
//   className,
//   isOpen,
//   onClose
// }: MobileNavMenuProps) => (
//   <AnimatePresence>
//     {isOpen && (
//       <motion.div
//         initial={{ opacity: 0, y: 50 }}
//         animate={{ opacity: 1, y: 0 }}
//         exit={{ opacity: 0, y: 50 }}
//         className={cn(navbarVariants.base.mobileNavMenu, className)}>
//         <div className="absolute top-2 right-2">
//           <button
//             onClick={onClose}
//             className="hover:bg-content2 rounded-full p-2 transition-colors"
//             aria-label="Close menu">
//             <Icon
//               icon="lucide:x"
//               className="text-foreground dark:text-foreground"
//               width={24}
//               height={24}
//             />
//           </button>
//         </div>
//         <div className="w-full overflow-y-auto pb-16">{children}</div>
//       </motion.div>
//     )}
//   </AnimatePresence>
// )
// export const MobileNavToggle = ({
//   isOpen,
//   onClick
// }: {
//   isOpen: boolean
//   onClick: () => void
// }) => {
//   return (
//     <Icon
//       icon={isOpen ? 'lucide:x' : 'lucide:menu'}
//       className={navbarVariants.base.mobileNavToggle}
//       onClick={onClick}
//       width={24}
//       height={24}
//     />
//   )
// }
// export const NavbarLogo = ({ visible = false }: NavbarLogoProps) => {
//   const { theme } = useTheme()
//   const isDark = theme === 'dark'
//   const heightClass = visible
//     ? navbarVariants.variants.navbarLogoHeight.small
//     : navbarVariants.variants.navbarLogoHeight.large
//   return (
//     <a href="#" className={navbarVariants.base.navbarLogo}>
//       <img
//         src={
//           isDark
//             ? 'https://static.cdn.vezham.com/images/logo-white.png'
//             : 'https://static.cdn.vezham.com/images/logo-black.png'
//         }
//         alt="Vezham Logo"
//         className={`${heightClass} w-auto transition-all duration-300`}
//       />
//     </a>
//   )
// }
// export const NavbarButton = ({
//   href,
//   as: Tag = 'a',
//   children,
//   className,
//   variant = 'primary',
//   size = 'md',
//   ...props
// }: NavbarButtonProps) => {
//   const buttonClass = cn(
//     navbarVariants.base.buttonBase,
//     navbarVariants.variants.button.size[size],
//     navbarVariants.variants.button.variant[variant],
//     className
//   )
//   return (
//     <Tag href={href} className={buttonClass} {...props}>
//       {children}
//     </Tag>
//   )
// }
import { Icon } from '@iconify/react'
import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useScroll
} from 'framer-motion'
import React, { useRef, useState } from 'react'

import { useTheme } from '@vx-oss/use-theme'

import {
  MobileNavHeaderProps,
  MobileNavMenuProps,
  MobileNavProps,
  NavBodyProps,
  NavItemsProps,
  NavbarButtonProps,
  NavbarLogoProps,
  NavbarProps,
  useNavbarProps
} from './types'

export const Navbar = ({ children, className }: NavbarProps) => {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollY } = useScroll({ target: ref })
  const [visible, setVisible] = useState(false)
  const { getWrapperProps } = useNavbarProps({ navbarClass: className })

  useMotionValueEvent(scrollY, 'change', latest => setVisible(latest > 100))

  return (
    <motion.div
      ref={ref}
      animate={{ top: visible ? '10px' : undefined }}
      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
      {...getWrapperProps()}>
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
  const { getNavBodyProps } = useNavbarProps({ navBodyClass: className })
  return (
    <motion.div
      animate={{
        backdropFilter: visible ? 'blur(10px)' : 'none',
        boxShadow: visible
          ? '0 1px 3px rgba(0,0,0,0.1),0 1px 2px rgba(0,0,0,0.06)'
          : 'none',
        width: visible ? '90%' : '95%',
        y: visible ? 10 : 0
      }}
      transition={{ type: 'spring', stiffness: 200, damping: 50 }}
      {...getNavBodyProps(visible)}
      onMouseLeave={onMouseLeave}>
      {children}
    </motion.div>
  )
}

export const NavItems = ({ items, className, onItemClick }: NavItemsProps) => {
  const [hovered, setHovered] = useState<number | null>(null)
  const { getNavItemsProps, getNavItemProps, getNavItemHoverProps } =
    useNavbarProps({})
  return (
    <motion.div onMouseLeave={() => setHovered(null)} {...getNavItemsProps()}>
      {items.map((item, idx) => (
        <a
          key={`link-${idx}`}
          href={item.link}
          {...getNavItemProps()}
          onMouseEnter={() => setHovered(idx)}
          onClick={onItemClick}>
          {hovered === idx && <motion.div {...getNavItemHoverProps()} />}
          <span className="relative z-20">{item.name}</span>
        </a>
      ))}
    </motion.div>
  )
}

export const MobileNav = ({ children, className, visible }: MobileNavProps) => {
  const { getMobileNavProps } = useNavbarProps({ mobileNavClass: className })
  return <motion.div {...getMobileNavProps(visible)}>{children}</motion.div>
}

export const MobileNavHeader = ({
  children,
  className
}: MobileNavHeaderProps) => {
  const { getMobileNavHeaderProps } = useNavbarProps({})
  return <div {...getMobileNavHeaderProps()}>{children}</div>
}

export const MobileNavMenu = ({
  children,
  className,
  isOpen,
  onClose
}: MobileNavMenuProps) => {
  const { getMobileNavMenuProps } = useNavbarProps({})
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
          {...getMobileNavMenuProps()}>
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
  const { getMobileNavToggleProps } = useNavbarProps({})
  return (
    <Icon
      icon={isOpen ? 'lucide:x' : 'lucide:menu'}
      {...getMobileNavToggleProps()}
      onClick={onClick}
      width={24}
      height={24}
    />
  )
}

export const NavbarLogo = ({ visible = false }: NavbarLogoProps) => {
  const { theme } = useTheme()
  const { getNavbarLogoProps, getNavbarLogoHeight } = useNavbarProps({})
  const isDark = theme === 'dark'
  const heightClass = getNavbarLogoHeight(visible)
  return (
    <a href="#" {...getNavbarLogoProps()}>
      <img
        src={
          isDark
            ? 'https://static.cdn.vezham.com/images/logo-white.png'
            : 'https://static.cdn.vezham.com/images/logo-black.png'
        }
        alt="Vezham Logo"
        className={`${heightClass} w-auto transition-all duration-300`}
      />
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
}) => {
  const { getButtonProps } = useNavbarProps()

  const { className: buttonClasses } = getButtonProps(variant, size, className)

  return (
    <Tag href={href} {...props} className={buttonClasses}>
      {children}
    </Tag>
  )
}
