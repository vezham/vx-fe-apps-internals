import { forwardRef } from '@vezham/react-utils'

import { User } from '@vx-oss/user'

import { Props, useProps } from './types'

const PeopleVcard = forwardRef<'div', Props>((props, ref) => {
  const { getBaseProps } = useProps({
    ...props,
    ref
  })

  return <User {...getBaseProps()} />
})

PeopleVcard.displayName = 'PeopleVcard'

export { PeopleVcard }
