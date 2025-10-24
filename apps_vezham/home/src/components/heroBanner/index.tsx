import { Icon } from '@iconify/react'
import { forwardRef } from 'react'

import { Input } from '@vx-oss/react'

import { Props, useProps } from './types'

const HeroBanner = forwardRef<HTMLDivElement, Props>((props, ref) => {
  const {
    getBaseProps,
    getContentProps,
    getTitleProps,
    getInputContainerProps,
    getInputWrapperProps,
    getIconProps,
    inputClasses
  } = useProps({ ...props, ref })

  return (
    <div {...getBaseProps()}>
      <div {...getContentProps()}>
        <h1 {...getTitleProps()}>
          All the software you need to run your business
        </h1>
      </div>

      <div {...getInputContainerProps()}>
        <div {...getInputWrapperProps()}>
          <Input
            variant="flat"
            size="lg"
            radius="md"
            placeholder="I'm looking for..."
            startContent={
              <Icon icon="lucide:search" {...getIconProps()} width={24} />
            }
            classNames={inputClasses}
          />
        </div>
      </div>
    </div>
  )
})

HeroBanner.displayName = 'HeroBanner'
export { HeroBanner }
