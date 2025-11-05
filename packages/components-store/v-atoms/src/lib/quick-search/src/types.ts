import { ReactRef, useDOMRef } from '@vezham/react-utils'
import { HTMLHeroUIProps, PropGetter } from '@vezham/react-utils'

interface Props extends HTMLHeroUIProps<'div'> {
  ref?: ReactRef<HTMLDivElement | null>
  label?: string
}

const useProps = (props: Props) => {
  const {
    as,
    id,
    ref,
    children,
    className,
    label = 'Quick Search...',
    ...otherProps
  } = props

  const Component = as || 'div'

  const domRef = useDOMRef(ref)

  const getBaseProps: PropGetter = () => ({
    id,
    ref: domRef,
    className,
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
    label
  }
}

export { useProps }
export type { Props }
