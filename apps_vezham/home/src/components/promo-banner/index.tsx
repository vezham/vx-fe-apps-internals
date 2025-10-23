import { Icon } from '@iconify/react'
import { Link as RouterLink } from '@tanstack/react-router'
import React from 'react'

import { Link } from '@vx-oss/react'

import type { PromoBannerProps } from './types'
import { styles } from './variant'

export const PromoBanner: React.FC<PromoBannerProps> = ({
  onClose,
  variant = 'primary'
}) => {
  return (
    <div className={`${styles.banner.base} ${styles.banner.variant[variant]}`}>
      <div className={styles.content}>
        <span className={styles.text}>
          Join us at Vezham Conference India—our signature user conference!
        </span>
        <Link as={RouterLink} to="/conference" className={styles.link}>
          Grab early bird tickets
        </Link>
      </div>

      {onClose && (
        <button
          onClick={onClose}
          className={styles.closeButton}
          aria-label="Close banner">
          <Icon icon="lucide:x" className={styles.closeIcon} />
        </button>
      )}
    </div>
  )
}

export default PromoBanner
