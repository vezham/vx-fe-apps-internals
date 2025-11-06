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
// }
// type Authors = {
//   id: string
//   name: string
//   avatar: Avatar
// }
// interface Props extends tvProps, HTMLHeroUIProps<'div'> {
//   ref?: ReactRef<HTMLDivElement | null>
//   classNames?: SlotsToClasses<tvSlots>
//   trend_no: number
//   orientation: string
//   id: string
//   pinned?: boolean
//   read_time: number
//   title: string
//   url: string
//   published_at: string
//   authors: Authors[]
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
//     read_time,
//     trend_no,
//     orientation,
//     title,
//     url,
//     authors,
//     published_at,
//     pinned
//   } = props
//   const Component = as || 'div'
//   const domRef = useDOMRef(ref)
//   const slots = tva(variantProps)
//   const getBaseProps = () => ({
//     id,
//     ref: domRef,
//     className: slots.base({
//       class: cn(
//         classNames?.base,
//         className,
//         orientation === 'horizontal'
//           ? trend_no % 2 == 0
//             ? `row-start-2 col-start-${trend_no}`
//             : `row-start-1 col-start-${trend_no}`
//           : trend_no % 2 == 0
//             ? `col-start-1 row-start-${trend_no}`
//             : `col-start-1 row-start-${trend_no}`
//       )
//     }),
//     // card
//     isPressable: true,
//     isHoverable: true
//   })
//   const getLeftWrapperProps: PropGetter = () => ({
//     className: slots.left({ class: classNames?.left })
//   })
//   const getRightWrapperProps: PropGetter = () => ({
//     className: slots.right({ class: classNames?.right })
//   })
//   const getContentProps: PropGetter = () => ({
//     className: slots.content({ class: classNames?.content })
//   })
//   const getRightFooterProps: PropGetter = () => ({
//     className: slots.right_footer({ class: classNames?.right_footer })
//   })
//   const getHeadingProps = () => ({
//     className: '!text-3xl',
//     content: trend_no < 10 ? `0${trend_no}` : trend_no
//   })
//   return {
//     Component,
//     id,
//     domRef,
//     slots,
//     classNames,
//     children,
//     getBaseProps,
//     // otherProps
//     read_time,
//     trend_no,
//     orientation,
//     title,
//     url,
//     authors,
//     published_at,
//     pinned,
//     getLeftWrapperProps,
//     getRightWrapperProps,
//     getContentProps,
//     getRightFooterProps,
//     getHeadingProps
//   }
// }
// export { Props, useProps }
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

type Avatar = {
  url: string
}

type Authors = {
  id: string
  name: string
  avatar: Avatar
}

type BaseProps = Omit<HTMLHeroUIProps<'div'>, 'orientation'> & {
  ref?: ReactRef<HTMLDivElement | null>
  classNames?: SlotsToClasses<tvSlots>
  trend_no: number
  orientation: 'horizontal' | 'vertical'
  id: string
  pinned?: boolean
  read_time: number
  title: string
  url: string
  published_at: string
  authors: Authors[]
  onPress?: (url: string) => void
}

// Combine BaseProps with variant props
type Props = BaseProps & tvProps

const useProps = (originalProps: Props) => {
  const { ref, ...restOriginalProps } = originalProps

  const orientation = originalProps.orientation
  const trend_no = originalProps.trend_no

  const [props, variantProps] = mapPropsVariants(
    restOriginalProps,
    tva.variantKeys
  )

  const {
    as,
    id,
    children,
    className,
    classNames,
    read_time,
    title,
    url,
    authors,
    published_at,
    pinned,
    onPress,
    ...otherProps
  } = props

  const Component = as || 'div'

  const domRef = useDOMRef(ref)

  // Combine variantProps with the orientation we extracted
  const combinedVariantProps = { ...variantProps, orientation }
  const slots = tva(combinedVariantProps)

  const getBaseProps: PropGetter = () => {
    const baseClassName = slots.base({
      class: cn(classNames?.base, className)
    })

    // Grid positioning logic
    let gridClass = ''
    if (orientation === 'horizontal') {
      gridClass =
        trend_no % 2 === 0
          ? `row-start-2 col-start-${trend_no}`
          : `row-start-1 col-start-${trend_no}`
    } else {
      gridClass =
        trend_no % 2 === 0
          ? `col-start-1 row-start-${trend_no}`
          : `col-start-1 row-start-${trend_no}`
    }

    return {
      id,
      ref: domRef,
      className: cn(baseClassName, gridClass),
      isPressable: true,
      isHoverable: true,
      ...otherProps
    }
  }

  const getLeftWrapperProps: PropGetter = () => ({
    className: slots.left({ class: classNames?.left })
  })

  const getRightWrapperProps: PropGetter = () => ({
    className: slots.right({ class: classNames?.right })
  })

  const getContentProps: PropGetter = () => ({
    className: slots.content({ class: classNames?.content })
  })

  const getRightFooterProps: PropGetter = () => ({
    className: slots.right_footer({ class: classNames?.right_footer })
  })

  const getHeadingProps = () => ({
    className: '!text-3xl',
    content: trend_no < 10 ? `0${trend_no}` : trend_no.toString()
  })

  const handlePress = () => {
    if (onPress) {
      onPress(url)
    }
  }

  return {
    Component,
    id,
    domRef,
    slots,
    classNames,
    children,
    getBaseProps,
    getLeftWrapperProps,
    getRightWrapperProps,
    getContentProps,
    getRightFooterProps,
    getHeadingProps,
    handlePress,

    // Data props
    read_time,
    trend_no,
    orientation,
    title,
    url,
    authors,
    published_at,
    pinned,
    onPress
  }
}

export { useProps }
export type { Props, Authors, Avatar }
