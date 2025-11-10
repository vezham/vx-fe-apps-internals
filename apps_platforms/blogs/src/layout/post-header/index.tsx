import { forwardRef } from '@vezham/react-utils'

import { Props, useProps } from './types'

const PostHeader = forwardRef<'div', Props>((props, ref) => {
  const {
    getBaseProps,
    getWrapperProps,
    children,
    title,
    subtitle,
    getTitleProps,
    getSubtitleProps,
    getContentWrapperProps
  } = useProps({
    ...props,
    ref
  })

  return (
    <div {...getBaseProps()}>
      <div {...getWrapperProps()}>
        <div {...getTitleProps()}>{title}</div>
        {subtitle ? <p {...getSubtitleProps()}>{subtitle}</p> : null}
      </div>
      <section {...getContentWrapperProps()}>{children}</section>
    </div>
  )
})

export { PostHeader }
