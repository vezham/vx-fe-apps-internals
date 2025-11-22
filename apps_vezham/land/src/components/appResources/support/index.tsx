import { Icon } from '@iconify/react'
import React from 'react'

import { forwardRef } from '@vezham/react-utils'

import {
  Accordion,
  AccordionItem,
  Avatar,
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Chip,
  Divider,
  Link,
  Spacer,
  Tab,
  Tabs,
  Tooltip
} from '@vx-oss/react'

import { useSupport } from '../../../store/useSupport'
import { NavbarLogo } from './navbar-logo'
import {
  Frequency,
  FrequencyEnum,
  PricingCompProps,
  TeamMemberCardProps,
  useSupportProps
} from './types'

// Search Results Component for "Not Found" state
const SearchNotFound = ({ searchQuery }: { searchQuery: string }) => {
  return (
    <div className="flex flex-col items-center justify-center py-12 text-center">
      <Icon
        icon="solar:magnifier-linear"
        width={48}
        className="text-default-400 mb-4"
      />
      <h3 className="text-foreground mb-2 text-lg font-semibold">
        No results found
      </h3>
      <p className="text-default-600 max-w-md">
        No results found for{' '}
        <span className="font-medium">"{searchQuery}"</span> in Support Plans.
        Try different keywords or check the spelling.
      </p>
    </div>
  )
}

