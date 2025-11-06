import {
  HTMLHeroUIProps,
  PropGetter,
  ReactRef,
  SlotsToClasses,
  cn,
  mapPropsVariants,
  useDOMRef
} from '@vezham/react-utils'

import { tvProps, tvSlots, tva } from './variant'

interface Props extends tvProps, HTMLHeroUIProps<'div'> {
  ref?: ReactRef<HTMLDivElement | null>
  classNames?: SlotsToClasses<tvSlots>
  label?: string
  onOpen?: () => void
  commandKey?: 'ctrl' | 'command'
}

const useProps = (originalProps: Props) => {
  const [props, variantProps] = mapPropsVariants(originalProps, tva.variantKeys)

  const {
    as,
    id,
    ref,
    children,
    className,
    classNames,
    label = 'Quick search...',
    onOpen,
    commandKey = 'command',
    ...otherProps
  } = props

  const Component = as || 'div'

  const domRef = useDOMRef(ref)

  const slots = tva(variantProps)

  const getBaseProps: PropGetter = () => ({
    id,
    ref: domRef,
    className: slots.base({ class: cn(classNames?.base, className) }),
    ...otherProps
  })

  const getButtonProps: PropGetter = () => ({
    className: slots.button({ class: classNames?.button })
  })

  const getSearchIconProps: PropGetter = () => ({
    className: slots.searchIcon({ class: classNames?.searchIcon })
  })

  const getKbdProps: PropGetter = () => ({
    className: slots.kbd({ class: classNames?.kbd }),
    color: 'transparent' as const,
    radius: 'none' as const,
    shadow: 'none' as const,
    title: 'Command' as const
  })

  return {
    Component,
    domRef,
    slots,
    classNames,
    children,
    getBaseProps,
    getButtonProps,
    getSearchIconProps,
    getKbdProps,

    // Data & configuration props
    label,
    onOpen,
    commandKey
  }
}

export { useProps }
export type { Props }
