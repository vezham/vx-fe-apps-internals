import { AnimatePresence, motion } from 'framer-motion'
import React from 'react'

interface MobileNavOverlayProps {
  isOpen: boolean
  onClick: () => void
}

export const MobileNavOverlay: React.FC<MobileNavOverlayProps> = ({
  isOpen,
  onClick
}) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm"
          onClick={onClick}
          aria-hidden="true"
        />
      )}
    </AnimatePresence>
  )
}
