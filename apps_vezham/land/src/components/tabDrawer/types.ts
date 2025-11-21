import { ReactRef, useDOMRef } from '@vezham/react-utils'
import {
  HTMLHeroUIProps,
  PropGetter,
  mapPropsVariants
} from '@vezham/react-utils'
import { cn } from '@vezham/react-utils'
import { SlotsToClasses } from '@vezham/react-utils'

import { tvProps, tvSlots, tva } from './variant'

interface DropdownItem {
  key: string
  label: string
  description: string
  href: string
}

interface Props extends tvProps, HTMLHeroUIProps<'div'> {
  ref?: ReactRef<HTMLDivElement | null>
  classNames?: SlotsToClasses<tvSlots>
  isOpen?: boolean
  onOpenChange?: (open: boolean) => void
  placement?: 'top' | 'bottom' | 'left' | 'right'
  activeItem?: {
    label: string
    href?: string
    subItems?: DropdownItem[]
  }
  onClose?: () => void
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
    isOpen = false,
    onOpenChange,
    placement = 'bottom',
    activeItem,
    onClose,
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

  const getDrawerContentProps: PropGetter = () => ({
    className: slots.drawerContent({ class: classNames?.drawerContent })
  })

  const getDrawerHeaderProps: PropGetter = () => ({
    className: slots.drawerHeader({ class: classNames?.drawerHeader })
  })

  const getDrawerBodyProps: PropGetter = () => ({
    className: slots.drawerBody({ class: classNames?.drawerBody })
  })

  const getSubItemProps: PropGetter = () => ({
    className: slots.subItem({ class: classNames?.subItem })
  })

  const getSubItemTitleProps: PropGetter = () => ({
    className: slots.subItemTitle({ class: classNames?.subItemTitle })
  })

  const getSubItemDescriptionProps: PropGetter = () => ({
    className: slots.subItemDescription({
      class: classNames?.subItemDescription
    })
  })

  return {
    Component,
    domRef,
    slots,
    classNames,
    children,
    getBaseProps,
    getDrawerContentProps,
    getDrawerHeaderProps,
    getDrawerBodyProps,
    getSubItemProps,
    getSubItemTitleProps,
    getSubItemDescriptionProps,
    isOpen,
    onOpenChange,
    placement,
    activeItem,
    onClose
  }
}

export { useProps }
export type { Props, DropdownItem }
