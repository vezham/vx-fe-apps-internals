import { ReactRef, useDOMRef } from '@vezham/react-utils'
import {
  HTMLHeroUIProps,
  PropGetter,
  mapPropsVariants
} from '@vezham/react-utils'
import { cn } from '@vezham/react-utils'
import { SlotsToClasses } from '@vezham/react-utils'

import { FAQsTvProps, FAQsTvSlots, faqsTva } from './variant'

interface FAQItem {
  title: string
  content: string
}

interface FAQsCompProps extends FAQsTvProps, HTMLHeroUIProps<'section'> {
  ref?: ReactRef<HTMLDivElement | null>
  classNames?: SlotsToClasses<FAQsTvSlots>
  faqs?: FAQItem[]
  selectionMode?: 'single' | 'multiple'
  variant?: 'light' | 'shadow' | 'splitted' | 'bordered'
}

const useFAQsProps = (originalProps: FAQsCompProps) => {
  const [props, variantProps] = mapPropsVariants(
    originalProps,
    faqsTva.variantKeys
  )

  const {
    as,
    id,
    ref,
    children,
    className,
    classNames,
    faqs,
    selectionMode = 'multiple',
    variant = 'splitted',
    ...otherProps
  } = props

  const Component = as || 'section'
  const domRef = useDOMRef(ref)
  const slots = faqsTva(variantProps)

  const getBaseProps: PropGetter = () => ({
    id,
    ref: domRef,
    className: slots.base({ class: cn(classNames?.base, className) }),
    ...otherProps
  })

  const getContainerProps: PropGetter = () => ({
    className: slots.container({ class: classNames?.container })
  })

  const getTitleProps: PropGetter = () => ({
    className: slots.title({ class: classNames?.title })
  })

  const getMobileTitleProps: PropGetter = () => ({
    className: slots.mobileTitle({ class: classNames?.mobileTitle })
  })

  const getDesktopTitleProps: PropGetter = () => ({
    className: slots.desktopTitle({ class: classNames?.desktopTitle })
  })

  const getAccordionProps: PropGetter = () => ({
    className: slots.accordion({ class: classNames?.accordion }),
    fullWidth: true,
    keepContentMounted: true,
    selectionMode
  })

  const getAccordionItemProps: PropGetter = () => ({
    className: slots.accordionItem({ class: classNames?.accordionItem })
  })

  const getAccordionIndicatorProps: PropGetter = () => ({
    className: slots.accordionIndicator({
      class: classNames?.accordionIndicator
    }),
    width: 24
  })

  return {
    Component,
    domRef,
    slots,
    classNames,
    children,
    getBaseProps,
    getContainerProps,
    getTitleProps,
    getMobileTitleProps,
    getDesktopTitleProps,
    getAccordionProps,
    getAccordionItemProps,
    getAccordionIndicatorProps,
    faqs,
    selectionMode,
    variant
  }
}

export { useFAQsProps }
export type { FAQsCompProps, FAQItem }
