import { Icon } from '@iconify/react'
import { useParams, useRouter } from '@tanstack/react-router'
import React from 'react'

import { Accordion, AccordionItem, Button, Card, Image } from '@vx-oss/react'

import { Footer } from '../../pages/footer'
import { Header } from '../../pages/header'
import { cn } from '../../utils/cn'
import { categoryContents } from '../appExplore-1/data'
import { AppDetail } from './types'
import { styles } from './variant'

const AppDetailView: React.FC = () => {
  const router = useRouter()
  const params = useParams({ from: '/apps/explore-1/$appExploreId' })
  const appId = params.appExploreId

  const app: AppDetail | null =
    Object.values(categoryContents)
      .flatMap(category => category.apps)
      .find(a => a.id === appId) || null

  if (!app) {
    return (
      <div className={styles.notFound.wrapper}>
        <div className={styles.notFound.inner}>
          <h2 className={styles.notFound.title}>App not found</h2>
          <p className={styles.notFound.desc}>
            The requested app could not be found.
          </p>
          <Button
            color="primary"
            variant="flat"
            className={styles.notFound.button}
            onPress={() => router.navigate({ to: '/apps/explore-1' })}
            startContent={<Icon icon="lucide:arrow-left" width={16} />}>
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
    <div className={styles.wrapper}>
      <Header />
      <div className={styles.container}>
        {/* Header */}
        <header className={styles.header.base}>
          <div className={styles.header.inner}>
            <Button
              color="default"
              variant="light"
              onPress={() => router.navigate({ to: '/apps/explore-1' })}
              startContent={<Icon icon="lucide:arrow-left" width={16} />}>
              Back to Apps
            </Button>
            <div className={styles.header.titleWrap}>
              <Image
                src={app.icon}
                className={app.iconColor}
                width={32}
                height={32}
              />
              <span className={styles.header.title}>{app.title}</span>
            </div>
          </div>
        </header>

        {/* Main */}
        <main className={styles.main}>
          {/* Hero */}
          <section className={styles.hero.section}>
            <h1 className={styles.hero.title}>{app.title}</h1>
            <p className={styles.hero.desc}>
              {app.detailedDescription || app.description}
            </p>
          </section>

          {/* Overview */}
          <section className={styles.overview.section}>
            <div className={styles.overview.imageWrap}>
              <Image
                src={
                  app.image ||
                  `https://img.heroui.chat/image/dashboard?w=600&h=400&u=${app.id}`
                }
                alt={`${app.title} overview`}
                className={styles.overview.image}
              />
            </div>
            <div className={styles.overview.content}>
              <h2 className={styles.overview.heading}>Our Obstacles</h2>
              <Accordion
                variant="splitted"
                className={styles.overview.accordion}>
                {painPoints.map((point, index) => (
                  <AccordionItem
                    key={index}
                    aria-label={point.title}
                    title={point.title}
                    startContent={<div>0{index + 1}</div>}>
                    <p>{point.description}</p>
                  </AccordionItem>
                ))}
              </Accordion>

              <h2 className={styles.overview.heading}>Features List</h2>
              <ul className={styles.overview.featureList}>
                {features.slice(0, 3).map((feature, i) => (
                  <li key={i} className={styles.overview.featureItem}>
                    <div className={styles.overview.featureIcon}>
                      <Icon icon={feature.icon} width={18} height={18} />
                    </div>
                    <span>{feature.title}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* Features */}
          <h2 className={styles.features.title}>Our Features</h2>
          <section className={styles.features.grid}>
            {features.map((feature, index) => (
              <div
                key={index}
                className={cn(
                  styles.features.card,
                  (index === 0 || index === 4) &&
                    'lg:border-l dark:border-neutral-800',
                  index < 4 && 'lg:border-b dark:border-neutral-800'
                )}>
                <div
                  className={
                    index < 4
                      ? styles.features.gradientTop
                      : styles.features.gradientBottom
                  }
                />
                <div className={styles.features.icon}>
                  <Icon icon={feature.icon} width={24} height={24} />
                </div>
                <div className={styles.features.titleWrap}>
                  <div className={styles.features.sideBar} />
                  <span className={styles.features.head}>{feature.title}</span>
                </div>
                <p className={styles.features.desc}>{feature.description}</p>
              </div>
            ))}
          </section>

          <section className={styles.cardsGrid}>
            {/* Pricing */}
            {pricing.length > 0 && (
              <Card className={styles.cardBase}>
                <h3 className={styles.plan}>Pricing</h3>
                <div className="space-y-4">
                  {pricing.map((plan, i) => (
                    <div
                      key={i}
                      className={cn(
                        styles.pricingCard,
                        plan.isPopular && styles.pricingPopular
                      )}>
                      {plan.isPopular && (
                        <div className={styles.pricingLabel}>MOST POPULAR</div>
                      )}
                      <div className={styles.pricingName}>{plan.name}</div>
                      <div className="mb-3">
                        <span className={styles.pricingValue}>
                          {plan.price}
                        </span>
                        <span className={styles.pricingPeriod}>
                          {' '}
                          {plan.period}
                        </span>
                      </div>
                      <ul className="space-y-2 text-sm">
                        {plan.features.map((f, j) => (
                          <li key={j} className={styles.pricingFeature}>
                            <Icon
                              icon="lucide:check"
                              className={styles.pricingFeatureIcon}
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
              <Card className={styles.cardBase}>
                <h3 className={styles.resultsTitle}>Results</h3>
                <div className={styles.resultsWrapper}>
                  {metrics.map((result, i) => (
                    <div key={i} className={styles.resultsItem}>
                      <div className={styles.resultCircle}>
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
                            strokeDasharray={`${(2 * Math.PI * 16 * result.value) / 100} ${2 * Math.PI * 16}`}
                            transform="rotate(-90 18 18)"
                          />
                          <text
                            x="18"
                            y="18"
                            dominantBaseline="middle"
                            textAnchor="middle"
                            className={styles.resultText}>
                            {result.value}%
                          </text>
                        </svg>
                      </div>
                      <div>
                        <h4 className={styles.supportTitle}>{result.title}</h4>
                        <p className={styles.supportDescription}>
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
              <Card className={styles.cardBase}>
                <h3 className={styles.supportHead}>Support</h3>
                <div className={styles.supportWrapper}>
                  {support.map((option, i) => (
                    <div key={i} className={styles.supportItem}>
                      <div className={styles.supportIconWrapper}>
                        <Icon
                          icon={option.icon}
                          className="text-primary"
                          width={20}
                          height={20}
                        />
                      </div>
                      <div>
                        <h4 className={styles.supportTitle}>{option.title}</h4>
                        <p className={styles.supportDescription}>
                          {option.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
                <Button
                  color="primary"
                  variant="flat"
                  className={styles.supportButton}
                  fullWidth
                  endContent={<Icon icon="lucide:arrow-right" width={16} />}>
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
