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
  collectionId?: string
  title?: string
  description?: string
  title_size?: 'sm' | 'md' | 'lg'
  bg_effect?: 'flat' | 'gradient' | 'shadow'
  spacer?: 'sm' | 'md' | 'lg'
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
    collectionId,
    title,
    description,
    title_size = 'md',
    bg_effect = 'flat',
    spacer = 'md',
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

  const getSectionContainerProps: PropGetter = () => ({
    className: slots.sectionContainer({ class: classNames?.sectionContainer })
  })

  const getHeroSectionProps: PropGetter = () => ({
    title,
    description,
    title_size,
    bg_effect,
    spacer,
    className: slots.heroSection({ class: classNames?.heroSection })
  })

  return {
    Component,
    domRef,
    slots,
    classNames,
    children,
    getBaseProps,
    getSectionContainerProps,
    getHeroSectionProps,
    collectionId,
    title,
    description,
    title_size,
    bg_effect,
    spacer
  }
}

export { useProps }
export type { Props }
