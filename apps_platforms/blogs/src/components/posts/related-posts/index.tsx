// import { useParams } from '@tanstack/react-router'
// import { FC } from 'react'
// import { CardPostFeatured } from '@vx/v-atoms'
// import { PostHeader } from '../../../layout/post-header'
// import { SectionContainer } from '../../../layout/section-container'
// import { useArticles } from '../../../store/useArticles'
// const RelatedPosts: FC = () => {
//   const slugId = useParams({
//     from: '/posts/$slug/',
//     select: params => params.slug
//   })
//   const { data: article } = useArticles.get({ slug: slugId })
//   const { data: articles } = useArticles.list({
//     api_handle: article?.collection_id || ''
//   })
//   return (
//     <SectionContainer className="flex flex-col items-center pt-0">
//       <PostHeader
//         title="Related posts"
//         subtitle="More posts from this Author, and in this sector.">
//         {articles && <CardPostFeatured posts={articles} />}
//       </PostHeader>
//     </SectionContainer>
//   )
// }
// export { RelatedPosts }
import { useParams } from '@tanstack/react-router'

import { forwardRef } from '@vezham/react-utils'

import { CardPostFeatured } from '@vx/v-atoms'

import { PostHeader } from '../../../layout/post-header'
import { SectionContainer } from '../../../layout/section-container'
import { useArticles } from '../../../store/useArticles'
import { Props, useProps } from './types'

const RelatedPosts = forwardRef<'div', Props>((props, ref) => {
  const slugId = useParams({
    from: '/posts/$slug/',
    select: params => params.slug
  })
  const { data: article } = useArticles.get({ slug: slugId })
  const { data: articles } = useArticles.list({
    api_handle: article?.collection_id || ''
  })

  const {
    getBaseProps,
    getPostHeaderProps,
    getCardFeaturedProps,
    title = 'Related posts',
    subtitle = 'More posts from this Author, and in this sector.',
    posts = articles
  } = useProps({
    ...props,
    ref
  })

  return (
    <SectionContainer {...getBaseProps()}>
      <PostHeader {...getPostHeaderProps()} title={title} subtitle={subtitle}>
        {articles && (
          <CardPostFeatured {...getCardFeaturedProps()} posts={posts} />
        )}
      </PostHeader>
    </SectionContainer>
  )
})

RelatedPosts.displayName = 'RelatedPosts'

export { RelatedPosts }
