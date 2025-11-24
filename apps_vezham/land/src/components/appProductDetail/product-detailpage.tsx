// product-detail-page.tsx
import { Icon } from '@iconify/react'
import { useParams, useRouter } from '@tanstack/react-router'
import React from 'react'

import { Button, Card } from '@vx-oss/react'

import { usePersonalize } from '../../store/useHomeSection'
import { cn } from '../../utils/cn'
import { ProductDetailProps, useProps } from './types'

const ProductDetailPage: React.FC<ProductDetailProps> = () => {
  const { data: personal } = usePersonalize.list({})
  const router = useRouter()

  const { productId } = useParams({ from: '/vezham/products/$productId' })

  const product = React.useMemo(() => {
    if (!personal?.navItems) {
      console.log('No personal data found')
      return null
    }

    const allProductsItem = personal.navItems.find(
      item => item.key === 'allproducts'
    )

    if (!allProductsItem?.subItems) {
      console.log('No allproducts item or subItems found')
      return null
    }

    console.log('Looking for productId:', productId)

    for (const section of allProductsItem.subItems) {
      console.log('Searching in section:', section.title)
      for (const item of section.Items) {
        const itemProductId = item.name.toLowerCase().replace(/\s+/g, '-')
        console.log(
          'Checking item:',
          item.name,
          'ID:',
          itemProductId,
          'matches:',
          itemProductId === productId
        )

        if (itemProductId === productId) {
          console.log('Found matching item:', item.name)
          if (item.detailedItems?.[0]) {
            console.log('Item has detailedItems')
            return {
              ...item.detailedItems[0],
              id: itemProductId,
              title: item.name,
              description: item.description,
              icon: item.icon,
              link: item.link
            }
          } else {
            console.log('Item has NO detailedItems')
          }
        }
      }
    }

    console.log('No product found with ID:', productId)
    return null
  }, [personal, productId])

  const props = useProps({})

  if (!product) {
    return (
      <div {...props.getBaseProps()}>
        <div className={cn('flex min-h-screen items-center justify-center')}>
          <div className="text-center">
            <h2 className="text-2xl font-bold">Product Details not found</h2>
            <p className="text-default-500 mt-2">
              The requested product "{productId}" details could not be found.
            </p>
            <div className="mt-4 space-y-2">
              <Button
                color="primary"
                variant="flat"
                onPress={() => router.navigate({ to: '/vezham/products' })}
                startContent={<Icon icon="lucide:arrow-left" width={16} />}>
                Back to Products
              </Button>
            </div>
          </div>
        </div>
      </div>
    )
  }

  const { features = [], pricing = [], metrics = [], support = [] } = product

  return (
    <div {...props.getBaseProps()}>
      <div {...props.getHeaderInnerProps()}>
        <Button
          color="default"
          variant="light"
          size="sm"
          onPress={() => router.navigate({ to: '/vezham/products' })}
          startContent={<Icon icon="lucide:arrow-left" width={16} />}>
          Back to Products
        </Button>
        <div className="flex items-center">
          <Icon
            icon={product.icon}
            className="text-primary"
            width={20}
            height={20}
          />
          <span {...props.getHeaderTitleProps()}>{product.title}</span>
        </div>
      </div>

      <main {...props.getMainProps()}>
        {/* Overview Section */}
        <section {...props.getSectionProps()}>
          <h1 {...props.getOverviewTitleProps()}>{product.title}</h1>
          <p {...props.getOverviewDescProps()}>
            {product.detailedDescription || product.description}
          </p>
        </section>

        {/* Image + Quick Features */}
        <section {...props.getImageSectionProps()}>
          <div>
            <img
              src={product.image}
              alt={`${product.title} overview`}
              className="h-auto w-full rounded-lg object-cover shadow-md"
            />
          </div>
          <div>
            <p {...props.getOverviewDescProps()}>
              {product.detailedDescription || product.description}
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

        {/* Pricing / Metrics / Support Grid */}
        <section {...props.getCardsGridProps()}>
          {/* Pricing */}
          {pricing.length > 0 && (
            <Card {...props.getCardBaseProps()}>
              <h3 className="px-4 pt-4 text-xl font-bold">Pricing</h3>
              <div className="space-y-4 p-4">
                {pricing.map((plan, i) => (
                  <div
                    key={i}
                    className={cn(
                      'rounded-lg border p-4',
                      plan.isPopular
                        ? 'border-primary bg-primary/5'
                        : 'border-default-200'
                    )}>
                    {plan.isPopular && (
                      <div className="text-primary mb-2 text-xs font-medium">
                        MOST POPULAR
                      </div>
                    )}
                    <div className="mb-2 text-lg font-bold">{plan.name}</div>
                    <div className="mb-3">
                      <span className="text-2xl font-bold">{plan.price}</span>
                      <span className="text-default-500 ml-1">
                        {plan.period}
                      </span>
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
                    <Button
                      color={plan.isPopular ? 'primary' : 'default'}
                      variant={plan.isPopular ? 'solid' : 'flat'}
                      fullWidth
                      className="mt-4">
                      Get Started
                    </Button>
                  </div>
                ))}
              </div>
            </Card>
          )}

          {/* Metrics */}
          {metrics.length > 0 && (
            <Card {...props.getCardBaseProps()}>
              <h3 {...props.getResultsWrapperProps()}>Results</h3>
              <div className="space-y-6 p-4">
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
                      <p {...props.getSupportDescProps()}>
                        {metric.description}
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
              <h3 {...props.getSupportWrapperProps()}>Support</h3>
              <div className="space-y-4 p-4">
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
                      <p {...props.getSupportDescProps()}>
                        {option.description}
                      </p>
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
              </div>
            </Card>
          )}
        </section>
      </main>
    </div>
  )
}

export { ProductDetailPage }
