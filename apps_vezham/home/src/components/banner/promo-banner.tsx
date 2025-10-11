import { Icon } from '@iconify/react'
import { Link as RouterLink } from '@tanstack/react-router'
import React from 'react'

import { Link } from '@vx-oss/react'

interface PromoBannerProps {
  onClose?: () => void
}

export const PromoBanner: React.FC<PromoBannerProps> = ({ onClose }) => {
  return (
    <div className="from-primary-100 to-primary-50 relative z-30 mx-4 mb-4 rounded-lg bg-gradient-to-r px-6 py-2.5 shadow-sm">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-4 text-sm sm:text-base">
        <span className="text-foreground font-medium">
          Join us at Vezham Conference India—our signature user conference!
        </span>
        <Link
          as={RouterLink}
          to="/conference"
          className="text-primary font-semibold hover:underline">
          Grab early bird tickets
        </Link>
      </div>
      {onClose && (
        <button
          onClick={onClose}
          className="text-foreground-500 hover:text-foreground absolute top-1/2 right-4 -translate-y-1/2"
          aria-label="Close banner">
          <Icon icon="lucide:x" className="h-4 w-4" />
        </button>
      )}
    </div>
  )
}

export default PromoBanner
