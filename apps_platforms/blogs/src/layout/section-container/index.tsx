// import { forwardRef } from '@vezham/react-utils'
// import './index.less'
// import { Props, useProps } from './types'
// const SectionContainer = forwardRef<'div', Props>((props, ref) => {
//   const { getBaseProps, children } = useProps({
//     ...props,
//     ref
//   })
//   return <div {...getBaseProps()}>{children}</div>
// })
// export { SectionContainer }
import { forwardRef } from '@vezham/react-utils'

import { Props, useProps } from './types'

const SectionContainer = forwardRef<'div', Props>((props, ref) => {
  const { getBaseProps, children } = useProps({
    ...props,
    ref
  })

  return <div {...getBaseProps()}>{children}</div>
})

export { SectionContainer }
