import { Icon } from '@iconify/react'
import React from 'react'

import { Input } from '@vx-oss/react'

import type { HeroBannerProps } from './types'
import { heroBannerVariants as hv } from './variant'

export const HeroBanner: React.FC<HeroBannerProps> = ({
  variant = 'default',
  size = 'md'
}) => {
  const cls = hv.getClasses(variant, size)

  return (
    <div className={cls.wrapper}>
      <div className={cls.content}>
        <h1 className={cls.title}>
          All the software you need to run your business
        </h1>
      </div>

      <div className={cls.inputContainer}>
        <div className={cls.inputWrapper}>
          <Input
            variant="flat"
            size="lg"
            radius="md"
            placeholder="I'm looking for..."
            startContent={
              <Icon icon="lucide:search" className={cls.icon} width={24} />
            }
            classNames={hv.inputClasses}
          />
        </div>
      </div>
    </div>
  )
}
