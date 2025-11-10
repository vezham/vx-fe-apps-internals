// import { useParams } from '@tanstack/react-router'
// import { FC } from 'react'
// import { CardPostFeatured } from '@vx/v-atoms'
// import { PostHeader } from '../../../layout/post-header'
// import { SectionContainer } from '../../../layout/section-container'
// import { useEditorials } from '../../../store/useEditorials'
// const RelatedPosts: FC = () => {
//   const Editorials_id = useParams({
//     from: '/editorials/$editorials_id/',
//     select: params => params.editorials_id
//   })
//   const { data: editorials } = useEditorials.get({ api_handle: Editorials_id })
//   return (
//     <SectionContainer className="flex flex-col items-center pt-0">
//       {editorials && (
//         <PostHeader title={editorials?.label}>
//           <CardPostFeatured
//             posts={editorials?.articles}
//             responsiveness={true}
//           />
//         </PostHeader>
//       )}
//     </SectionContainer>
//   )
// }
// export { RelatedPosts }
import { useParams } from '@tanstack/react-router'

import { forwardRef } from '@vezham/react-utils'

import { CardPostFeatured } from '@vx/v-atoms'

import { PostHeader } from '../../../layout/post-header'
import { SectionContainer } from '../../../layout/section-container'
import { useEditorials } from '../../../store/useEditorials'
import { Props, useProps } from './types'

const RelatedPosts = forwardRef<'div', Props>((props, ref) => {
  const Editorials_id = useParams({
    from: '/editorials/$editorials_id/',
    select: params => params.editorials_id
  })
  const { data: editorials } = useEditorials.get({ api_handle: Editorials_id })

  const {
    getBaseProps,
    getPostHeaderProps,
    getCardFeaturedProps,
    title = editorials?.label,
    posts = editorials?.articles,
    responsiveness = true
  } = useProps({
    ...props,
    ref
  })

  return (
    <SectionContainer {...getBaseProps()}>
      {editorials && (
        <PostHeader {...getPostHeaderProps()} title={title}>
          <CardPostFeatured
            {...getCardFeaturedProps()}
            posts={posts}
            responsiveness={responsiveness}
          />
        </PostHeader>
      )}
    </SectionContainer>
  )
})

RelatedPosts.displayName = 'RelatedPosts'

export { RelatedPosts }
