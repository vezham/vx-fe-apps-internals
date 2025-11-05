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

import { Link } from '@vx-oss/link'

import { CardPostFeatured, Text } from '@vx/v-atoms'

import { useEditorials } from '../../store/useEditorials'

const FeaturedCards = () => {
  const { data: editorials } = useEditorials.list({})
  return (
    <div className="mx-auto w-full px-8 pt-10 pb-20">
      {editorials &&
        editorials.map(({ label, articles, api_handle }) => (
          <>
            <div className="flex items-center gap-4 px-4 pb-4">
              {/* <TrendingUpIcon size="md" /> */}
              <Text
                className="cursor-default"
                content={label}
                variant="title"
                vc="secondary"
              />
              <Link
                size="md"
                color="default"
                href={`/editorials/${api_handle}`}>
                View All
                <ArrowRight size={16} className="rtl:rotate-180" />
                {/* Replaced with Lucide icon */}
              </Link>
            </div>
            <CardPostFeatured posts={articles} orientation="vertical" />
          </>
        ))}
    </div>
  )
}

export { FeaturedCards }
