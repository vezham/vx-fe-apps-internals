// import { IconProps } from '@vezham/icons'
// import { ReactRef, useDOMRef } from '@vezham/react-utils'
// import {
//   HTMLHeroUIProps,
//   PropGetter,
//   mapPropsVariants
// } from '@vezham/react-utils'
// import { cn } from '@vezham/react-utils'
// import { SlotsToClasses } from '@vezham/react-utils'
// import { tvProps, tvSlots, tva } from './variant'
// interface Props extends tvProps, HTMLHeroUIProps<'div'> {
//   ref?: ReactRef<HTMLDivElement | null>
//   classNames?: SlotsToClasses<tvSlots>
//   icon?: IconProps
//   type?: 'like' | 'emoji' | 'star' | 'heart'
//   scale?: 2 | 3 | 5
//   title?: string
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
//     icon = { hover_effect: 'glow' },
//     type = 'emoji',
//     scale = 3,
//     title = 'Was this helpful?',
//     ...otherProps
//   } = props
//   const Component = as || 'div'
//   const domRef = useDOMRef(ref)
//   const slots = tva(variantProps)
//   const getBaseProps: PropGetter = () => ({
//     id,
//     ref: domRef,
//     className: slots.base({
//       class: cn(classNames?.base, `vcount-${scale}`, className)
//     }),
//     ...otherProps
//   })
//   const getTitleProps: PropGetter = () => ({
//     className: slots.title({ class: classNames?.title })
//   })
//   const getRatingProps: PropGetter = () => ({
//     className: slots.rating({ class: classNames?.rating })
//   })
//   return {
//     Component,
//     domRef,
//     slots,
//     classNames,
//     children,
//     getBaseProps,
//     // otherProps
//     icon,
//     type,
//     scale,
//     title,
//     getTitleProps,
//     getRatingProps
//   }
// }
// export { Props, useProps }
import { LucideProps } from 'lucide-react'

import { ReactRef, useDOMRef } from '@vezham/react-utils'
import {
  HTMLHeroUIProps,
  PropGetter,
  mapPropsVariants
} from '@vezham/react-utils'
import { cn } from '@vezham/react-utils'
import { SlotsToClasses } from '@vezham/react-utils'

import { tvProps, tvSlots, tva } from './variant'

interface Props extends tvProps, HTMLHeroUIProps<'div'> {
  ref?: ReactRef<HTMLDivElement | null>
  classNames?: SlotsToClasses<tvSlots>
  icon?: LucideProps
  type?: 'like' | 'emoji' | 'star' | 'heart'
  scale?: 2 | 3 | 5
  title?: string
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
    icon = { className: 'transition-all duration-200 hover:scale-110' },
    type = 'emoji',
    scale = 5,
    title = 'Was this helpful?',
    ...otherProps
  } = props

  const Component = as || 'div'

  const domRef = useDOMRef(ref)

  const slots = tva({ ...variantProps, scale, type })

  const getBaseProps: PropGetter = () => ({
    id,
    ref: domRef,
    className: slots.base({
      class: cn(classNames?.base, className)
    }),
    ...otherProps
  })

  const getTitleProps: PropGetter = () => ({
    className: slots.title({ class: classNames?.title })
  })

  const getRatingProps: PropGetter = () => ({
    className: slots.rating({ class: classNames?.rating })
  })

  return {
    Component,
    domRef,
    slots,
    classNames,
    children,
    getBaseProps,
    icon,
    type,
    scale,
    title,
    getTitleProps,
    getRatingProps
  }
}

export { useProps }
export type { Props }
