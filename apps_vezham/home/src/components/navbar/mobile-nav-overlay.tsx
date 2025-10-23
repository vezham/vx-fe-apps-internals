// MobileNavOverlay.tsx
import { AnimatePresence, motion } from 'framer-motion'
import React from 'react'

import { MobileNavOverlayProps } from './types'
import { mobileNavOverlayVariants as v } from './variant'

export const MobileNavOverlay: React.FC<MobileNavOverlayProps> = ({
  isOpen,
  onClick,
  variant = 'dark'
}) => {
  const animation = v.animations
  const overlayClass = `${v.base.overlay} ${v.variants.variant[variant]}`

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={animation.initial}
          animate={animation.animate}
          exit={animation.exit}
          transition={animation.transition}
          className={overlayClass}
          onClick={onClick}
          aria-hidden="true"
        />
      )}
    </AnimatePresence>
  )
}
