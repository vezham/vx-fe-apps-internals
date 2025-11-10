// import { useNavigate, useParams } from '@tanstack/react-router'
// import { FC } from 'react'
// import { Chip } from '@vx-oss/chip'
// import { Divider } from '@vx-oss/divider'
// import { Image } from '@vx-oss/image'
// import {
//   FeedbackRating,
//   Heading,
//   PeopleVcard,
//   SharePost,
//   Text
// } from '@vx/v-atoms'
// import { AspectRatio } from '@vezham/v-ions'
// import { SectionContainer } from '../../../layout/section-container'
// import { useArticles } from '../../../store/useArticles'
// import './index.less'
// const Post: FC = () => {
//   const navigate = useNavigate()
//   const slugId = useParams({
//     from: '/posts/$slug/',
//     select: params => params.slug
//   })
//   const { data: article } = useArticles.get({ slug: slugId })
//   let data_author = {
//     name: article?.authors?.map(data => data?.name),
//     image_url: article?.authors?.map(data => data?.avatar.url),
//     company: 'V Corp',
//     designation: 'Content Writer'
//   }
//   const data_platforms = [
//     'linkedin',
//     'twitter',
//     'facebook',
//     'instagram',
//     'whatsapp',
//     'mail'
//   ]
//   let post = (
//     <>
//       <Heading content={article?.title} className="mt-4" />
//       <Text content={article?.description} />
//       <Text content={article?.blocks?.map(data => data?.text)} />
//     </>
//   )
//   return (
//     <SectionContainer className="flex flex-col gap-6">
//       {article && (
//         <>
//           <AspectRatio ratio={16 / 8}>
//             <Image
//               removeWrapper
//               alt={article.cover.alt_text}
//               className="z-0 h-full w-full object-cover"
//               src={article.cover.url}
//             />
//           </AspectRatio>
//           <div className="flex flex-col gap-4">
//             {post}
//             <div className="vblogs-footer-wrapper">
//               <SharePost platforms={data_platforms} />
//               <div className="flex flex-wrap gap-2">
//                 {article.tags.map(tag => (
//                   <Chip
//                     key={tag.id}
//                     variant="flat"
//                     className={'cursor-pointer'}
//                     // @ts-ignore
//                     color={tag.color}
//                     onClick={() => {
//                       navigate({ to: '/' })
//                     }}>
//                     {tag.name}
//                   </Chip>
//                 ))}
//               </div>
//             </div>
//             <Divider className="my-4" />
//             {/* @ts-ignore */}
//             <PeopleVcard data={data_author} />
//             <FeedbackRating
//               className="mt-5 flex-col items-center gap-3 text-lg"
//               title="Was this helpful?"
//               scale={5}
//             />
//           </div>
//         </>
//       )}
//     </SectionContainer>
//   )
// }
// export { Post }
import { useNavigate, useParams } from '@tanstack/react-router'

import { forwardRef } from '@vezham/react-utils'

import { Chip } from '@vx-oss/chip'
import { Divider } from '@vx-oss/divider'
import { Image } from '@vx-oss/image'

import {
  FeedbackRating,
  Heading,
  PeopleVcard,
  SharePost,
  Text
} from '@vx/v-atoms'
import { AspectRatio } from '@vx/v-ions'

import { SectionContainer } from '../../../layout/section-container'
import { useArticles } from '../../../store/useArticles'
import { Props, useProps } from './types'

const Post = forwardRef<'div', Props>((props, ref) => {
  const navigate = useNavigate()
  const slugId = useParams({
    from: '/posts/$slug/',
    select: params => params.slug
  })
  const { data: article } = useArticles.get({ slug: slugId })

  const {
    getBaseProps,
    getImageProps,
    getContentProps,
    getFooterWrapperProps,
    getTagsContainerProps,
    getChipProps,
    getDividerProps,
    getPeopleVcardProps,
    getFeedbackRatingProps,
    article: propArticle = article,
    platforms = [
      'linkedin',
      'twitter',
      'facebook',
      'instagram',
      'whatsapp',
      'mail'
    ],
    ratio = 16 / 8,
    onTagClick = tag => {
      navigate({ to: '/' })
    },
    onHomePress
  } = useProps({
    ...props,
    ref
  })

  const data_author = propArticle
    ? {
        name: propArticle.authors?.map(data => data?.name),
        image_url: propArticle.authors?.map(data => data?.avatar.url),
        company: 'V Corp',
        designation: 'Content Writer'
      }
    : null

  const post = propArticle ? (
    <>
      <Heading content={propArticle.title} className="mt-4" />
      <Text content={propArticle.description} />
      <Text content={propArticle.blocks?.map(data => data?.text)} />
    </>
  ) : null

  return (
    <SectionContainer {...getBaseProps()}>
      {propArticle && (
        <>
          <AspectRatio ratio={ratio}>
            <Image
              removeWrapper
              alt={propArticle.cover.alt_text}
              {...getImageProps()}
              src={propArticle.cover.url}
            />
          </AspectRatio>
          <div {...getContentProps()}>
            {post}
            <div {...getFooterWrapperProps()}>
              <SharePost platforms={platforms} />
              <div {...getTagsContainerProps()}>
                {propArticle.tags.map(tag => (
                  <Chip
                    key={tag.id}
                    variant="flat"
                    {...getChipProps()}
                    color={tag.color}
                    onClick={() => onTagClick(tag)}>
                    {tag.name}
                  </Chip>
                ))}
              </div>
            </div>
            <Divider {...getDividerProps()} />
            {data_author && (
              <PeopleVcard {...getPeopleVcardProps()} data={data_author} />
            )}
            <FeedbackRating
              {...getFeedbackRatingProps()}
              title="Was this helpful?"
              scale={5}
            />
          </div>
        </>
      )}
    </SectionContainer>
  )
})

Post.displayName = 'Post'

export { Post }
