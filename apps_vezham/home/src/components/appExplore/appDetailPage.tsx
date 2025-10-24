import { Icon } from '@iconify/react'
import { useParams, useRouter } from '@tanstack/react-router'
import React from 'react'

import { Button, Card } from '@vx-oss/react'

import { Footer } from '../../pages/footer'
import { Header } from '../../pages/header'
import { cn } from '../../utils/cn'
import { categoryContents } from './data'
import { styles } from './variant'

const AppDetailPage: React.FC = () => {
  const router = useRouter()
  const params = useParams({ from: '/apps/explore/$exploreId' })
  const appId = params.exploreId

  const app = Object.values(categoryContents)
    .flatMap(category => category.apps)
    .find(a => a.id === appId)

  if (!app) {
    return (
      <div className={styles.notFoundContainer}>
        <div className={styles.notFoundText}>
          <h2 className="text-2xl font-bold">App not found</h2>
          <p className="text-default-500 mt-2">
            The requested app could not be found.
          </p>
          <Button
            color="primary"
            variant="flat"
            className={styles.backButton}
            onPress={() => router.navigate({ to: '/apps/explore' })}
            startContent={<Icon icon="lucide:arrow-left" width={16} />}>
            Back to Apps
          </Button>
        </div>
      </div>
    )
  }

  const { features = [], pricing = [], metrics = [], support = [] } = app

  return (
    <div className={styles.page}>
      <Header />

      <div className="pt-20">
        {/* Header */}
        <header className={styles.headerSection}>
          <div className={styles.headerInner}>
            <Button
              color="default"
              variant="light"
              onPress={() => router.navigate({ to: '/apps/explore' })}
              startContent={<Icon icon="lucide:arrow-left" width={16} />}>
              Back to Apps
            </Button>
            <div className="flex items-center">
              <Icon
                icon={app.icon}
                className={app.iconColor}
                width={32}
                height={32}
              />
              <span className={styles.headerTitle}>{app.title}</span>
            </div>
          </div>
        </header>

        {/* Main content */}
        <main className={styles.mainContainer}>
          {/* Overview */}
          <section className={styles.overviewSection}>
            <h1 className={styles.overviewTitle}>{app.title}</h1>
            <p className={styles.overviewDescription}>
              {app.detailedDescription || app.description}
            </p>
          </section>

          {/* Image + Quick Features */}
          <section className={styles.imageSection}>
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
              <p className={styles.overviewDescription}>
                {app.detailedDescription ||
                  `${app.title} helps businesses streamline workflows and improve productivity.`}
              </p>
              <ul className={styles.featureList}>
                {features.slice(0, 3).map((feature, i) => (
                  <li key={i} className={styles.featureItem}>
                    <div className={styles.featureIconWrapper}>
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

          {/* Features Section */}
          {features.length > 0 && (
            <section className={styles.featuresSection}>
              <h2 className={styles.featureTitle}>Our Features</h2>
              <div className={styles.featuresGrid}>
                {features.map((feature, index) => (
                  <div
                    key={index}
                    className={cn(
                      styles.featureCard,
                      (index === 0 || index === 4) && styles.featureCardLeft,
                      index < 4 && styles.featureCardBottom
                    )}>
                    <div className={styles.featureIcon}>
                      <Icon icon={feature.icon} width={24} height={24} />
                    </div>
                    <div className={styles.featureTitleWrapper}>
                      <div className={styles.featureTitleHighlight} />
                      <span className={styles.featureTitle}>
                        {feature.title}
                      </span>
                    </div>
                    <p className={styles.featureDescription}>
                      {feature.description}
                    </p>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Pricing / Results / Support */}
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
                <h3 className="mb-4 text-xl font-bold">Results</h3>
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
                <h3 className="mb-4 text-xl font-bold">Support</h3>
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

export { AppDetailPage }
