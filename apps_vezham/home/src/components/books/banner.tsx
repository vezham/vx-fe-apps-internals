import { Icon } from '@iconify/react'
import { AnimatePresence, motion } from 'framer-motion'
import React from 'react'

import { Button, cn } from '@vx-oss/react'

interface BannerItem {
  id: number
  title: string
  description: string
  ctaText: string
  ctaLink: string
  variant: 'primary' | 'secondary' | 'success' | 'warning' | 'danger'
}

interface BannerProps {
  items: BannerItem[]
  autoRotate?: boolean
  rotationInterval?: number
  className?: string
}

const Banner: React.FC<BannerProps> = ({
  items,
  autoRotate = true,
  rotationInterval = 5000,
  className
}) => {
  const [currentIndex, setCurrentIndex] = React.useState(0)
  const [isVisible, setIsVisible] = React.useState(true)

  React.useEffect(() => {
    if (!autoRotate || items.length <= 1) return

    const interval = setInterval(() => {
      setIsVisible(false)
      setTimeout(() => {
        setCurrentIndex(prev => (prev + 1) % items.length)
        setIsVisible(true)
      }, 300)
    }, rotationInterval)

    return () => clearInterval(interval)
  }, [autoRotate, items.length, rotationInterval])

  const handleClose = () => {
    setIsVisible(false)
  }

  if (!isVisible || items.length === 0) return null

  const currentItem = items[currentIndex]

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className={cn(
            'bg-default-50 dark:bg-default-100 border-default-200 w-full border-b',
            className
          )}>
          <div className="mx-auto max-w-7xl px-4 py-3 sm:px-6 lg:px-8">
            <div className="flex flex-wrap items-center justify-between">
              <div className="flex flex-1 items-center">
                <span
                  className={`flex rounded-lg p-2 bg-${currentItem.variant}-100 dark:bg-${currentItem.variant}-900/30`}>
                  <Icon
                    icon={
                      currentItem.variant === 'primary'
                        ? 'lucide:bell'
                        : currentItem.variant === 'success'
                          ? 'lucide:check-circle'
                          : 'lucide:info'
                    }
                    className={`h-6 w-6 text-${currentItem.variant}-600 dark:text-${currentItem.variant}-400`}
                    aria-hidden="true"
                  />
                </span>
                <div className="ml-3 truncate font-medium">
                  <span className="md:hidden">{currentItem.title}</span>
                  <span className="hidden md:inline">
                    <span className="mr-2 font-semibold">
                      {currentItem.title}:
                    </span>
                    {currentItem.description}
                  </span>
                </div>
              </div>
              <div className="order-2 flex-shrink-0 sm:order-3 sm:ml-3">
                <Button
                  as="a"
                  href={currentItem.ctaLink}
                  size="sm"
                  color={currentItem.variant}
                  variant="flat"
                  className="mr-2">
                  {currentItem.ctaText}
                </Button>
                <Button
                  size="sm"
                  isIconOnly
                  variant="light"
                  aria-label="Close"
                  onPress={handleClose}>
                  <Icon icon="lucide:x" width={16} />
                </Button>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export { Banner }
