// import { FC } from 'react'
// import { cn } from '@vezham/react-utils'
// import { ScrollShadow } from '@vx-oss/scroll-shadow'
// import { CardCollectionFeatured, Text } from '@vx/v-atoms'
// import { useCollections } from '../../store/useCollections'
// const Category: FC<{ className?: string; id?: string }> = ({
//   className = '',
//   id = 'by-collections'
// }) => {
//   const { data: collections } = useCollections.list({})
//   return (
//     <div id={id} className={cn('flex w-full flex-col', className)}>
//       <Text
//         content="By Collections"
//         variant="title"
//         vc="secondary"
//         className="my-4 px-4"
//       />
//       <ScrollShadow
//         orientation="horizontal"
//         show_track={true}
//         className="h-full w-full p-4">
//         {collections && <CardCollectionFeatured features={collections} />}
//       </ScrollShadow>
//     </div>
//   )
// }
// export default Category
import { forwardRef } from '@vezham/react-utils'

import { ScrollShadow } from '@vx-oss/scroll-shadow'

import { CardCollectionFeatured, Text } from '@vx/v-atoms'

import { useCollections } from '../../store/useCollections'
import { Props, useProps } from './types'

const ByCollections = forwardRef<'div', Props>((props, ref) => {
  const {
    Component,
    getBaseProps,
    getTitleProps,
    getScrollProps,
    id = 'by-collections',
    title = 'By Collections'
  } = useProps({
    ...props,
    ref
  })

  const { data: collections } = useCollections.list({})

  const featureList = Array.isArray(collections)
    ? collections
    : (collections?.collections ?? [])

  return (
    <Component id={id} {...getBaseProps()}>
      <Text content={title} {...getTitleProps()} />
      <ScrollShadow {...getScrollProps()}>
        {collections && <CardCollectionFeatured features={featureList} />}
      </ScrollShadow>
    </Component>
  )
})

ByCollections.displayName = 'ByCollections'

export { ByCollections }