const Support = forwardRef<'div', PricingCompProps>((props, ref) => {
  const { data: supportData } = useSupport.list({})
  const { searchQuery } = props

  const info = supportData?.info ?? []
  const services = supportData?.services ?? []
  const features = supportData?.features ?? []
  const tiers = supportData?.tiers ?? []
  const frequencies = supportData?.frequencies ?? []
  const plans = supportData?.plan ?? []
  const teamMembers = supportData?.teamMembers ?? []
  const faqs = supportData?.faqs ?? []

  const {
    getBaseProps,
    getHeroContainerProps,
    getHeroGridProps,
    getHeroTitleProps,
    getHeroDescriptionProps,
    getServicesGridProps,
    getServiceCardProps,
    getServiceCardHeaderProps,
    getServiceHeaderContentProps,
    getServiceHeaderTitleProps,
    getServiceHeaderSubtitleProps,
    getServiceCardBodyProps,
    getServiceBodyTitleProps,
    getServiceBodyDescriptionProps,
    getServiceCardFooterProps,
    getPlansContainerProps,
    getPlansGridProps,
    getTiersContainerProps,
    getTiersSubContainerProps,
    getTiersBackgroundProps,
    getTiersGridProps,
    getTierCardProps,
    getTierChipProps,
    getTierCardHeaderProps,
    getTierHeaderTitleProps,
    getTierHeaderDescriptionProps,
    getTierCardBodyProps,
    getTierPriceContainerProps,
    getTierPriceProps,
    getTierPriceSuffixProps,
    getTierFeatureListProps,
    getTierFeatureItemProps,
    getTierFeatureIconProps,
    getTierFeatureTextProps,
    getTierCardFooterProps,
    getTabsContainerProps,
    getTabsProps,
    getTabListProps,
    getTabProps,
    getTabContentProps,
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
    getDiscountContainerProps,
    getDiscountTextProps,
    getDiscountLinkProps,
    getFaqContainerProps,
    getFaqGroupProps,
    getFaqGroupTitleProps,
    getFaqShadowProps,
    getFaqItemDescriptionProps,
    getTeamSectionProps,
    getTeamHeaderProps,
    getTeamSubtitleProps,
    getTeamTitleProps,
    getTeamGridProps,
    getTeamMemberCardProps,
    getTeamMemberAvatarProps,
    getTeamMemberNameProps,
    getTeamMemberRoleProps,
    getTeamMemberBioProps,
    getTeamSocialLinksProps,
    getTeamSocialIconProps
  } = useSupportProps({
    ...props,
    ref
  })

  const [selectedFrequency, setSelectedFrequency] =
    React.useState<Frequency | null>(null)

  React.useEffect(() => {
    if (frequencies.length > 0 && !selectedFrequency) {
      setSelectedFrequency(frequencies[0])
    }
  }, [frequencies])

  const onFrequencyChange = (selectedKey: React.Key) => {
    const found = frequencies.find(f => f.key === selectedKey)
    if (found) setSelectedFrequency(found)
  }

  const TeamMemberCard = React.forwardRef<HTMLDivElement, TeamMemberCardProps>(
    ({ children, avatar, name, role, bio, social, ...props }, ref) => (
      <div ref={ref} {...getTeamMemberCardProps(props)}>
        <Avatar {...getTeamMemberAvatarProps()} src={avatar} />
        <h3 {...getTeamMemberNameProps()}>{name || children}</h3>
        <span {...getTeamMemberRoleProps()}>{role}</span>
        <p {...getTeamMemberBioProps()}>{bio}</p>
        <div {...getTeamSocialLinksProps()}>
          {social?.twitter && (
            <Link isExternal href="#">
              <Icon
                {...getTeamSocialIconProps()}
                icon="bi:twitter"
                width={20}
              />
            </Link>
          )}
          {social?.linkedin && (
            <Link isExternal href="#">
              <Icon
                {...getTeamSocialIconProps()}
                icon="bi:linkedin"
                width={20}
              />
            </Link>
          )}
          {social?.github && (
            <Link isExternal href="#">
              <Icon {...getTeamSocialIconProps()} icon="bi:github" width={20} />
            </Link>
          )}
          {social?.mail && (
            <Link isExternal href="#">
              <Icon
                {...getTeamSocialIconProps()}
                icon="bi:envelope-fill"
                width={20}
              />
            </Link>
          )}
        </div>
      </div>
    )
  )

  // Enhanced filter data function that properly handles nested arrays
  const filterData = (data: any[], searchFields: string[]) => {
    if (!searchQuery) return data

    const query = searchQuery.toLowerCase()
    return data.filter(item => {
      return searchFields.some(field => {
        // Handle nested properties with dot notation
        if (field.includes('.')) {
          const fieldParts = field.split('.')
          let currentValue = item

          // Traverse the nested properties
          for (const part of fieldParts) {
            if (currentValue === null || currentValue === undefined) break

            if (Array.isArray(currentValue)) {
              // If we hit an array, check each item in the array
              return currentValue.some(arrayItem => {
                if (typeof arrayItem === 'object' && arrayItem !== null) {
                  const nestedValue = fieldParts
                    .slice(fieldParts.indexOf(part))
                    .reduce((obj, key) => obj?.[key], arrayItem)
                  return checkValue(nestedValue, query)
                }
                return checkValue(arrayItem, query)
              })
            }

            currentValue = currentValue[part]
          }

          return checkValue(currentValue, query)
        } else {
          // Handle flat properties
          return checkValue(item[field], query)
        }
      })
    })
  }

  // Helper function to check value against query
  const checkValue = (value: any, query: string): boolean => {
    if (typeof value === 'string') {
      return value.toLowerCase().includes(query)
    } else if (Array.isArray(value)) {
      return value.some(
        item => typeof item === 'string' && item.toLowerCase().includes(query)
      )
    }
    return false
  }

  // Special filter for FAQs to handle nested subItems
  const filterFaqs = (faqsData: any[], query: string) => {
    if (!query) return faqsData

    return faqsData.filter(faqGroup => {
      // Check the main label
      if (faqGroup.label?.toLowerCase().includes(query)) {
        return true
      }

      // Check subItems
      if (faqGroup.subItems && Array.isArray(faqGroup.subItems)) {
        const hasMatchingSubItems = faqGroup.subItems.some((subItem: any) => {
          return (
            subItem.title?.toLowerCase().includes(query) ||
            subItem.description?.toLowerCase().includes(query)
          )
        })

        if (hasMatchingSubItems) {
          return true
        }
      }

      return false
    })
  }

  // Filter each section
  const filteredInfo = filterData(info, ['title', 'description'])
  const filteredServices = filterData(services, [
    'logotitle',
    'logourl',
    'title',
    'description',
    'site',
    'siteurl'
  ])
  const filteredPlans = filterData(plans, ['title', 'description'])
  const filteredTiers = filterData(tiers, [
    'title',
    'description',
    'features',
    'buttonText'
  ])
  const filteredFeatures = filterData(features, [
    'title',
    'items.title',
    'items.helpText'
  ])
  const filteredFaqs = searchQuery
    ? filterFaqs(faqs, searchQuery.toLowerCase())
    : faqs
  const filteredTeamMembers = filterData(teamMembers, ['name', 'role', 'bio'])

  // Check if any section has results
  const hasSearchResults =
    filteredInfo.length > 0 ||
    filteredServices.length > 0 ||
    filteredPlans.length > 0 ||
    filteredTiers.length > 0 ||
    filteredFeatures.length > 0 ||
    filteredFaqs.length > 0 ||
    filteredTeamMembers.length > 0

  // If searching and no results found
  if (searchQuery && !hasSearchResults) {
    return <SearchNotFound searchQuery={searchQuery} />
  }

  // Filter FAQ subItems when searching to only show matching items
  const getFilteredFaqSubItems = (faqGroup: any) => {
    if (!searchQuery) return faqGroup.subItems || []

    return (faqGroup.subItems || []).filter(
      (subItem: any) =>
        subItem.title?.toLowerCase().includes(searchQuery.toLowerCase()) ||
        subItem.description?.toLowerCase().includes(searchQuery.toLowerCase())
    )
  }

  return (
    <div {...getBaseProps()}>
      {/* Only show sections that have content or when not searching */}
      {(!searchQuery || filteredInfo.length > 0) && (
        <div {...getHeroContainerProps()}>
          {(searchQuery ? filteredInfo : info).map((i, index) => (
            <div key={index} {...getHeroGridProps()}>
              <p {...getHeroTitleProps()}>{i.title}</p>
              <p {...getHeroDescriptionProps()}>{i.description}</p>
            </div>
          ))}
        </div>
      )}

      {(!searchQuery || filteredServices.length > 0) && (
        <div {...getServicesGridProps()}>
          {(searchQuery ? filteredServices : services).map((service, index) => (
            <Card key={index} {...getServiceCardProps()}>
              <CardHeader {...getServiceCardHeaderProps()}>
                <NavbarLogo visible={false} />
                <div {...getServiceHeaderContentProps()}>
                  <p {...getServiceHeaderTitleProps()}> {service.logotitle}</p>
                  <p {...getServiceHeaderSubtitleProps()}>{service.logourl}</p>
                </div>
              </CardHeader>

              <Divider />

              <CardBody {...getServiceCardBodyProps()}>
                <p {...getServiceBodyTitleProps()}>{service.title}</p>
                <p {...getServiceBodyDescriptionProps()}>
                  {service.description}
                </p>
              </CardBody>

              <Divider />

              <CardFooter {...getServiceCardFooterProps()}>
                <Link
                  isExternal={service.siteurl?.startsWith('http')}
                  showAnchorIcon
                  size="sm"
                  href={service.siteurl}>
                  Visit {service.site}
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
      )}

      {(!searchQuery || filteredPlans.length > 0) && (
        <div {...getPlansContainerProps()}>
          {(searchQuery ? filteredPlans : plans).map((p, index) => (
            <div key={index} {...getPlansGridProps()}>
              <p {...getHeroTitleProps()}>{p.title}</p>
              <p {...getHeroDescriptionProps()}>{p.description}</p>
            </div>
          ))}
        </div>
      )}

      {(!searchQuery || filteredTiers.length > 0) && (
        <div {...getTiersContainerProps()}>
          <div {...getTiersSubContainerProps()}>
            <div {...getTiersBackgroundProps()} />
          </div>

          <Spacer y={8} />
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
                    <div {...getTabContentProps()}>
                      <p>{freq.label}</p>

                      {freq.key === FrequencyEnum.Yearly && (
                        <Chip color="secondary">Save 40%</Chip>
                      )}

                      {freq.key === FrequencyEnum.Quarterly && (
                        <Chip color="secondary">Save 25%</Chip>
                      )}
                    </div>
                  }
                />
              ))}
            </Tabs>
          </div>
          <Spacer y={8} />
          <div {...getTiersGridProps()}>
            {(searchQuery ? filteredTiers : tiers).map(tier => (
              <Card
                key={tier.key}
                isBlurred
                {...getTierCardProps({
                  isMostPopular: tier.mostPopular
                })}
                shadow="md">
                {tier.mostPopular ? (
                  <Chip
                    {...getTierChipProps()}
                    color="secondary"
                    variant="flat">
                    Most Popular
                  </Chip>
                ) : null}
                <CardHeader {...getTierCardHeaderProps()}>
                  <h2 {...getTierHeaderTitleProps()}>{tier.title}</h2>
                  <p {...getTierHeaderDescriptionProps()}>{tier.description}</p>
                </CardHeader>
                <Divider />
                <CardBody {...getTierCardBodyProps()}>
                  <p {...getTierPriceContainerProps()}>
                    <span {...getTierPriceProps()}>
                      {selectedFrequency &&
                        (typeof tier.price === 'string'
                          ? tier.price
                          : tier.price[selectedFrequency.key])}
                    </span>
                    {typeof tier.price !== 'string' && selectedFrequency ? (
                      <span {...getTierPriceSuffixProps()}>
                        {tier.priceSuffix
                          ? `/${tier.priceSuffix}/${selectedFrequency.priceSuffix}`
                          : `/${selectedFrequency.priceSuffix}`}
                      </span>
                    ) : null}
                  </p>
                  <ul {...getTierFeatureListProps()}>
                    {tier.features?.map(feature => (
                      <li key={feature} {...getTierFeatureItemProps()}>
                        <Icon
                          {...getTierFeatureIconProps()}
                          icon="ci:check"
                          width={24}
                        />
                        <p {...getTierFeatureTextProps()}>{feature}</p>
                      </li>
                    ))}
                  </ul>
                </CardBody>
                <CardFooter {...getTierCardFooterProps()}>
                  <Button
                    fullWidth
                    as={Link}
                    color="secondary"
                    href={tier.href}
                    variant={tier.buttonVariant}>
                    {tier.buttonText}
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      )}

      {(!searchQuery || filteredFeatures.length > 0) && (
        <>
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
                  {(searchQuery ? filteredFeatures : features).map(
                    (feat, featIndex) => (
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
                                <div {...getTabContentProps()}>
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

                            {tiers.map(tie => (
                              <td key={tie.key} {...getFeatureCellProps()}>
                                {typeof item.tiers[tie.key] === 'string' ? (
                                  <div {...getFeatureTextProps()}>
                                    {item.tiers[tie.key]}
                                  </div>
                                ) : item.tiers[tie.key] ? (
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
                    )
                  )}
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
        </>
      )}

      {(!searchQuery || filteredFaqs.length > 0) && (
        <div {...getFaqContainerProps()}>
          {(searchQuery ? filteredFaqs : faqs).map((faqGroup, groupIndex) => (
            <div key={groupIndex} {...getFaqGroupProps()}>
              <h1 {...getFaqGroupTitleProps()}>{faqGroup.label}</h1>

              <Accordion variant="splitted">
                {getFilteredFaqSubItems(faqGroup).map(
                  (item: any, i: number) => (
                    <AccordionItem
                      key={i}
                      aria-label={item.title}
                      title={item.title}
                      {...getFaqShadowProps()}>
                      <p {...getFaqItemDescriptionProps()}>
                        {item.description}
                      </p>
                    </AccordionItem>
                  )
                )}
              </Accordion>
            </div>
          ))}
        </div>
      )}

      {(!searchQuery || filteredTeamMembers.length > 0) && (
        <div {...getTeamSectionProps()}>
          <div {...getTeamHeaderProps()}>
            <h2 {...getTeamSubtitleProps()}>General Inquiries</h2>
            <h1 {...getTeamTitleProps()}>Meet our team.</h1>
            <Spacer y={4} />
          </div>
          <div {...getTeamGridProps()}>
            {(searchQuery ? filteredTeamMembers : teamMembers).map(
              (member, index) => (
                <TeamMemberCard key={index} {...member} />
              )
            )}
          </div>
        </div>
      )}
    </div>
  )
})

export { Support }
