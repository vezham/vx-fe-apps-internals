// import {
//   RatingEmojiAngryIcon,
//   RatingEmojiGreatIcon,
//   RatingEmojiHappyIcon,
//   RatingEmojiSadIcon,
//   RatingEmojiSimelyIcon,
//   RatingHeartIcon,
//   RatingStarIcon,
//   RatingThumbsDownIcon,
//   RatingThumbsUpIcon
// } from '@vezham/icons'
// import { forwardRef } from '@vezham/react-utils'
// import './index.less'
// import { Props, useProps } from './types'
// const FeedbackRating = forwardRef<'div', Props>((props, ref) => {
//   const {
//     Component,
//     getBaseProps,
//     type,
//     scale,
//     icon,
//     title,
//     getTitleProps,
//     getRatingProps
//   } = useProps({
//     ...props,
//     ref
//   })
//   const template = []
//   if (type === 'star') {
//     for (let index = 0; index < scale; index++) {
//       template.push(<RatingStarIcon size="sm" {...icon} />)
//     }
//   } else if (type === 'heart') {
//     for (let index = 0; index < scale; index++) {
//       template.push(<RatingHeartIcon size="sm" {...icon} />)
//     }
//   } else if (type === 'like') {
//     template.push(<RatingThumbsUpIcon size="md" {...icon} />)
//     template.push(<RatingThumbsDownIcon size="md" {...icon} />)
//   } else if (type === 'emoji') {
//     if (scale == 2) {
//       template.push(<RatingEmojiSadIcon size="md" {...icon} />)
//       template.push(<RatingEmojiHappyIcon size="md" {...icon} />)
//     } else if (scale == 3) {
//       template.push(<RatingEmojiSadIcon size="md" {...icon} />)
//       template.push(<RatingEmojiHappyIcon size="md" {...icon} />)
//       template.push(<RatingEmojiSimelyIcon size="md" {...icon} />)
//     } else if (scale == 5) {
//       template.push(<RatingEmojiAngryIcon size="md" {...icon} />)
//       template.push(<RatingEmojiSadIcon size="md" {...icon} />)
//       // template.push(<RatingEmojiNeutralIcon {...icon} />)
//       template.push(<RatingEmojiHappyIcon size="md" {...icon} />)
//       template.push(<RatingEmojiSimelyIcon size="md" {...icon} />)
//       template.push(<RatingEmojiGreatIcon size="md" {...icon} />)
//     }
//   }
//   return (
//     <Component {...getBaseProps()}>
//       <div {...getTitleProps()}>{title}</div>
//       <div {...getRatingProps()}>{template}</div>
//     </Component>
//   )
// })
// FeedbackRating.displayName = 'FeedbackRating'
// export { FeedbackRating }
import {
  Angry,
  Frown,
  Heart,
  Laugh,
  Meh,
  Smile,
  Star,
  ThumbsDown,
  ThumbsUp
} from 'lucide-react'

import { forwardRef } from '@vezham/react-utils'

import { Props, useProps } from './types'

const FeedbackRating = forwardRef<'div', Props>((props, ref) => {
  const {
    Component,
    getBaseProps,
    type,
    scale,
    icon,
    title,
    getTitleProps,
    getRatingProps
  } = useProps({
    ...props,
    ref
  })

  const template = []

  if (type === 'star') {
    for (let index = 0; index < scale; index++) {
      template.push(<Star size={16} {...icon} key={index} />)
    }
  } else if (type === 'heart') {
    for (let index = 0; index < scale; index++) {
      template.push(<Heart size={16} {...icon} key={index} />)
    }
  } else if (type === 'like') {
    template.push(<ThumbsUp size={20} {...icon} key="thumbs-up" />)
    template.push(<ThumbsDown size={20} {...icon} key="thumbs-down" />)
  } else if (type === 'emoji') {
    if (scale === 2) {
      template.push(<Frown size={20} {...icon} key="frown" />)
      template.push(<Smile size={20} {...icon} key="smile" />)
    } else if (scale === 3) {
      template.push(<Frown size={20} {...icon} key="frown" />)
      template.push(<Meh size={20} {...icon} key="meh" />)
      template.push(<Smile size={20} {...icon} key="smile" />)
    } else if (scale === 5) {
      template.push(<Angry size={20} {...icon} key="angry" />)
      template.push(<Frown size={20} {...icon} key="frown" />)
      template.push(<Meh size={20} {...icon} key="meh" />)
      template.push(<Smile size={20} {...icon} key="smile" />)
      template.push(<Laugh size={20} {...icon} key="laugh" />)
    }
  }

  return (
    <Component {...getBaseProps()}>
      <div {...getTitleProps()}>{title}</div>
      <div {...getRatingProps()}>{template}</div>
    </Component>
  )
})

FeedbackRating.displayName = 'FeedbackRating'

export { FeedbackRating }
