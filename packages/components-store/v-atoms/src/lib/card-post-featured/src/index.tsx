// import { useNavigate } from '@tanstack/react-router'
// import { forwardRef } from '@vezham/react-utils'
// import { cn } from '@vezham/react-utils'
// import { Avatar } from '@vx-oss/avatar'
// import { Card, CardBody } from '@vx-oss/card'
// import { Chip } from '@vx-oss/chip'
// import { Image } from '@vx-oss/image'
// import { ScrollShadow } from '@vx-oss/scroll-shadow'
// import './index.less'
// import { Props, useProps } from './types'
// const CardPostFeatured = forwardRef<'div', Props>((props, ref) => {
//   const {
//     getBaseProps,
//     getWrapperProps,
//     posts,
//     getCardProps,
//     getContentProps
//   } = useProps({
//     ...props,
//     ref
//   })
//   const navigate = useNavigate()
//   return (
//     <ScrollShadow {...getBaseProps()}>
//       {posts.map(({ title, description, cover, url, authors, tags }) => (
//         <Card
//           {...getCardProps()}
//           isPressable
//           onPress={() => navigate({ to: url })}>
//           <CardBody {...getWrapperProps()}>
//             <div className="content-wrapper order-1 m-2 px-2">
//               <h3 className="mb-2 flex flex-col gap-1 font-semibold text-slate-900 dark:text-slate-200">
//                 {tags ? (
//                   <>
//                     <div className="flex items-center justify-between">
//                       <div className="my-2 flex flex-wrap gap-2">
//                         {tags.map(tag => (
//                           <Chip
//                             children={tag.name}
//                             variant="flat"
//                             color="primary"
//                             className="p-0"
//                           />
//                         ))}
//                       </div>
//                       {authors?.map(author => (
//                         <Avatar src={author?.avatar?.url} size="sm" />
//                       ))}
//                     </div>
//                     {title}
//                   </>
//                 ) : (
//                   <a
//                     href={url}
//                     className={cn(
//                       'before:absolute before:inset-0',
//                       !tags &&
//                         'flex flex-col gap-2 hover:text-slate-600 dark:hover:text-white'
//                     )}>
//                     <div className="flex items-end justify-between">
//                       {/* <Chip
//                           children={super_title}
//                           variant="flat"
//                           color="primary"
//                           className="p-0"
//                         /> */}
//                       {authors?.map(author => (
//                         <Avatar src={author?.avatar?.url} size="sm" />
//                       ))}
//                     </div>
//                     {title}
//                   </a>
//                 )}
//               </h3>
//               <div {...getContentProps()}>{description}</div>
//             </div>
//             <Image
//               className="w-full rounded-lg bg-slate-50 shadow-md"
//               src={cover?.url}
//               alt={cover?.alt_text}
//             />
//           </CardBody>
//         </Card>
//       ))}
//     </ScrollShadow>
//   )
// })
// CardPostFeatured.displayName = 'CardPostFeatured'
// export { CardPostFeatured }
import { useNavigate } from '@tanstack/react-router'

import { cn, forwardRef } from '@vezham/react-utils'

import { Avatar } from '@vx-oss/avatar'
import { Card, CardBody } from '@vx-oss/card'
import { Chip } from '@vx-oss/chip'
import { Image } from '@vx-oss/image'
import { ScrollShadow } from '@vx-oss/scroll-shadow'

import { Props, useProps } from './types'

const CardPostFeatured = forwardRef<'div', Props>((props, ref) => {
  const {
    getBaseProps,
    getWrapperProps,
    posts,
    getCardProps,
    getContentProps,
    slots,
    classNames
  } = useProps({
    ...props,
    ref
  })
  const navigate = useNavigate()

  return (
    <ScrollShadow {...getBaseProps()}>
      {posts.map(({ title, description, cover, url, authors, tags }) => (
        <Card
          {...getCardProps()}
          isPressable
          onPress={() => navigate({ to: url })}>
          <CardBody {...getWrapperProps()}>
            <div
              className={cn(
                'order-1 m-2 px-2',
                slots.content({ class: classNames?.content })
              )}>
              <h3 className="mb-2 flex flex-col gap-1 font-semibold text-slate-900 dark:text-slate-200">
                {tags ? (
                  <>
                    <div
                      className={slots.tag_wrapper({
                        class: 'flex items-center justify-between'
                      })}>
                      <div className="my-2 flex flex-wrap gap-2">
                        {tags.map(tag => (
                          <Chip
                            children={tag.name}
                            variant="flat"
                            color="primary"
                            className="p-0"
                          />
                        ))}
                      </div>
                      {authors?.map(author => (
                        <Avatar src={author?.avatar?.url} size="sm" />
                      ))}
                    </div>
                    {title}
                  </>
                ) : (
                  <a
                    href={url}
                    className={cn(
                      'before:absolute before:inset-0',
                      !tags &&
                        'flex flex-col gap-2 hover:text-slate-600 dark:hover:text-white'
                    )}>
                    <div className="flex items-end justify-between">
                      {/* <Chip
                          children={super_title}
                          variant="flat"
                          color="primary"
                          className="p-0"
                        /> */}
                      {authors?.map(author => (
                        <Avatar src={author?.avatar?.url} size="sm" />
                      ))}
                    </div>
                    {title}
                  </a>
                )}
              </h3>
              <div {...getContentProps()}>{description}</div>
            </div>
            <Image
              className="w-full rounded-lg bg-slate-50 shadow-md"
              src={cover?.url}
              alt={cover?.alt_text}
            />
          </CardBody>
        </Card>
      ))}
    </ScrollShadow>
  )
})

CardPostFeatured.displayName = 'CardPostFeatured'

export { CardPostFeatured }
