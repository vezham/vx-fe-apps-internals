import { AnimatePresence, motion } from 'framer-motion'
import React from 'react'

import { MobileNavOverlayProps, useMobOverlayProps } from './types'
import { mobileNavOverlayAnimations } from './variant'

export const MobileNavOverlay: React.FC<
  MobileNavOverlayProps
> = originalProps => {
  const { isOpen, getOverlayProps } = useMobOverlayProps(originalProps)
  const animation = mobileNavOverlayAnimations

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={animation.initial}
          animate={animation.animate}
          exit={animation.exit}
          transition={animation.transition}
          {...getOverlayProps()}
        />
      )}
    </AnimatePresence>
  )
}
