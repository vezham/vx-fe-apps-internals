// import { useNavigate } from '@tanstack/react-router'
// import { ReactRef, useDOMRef } from '@vezham/react-utils'
// import {
//   HTMLHeroUIProps,
//   PropGetter,
//   mapPropsVariants
// } from '@vezham/react-utils'
// import { cn } from '@vezham/react-utils'
// import { SlotsToClasses } from '@vezham/react-utils'
// import { tvProps, tvSlots, tva } from './variant'
// type Avatar = {
//   url: string
//   color: string
//   icon: string
// }
// interface Collection {
//   id: string
//   api_handle: string
//   target: string
//   name: string
//   description: string
//   avatar: Avatar
//   updated_at: string
//   updated_by: string
// }
// interface Props extends tvProps, HTMLHeroUIProps<'div'> {
//   ref?: ReactRef<HTMLDivElement | null>
//   classNames?: SlotsToClasses<tvSlots>
//   features: Collection[]
// }
// const useProps = (originalProps: Props) => {
//   const navigate = useNavigate()
//   const [props, variantProps] = mapPropsVariants(originalProps, tva.variantKeys)
//   const {
//     as,
//     id,
//     ref,
//     children,
//     className,
//     classNames,
//     features,
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
//   const getWrapperProps = () => ({
//     className: slots.wrapper({ class: classNames?.wrapper }),
//     isBlurred: true
//   })
//   const getHeaderProps: PropGetter = () => ({
//     className: slots.header({ class: classNames?.header })
//   })
//   const getBodyProps: PropGetter = () => ({
//     className: slots.body({ class: classNames?.body })
//   })
//   const getIconProps: PropGetter = () => ({
//     className: slots.icon({ class: classNames?.icon })
//   })
//   const getTitleProps: PropGetter = () => ({
//     className: slots.title({ class: classNames?.title })
//   })
//   const getDescriptionProps: PropGetter = () => ({
//     className: slots.description({ class: classNames?.description })
//   })
//   const handleClick = (api_handle: string, target: string) => {
//     if (!api_handle) return
//     if (target !== '') {
//       window.open(api_handle, target)
//       return
//     }
//     navigate({ to: `collections/${api_handle}` })
//   }
//   return {
//     Component,
//     domRef,
//     slots,
//     classNames,
//     children,
//     getBaseProps,
//     getWrapperProps,
//     // otherProps
//     features,
//     getHeaderProps,
//     getBodyProps,
//     getIconProps,
//     getTitleProps,
//     getDescriptionProps,
//     handleClick
//   }
// }
// export { useProps }
// export type { Collection, Props }
import { useRouter } from '@tanstack/react-router'

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

interface Avatar {
  url: string
  color: string
  icon: string
}

interface Collection {
  id: string
  api_handle: string
  target: string
  name: string
  description: string
  avatar: Avatar
  updated_at: string
  updated_by: string
}

interface Props extends tvProps, HTMLHeroUIProps<'div'> {
  ref?: ReactRef<HTMLDivElement | null>
  classNames?: SlotsToClasses<tvSlots>
  features: Collection[]
  onItemClick?: (collection: Collection) => void
}

const useProps = (originalProps: Props) => {
  const [props, variantProps] = mapPropsVariants(originalProps, tva.variantKeys)
  const router = useRouter()

  const {
    as,
    id,
    ref,
    children,
    className,
    classNames,
    features,
    onItemClick,
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

  const getWrapperProps: PropGetter = () => ({
    className: slots.wrapper({ class: classNames?.wrapper }),
    isBlurred: true
  })

  const getHeaderProps: PropGetter = () => ({
    className: slots.header({ class: classNames?.header })
  })

  const getBodyProps: PropGetter = () => ({
    className: slots.body({ class: classNames?.body })
  })

  const getIconProps: PropGetter = () => ({
    className: slots.icon({ class: classNames?.icon })
  })

  const getTitleProps: PropGetter = () => ({
    className: slots.title({ class: classNames?.title })
  })

  const getDescriptionProps: PropGetter = () => ({
    className: slots.description({ class: classNames?.description })
  })

  const handleClick = (api_handle: string, target: string) => {
    if (!api_handle) return
    if (target !== '') {
      window.open(api_handle, target)
      return
    }
    router.navigate({ to: `collections/${api_handle}` })
  }

  return {
    Component,
    domRef,
    slots,
    classNames,
    children,
    getBaseProps,
    getWrapperProps,
    getHeaderProps,
    getBodyProps,
    getIconProps,
    getTitleProps,
    getDescriptionProps,
    handleClick,

    features,
    onItemClick
  }
}

export { useProps }
export type { Props, Collection, Avatar }
