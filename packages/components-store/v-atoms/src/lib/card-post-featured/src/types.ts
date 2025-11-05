import { ReactRef, useDOMRef } from '@vezham/react-utils'
import {
  HTMLHeroUIProps,
  PropGetter,
  mapPropsVariants
} from '@vezham/react-utils'
import { cn } from '@vezham/react-utils'
import { SlotsToClasses } from '@vezham/react-utils'

// import { People } from '@vezham/shared-types'
import { Article } from '@vx/shared-types'

import { tvProps, tvSlots, tva } from './variant'

interface Props extends tvProps, HTMLHeroUIProps<'div'> {
  ref?: ReactRef<HTMLDivElement | null>
  classNames?: SlotsToClasses<tvSlots>
  posts: Article[]
  device_size?:
    | 'mob_sm'
    | 'mob'
    | 'mob_l'
    | 'mob_xl'
    | 'tab'
    | 'tab_l'
    | 'lap'
    | 'desk'
  direction?: 'ltr' | 'rtl'
}

const useProps = (originalProps: Props) => {
  const [props, variantProps] = mapPropsVariants(originalProps, tva.variantKeys)

  const { as, id, ref, children, className, classNames, posts, ...otherProps } =
    props

  const Component = as || 'div'

  const domRef = useDOMRef(ref)

  const slots = tva(variantProps)

  const getBaseProps = () => ({
    id,
    ref: domRef,
    className: slots.base({ class: cn(classNames?.base, className) }),
    ...otherProps,

    // scroll-shadow
    orientation: originalProps.orientation,
    show_track: true
  })

  const getWrapperProps: PropGetter = () => ({
    className: slots.wrapper({ class: classNames?.wrapper })
  })

  const getCardProps = () => ({
    className: slots.card({ class: classNames?.card }),
    isPressable: true
  })

  const getContentProps: PropGetter = () => ({
    className: slots.content({ class: classNames?.content })
  })

  return {
    Component,
    domRef,
    slots,
    classNames,
    children,
    getBaseProps,
    getWrapperProps,

    // otherProps
    posts,
    getCardProps,
    getContentProps
  }
}

export { useProps }
export type { Props }
