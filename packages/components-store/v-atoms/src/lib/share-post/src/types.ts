import { ReactRef, useDOMRef } from '@vezham/react-utils'
import { HTMLHeroUIProps, PropGetter } from '@vezham/react-utils'
import { cn } from '@vezham/react-utils'

import { Platform } from '@vx/shared-types'

interface Props extends HTMLHeroUIProps<'div'> {
  ref?: ReactRef<HTMLDivElement | null>
  title?: string
  platforms: Platform[]
}

const useProps = (props: Props) => {
  const {
    as,
    id,
    ref,
    children,
    className,
    title = 'Share this post',
    platforms,
    ...otherProps
  } = props

  const Component = as || 'div'

  const domRef = useDOMRef(ref)

  const getBaseProps: PropGetter = () => ({
    id,
    ref: domRef,
    className: cn('flex flex-col', className),
    ...otherProps
  })

  return {
    Component,
    domRef,
    // slots,
    // classNames,
    children,
    getBaseProps,

    // otherProps
    title,
    platforms
  }
}

export { useProps }
export type { Props }
