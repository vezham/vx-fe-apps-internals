// import { forwardRef } from '@vezham/react-utils'
// import './index.less'
// import { Props, useProps } from './types'
// const PwaHeroSection = forwardRef<'div', Props>((props, ref) => {
//   const {
//     Component,
//     getBaseProps,
//     classNames,
//     slots,
//     children,
//     super_title,
//     title,
//     description,
//     cover
//   } = useProps({
//     ...props,
//     ref
//   })
//   return (
//     <Component
//       {...getBaseProps()}
//       style={{
//         background: `linear-gradient(
//       rgba(0, 0, 0, 0.5),
//       rgba(0, 0, 0, 0.5)
//     ), url("${cover?.url}")`
//       }}>
//       <header className={slots.wrapper({ class: classNames?.wrapper })}>
//         {super_title ? (
//           typeof super_title === 'string' ? (
//             <h1
//               className={slots.wrapper_super_title({
//                 class: classNames?.wrapper_super_title
//               })}>
//               {super_title}
//             </h1>
//           ) : (
//             super_title
//           )
//         ) : null}
//         <h1
//           className={slots.wrapper_title({
//             class: classNames?.wrapper_title
//           })}>
//           {title}
//         </h1>
//         {description ? (
//           typeof description === 'string' ? (
//             <p
//               className={slots.wrapper_description({
//                 class: classNames?.wrapper_description
//               })}>
//               {description}
//             </p>
//           ) : (
//             description
//           )
//         ) : null}
//       </header>
//       <div className="mt-2 flex flex-wrap gap-4">{children}</div>
//     </Component>
//   )
// })
// PwaHeroSection.displayName = 'PwaHeroSection'
// export { PwaHeroSection }
import { forwardRef } from '@vezham/react-utils'

import { Props, useProps } from './types'

const PwaHeroSection = forwardRef<'div', Props>((props, ref) => {
  const {
    Component,
    getBaseProps,
    getTitleProps,
    getSuperTitleProps,
    getWrapperProps,
    getDescriptionProps,
    children,
    super_title,
    title,
    description,
    cover
  } = useProps({
    ...props,
    ref
  })

  return (
    <Component
      {...getBaseProps()}
      style={{
        background: cover?.url
          ? `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("${cover.url}")`
          : undefined
      }}>
      <header {...getWrapperProps()}>
        {super_title ? (
          typeof super_title === 'string' ? (
            <h1 {...getSuperTitleProps()}>{super_title}</h1>
          ) : (
            super_title
          )
        ) : null}
        <h1 {...getTitleProps()}>{title}</h1>
        {description ? (
          typeof description === 'string' ? (
            <p {...getDescriptionProps()}>{description}</p>
          ) : (
            description
          )
        ) : null}
      </header>
      <div>{children}</div>
    </Component>
  )
})

PwaHeroSection.displayName = 'PwaHeroSection'

export { PwaHeroSection }
