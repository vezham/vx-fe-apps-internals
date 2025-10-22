import { Icon } from '@iconify/react'
import { Link as RouterLink } from '@tanstack/react-router'
import React from 'react'

import { Link } from '@vx-oss/react'

import type { PromoBannerProps } from './types'
import {
  closeButton,
  closeIcon,
  promoBanner,
  promoContent,
  promoLink,
  promoText
} from './variant'

export const PromoBanner: React.FC<PromoBannerProps> = ({
  onClose,
  variant = 'primary'
}) => {
  return (
    <div className={promoBanner({ variant })}>
      <div className={promoContent()}>
        <span className={promoText()}>
          Join us at Vezham Conference India—our signature user conference!
        </span>
        <Link as={RouterLink} to="/conference" className={promoLink()}>
          Grab early bird tickets
        </Link>
      </div>

      {onClose && (
        <button
          onClick={onClose}
          className={closeButton()}
          aria-label="Close banner">
          <Icon icon="lucide:x" className={closeIcon()} />
        </button>
      )}
    </div>
  )
}

export default PromoBanner
