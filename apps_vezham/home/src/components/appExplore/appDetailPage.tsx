import { Icon } from '@iconify/react'
import { useParams, useRouter } from '@tanstack/react-router'
import React from 'react'

import { Button, Card } from '@vx-oss/react'

import { Footer } from '../../pages/footer'
import { Header } from '../../pages/header'
import { cn } from '../../utils/cn'
import { categoryContents } from './data'
import { AppDetailProps, useProps } from './types'

export const AppDetailPage: React.FC<AppDetailProps> = ({ appId }) => {
  const router = useRouter()
  const params = useParams({ from: '/apps/explore/$exploreId' })
  const id = appId || params.exploreId

  const app = Object.values(categoryContents)
    .flatMap(category => category.apps)
    .find(a => a.id === id)

  const props = useProps({})

  if (!app) {
    return (
      <div {...props.getBaseProps()}>
        <div className={cn('flex min-h-screen items-center justify-center')}>
          <div className="text-center">
            <h2 className="text-2xl font-bold">App not found</h2>
            <p className="text-default-500 mt-2">
              The requested app could not be found.
            </p>
            <Button
              color="primary"
              variant="flat"
              className="mt-4"
              onPress={() => router.navigate({ to: '/apps/explore' })}
              startContent={<Icon icon="lucide:arrow-left" width={16} />}>
              Back to Apps
            </Button>
          </div>
        </div>
      </div>
    )
  }

  const { features = [], pricing = [], metrics = [], support = [] } = app

  return (
    <div {...props.getBaseProps()}>
      <Header {...props.getHeaderProps()} />

      <div {...props.getHeaderInnerProps()}>
        <Button
          color="default"
          variant="light"
          size="sm"
          onPress={() => router.navigate({ to: '/apps/explore' })}
          startContent={<Icon icon="lucide:arrow-left" width={10} />}>
          Back to Apps
        </Button>
        <div className="flex items-center">
          <Icon
            icon={app.icon}
            className={app.iconColor}
            width={32}
            height={32}
          />
          <span {...props.getHeaderTitleProps()}>{app.title}</span>
        </div>
      </div>

      <main {...props.getMainProps()}>
        {/* Overview Section */}
        <section {...props.getSectionProps()}>
          <h1 {...props.getOverviewTitleProps()}>{app.title}</h1>
          <p {...props.getOverviewDescProps()}>
            {app.detailedDescription || app.description}
          </p>
        </section>

        {/* Image + Quick Features */}
        <section {...props.getImageSectionProps()}>
          <div>
            <img
              src={
                app.image ||
                `https://img.heroui.chat/image/dashboard?w=600&h=400&u=${app.id}`
              }
              alt={`${app.title} overview`}
              className="h-auto w-full rounded-lg object-cover shadow-md"
            />
          </div>
          <div>
            <p {...props.getOverviewDescProps()}>
              {app.detailedDescription ||
                `${app.title} helps businesses streamline workflows and improve productivity.`}
            </p>
            <ul {...props.getFeatureListProps()}>
              {features.slice(0, 3).map((feature, i) => (
                <li key={i} {...props.getFeatureItemProps()}>
                  <div {...props.getFeatureIconWrapperProps()}>
                    <Icon
                      icon={feature.icon}
                      className="text-primary"
                      width={18}
                      height={18}
                    />
                  </div>
                  <span>{feature.title}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

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
                  <span {...props.getFeatureTitleProps()}>{feature.title}</span>
                </div>
                <p {...props.getFeatureDescProps()}>{feature.description}</p>
              </div>
            ))}
          </section>
        )}

        {/* Pricing / Metrics / Support */}
        <section {...props.getCardsGridProps()}>
          {/* Pricing */}
          {pricing.length > 0 && (
            <Card {...props.getCardBaseProps()}>
              <h3 className="px-4 text-xl font-bold">Pricing</h3>
              <div className="space-y-4">
                {pricing.map((plan, i) => (
                  <div
                    key={i}
                    className={cn(
                      'p-4',
                      plan.isPopular && 'border-primary bg-primary/5'
                    )}>
                    {plan.isPopular && (
                      <div className="text-primary mb-2 text-xs font-medium">
                        MOST POPULAR
                      </div>
                    )}
                    <div className="mb-2 text-lg font-bold">{plan.name}</div>
                    <div className="mb-3">
                      <span className="mb-3 text-2xl font-bold">
                        {plan.price}
                      </span>
                      <span className="text-default-500"> {plan.period}</span>
                    </div>
                    <ul className="space-y-2 text-sm">
                      {plan.features.map((f, j) => (
                        <li key={j} className="flex items-center">
                          <Icon
                            icon="lucide:check"
                            className="text-success mr-2"
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

          {/* Metrics */}
          {metrics.length > 0 && (
            <Card {...props.getCardBaseProps()}>
              <h3 {...props.getResultsWrapperProps()}>Results</h3>
              {metrics.map((metric, i) => (
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
                        strokeDasharray={`${(2 * Math.PI * 16 * metric.value) / 100} ${2 * Math.PI * 16}`}
                        transform="rotate(-90 18 18)"
                      />
                      <text
                        x="18"
                        y="18"
                        dominantBaseline="middle"
                        textAnchor="middle"
                        {...props.getResultTextProps()}>
                        {metric.value}%
                      </text>
                    </svg>
                  </div>
                  <div>
                    <h4 {...props.getSupportTitleProps()}>{metric.title}</h4>
                    <p {...props.getSupportDescProps()}>{metric.description}</p>
                  </div>
                </div>
              ))}
            </Card>
          )}

          {/* Support */}
          {support.length > 0 && (
            <Card {...props.getCardBaseProps()}>
              <h3 {...props.getSupportWrapperProps()}>Support</h3>
              {support.map((option, i) => (
                <div key={i} {...props.getSupportItemProps()}>
                  <div {...props.getSupportIconWrapperProps()}>
                    <Icon
                      icon={option.icon}
                      className="text-primary"
                      width={20}
                      height={20}
                    />
                  </div>
                  <div>
                    <h4 {...props.getSupportTitleProps()}>{option.title}</h4>
                    <p {...props.getSupportDescProps()}>{option.description}</p>
                  </div>
                </div>
              ))}
              <Button
                color="primary"
                variant="flat"
                {...props.getSupportButtonProps()}
                fullWidth
                endContent={<Icon icon="lucide:arrow-right" width={16} />}>
                Contact Support
              </Button>
            </Card>
          )}
        </section>
      </main>

      <Footer />
    </div>
  )
}
