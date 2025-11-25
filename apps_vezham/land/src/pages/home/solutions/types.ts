import { ReactRef, useDOMRef } from '@vezham/react-utils'
import {
  HTMLHeroUIProps,
  PropGetter,
  mapPropsVariants
} from '@vezham/react-utils'
import { cn } from '@vezham/react-utils'
import { SlotsToClasses } from '@vezham/react-utils'

import { SolutionsTvProps, SolutionsTvSlots, solutionsTva } from './variant'

interface SolutionsCompProps extends SolutionsTvProps, HTMLHeroUIProps<'div'> {
  ref?: ReactRef<HTMLDivElement | null>
  classNames?: SlotsToClasses<SolutionsTvSlots>
}

const useSolutionsProps = (originalProps: SolutionsCompProps) => {
  const [props, variantProps] = mapPropsVariants(
    originalProps,
    solutionsTva.variantKeys
  )

  const { as, id, ref, children, className, classNames, ...otherProps } = props

  const Component = as || 'div'
  const domRef = useDOMRef(ref)
  const slots = solutionsTva(variantProps)

  const getBaseProps: PropGetter = () => ({
    id,
    ref: domRef,
    className: slots.base({ class: cn(classNames?.base, className) }),
    ...otherProps
  })

  // Hero Section
  const getHeroSectionProps: PropGetter = () => ({
    className: slots.heroSection({ class: classNames?.heroSection })
  })

  const getHeroTagProps: PropGetter = () => ({
    className: slots.heroTag({ class: classNames?.heroTag })
  })

  const getHeroTitleProps: PropGetter = () => ({
    className: slots.heroTitle({ class: classNames?.heroTitle })
  })

  const getHeroDescriptionProps: PropGetter = () => ({
    className: slots.heroDescription({ class: classNames?.heroDescription })
  })

  // Cards Grid
  const getCardsGridProps: PropGetter = () => ({
    className: slots.cardsGrid({ class: classNames?.cardsGrid })
  })

  // Card
  const getCardProps: PropGetter = (props: {
    type: 'enterprise' | 'startup'
  }) => ({
    className: slots.card({
      class: cn(
        classNames?.card,
        props.type === 'enterprise' && slots.cardEnterprise(),
        props.type === 'startup' && slots.cardStartup()
      )
    })
  })

  const getCardIconProps: PropGetter = () => ({
    className: slots.cardIcon({ class: classNames?.cardIcon })
  })

  const getCardTitleProps: PropGetter = () => ({
    className: slots.cardTitle({ class: classNames?.cardTitle })
  })

  const getCardDescriptionProps: PropGetter = () => ({
    className: slots.cardDescription({ class: classNames?.cardDescription })
  })

  const getCardButtonProps: PropGetter = (props: {
    type: 'enterprise' | 'startup'
  }) => ({
    className: slots.cardButton({ class: classNames?.cardButton }),
    color: props.type === 'enterprise' ? 'primary' : 'success'
  })

  // Modal
  const getModalProps: PropGetter = () => ({
    className: slots.modal({ class: classNames?.modal }),
    size: '2xl',
    scrollBehavior: 'inside'
  })

  const getModalContentProps: PropGetter = () => ({
    className: slots.modalContent({ class: classNames?.modalContent })
  })

  const getModalHeaderProps: PropGetter = () => ({
    className: slots.modalHeader({ class: classNames?.modalHeader })
  })

  const getModalBodyProps: PropGetter = () => ({
    className: slots.modalBody({ class: classNames?.modalBody })
  })

  const getModalSectionProps: PropGetter = () => ({
    className: slots.modalSection({ class: classNames?.modalSection })
  })

  const getModalSectionTitleProps: PropGetter = () => ({
    className: slots.modalSectionTitle({ class: classNames?.modalSectionTitle })
  })

  const getModalListProps: PropGetter = () => ({
    className: slots.modalList({ class: classNames?.modalList })
  })

  const getModalListItemProps: PropGetter = () => ({
    className: slots.modalListItem({ class: classNames?.modalListItem })
  })

  const getModalListItemTextProps: PropGetter = () => ({
    className: slots.modalListItemText({ class: classNames?.modalListItemText })
  })

  const getModalFooterProps: PropGetter = () => ({
    className: slots.modalFooter({ class: classNames?.modalFooter })
  })

  const getModalCloseButtonProps: PropGetter = () => ({
    className: slots.modalCloseButton({ class: classNames?.modalCloseButton }),
    color: 'danger',
    variant: 'light'
  })

  return {
    Component,
    domRef,
    slots,
    classNames,
    children,
    getBaseProps,
    getHeroSectionProps,
    getHeroTagProps,
    getHeroTitleProps,
    getHeroDescriptionProps,
    getCardsGridProps,
    getCardProps,
    getCardIconProps,
    getCardTitleProps,
    getCardDescriptionProps,
    getCardButtonProps,
    getModalProps,
    getModalContentProps,
    getModalHeaderProps,
    getModalBodyProps,
    getModalSectionProps,
    getModalSectionTitleProps,
    getModalListProps,
    getModalListItemProps,
    getModalListItemTextProps,
    getModalFooterProps,
    getModalCloseButtonProps
  }
}

export { useSolutionsProps }
export type { SolutionsCompProps }
