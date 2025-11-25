import { ReactRef, useDOMRef } from '@vezham/react-utils'
import {
  HTMLHeroUIProps,
  PropGetter,
  mapPropsVariants
} from '@vezham/react-utils'
import { cn } from '@vezham/react-utils'
import { SlotsToClasses } from '@vezham/react-utils'

import { ContactusTvProps, ContactusTvSlots, contactusTva } from './variant'

interface CardProps {
  title: string
  description: string
  button: string
  color: 'default' | 'primary' | 'secondary' | 'danger' | 'success' | 'warning'
  url: string
}

interface ContactusCompProps extends ContactusTvProps, HTMLHeroUIProps<'div'> {
  ref?: ReactRef<HTMLDivElement | null>
  classNames?: SlotsToClasses<ContactusTvSlots>
}

const useContactusProps = (originalProps: ContactusCompProps) => {
  const [props, variantProps] = mapPropsVariants(
    originalProps,
    contactusTva.variantKeys
  )

  const {
    as,
    id,
    ref,
    children,
    className,
    classNames,
    cards1,
    cards2,
    ...otherProps
  } = props

  const Component = as || 'div'
  const domRef = useDOMRef(ref)
  const slots = contactusTva(variantProps)

  const getBaseProps: PropGetter = () => ({
    id,
    ref: domRef,
    className: slots.base({ class: cn(classNames?.base, className) }),
    ...otherProps
  })

  // Left Column
  const getLeftColumnProps: PropGetter = () => ({
    className: slots.leftColumn({ class: classNames?.leftColumn })
  })

  const getLeftColumnLinkProps: PropGetter = () => ({
    className: slots.leftColumnLink({ class: classNames?.leftColumnLink }),
    isExternal: true,
    showAnchorIcon: true
  })

  const getLeftColumnTitleProps: PropGetter = () => ({
    className: slots.leftColumnTitle({ class: classNames?.leftColumnTitle })
  })

  const getLeftColumnDescriptionProps: PropGetter = () => ({
    className: slots.leftColumnDescription({
      class: classNames?.leftColumnDescription
    })
  })

  // Right Column
  const getRightColumnProps: PropGetter = () => ({
    className: slots.rightColumn({ class: classNames?.rightColumn })
  })

  const getCardsContainerProps: PropGetter = () => ({
    className: slots.cardsContainer({ class: classNames?.cardsContainer })
  })

  const getCardColumnProps: PropGetter = () => ({
    className: slots.cardColumn({ class: classNames?.cardColumn })
  })

  // Card
  const getCardProps: PropGetter = (props: {
    backgroundUrl: string
    color: string
  }) => ({
    className: slots.card({ class: classNames?.card }),
    style: {
      backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.9)), url(${props.backgroundUrl})`
    }
  })

  const getCardBodyProps: PropGetter = () => ({
    className: slots.cardBody({ class: classNames?.cardBody })
  })

  const getCardTitleProps: PropGetter = () => ({
    className: slots.cardTitle({ class: classNames?.cardTitle })
  })

  const getCardDescriptionProps: PropGetter = () => ({
    className: slots.cardDescription({ class: classNames?.cardDescription })
  })

  const getCardFooterProps: PropGetter = () => ({
    className: slots.cardFooter({ class: classNames?.cardFooter })
  })

  const getCardButtonProps: PropGetter = (props: { color: string }) => ({
    className: slots.cardButton({ class: classNames?.cardButton }),
    color: props.color as any,
    size: 'sm'
  })

  return {
    Component,
    domRef,
    slots,
    classNames,
    children,
    getBaseProps,
    getLeftColumnProps,
    getLeftColumnLinkProps,
    getLeftColumnTitleProps,
    getLeftColumnDescriptionProps,
    getRightColumnProps,
    getCardsContainerProps,
    getCardColumnProps,
    getCardProps,
    getCardBodyProps,
    getCardTitleProps,
    getCardDescriptionProps,
    getCardFooterProps,
    getCardButtonProps,
    cards1,
    cards2
  }
}

export { useContactusProps }
export type { ContactusCompProps, CardProps }
