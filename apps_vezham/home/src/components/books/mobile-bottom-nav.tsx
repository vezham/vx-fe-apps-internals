import { Icon } from '@iconify/react'
import { motion } from 'framer-motion'
import React from 'react'

import { Link, cn } from '@vx-oss/react'

interface NavItem {
  name: string
  icon: string
  href: string
}

interface MobileBottomNavProps {
  className?: string
}

const navItems: NavItem[] = [
  { name: 'Home', icon: 'lucide:home', href: '#' },
  { name: 'Products', icon: 'lucide:layers', href: '#products' },
  { name: 'Solutions', icon: 'lucide:puzzle', href: '#solutions' },
  { name: 'Resources', icon: 'lucide:book-open', href: '#resources' },
  { name: 'Account', icon: 'lucide:user', href: '#account' }
]

const MobileBottomNav: React.FC<MobileBottomNavProps> = ({ className }) => {
  const [activeItem, setActiveItem] = React.useState('Home')

  return (
    <motion.nav
      initial={{ y: 100 }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
      className={cn(
        'bg-background/80 border-default-200 fixed right-0 bottom-0 left-0 z-50 border-t backdrop-blur-md md:hidden',
        className
      )}>
      <div className="flex h-16 items-center justify-around">
        {navItems.map(item => (
          <Link
            key={item.name}
            href={item.href}
            className={cn(
              'flex h-full w-full flex-col items-center justify-center px-2 py-1 transition-colors',
              activeItem === item.name
                ? 'text-primary'
                : 'text-default-500 hover:text-primary'
            )}
            onClick={() => setActiveItem(item.name)}>
            <Icon icon={item.icon} width={24} />
            <span className="mt-1 text-xs">{item.name}</span>
            {activeItem === item.name && (
              <motion.div
                layoutId="bottomNavIndicator"
                className="bg-primary absolute bottom-0 h-0.5 w-12 rounded-t-full"
                transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              />
            )}
          </Link>
        ))}
      </div>
    </motion.nav>
  )
}

export { MobileBottomNav }
