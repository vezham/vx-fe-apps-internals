// import { ArrowRightIcon } from '@vezham/icons'
// import { Link } from '@vx-oss/link'
// import { CardPostFeatured, Text } from '@vx/v-atoms'
// import { useEditorials } from '../../store/useEditorials'
// const FeaturedCards = () => {
//   const { data: editorials } = useEditorials.list({})
//   return (
//     <div className="mx-auto w-full px-8 pt-10 pb-20">
//       {editorials &&
//         editorials.map(({ label, articles, api_handle }) => (
//           <>
//             <div className="flex items-center gap-4 px-4 pb-4">
//               {/* <TrendingUpIcon size="md" /> */}
//               <Text
//                 className="cursor-default"
//                 content={label}
//                 variant="title"
//                 vc="secondary"
//               />
//               <Link
//                 size="md"
//                 color="default"
//                 href={`/editorials/${api_handle}`}>
//                 View All
//                 <ArrowRightIcon cursor className="rtl:rotate-180" />
//               </Link>
//             </div>
//             <CardPostFeatured posts={articles} orientation="vertical" />
//           </>
//         ))}
//     </div>
//   )
// }
// export { FeaturedCards }
import { ArrowRight } from 'lucide-react'

import { forwardRef } from '@vezham/react-utils'

import { Link } from '@vx-oss/link'

import { CardPostFeatured, Text } from '@vx/v-atoms'

import { useEditorials } from '../../store/useEditorials'
import { Props, useProps } from './types'

const FeaturedCards = forwardRef<'div', Props>((props, ref) => {
  const {
    Component,
    getBaseProps,
    getSectionProps,
    getHeaderProps,
    getTitleProps,
    getLinkProps,
    getIconProps,
    cardOrientation
  } = useProps({
    ...props,
    ref
  })

  // If editorials not provided, use the hook
  const { data: editorials } = useEditorials.list({})

  if (!editorials) return null

  return (
    <Component {...getBaseProps()}>
      {editorials.map((item, index) => (
        <section key={item.api_handle || index} {...getSectionProps()}>
          <div {...getHeaderProps()}>
            <Text content={item.label} {...getTitleProps()} />
            {/* Fixed: Use getLinkProps as a function call, not a prop getter */}
            <Link
              size={getLinkProps(item).size}
              color={getLinkProps(item).color}
              href={getLinkProps(item).href}
              className={getLinkProps(item).className}>
              View All
              <ArrowRight {...getIconProps()} />
            </Link>
          </div>
          <CardPostFeatured
            posts={item.articles}
            orientation={cardOrientation}
          />
        </section>
      ))}
    </Component>
  )
})

FeaturedCards.displayName = 'FeaturedCards'

export { FeaturedCards }
