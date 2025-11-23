import { ReactRef, useDOMRef } from '@vezham/react-utils'
import {
  HTMLHeroUIProps,
  PropGetter,
  mapPropsVariants
} from '@vezham/react-utils'
import { cn } from '@vezham/react-utils'
import { SlotsToClasses } from '@vezham/react-utils'

import { ShortcutTvProps, ShortcutTvSlots, shortcutTva } from './variant'

export type ShortcutInfo = {
  title?: string
  href?: string
}

interface ShortcutCompProps extends ShortcutTvProps, HTMLHeroUIProps<'div'> {
  ref?: ReactRef<HTMLDivElement | null>
  classNames?: SlotsToClasses<ShortcutTvSlots>
  shortcuts: ShortcutInfo[] | undefined
  onOpen?: () => void
}

const useShortcutProps = (originalProps: ShortcutCompProps) => {
  const [props, variantProps] = mapPropsVariants(
    originalProps,
    shortcutTva.variantKeys
  )

  const {
    as,
    id,
    ref,
    children,
    className,
    classNames,
    shortcuts,
    onOpen,
    ...otherProps
  } = props

  const Component = as || 'div'
  const domRef = useDOMRef(ref)
  const slots = shortcutTva(variantProps)

  const getBaseProps: PropGetter = () => ({
    id,
    ref: domRef,
    className: slots.base({ class: cn(classNames?.base, className) }),
    ...otherProps
  })

  const getPopoverInnerProps: PropGetter = () => ({
    className: slots.popoverInner({ class: classNames?.popoverInner })
  })

  const getShortcutListProps: PropGetter = () => ({
    className: slots.shortcutList({ class: classNames?.shortcutList })
  })

  return {
    Component,
    domRef,
    slots,
    classNames,
    children,
    getBaseProps,

    getPopoverInnerProps,
    getShortcutListProps,

    shortcuts,
    onOpen
  }
}

export { useShortcutProps }
export type { ShortcutCompProps }
