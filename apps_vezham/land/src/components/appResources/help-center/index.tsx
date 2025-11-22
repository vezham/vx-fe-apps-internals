import { Icon } from '@iconify/react'

import { forwardRef } from '@vezham/react-utils'

import {
  Accordion,
  AccordionItem,
  Button,
  Card,
  CardBody,
  CardHeader,
  Input,
  Select,
  SelectItem,
  User,
  cn
} from '@vx-oss/react'

import { useHelpCenter } from '../../../store/useHelpcenter'
import {
  CardReviewProps,
  FeatureCardProps,
  Props,
  ReviewProps,
  useProps
} from './types'

const Review = forwardRef<HTMLDivElement, ReviewProps>(
  ({ children, user, title, content, rating, createdAt, ...props }, ref) => {
    const {
      getReviewProps,
      getReviewHeaderProps,
      getReviewUserProps,
      getReviewRatingProps,
      getReviewStarProps,
      getReviewContentProps,
      getReviewTitleProps,
      getReviewTextProps
    } = useProps({})

    return (
      <div ref={ref} {...getReviewProps()} {...props}>
        <div {...getReviewHeaderProps()}>
          <div {...getReviewUserProps()}>
            <User
              avatarProps={{
                src: user.avatar
              }}
              classNames={{
                name: 'font-medium',
                description: 'text-small'
              }}
              description={new Intl.DateTimeFormat('en-US', {
                month: 'long',
                day: 'numeric',
                year: 'numeric'
              }).format(new Date(createdAt))}
              name={user.name}
            />
          </div>
          <div {...getReviewRatingProps()}>
            {Array.from({ length: 5 }, (_, i) => {
              const isSelected = i + 1 <= rating

              return (
                <Icon
                  key={i}
                  {...getReviewStarProps(isSelected)}
                  icon="solar:star-bold"
                />
              )
            })}
          </div>
        </div>
        <div {...getReviewContentProps()}>
          <p {...getReviewTitleProps()}>{title}</p>
          <p {...getReviewTextProps()}>{content || children}</p>
        </div>
      </div>
    )
  }
)

const CardReview = forwardRef<HTMLDivElement, CardReviewProps>(
  ({ className, ...review }, ref) => {
    const { getCardReviewProps } = useProps({})

    return (
      <div
        ref={ref}
        {...getCardReviewProps()}
        className={cn(getCardReviewProps().className, className)}>
        <Review {...review} />
      </div>
    )
  }
)

const FeatureCard = forwardRef<HTMLDivElement, FeatureCardProps>(
  ({ title, descriptions = [], icon, ...props }, ref) => {
    const {
      getFeatureCardProps,
      getFeatureCardHeaderProps,
      getFeatureCardIconProps,
      getFeatureCardTitleProps,
      getFeatureCardBodyProps,
      getFeatureCardDescriptionProps,
      getFeatureCardDescriptionTextProps
    } = useProps({})

    return (
      <Card ref={ref} {...getFeatureCardProps()} shadow="none" {...props}>
        <CardHeader {...getFeatureCardHeaderProps()}>
          <Icon {...getFeatureCardIconProps()} icon={icon} width={40} />
          <p {...getFeatureCardTitleProps()}>{title}</p>
        </CardHeader>
        <CardBody {...getFeatureCardBodyProps()}>
          {descriptions.map((description, index) => (
            <div key={index} {...getFeatureCardDescriptionProps()}>
              <p {...getFeatureCardDescriptionTextProps()}>{description}</p>
            </div>
          ))}
        </CardBody>
      </Card>
    )
  }
)

