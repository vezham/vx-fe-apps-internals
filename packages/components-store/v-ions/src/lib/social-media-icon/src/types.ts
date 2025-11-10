// import { IconProps } from '@vezham/icons'
// import { ReactRef, useDOMRef } from '@vezham/react-utils'
// import { SocialMediaHandle } from '@vx/shared-types'
// import { HTMLHeroUIProps, PropGetter } from '@vezham/react-utils'
// import { cn } from '@vezham/react-utils'
// interface Props extends HTMLHeroUIProps<'div'> {
//   ref?: ReactRef<HTMLDivElement | null>
//   icon?: IconProps
//   handler: SocialMediaHandle
// }
// const useProps = (props: Props) => {
//   const {
//     as,
//     id,
//     ref,
//     children,
//     className,
//     icon = { size: 'sm', hover_effect: 'glow' },
//     handler,
//     ...otherProps
//   } = props
//   const Component = as || 'div'
//   const domRef = useDOMRef(ref)
//   const getBaseProps: PropGetter = () => ({
//     id,
//     ref: domRef,
//     className: cn('vicon-sm', className),
//     ...icon,
//     ...otherProps
//   })
//   return {
//     Component,
//     domRef,
//     children,
//     getBaseProps,
//     // otherProps
//     handler
//   }
// }
// export { useProps }
// export type { Props }
import { LucideProps } from 'lucide-react'

import { ReactRef, useDOMRef } from '@vezham/react-utils'
import {
  HTMLHeroUIProps,
  PropGetter,
  mapPropsVariants
} from '@vezham/react-utils'
import { cn } from '@vezham/react-utils'
import { SlotsToClasses } from '@vezham/react-utils'

import { SocialMediaHandle } from '@vx/shared-types'

import { tvProps, tvSlots, tva } from './variant'

interface Props extends tvProps, HTMLHeroUIProps<'div'> {
  ref?: ReactRef<HTMLDivElement | null>
  classNames?: SlotsToClasses<tvSlots>
  iconProps?: LucideProps
  handler: SocialMediaHandle
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
    iconProps = {},
    handler,
    ...otherProps
  } = props

  const Component = as || 'div'

  const domRef = useDOMRef(ref)

  const slots = tva(variantProps)

  const getBaseProps: PropGetter = () => ({
    id,
    ref: domRef,
    className: slots.base({ class: cn(classNames?.base, className) }),
    ...iconProps,
    ...otherProps
  })

  return {
    Component,
    domRef,
    slots,
    classNames,
    children,
    getBaseProps,
    handler
  }
}

export { useProps }
export type { Props }
