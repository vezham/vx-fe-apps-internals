'use client'

import { Icon } from '@iconify/react'
import React from 'react'

import { forwardRef } from '@vezham/react-utils'

import {
  Accordion,
  AccordionItem,
  Chip,
  Divider,
  Link,
  RadioGroup,
  Spacer,
  Tab,
  Tabs,
  Tooltip
} from '@vx-oss/react'

import { usePricing } from '../../store/usePricing'
import PricingRadioItem from './pricing-radio-item'
import {
  FrequencyEnum,
  PricingCompProps,
  TiersEnum,
  usePricingProps
} from './types'

const PricingComp = forwardRef<'div', PricingCompProps>((props, ref) => {
  const { data: pricingData, isLoading } = usePricing.pricelist({})

  const {
    getBaseProps,
    getLoadingProps,
    getTabsContainerProps,
    getTabsProps,
    getTabListProps,
    getTabProps,
    getRadioGroupProps,
    getComparisonTableProps,
    getTableContainerProps,
    getTableProps,
    getTableColProps,
    getFeatureGroupHeaderProps,
    getFeatureGroupDividerProps,
    getFeatureTitleProps,
    getFeatureHelpIconProps,
    getFeatureCellProps,
    getFeatureTextProps,
    getFeatureCheckIconProps,
    getFeatureCloseIconProps,
    getFaqContainerProps,
    getFaqGroupProps,
    getFaqGroupTitleProps,
    getDiscountContainerProps,
    getDiscountTextProps,
    getDiscountLinkProps,
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

  const faqs = pricingData?.faqs ?? []
  const features = pricingData?.features ?? []
  const frequencies = pricingData?.frequencies ?? []
  const tiers = pricingData?.tiers ?? []

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
      <div {...getBaseProps()}>
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
                  classNames={{
                    base: 'absolute -top-4 left-1/2 -translate-x-1/2',
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

        {/* > lg comparison table */}
        <div {...getComparisonTableProps()}>
          <div {...getTableContainerProps()}>
            <table {...getTableProps()}>
              <caption className="sr-only">Pricing plan comparison</caption>

              <colgroup>
                {Array.from({ length: tiers.length + 1 }).map((_, index) => (
                  <col key={index} {...getTableColProps()} />
                ))}
              </colgroup>

              <tbody>
                {features.map((feat, featIndex) => (
                  <React.Fragment key={feat.title}>
                    <tr>
                      <th
                        {...getFeatureGroupHeaderProps(featIndex === 0)}
                        colSpan={4}
                        scope="colgroup">
                        {feat.title}
                        <Divider {...getFeatureGroupDividerProps()} />
                      </th>
                    </tr>

                    {feat.items.map(item => (
                      <tr key={item.title}>
                        <th
                          {...getFeatureTitleProps(!!item.helpText)}
                          scope="row">
                          {item.helpText ? (
                            <div className="flex items-center gap-1">
                              <span>{item.title}</span>
                              <Tooltip
                                className="max-w-[240px]"
                                color="foreground"
                                content={item.helpText}
                                placement="right">
                                <Icon
                                  {...getFeatureHelpIconProps()}
                                  icon="solar:info-circle-line-duotone"
                                  width={20}
                                />
                              </Tooltip>
                            </div>
                          ) : (
                            item.title
                          )}
                        </th>

                        {tiers.map(tier => (
                          <td key={tier.key} {...getFeatureCellProps()}>
                            {typeof item.tiers[tier.key] === 'string' ? (
                              <div {...getFeatureTextProps()}>
                                {item.tiers[tier.key]}
                              </div>
                            ) : item.tiers[tier.key] ? (
                              <Icon
                                {...getFeatureCheckIconProps()}
                                icon="ci:check"
                                width={24}
                              />
                            ) : (
                              <Icon
                                {...getFeatureCloseIconProps()}
                                icon="ci:close-sm"
                                width={24}
                              />
                            )}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </React.Fragment>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <Spacer y={12} />

        <div {...getDiscountContainerProps()}>
          <p {...getDiscountTextProps()}>
            Are you an open source developer?&nbsp;
          </p>

          <Link
            color="foreground"
            href="#"
            underline="always"
            {...getDiscountLinkProps()}>
            Get a discount
          </Link>
        </div>
      </div>
      <div {...getFaqContainerProps()}>
        {faqs.map((faqGroup, groupIndex) => (
          <div key={groupIndex} {...getFaqGroupProps()}>
            <h1 {...getFaqGroupTitleProps()}>{faqGroup.label}</h1>

            <Accordion variant="splitted">
              {(faqGroup.subItems ?? []).map((item, i) => (
                <AccordionItem
                  key={i}
                  aria-label={item.title}
                  title={item.title}>
                  <p className="text-default-600 text-sm">{item.description}</p>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        ))}
      </div>
    </>
  )
})

PricingComp.displayName = 'PricingComp'

export { PricingComp }
