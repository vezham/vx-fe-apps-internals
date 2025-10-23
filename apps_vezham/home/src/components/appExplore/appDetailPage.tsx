import { Icon } from '@iconify/react'
import { useParams, useRouter } from '@tanstack/react-router'
import React from 'react'

import { Button, Card } from '@vx-oss/react'

import { Footer } from '../../pages/footer'
import { Header } from '../../pages/header'
import { cn } from '../../utils/cn'
import { categoryContents } from './data'

const AppDetailPage: React.FC = () => {
  const router = useRouter()
  const params = useParams({ from: '/apps/explore/$exploreId' })
  const appId = params.exploreId

  // ✅ FIX: Find the app inside all categoryContents
  const app = Object.values(categoryContents)
    .flatMap(category => category.apps)
    .find(a => a.id === appId)

  if (!app) {
    return (
      <div className="flex min-h-screen items-center justify-center">
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
    )
  }

  const features = app.features || []
  const pricingPlans = app.pricing || []
  const results = app.metrics || []
  const supportOptions = app.support || []

  return (
    <div className="bg-background text-foreground min-h-screen">
      <Header />

      {/* Header */}
      <div className="pt-20">
        <header className="border-divider bg-content1 border-b py-4">
          <div className="container mx-auto flex items-center justify-between px-4">
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
              <span className="ml-2 text-xl font-bold">{app.title}</span>
            </div>
          </div>
        </header>

        {/* Main content */}
        <main className="container mx-auto px-4 py-8">
          {/* Overview */}
          <section className="mb-12">
            <h1 className="mb-4 text-3xl font-bold">{app.title}</h1>
            <p className="text-default-600 text-lg">
              {app.detailedDescription || app.description}
            </p>
          </section>

          {/* Image + Quick Features */}
          <section className="mb-16">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
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
                <p className="text-default-600 text-lg">
                  {app.detailedDescription ||
                    `${app.title} is a comprehensive solution designed to help businesses streamline their operations and improve productivity.`}
                </p>
                <ul className="mt-6 space-y-3">
                  {features.slice(0, 3).map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <div className="bg-primary/10 mr-3 rounded-full p-1">
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
            </div>
          </section>

          {/* Features section */}
          {features.length > 0 && (
            <section className="mb-16">
              <h2 className="mb-6 text-2xl font-bold">Our Features</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
                {features.map((feature, index) => (
                  <div
                    key={index}
                    className={cn(
                      'group/feature relative flex flex-col py-10 lg:border-r dark:border-neutral-800',
                      (index === 0 || index === 4) &&
                        'lg:border-l dark:border-neutral-800',
                      index < 4 && 'lg:border-b dark:border-neutral-800'
                    )}>
                    {index < 4 ? (
                      <div className="pointer-events-none absolute inset-0 h-full w-full bg-gradient-to-t from-[#a91d44]/5 to-transparent opacity-0 transition duration-200 group-hover/feature:opacity-100 dark:from-[#df4861]/15" />
                    ) : (
                      <div className="pointer-events-none absolute inset-0 h-full w-full bg-gradient-to-b from-[#a91d44]/5 to-transparent opacity-0 transition duration-200 group-hover/feature:opacity-100 dark:from-[#df4861]/15" />
                    )}
                    <div className="relative z-10 mb-4 px-10 text-neutral-600 dark:text-neutral-400">
                      <Icon icon={feature.icon} width={24} height={24} />
                    </div>
                    <div className="relative z-10 mb-2 px-10 text-lg font-bold">
                      <div className="absolute inset-y-0 left-0 h-6 w-1 origin-center rounded-tr-full rounded-br-full bg-neutral-300 transition-all duration-200 group-hover/feature:h-8 group-hover/feature:bg-[#a91d44] dark:bg-neutral-700 dark:group-hover/feature:bg-[#df4861]" />
                      <span className="inline-block text-neutral-800 transition duration-200 group-hover/feature:translate-x-2 dark:text-neutral-100">
                        {feature.title}
                      </span>
                    </div>
                    <p className="relative z-10 max-w-xs px-10 text-sm text-neutral-600 dark:text-neutral-300">
                      {feature.description}
                    </p>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Pricing / Results / Support */}
          <section className="mb-16 grid grid-cols-1 gap-8 lg:grid-cols-3">
            {/* Pricing */}
            {pricingPlans.length > 0 && (
              <Card className="p-6">
                <h3 className="mb-4 text-xl font-bold">Pricing</h3>
                <div className="space-y-4">
                  {pricingPlans.map((plan, i) => (
                    <div
                      key={i}
                      className={`rounded-lg border p-4 ${
                        plan.isPopular
                          ? 'border-primary bg-primary/5'
                          : 'border-divider'
                      }`}>
                      {plan.isPopular && (
                        <div className="text-primary mb-2 text-xs font-medium">
                          MOST POPULAR
                        </div>
                      )}
                      <div className="mb-2 text-lg font-bold">{plan.name}</div>
                      <div className="mb-3">
                        <span className="text-2xl font-bold">{plan.price}</span>
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

            {/* Results */}
            {results.length > 0 && (
              <Card className="p-6">
                <h3 className="mb-4 text-xl font-bold">Results</h3>
                <div className="space-y-6">
                  {results.map((result, i) => (
                    <div key={i} className="flex gap-4">
                      <div className="relative h-16 w-16 flex-shrink-0">
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
                            strokeDashoffset="0"
                            transform="rotate(-90 18 18)"
                          />
                          <text
                            x="18"
                            y="18"
                            dominantBaseline="middle"
                            textAnchor="middle"
                            className="fill-foreground text-xs font-bold">
                            {result.value}%
                          </text>
                        </svg>
                      </div>
                      <div>
                        <h4 className="text-foreground mb-1 font-semibold">
                          {result.title}
                        </h4>
                        <p className="text-default-500 text-sm">
                          {result.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </Card>
            )}

            {/* Support */}
            {supportOptions.length > 0 && (
              <Card className="p-6">
                <h3 className="mb-4 text-xl font-bold">Support</h3>
                <div className="space-y-6">
                  {supportOptions.map((option, i) => (
                    <div key={i} className="flex gap-4">
                      <div className="bg-primary/10 flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-md">
                        <Icon
                          icon={option.icon}
                          className="text-primary"
                          width={20}
                          height={20}
                        />
                      </div>
                      <div>
                        <h4 className="text-foreground mb-1 font-semibold">
                          {option.title}
                        </h4>
                        <p className="text-default-500 text-sm">
                          {option.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
                <Button
                  color="primary"
                  variant="flat"
                  className="mt-6"
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