const HelpCenter = forwardRef<'div', Props>((props, ref) => {
  const { data: helpCenter } = useHelpCenter.list({})

  const {
    getBaseProps,
    getPopularTopicsTitleProps,
    getFeaturesGridProps,
    getHelpDeskSectionProps,
    getHelpDeskItemProps,
    getHelpDeskTitleProps,
    getHelpDeskDescriptionProps,
    getHelpDeskSubdescriptionProps,
    getHelpDeskListProps,
    getFaqSectionProps,
    getFaqContainerProps,
    getFaqTitleProps,
    getFaqTitleMobileProps,
    getFaqTitleDesktopProps,
    getContactButtonProps,
    getAccordionBaseProps,
    getAccordionTitleProps,
    getAccordionTriggerProps,
    getAccordionContentProps,
    getAccordionIndicatorProps,
    getAccordionIconProps,
    getReviewsSectionProps,
    getReviewsTitleProps,
    getReviewsHeaderProps,
    getReviewsHeaderTitleProps,
    getReviewsMainTitleProps,
    getReviewsRatingProps,
    getReviewsStarProps,
    getReviewsRatingNumberProps,
    getReviewsCountProps,
    getReviewsControlsProps,
    getSearchInputProps,
    getSearchIconProps,
    getSelectProps,
    getReviewsGridProps
  } = useProps({
    ...props,
    ref
  })

  const faqs = helpCenter?.faqs ?? []
  const featuresCategories = helpCenter?.features ?? []
  const helpDesk = helpCenter?.helpDesk ?? []
  const reviews = helpCenter?.reviews ?? []

  return (
    <div {...getBaseProps()}>
      <div {...getPopularTopicsTitleProps()}>Popular Topics</div>
      <div {...getFeaturesGridProps()}>
        {featuresCategories.map(category => (
          <FeatureCard
            key={category.key}
            descriptions={category.descriptions}
            icon={category.icon}
            title={category.title}
          />
        ))}
      </div>

      <div {...getHelpDeskSectionProps()}>
        {helpDesk.map((item, index) => (
          <div key={index} {...getHelpDeskItemProps()}>
            <h2 {...getHelpDeskTitleProps()}>{item.title}</h2>

            <p {...getHelpDeskDescriptionProps()}>{item.description}</p>

            {item.subdescription && (
              <p {...getHelpDeskSubdescriptionProps()}>{item.subdescription}</p>
            )}

            {item.lists && (
              <ul {...getHelpDeskListProps()}>
                {item.lists.map((listItem, i) => (
                  <li key={i}>{listItem}</li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>

      <div {...getFaqSectionProps()}>
        <div {...getFaqContainerProps()}>
          <h2 {...getFaqTitleProps()}>
            <span {...getFaqTitleMobileProps()}> FAQs</span>
            <span {...getFaqTitleDesktopProps()}>
              Frequently asked questions
            </span>
          </h2>
          <div>
            <Button
              disableAnimation
              {...getContactButtonProps()}
              endContent={<Icon icon="lucide:chevron-right" width={24} />}
              size="md"
              variant="shadow">
              Contact Us
            </Button>
          </div>
          <Accordion
            fullWidth
            keepContentMounted
            itemClasses={{
              base: getAccordionBaseProps().className,
              title: getAccordionTitleProps().className,
              trigger: getAccordionTriggerProps().className,
              content: getAccordionContentProps().className,
              indicator: getAccordionIndicatorProps().className
            }}
            items={faqs}
            selectionMode="multiple">
            {faqs.map((item, i) => (
              <AccordionItem
                key={i}
                indicator={
                  <Icon
                    {...getAccordionIconProps()}
                    icon="lucide:plus"
                    width={24}
                  />
                }
                title={item.title}>
                {item.content}
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>

      <div {...getReviewsSectionProps()}>
        <h1 {...getReviewsTitleProps()}>What people say about ?</h1>
        <header {...getReviewsHeaderProps()}>
          <div {...getReviewsHeaderTitleProps()}>
            <h1 {...getReviewsMainTitleProps()}>Reviews</h1>
            <div {...getReviewsRatingProps()}>
              <Icon
                {...getReviewsStarProps()}
                icon="solar:star-bold"
                width={20}
              />
              <span {...getReviewsRatingNumberProps()}>4.4</span>
              <span {...getReviewsCountProps()}>
                (Based on {reviews.length} reviews)
              </span>
            </div>
          </div>
          <div {...getReviewsControlsProps()}>
            <Input
              fullWidth
              aria-label="Search"
              {...getSearchInputProps()}
              labelPlacement="outside"
              placeholder="Search reviews"
              startContent={
                <Icon {...getSearchIconProps()} icon="solar:magnifer-linear" />
              }
            />
            <Select
              aria-label="Sort by"
              {...getSelectProps()}
              defaultSelectedKeys={['most_recent']}
              labelPlacement="outside">
              <SelectItem key="most_recent">Most recent</SelectItem>
              <SelectItem key="most_helpful">Most helpful</SelectItem>
              <SelectItem key="highest_rating">Highest rating</SelectItem>
            </Select>
          </div>
        </header>
        <div {...getReviewsGridProps()}>
          {reviews.map((review, index) => (
            <CardReview key={index} {...review} />
          ))}
        </div>
      </div>
    </div>
  )
})

HelpCenter.displayName = 'HelpCenter'

export { HelpCenter }
