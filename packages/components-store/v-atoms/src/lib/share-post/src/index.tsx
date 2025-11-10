import { forwardRef } from '@vezham/react-utils'

import { SocialMediaIcon } from '@vx/v-ions'

import { Text } from '../../text/src'
import { Props, useProps } from './types'

const SharePost = forwardRef<'div', Props>((props, ref) => {
  const { Component, getBaseProps, title, platforms } = useProps({
    ...props,
    ref
  })

  return (
    <Component {...getBaseProps()}>
      {title ? <Text content={title} variant="title" /> : null}
      <div className="flex flex-wrap">
        {platforms.map(platform => (
          <SocialMediaIcon handler={{ name: platform }} />
        ))}
      </div>
    </Component>
  )
})

SharePost.displayName = 'SharePost'

export { SharePost }
