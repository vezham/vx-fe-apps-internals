// import { forwardRef } from '@vezham/react-utils'
// import './index.less'
// import { Props, useProps } from './types'
// const Text = forwardRef<'div', Props>((props, ref) => {
//   const { Component, getBaseProps } = useProps({
//     ...props,
//     ref
//   })
//   return <Component {...getBaseProps()} />
// })
// Text.displayName = 'Text'
// export { Text }
import { forwardRef } from '@vezham/react-utils'

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
