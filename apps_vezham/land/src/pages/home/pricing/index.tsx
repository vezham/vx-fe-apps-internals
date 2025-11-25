'use client'

import { Icon } from '@iconify/react'
import { useRouter } from '@tanstack/react-router'
import { motion } from 'framer-motion'
import React from 'react'

import { forwardRef } from '@vezham/react-utils'

import {
  Button,
  Chip,
  Link,
  RadioGroup,
  Spacer,
  Tab,
  Tabs
} from '@vx-oss/react'

import { usePricing } from '../../../store/usePricing'
import PricingRadioItem from './pricing-radio-item'
import {
  FrequencyEnum,
  PricingCompProps,
  TiersEnum,
  usePricingProps
} from './types'

const Pricing = forwardRef<'div', PricingCompProps>((props, ref) => {
  const { data: pricingData, isLoading } = usePricing.pricelist({})

  const {
    getBaseProps,
    getLoadingProps,
    getTabsContainerProps,
    getTabsProps,
    getTabListProps,
    getTabProps,
    getBgProps,
    getRadioGroupProps,
    getDiscountContainerProps,
    getDiscountTextProps,
    getTitleBaseProps,
    getTitleWrapperProps,
    getTitleProps,
    getSpotlightProps,
    getCouponProps,
    getDescriptionProps,
    getPriceContainerProps,
    getPriceRowProps,
    getPriceAmountProps,
    getPriceSuffixProps,
    getPriceDescriptionProps,
    selectedFrequency: propSelectedFrequency,
    selectedTier: propSelectedTier,
    onFrequencyChange: propOnFrequencyChange,
    onTierChange: propOnTierChange
  } = usePricingProps({
    ...props,
    ref
  })

  const frequencies = pricingData?.frequencies ?? []
  const tiers = pricingData?.tiers ?? []
  const router = useRouter()

  const [internalSelectedFrequency, setInternalSelectedFrequency] =
    React.useState<any>(null)
  const [internalSelectedTier, setInternalSelectedTier] =
    React.useState<TiersEnum | null>(null)

  const selectedFrequency = propSelectedFrequency || internalSelectedFrequency
  const selectedTier = propSelectedTier || internalSelectedTier

  React.useEffect(() => {
    if (frequencies.length > 0 && !selectedFrequency) {
      const freq = frequencies[0]
      setInternalSelectedFrequency(freq)
    }
    if (tiers.length > 0 && !selectedTier) {
      setInternalSelectedTier(tiers[0].key)
    }
  }, [frequencies, tiers, selectedFrequency, selectedTier])

  const onFrequencyChange = (selectedKey: React.Key) => {
    const f = frequencies.find(f => f.key === selectedKey)
    if (f) {
      if (propOnFrequencyChange) {
        propOnFrequencyChange(f)
      } else {
        setInternalSelectedFrequency(f)
      }
    }
  }

  const onTierChange = (value: string) => {
    if (propOnTierChange) {
      propOnTierChange(value as TiersEnum)
    } else {
      setInternalSelectedTier(value as TiersEnum)
    }
  }

  if (
    isLoading ||
    frequencies.length === 0 ||
    tiers.length === 0 ||
    !selectedFrequency ||
    !selectedTier
  ) {
    return <div {...getLoadingProps()}>Loading pricing…</div>
  }

  return (
    <>
      <div {...getBgProps()}>
        <div {...getTitleBaseProps()}>
          <p {...getSpotlightProps()}>PRICING</p>
        </div>
        <div {...getBaseProps()}>
          <div {...getTitleWrapperProps()}>
            <p {...getTitleProps()}>Get upto 40% off Vezham Plans</p>
            <div {...getDescriptionProps()}>
              <p>
                Use code <span {...getCouponProps()}>VEZHAM30</span>
              </p>
              <p>&nbsp;New customers of your monthly subscription</p>
            </div>
          </div>
          <div {...getTabsContainerProps()}>
            <Tabs
              classNames={{
                base: getTabsProps().className,
                tabList: getTabListProps().className,
                tab: getTabProps().className
              }}
              radius="full"
              size="sm"
              onSelectionChange={onFrequencyChange}>
              {frequencies.map(freq => (
                <Tab
                  key={freq.key}
                  aria-label={freq.label}
                  title={
                    <div className="flex items-center gap-2">
                      <p>{freq.label}</p>

                      {freq.key === FrequencyEnum.Yearly && (
                        <Chip color="primary">Save 40%</Chip>
                      )}

                      {freq.key === FrequencyEnum.Quarterly && (
                        <Chip color="primary">Save 25%</Chip>
                      )}
                    </div>
                  }
                />
              ))}
            </Tabs>
          </div>

          <RadioGroup
            aria-label="Tiers"
            classNames={{
              wrapper: getRadioGroupProps().className
            }}
            value={selectedTier}
            onValueChange={onTierChange}>
            {tiers.map(tier => (
              <PricingRadioItem
                key={tier.key}
                description={
                  <div {...getPriceContainerProps()}>
                    <p {...getPriceRowProps()}>
                      <span {...getPriceAmountProps()}>
                        {typeof tier.price === 'string'
                          ? tier.price
                          : tier.price[
                              selectedFrequency.key as keyof typeof tier.price
                            ]}
                      </span>

                      {typeof tier.price !== 'string' && (
                        <span {...getPriceSuffixProps()}>
                          {tier.priceSuffix
                            ? `/${tier.priceSuffix}/${selectedFrequency.priceSuffix}`
                            : `/${selectedFrequency.priceSuffix}`}
                        </span>
                      )}
                    </p>

                    <p {...getPriceDescriptionProps()}>{tier.description}</p>
                  </div>
                }
                value={tier.key}>
                {tier.mostPopular && (
                  <Chip
                    variant="flat"
                    size="sm"
                    classNames={{
                      base: 'right-3 absolute',
                      content: 'font-medium'
                    }}
                    color="primary">
                    Most Popular
                  </Chip>
                )}

                {tier.title}
              </PricingRadioItem>
            ))}
          </RadioGroup>
          <Spacer y={12} />

          <div {...getDiscountContainerProps()}>
            <p {...getDiscountTextProps()}>
              Are you an open source developer?&nbsp;
            </p>

            <Link color="primary" href="#" underline="always">
              Get a discount
            </Link>
          </div>
          <div>
            <Button
              variant="flat"
              color="primary"
              onPress={() => router.navigate({ to: '/vezham/pricing' })}
              fullWidth
              endContent={
                <motion.div
                  animate={{ x: [0, 5, 0] }}
                  transition={{ repeat: Infinity, duration: 1.5 }}>
                  <Icon icon="lucide:arrow-right" width={18} height={18} />
                </motion.div>
              }>
              Explore all Plans
            </Button>
          </div>
        </div>
      </div>
    </>
  )
})

Pricing.displayName = 'Pricing'

export { Pricing }
