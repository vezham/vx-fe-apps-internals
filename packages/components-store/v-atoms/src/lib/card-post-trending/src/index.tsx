// import { useNavigate } from '@tanstack/react-router'
// import { WhatsNewIcon } from '@vezham/icons'
// import { forwardRef } from '@vezham/react-utils'
// import { Avatar } from '@vx-oss/avatar'
// import { Card, CardBody, CardFooter, CardHeader } from '@vx-oss/card'
// import { formatDate, toEstimateTime } from '@vx/shared-utils'
// import { Heading } from '../../text-heading/src'
// import { Text } from '../../text/src'
// import './index.less'
// import { Props, useProps } from './types'
// const CardPostTrending = forwardRef<'div', Props>((props, ref) => {
//   const {
//     getBaseProps,
//     read_time,
//     title,
//     authors,
//     published_at,
//     pinned,
//     url,
//     getLeftWrapperProps,
//     getRightWrapperProps,
//     getRightFooterProps,
//     getContentProps,
//     getHeadingProps
//   } = useProps({
//     ...props,
//     ref
//   })
//   const navigate = useNavigate()
//   return (
//     <Card
//       {...getBaseProps()}
//       radius="lg"
//       shadow="none"
//       isPressable
//       onPress={() => navigate({ to: url })}>
//       <div {...getLeftWrapperProps()}>
//         <Heading {...getHeadingProps()} vc="secondary" />
//         {pinned ? <WhatsNewIcon size="sm" color="warning" /> : null}
//       </div>
//       <div {...getRightWrapperProps()}>
//         <CardHeader className="flex gap-2 p-0">
//           {authors && (
//             <>
//               <Avatar size="xs" src={authors[0].avatar.url} />
//               <Text
//                 content={authors[0].name}
//                 variant="paragraph"
//                 vc="secondary"
//               />
//             </>
//           )}
//         </CardHeader>
//         <CardBody className="p-0">
//           <Text
//             {...getContentProps()}
//             content={title}
//             variant="title"
//             color="default"
//           />
//         </CardBody>
//         <CardFooter {...getRightFooterProps()}>
//           <Text
//             content={formatDate(published_at)}
//             variant="paragraph"
//             vc="secondary"
//           />
//           <Text
//             content={'.'}
//             variant="title"
//             className="!mb-3"
//             vc="secondary"
//           />
//           <Text
//             content={`${toEstimateTime(read_time)} read`}
//             variant="paragraph"
//             vc="secondary"
//           />
//         </CardFooter>
//       </div>
//     </Card>
//   )
// })
// CardPostTrending.displayName = 'CardPostTrending'
// export { CardPostTrending }
import { useRouter } from '@tanstack/react-router'
import { Star } from 'lucide-react'

import { forwardRef } from '@vezham/react-utils'

import { Avatar } from '@vx-oss/avatar'
import { Card, CardBody, CardFooter, CardHeader } from '@vx-oss/card'

import { formatDate, toEstimateTime } from '@vx/shared-utils'

import { Heading } from '../../text-heading/src'
import { Text } from '../../text/src'
import { Props, useProps } from './types'

const CardPostTrending = forwardRef<'div', Props>((props, ref) => {
  const {
    getBaseProps,
    read_time,
    title,
    authors,
    published_at,
    pinned,
    getLeftWrapperProps,
    getRightWrapperProps,
    getRightFooterProps,
    getContentProps,
    getHeadingProps,
    url
  } = useProps({
    ...props,
    ref
  })

  const router = useRouter()

  return (
    <Card
      {...getBaseProps()}
      radius="lg"
      shadow="none"
      onPress={() => router.navigate({ to: url })}>
      <div {...getLeftWrapperProps()}>
        <Heading {...getHeadingProps()} vc="secondary" />
        {pinned ? (
          <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
        ) : null}
      </div>
      <div {...getRightWrapperProps()}>
        <CardHeader className="flex gap-2 p-0">
          {authors && authors.length > 0 && (
            <>
              <Avatar size="sm" src={authors[0].avatar.url} />
              <Text
                content={authors[0].name}
                variant="paragraph"
                vc="secondary"
              />
            </>
          )}
        </CardHeader>
        <CardBody className="p-0">
          <Text
            {...getContentProps()}
            content={title}
            variant="title"
            color="default"
          />
        </CardBody>
        <CardFooter {...getRightFooterProps()}>
          <Text
            content={formatDate(published_at)}
            variant="paragraph"
            vc="secondary"
          />
          <Text
            content={'.'}
            variant="title"
            className="!mb-3"
            vc="secondary"
          />
          <Text
            content={`${toEstimateTime(read_time)} read`}
            variant="paragraph"
            vc="secondary"
          />
        </CardFooter>
      </div>
    </Card>
  )
})

CardPostTrending.displayName = 'CardPostTrending'

export { CardPostTrending }
