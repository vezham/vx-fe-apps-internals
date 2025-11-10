// import { TrendingUpIcon } from '@vezham/icons'
// import { useTheme } from '@vx-oss/use-theme'
// import { ScrollShadow } from '@vx-oss/scroll-shadow'
// import { CardPostTrending, Text } from '@vx/v-atoms'
// import { useDiscovery } from '../../store/useDiscovery'
// import './index.less'
// import { tva } from './variant'
// const Trending = () => {
//   const slots = tva()
//   const { IsMobView } = useTheme()
//   const { data: trends } = useDiscovery.list({})
//   return (
//     <div className={slots.base()}>
//       <div className="flex items-center gap-2">
//         <TrendingUpIcon size="md" />
//         <Text content="Top Trending" variant="title" vc="secondary" />
//       </div>
//       <ScrollShadow
//         orientation={IsMobView ? 'horizontal' : 'vertical'}
//         show_track={true}
//         className={slots.wrapper()}>
//         {/* @ts-ignore */}
//         {trends &&
//           trends?.map((trend, index) => (
//             <CardPostTrending
//               key={index}
//               {...trend}
//               trend_no={index + 1}
//               orientation={IsMobView ? 'horizontal' : 'vertical'}
//             />
//           ))}
//       </ScrollShadow>
//     </div>
//   )
// }
// export { Trending }
import { TrendingUp } from 'lucide-react'

import { forwardRef } from '@vezham/react-utils'

import { ScrollShadow } from '@vx-oss/scroll-shadow'
import { useTheme } from '@vx-oss/use-theme'

import { CardPostTrending, Text } from '@vx/v-atoms'

import { useDiscovery } from '../../store/useDiscovery'
import { Props, useProps } from './types'

const Trending = forwardRef<'div', Props>((props, ref) => {
  const { IsMobView } = useTheme()

  const {
    Component,
    getBaseProps,
    getHeaderProps,
    getWrapperProps,
    getScrollProps,

    isMobileView = IsMobView
  } = useProps({
    ...props,
    ref,
    isMobileView: IsMobView
  })

  // If trends not provided, use the hook
  const { data: trends } = useDiscovery.list({})

  return (
    <Component {...getBaseProps()}>
      <div {...getHeaderProps()}>
        <TrendingUp className="h-5 w-5" />
        <Text content="Top Trending" variant="title" vc="secondary" />
      </div>
      <ScrollShadow {...getScrollProps()}>
        <div {...getWrapperProps()}>
          {trends && trends.length > 0 ? (
            trends.map((trend, index) => (
              <CardPostTrending
                key={trend.id || index}
                {...trend}
                trend_no={index + 1}
                orientation={isMobileView ? 'horizontal' : 'vertical'}
              />
            ))
          ) : (
            <div>No trending data available</div>
          )}
        </div>
      </ScrollShadow>
    </Component>
  )
})

Trending.displayName = 'Trending'

export { Trending }
