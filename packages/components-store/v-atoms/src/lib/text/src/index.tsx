import { forwardRef } from '@vezham/system-rsc'

import './index.less'
import { Props, useProps } from './types'

const Text = forwardRef<'div', Props>((props, ref) => {
  const { Component, getBaseProps } = useProps({
    ...props,
    ref
  })

  return <Component {...getBaseProps()} />
})

Text.displayName = 'Text'

export { Text }
