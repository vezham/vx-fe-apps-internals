import { forwardRef } from '@vezham/react-utils'

import { ScrollShadow } from '@vx-oss/react'

import { Props, useProps } from './types'

const PlatformLayout = forwardRef<'div', Props>((props, ref) => {
  const { getBaseProps, children } = useProps({
    ...props,
    ref
  })
  return (
    <ScrollShadow {...getBaseProps()} visibility="none">
      {children}
    </ScrollShadow>
  )
})

PlatformLayout.displayName = 'PlatformLayout'

export { PlatformLayout }
