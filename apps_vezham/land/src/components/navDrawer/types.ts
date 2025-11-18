// import { ReactRef, useDOMRef } from '@vezham/react-utils'
// import {
//   HTMLHeroUIProps,
//   PropGetter,
//   mapPropsVariants
// } from '@vezham/react-utils'
// import { cn } from '@vezham/react-utils'
// import { SlotsToClasses } from '@vezham/react-utils'
// import { tvProps, tvSlots, tva } from './variant'
//  interface MegaSectionItem {
//   icon?: string
//   name: string
//   description?: string
//   link: string
// }
//  interface MegaSection {
//   title: string
//   Items: MegaSectionItem[]
// }
//  interface Props extends tvProps, HTMLHeroUIProps<'div'> {
//   ref?: ReactRef<HTMLDivElement | null>
//   classNames?: SlotsToClasses<tvSlots>
//   isOpen?: boolean
//   onOpenChange?: (open: boolean) => void
//   title?: string
//   sections?: MegaSection[]
//   placement?: 'top' | 'bottom' | 'left' | 'right'
// }
// const useProps = (originalProps: Props) => {
//   const [props, variantProps] = mapPropsVariants(originalProps, tva.variantKeys)
//   const {
//     as,
//     id,
//     ref,
//     children,
//     className,
//     classNames,
//     isOpen = false,
//     onOpenChange,
//     title = 'All Products',
//     sections = [],
//     placement = 'top',
//     ...otherProps
//   } = props
//   const Component = as || 'div'
//   const domRef = useDOMRef(ref)
//   const slots = tva(variantProps)
//   const getBaseProps: PropGetter = () => ({
//     id,
//     ref: domRef,
//     className: slots.base({ class: cn(classNames?.base, className) }),
//     ...otherProps
//   })
//   const getDrawerContentProps: PropGetter = () => ({
//     className: slots.drawerContent({ class: classNames?.drawerContent })
//   })
//   const getDrawerHeaderProps: PropGetter = () => ({
//     className: slots.drawerHeader({ class: classNames?.drawerHeader })
//   })
//   const getHeaderTitleProps: PropGetter = () => ({
//     className: slots.headerTitle({ class: classNames?.headerTitle })
//   })
//   const getDrawerBodyProps: PropGetter = () => ({
//     className: slots.drawerBody({ class: classNames?.drawerBody })
//   })
//   const getGridProps: PropGetter = () => ({
//     className: slots.grid({ class: classNames?.grid })
//   })
//   const getSectionProps: PropGetter = () => ({
//     className: slots.section({ class: classNames?.section })
//   })
//   const getSectionTitleProps: PropGetter = () => ({
//     className: slots.sectionTitle({ class: classNames?.sectionTitle })
//   })
//   const getItemsGridProps: PropGetter = () => ({
//     className: slots.itemsGrid({ class: classNames?.itemsGrid })
//   })
//   const getItemProps: PropGetter = () => ({
//     className: slots.item({ class: classNames?.item })
//   })
//   const getItemIconProps: PropGetter = () => ({
//     className: slots.itemIcon({ class: classNames?.itemIcon })
//   })
//   const getItemContentProps: PropGetter = () => ({
//     className: slots.itemContent({ class: classNames?.itemContent })
//   })
//   const getItemNameProps: PropGetter = () => ({
//     className: slots.itemName({ class: classNames?.itemName })
//   })
//   const getItemDescriptionProps: PropGetter = () => ({
//     className: slots.itemDescription({ class: classNames?.itemDescription })
//   })
//   return {
//     Component,
//     domRef,
//     slots,
//     classNames,
//     children,
//     getBaseProps,
//     getDrawerContentProps,
//     getDrawerHeaderProps,
//     getHeaderTitleProps,
//     getDrawerBodyProps,
//     getGridProps,
//     getSectionProps,
//     getSectionTitleProps,
//     getItemsGridProps,
//     getItemProps,
//     getItemIconProps,
//     getItemContentProps,
//     getItemNameProps,
//     getItemDescriptionProps,
//     isOpen,
//     onOpenChange,
//     title,
//     sections,
//     placement
//   }
// }
// export { useProps }
// export type { Props, MegaSection, MegaSectionItem }
import { ReactRef, useDOMRef } from '@vezham/react-utils'
import {
  HTMLHeroUIProps,
  PropGetter,
  mapPropsVariants
} from '@vezham/react-utils'
import { cn } from '@vezham/react-utils'
import { SlotsToClasses } from '@vezham/react-utils'

import { tvProps, tvSlots, tva } from './variant'

interface MegaSectionItem {
  icon?: string
  name: string
  description?: string
  link: string
}

interface MegaSection {
  title: string
  Items: MegaSectionItem[]
}

interface Props extends tvProps, HTMLHeroUIProps<'div'> {
  ref?: ReactRef<HTMLDivElement | null>
  classNames?: SlotsToClasses<tvSlots>
  isOpen?: boolean
  onOpenChange?: (open: boolean) => void
  title?: string
  sections?: MegaSection[]
  placement?: 'top' | 'bottom' | 'left' | 'right'
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
    title = 'All Products',
    sections = [],
    placement = 'top',
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

  const getDrawerHeaderProps: PropGetter = () => ({
    className: slots.drawerHeader({ class: classNames?.drawerHeader })
  })

  const getHeaderTitleProps: PropGetter = () => ({
    className: slots.headerTitle({ class: classNames?.headerTitle })
  })

  const getDrawerBodyProps: PropGetter = () => ({
    className: slots.drawerBody({ class: classNames?.drawerBody })
  })

  const getGridProps: PropGetter = () => ({
    className: slots.grid({ class: classNames?.grid })
  })

  const getSectionProps: PropGetter = () => ({
    className: slots.section({ class: classNames?.section })
  })

  const getSectionTitleProps: PropGetter = () => ({
    className: slots.sectionTitle({ class: classNames?.sectionTitle })
  })

  const getItemsGridProps: PropGetter = () => ({
    className: slots.itemsGrid({ class: classNames?.itemsGrid })
  })

  const getItemProps: PropGetter = () => ({
    className: slots.item({ class: classNames?.item })
  })

  const getItemIconProps: PropGetter = () => ({
    className: slots.itemIcon({ class: classNames?.itemIcon })
  })

  const getItemContentProps: PropGetter = () => ({
    className: slots.itemContent({ class: classNames?.itemContent })
  })

  const getItemNameProps: PropGetter = () => ({
    className: slots.itemName({ class: classNames?.itemName })
  })

  const getItemDescriptionProps: PropGetter = () => ({
    className: slots.itemDescription({ class: classNames?.itemDescription })
  })

  return {
    Component,
    domRef,
    slots,
    classNames,
    children,
    getBaseProps,
    getDrawerHeaderProps,
    getHeaderTitleProps,
    getDrawerBodyProps,
    getGridProps,
    getSectionProps,
    getSectionTitleProps,
    getItemsGridProps,
    getItemProps,
    getItemIconProps,
    getItemContentProps,
    getItemNameProps,
    getItemDescriptionProps,
    isOpen,
    onOpenChange,
    title,
    sections,
    placement
  }
}

export { useProps }
export type { Props, MegaSection, MegaSectionItem }
