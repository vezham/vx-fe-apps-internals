// import { forwardRef } from '@vezham/react-utils'
// import './index.less'
// import { Props, useProps } from './types'
// const Heading = forwardRef<'div', Props>((props, ref) => {
//   const { Component, getBaseProps } = useProps({
//     ...props,
//     ref
//   })
//   return <Component {...getBaseProps()} />
// })
// Heading.displayName = 'Heading'
// export { Heading }
import { forwardRef } from '@vezham/react-utils'

import { Props, useProps } from './types'

const Heading = forwardRef<'div', Props>((props, ref) => {
  const { Component, getBaseProps } = useProps({
    ...props,
    ref
  })

  return <Component {...getBaseProps()} />
})

Heading.displayName = 'Heading'

export { Heading }
