import { ReactRef } from '@vezham/react-utils'

import { UserProps } from '@vx-oss/user'

import { People } from '@vx/shared-types'

interface Props {
  id?: string
  className?: string
  ref?: ReactRef<HTMLDivElement | null>
  user?: UserProps
  data: People
}

const useProps = (props: Props) => {
  const {
    id,
    ref,
    className,
    data,
    user = {
      avatarProps: {
        size: 'md',
        src: data.image_url
      }
    },
    ...otherProps
  } = props

  const getBaseProps = () => ({
    id,
    ref,
    className,
    ...user,
    name: data.name,
    description: `${data.designation}, ${data.company}`
  })

  return {
    getBaseProps

    // otherProps
  }
}

export { useProps }
export type { Props }
