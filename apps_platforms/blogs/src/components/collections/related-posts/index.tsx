// import { useParams } from '@tanstack/react-router'
// import { FC } from 'react'
// import { PwaHeroSection } from '@vezham/layouts'
// import { CardPostFeatured } from '@vx/v-atoms'
// import { SectionContainer } from '../../../layout/section-container'
// import { useArticles } from '../../../store/useArticles'
// import { useCollections } from '../../../store/useCollections'
// const RelatedPosts: FC = () => {
//   const Collection_id = useParams({
//     from: '/collections/$collection_id/',
//     select: params => params.collection_id
//   })
//   const { data: collections } = useCollections.get({
//     api_handle: Collection_id
//   })
//   const { data: articles } = useArticles.list({
//     api_handle: Collection_id
//   })
//   return (
//     <>
//       <PwaHeroSection
//         title={collections?.name}
//         description={collections?.description}
//         title_size="md"
//         bg_effect="flat"
//         spacer="sm"
//       />
//       <SectionContainer>
//         {articles && <CardPostFeatured posts={articles} />}
//       </SectionContainer>
//     </>
//   )
// }
// export { RelatedPosts }
import { useParams } from '@tanstack/react-router'

import { PwaHeroSection } from '@vezham/layouts'
import { forwardRef } from '@vezham/react-utils'

import { CardPostFeatured } from '@vx/v-atoms'

import { SectionContainer } from '../../../layout/section-container'
import { useArticles } from '../../../store/useArticles'
import { useCollections } from '../../../store/useCollections'
import { Props, useProps } from './types'

const RelatedPosts = forwardRef<'div', Props>((props, ref) => {
  const Collection_id = useParams({
    from: '/collections/$collection_id/',
    select: params => params.collection_id
  })

  const { data: collections } = useCollections.get({
    api_handle: Collection_id
  })

  const { data: articles } = useArticles.list({
    api_handle: Collection_id
  })

  const {
    getBaseProps,
    getSectionContainerProps,
    getHeroSectionProps,
    title = collections?.name,
    description = collections?.description,
    title_size = 'md',
    bg_effect = 'flat',
    spacer = 'sm'
  } = useProps({
    ...props,
    ref
  })

  return (
    <div {...getBaseProps()}>
      <PwaHeroSection
        {...getHeroSectionProps()}
        title={title}
        description={description}
        title_size={title_size}
        bg_effect={bg_effect}
        spacer={spacer}
      />
      <SectionContainer {...getSectionContainerProps()}>
        {articles && <CardPostFeatured posts={articles} />}
      </SectionContainer>
    </div>
  )
})

RelatedPosts.displayName = 'RelatedPosts'

export { RelatedPosts }
