import { ReactRef, useDOMRef } from '@vezham/react-utils'
import {
  HTMLHeroUIProps,
  PropGetter,
  mapPropsVariants
} from '@vezham/react-utils'
import { cn } from '@vezham/react-utils'
import { SlotsToClasses } from '@vezham/react-utils'

import { tvProps, tvSlots, tva } from './variant'

export interface TabItem {
  key: string
  label: string
  icon?: string
  subItems?: Array<{
    key: string
    label: string
    description: string
    href: string
  }>
}

interface Props extends tvProps, HTMLHeroUIProps<'div'> {
  ref?: ReactRef<HTMLDivElement | null>
  classNames?: SlotsToClasses<tvSlots>
  items?: TabItem[]
  selectedTab?: string
  onSelectionChange?: (key: string) => void
  onTabClick?: (item: TabItem) => void
  color?: 'primary' | 'secondary' | 'success' | 'warning' | 'danger'
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
    items = [],
    selectedTab = '',
    onSelectionChange,
    onTabClick,
    color = 'primary',
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

  const getTabListProps: PropGetter = () => ({
    className: slots.tabList({ class: classNames?.tabList })
  })

  const getTabProps: PropGetter = () => ({
    className: slots.tab({ class: classNames?.tab })
  })

  return {
    Component,
    domRef,
    slots,
    classNames,
    children,
    getBaseProps,
    getTabListProps,
    getTabProps,
    items,
    selectedTab,
    onSelectionChange,
    onTabClick,
    color
  }
}

export { useProps }
export type { Props, TabItem }
