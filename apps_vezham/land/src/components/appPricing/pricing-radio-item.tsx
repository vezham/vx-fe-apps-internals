'use client'

import { forwardRef } from '@vezham/react-utils'

import { Radio } from '@vx-oss/react'

import { PricingRadioItemProps, usePricingRadioItemProps } from './types'

const PricingRadioItem = forwardRef<HTMLInputElement, PricingRadioItemProps>(
  (props, ref) => {
    const {
      getBaseProps,
      getLabelProps,
      getChipBaseProps,
      getChipContentProps,
      classNames = {},
      children,
      ...otherProps
    } = usePricingRadioItemProps({
      ...props,
      ref
    })

    return (
      <Radio
        {...otherProps}
        {...getBaseProps()}
        classNames={{
          ...classNames,
          label: getLabelProps().className,
          base: getBaseProps().className
        }}>
        {children}
      </Radio>
    )
  }
)

PricingRadioItem.displayName = 'PricingRadioItem'

export default PricingRadioItem
