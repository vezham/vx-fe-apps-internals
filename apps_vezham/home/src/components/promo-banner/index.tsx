import { Icon } from '@iconify/react'
import { Link as RouterLink } from '@tanstack/react-router'

import { forwardRef } from '@vezham/react-utils'

import { Link } from '@vx-oss/react'

import { Props, useProps } from './types'

const PromoBanner = forwardRef<'div', Props>((props, ref) => {
  const {
    getBaseProps,
    getContentProps,
    getTextProps,
    getLinkProps,
    getCloseButtonProps,
    getCloseIconProps,
    onClose
  } = useProps({ ...props, ref })

  return (
    <div {...getBaseProps()}>
      <div {...getContentProps()}>
        <span {...getTextProps()}>
          Join us at Vezham Conference India—our signature user conference!
        </span>
        <Link as={RouterLink} to="/conference" {...getLinkProps()}>
          Grab early bird tickets
        </Link>
      </div>

      {onClose && (
        <button {...getCloseButtonProps()} onClick={onClose}>
          <Icon icon="lucide:x" {...getCloseIconProps()} />
        </button>
      )}
    </div>
  )
})

PromoBanner.displayName = 'PromoBanner'

export { PromoBanner }
