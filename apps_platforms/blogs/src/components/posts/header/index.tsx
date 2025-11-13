// import { useNavigate, useParams } from '@tanstack/react-router'
// import { BreadcrumbItem, Breadcrumbs } from '@vx-oss/breadcrumbs'
// import { HomeIcon } from '@vezham/icons'
// import { formatDate, toEstimateTime } from '@vx/shared-utils'
// import { User } from '@vezham/user'
// import { Heading, SharePost, Text } from '@vx/v-atoms'
// import { SectionContainer } from '../../../layout/section-container'
// import { useArticles } from '../../../store/useArticles'
// import { useCollections } from '../../../store/useCollections'
// import './index.less'
// const Header = () => {
//   const navigate = useNavigate()
//   const slugId = useParams({
//     from: '/posts/$slug/',
//     select: params => params.slug
//   })
//   const { data: article } = useArticles.get({ slug: slugId })
//   const { data: collection } = useCollections.get({
//     api_handle: article?.collection_id || ''
//   })
//   const data_platforms = [
//     'linkedin',
//     'twitter',
//     'facebook',
//     'instagram',
//     'whatsapp',
//     'mail'
//   ]
//   return (
//     <SectionContainer className="flex flex-col gap-4">
//       {article && (
//         <>
//           <Breadcrumbs
//             separator="/"
//             itemClasses={{
//               separator: 'px-2'
//             }}>
//             <BreadcrumbItem
//               startContent={
//                 <HomeIcon
//                   size="sm"
//                   hover_effect="glow"
//                   onClick={() => {
//                     navigate({ to: '/' })
//                   }}
//                 />
//               }
//               children={''}
//             />
//             <BreadcrumbItem>Collections</BreadcrumbItem>
//             <BreadcrumbItem>{collection?.name}</BreadcrumbItem>
//             <BreadcrumbItem>{article?.title}</BreadcrumbItem>
//           </Breadcrumbs>
//           <Heading content={article.title} size="sm" />
//           <div className="vblogs-header-wrapper">
//             <User
//               name={article.authors[0].name}
//               description={
//                 <div className="flex h-4 flex-row items-center justify-center gap-2">
//                   {formatDate(article.published_at)}
//                   <Text
//                     content={'.'}
//                     variant="paragraph"
//                     className="text-foreground-400 mb-4! text-xl"
//                   />
//                   <Text
//                     content={`${toEstimateTime(article.read_time)} read`}
//                     variant="paragraph"
//                     className="text-foreground-400 text-xs"
//                   />
//                 </div>
//               }
//               avatarProps={{
//                 src: article.authors[0].avatar.url,
//                 size: 'md'
//               }}
//             />
//             <SharePost title="" platforms={data_platforms} />
//           </div>
//         </>
//       )}
//     </SectionContainer>
//   )
// }
// export { Header }
import { useNavigate, useParams } from '@tanstack/react-router'
import { Home } from 'lucide-react'

import { forwardRef } from '@vezham/react-utils'

import { BreadcrumbItem, Breadcrumbs } from '@vx-oss/breadcrumbs'
import { User } from '@vx-oss/user'

import { formatDate, toEstimateTime } from '@vx/shared-utils'
import { Heading, SharePost, Text } from '@vx/v-atoms'

import { SectionContainer } from '../../../layout/section-container'
import { useArticles } from '../../../store/useArticles'
import { useCollections } from '../../../store/useCollections'
import { Props, useProps } from './types'

const Header = forwardRef<'div', Props>((props, ref) => {
  const navigate = useNavigate()
  const slugId = useParams({
    from: '/posts/$slug/',
    select: params => params.slug
  })
  const { data: article } = useArticles.get({ slug: slugId })
  const { data: collection } = useCollections.get({
    api_handle: article?.collection_id || ''
  })

  const {
    getBaseProps,
    getBreadcrumbsProps,
    getHomeIconProps,
    getHeadingProps,
    getWrapperProps,
    getUserDescriptionProps,
    getDotProps,
    getReadTimeProps,
    title = article?.title || '',
    platforms = [
      'linkedin',
      'twitter',
      'facebook',
      'instagram',
      'whatsapp',
      'mail'
    ],
    onHomePress = () => navigate({ to: '/' })
  } = useProps({
    ...props,
    ref
  })

  return (
    <SectionContainer {...getBaseProps()}>
      {article && (
        <>
          <Breadcrumbs {...getBreadcrumbsProps()}>
            <BreadcrumbItem
              startContent={
                <Home {...getHomeIconProps()} onClick={onHomePress} />
              }
              children={''}
            />
            <BreadcrumbItem>Collections</BreadcrumbItem>
            <BreadcrumbItem>{collection?.name}</BreadcrumbItem>
            <BreadcrumbItem>{article?.title}</BreadcrumbItem>
          </Breadcrumbs>
          <Heading {...getHeadingProps()} content={article.title} size="sm" />
          <div {...getWrapperProps()}>
            <User
              name={article.authors[0].name}
              description={
                <div {...getUserDescriptionProps()}>
                  {formatDate(article.published_at)}
                  <Text content={'.'} variant="paragraph" {...getDotProps()} />
                  <Text
                    content={`${toEstimateTime(article.read_time)} read`}
                    variant="paragraph"
                    {...getReadTimeProps()}
                  />
                </div>
              }
              avatarProps={{
                src: article.authors[0].avatar.url,
                size: 'md'
              }}
            />

            <SharePost title="" platforms={platforms} />
          </div>
        </>
      )}
    </SectionContainer>
  )
})

Header.displayName = 'Header'

export { Header }
