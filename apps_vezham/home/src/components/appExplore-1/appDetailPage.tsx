import { Icon } from '@iconify/react'
import { useParams, useRouter } from '@tanstack/react-router'
import React from 'react'

import {
  Accordion,
  AccordionItem,
  Button,
  Card,
  Image,
  cn
} from '@vx-oss/react'

import { Footer } from '../../pages/footer'
import { Header } from '../../pages/header'
import { categoryContents } from '../appExplore-1/data'
import { AppDetail, useProps } from './types'

const AppDetailView: React.FC = () => {
  const router = useRouter()
  const params = useParams({ from: '/apps/explore-1/$appExploreId' })
  const appId = params.appExploreId
  const props = useProps({})

  const app: AppDetail | null =
    Object.values(categoryContents)
      .flatMap(cat => cat.apps)
      .find(a => a.id === appId) || null

  if (!app) {
    return (
      <div {...props.getNotFoundWrapperProps()}>
        <div {...props.getNotFoundInnerProps()}>
          <h2 {...props.getNotFoundTitleProps()}>App not found</h2>
          <p {...props.getNotFoundDescProps()}>
            The requested app could not be found.
          </p>
          <Button
            {...props.getNotFoundButtonProps()}
            color="primary"
            variant="flat"
            startContent={<Icon icon="lucide:arrow-left" width={16} />}
            onPress={() => router.navigate({ to: '/apps/explore-1' })}>
            Back to Apps
          </Button>
        </div>
      </div>
    )
  }

  const {
    features = [],
    pricing = [],
    metrics = [],
    support = [],
    painPoints = []
  } = app

  return (
    <div {...props.getWrapperProps()}>
      <Header />
      <div {...props.getContainerProps()}>
        {/* Header */}
        <header {...props.getHeaderBaseProps()}>
          <div {...props.getHeaderInnerProps()}>
            <Button
              color="default"
              variant="light"
              onPress={() => router.navigate({ to: '/apps/explore-1' })}
              startContent={<Icon icon="lucide:arrow-left" width={16} />}>
              Back to Apps
            </Button>
            <div {...props.getHeaderTitleWrapProps()}>
              <Image
                src={app.icon}
                className={app.iconColor}
                width={32}
                height={32}
              />
              <span {...props.getHeaderTitleProps()}>{app.title}</span>
            </div>
          </div>
        </header>

        {/* Main */}
        <main {...props.getMainProps()}>
          {/* Hero */}
          <section {...props.getHeroSectionProps()}>
            <h1 {...props.getHeroTitleProps()}>{app.title}</h1>
            <p {...props.getHeroDescProps()}>
              {app.detailedDescription || app.description}
            </p>
          </section>

          {/* Overview */}
          <section {...props.getOverviewSectionProps()}>
            <div {...props.getOverviewImageWrapProps()}>
              <Image
                src={
                  app.image ||
                  `https://img.heroui.chat/image/dashboard?w=600&h=400&u=${app.id}`
                }
                alt={`${app.title} overview`}
                {...props.getOverviewImageProps()}
              />
            </div>
            <div {...props.getOverviewContentProps()}>
              <h2 {...props.getOverviewHeadingProps()}>Our Obstacles</h2>
              <Accordion
                variant="splitted"
                {...props.getOverviewAccordionProps()}>
                {painPoints.map((point, i) => (
                  <AccordionItem
                    key={i}
                    title={point.title}
                    startContent={<div>0{i + 1}</div>}>
                    <p>{point.description}</p>
                  </AccordionItem>
                ))}
              </Accordion>

              <h2 {...props.getOverviewHeadingProps()}>Features List</h2>
              <ul {...props.getOverviewFeatureListProps()}>
                {features.slice(0, 3).map((feature, i) => (
                  <li key={i} {...props.getOverviewFeatureItemProps()}>
                    <div {...props.getOverviewFeatureIconProps()}>
                      <Icon icon={feature.icon} width={18} height={18} />
                    </div>
                    <span>{feature.title}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* Features Grid */}
          <h2 {...props.getFeaturesTitleProps()}>Our Features</h2>

          {features.length > 0 && (
            <section {...props.getFeaturesGridProps()}>
              {features.map((feature, index) => (
                <div
                  key={index}
                  className={cn(
                    props.getFeatureCardProps().className,
                    (index === 0 || index === 4) &&
                      props.getFeatureCardLeftProps().className,
                    index < 4 && props.getFeatureCardBottomProps().className
                  )}>
                  <div {...props.getFeatureIconProps()}>
                    <Icon icon={feature.icon} width={24} height={24} />
                  </div>
                  <div {...props.getFeatureTitleWrapperProps()}>
                    <div {...props.getFeatureTitleHighlightProps()} />
                    <span {...props.getFeatureTitleProps()}>
                      {feature.title}
                    </span>
                  </div>
                  <p {...props.getFeatureDescProps()}>{feature.description}</p>
                </div>
              ))}
            </section>
          )}

          {/* Cards Grid */}
          <section {...props.getCardsGridProps()}>
            {pricing.length > 0 && (
              <Card {...props.getCardBaseProps()}>
                <h3 {...props.getPlanProps()}>Pricing</h3>
                <div className="space-y-4">
                  {pricing.map((plan, i) => (
                    <div
                      key={i}
                      {...props.getPricingCardProps()}
                      className={
                        plan.isPopular
                          ? props.getPricingPopularProps().className
                          : ''
                      }>
                      {plan.isPopular && (
                        <div {...props.getPricingLabelProps()}>
                          MOST POPULAR
                        </div>
                      )}
                      <div {...props.getPricingNameProps()}>{plan.name}</div>
                      <div className="mb-3">
                        <span {...props.getPricingValueProps()}>
                          {plan.price}
                        </span>
                        <span {...props.getPricingPeriodProps()}>
                          {plan.period}
                        </span>
                      </div>
                      <ul className="space-y-2 text-sm">
                        {plan.features.map((f, j) => (
                          <li key={j} {...props.getPricingFeatureProps()}>
                            <Icon
                              icon="lucide:check"
                              {...props.getPricingFeatureIconProps()}
                              width={16}
                              height={16}
                            />
                            {f}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </Card>
            )}

            {/* Results */}
            {metrics.length > 0 && (
              <Card {...props.getCardBaseProps()}>
                <h3 {...props.getResultsTitleProps()}>Results</h3>
                <div {...props.getResultsWrapperProps()}>
                  {metrics.map((result, i) => (
                    <div key={i} {...props.getResultsItemProps()}>
                      <div {...props.getResultCircleProps()}>
                        <svg className="h-full w-full" viewBox="0 0 36 36">
                          <circle
                            cx="18"
                            cy="18"
                            r="16"
                            fill="none"
                            className="stroke-default-200"
                            strokeWidth="2"
                          />
                          <circle
                            cx="18"
                            cy="18"
                            r="16"
                            fill="none"
                            className="stroke-primary"
                            strokeWidth="2"
                            strokeDasharray={`${(2 * Math.PI * 16 * result.value) / 100} ${
                              2 * Math.PI * 16
                            }`}
                            transform="rotate(-90 18 18)"
                          />
                          <text
                            x="18"
                            y="18"
                            dominantBaseline="middle"
                            textAnchor="middle"
                            {...props.getResultTextProps()}>
                            {result.value}%
                          </text>
                        </svg>
                      </div>
                      <div>
                        <h4 {...props.getSupportTitleProps()}>
                          {result.title}
                        </h4>
                        <p {...props.getSupportDescProps()}>
                          {result.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </Card>
            )}

            {/* Support */}
            {support.length > 0 && (
              <Card {...props.getCardBaseProps()}>
                <h3 {...props.getSupportHeadProps()}>Support</h3>
                <div {...props.getSupportWrapperProps()}>
                  {support.map((s, i) => (
                    <div key={i} {...props.getSupportItemProps()}>
                      <div {...props.getSupportIconWrapperProps()}>
                        <Icon
                          icon={s.icon}
                          width={20}
                          height={20}
                          className="text-primary"
                        />
                      </div>
                      <div>
                        <h4 {...props.getSupportTitleProps()}>{s.title}</h4>
                        <p {...props.getSupportDescProps()}>{s.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <Button
                  {...props.getSupportButtonProps()}
                  color="primary"
                  variant="flat"
                  fullWidth>
                  Contact Support
                </Button>
              </Card>
            )}
          </section>
        </main>
      </div>
      <Footer />
    </div>
  )
}

export { AppDetailView }
