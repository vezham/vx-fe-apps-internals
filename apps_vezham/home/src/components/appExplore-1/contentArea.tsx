import { Icon } from '@iconify/react'
import React, { useEffect, useRef, useState } from 'react'

import { ScrollShadow } from '@vx-oss/react'

import { AppleStyleCarousel } from '../carousel'
import { AppleStyleCarouselRef } from '../carousel/types'
import { categories } from './data'
import { App, CategoryContent } from './types'

interface ContentAreaProps {
  activeCategory: string
  activeSubcategory: string
  categoryContents: Record<string, CategoryContent>
  contentRefs: React.MutableRefObject<Record<string, HTMLDivElement | null>>
  onBackClick?: () => void
  isMobileView?: boolean
  visibleContent: string
  onAppClick: (appId: string, app: App) => void
}

export const ContentArea = React.forwardRef<HTMLDivElement, ContentAreaProps>(
  (
    { categoryContents, contentRefs, onBackClick, visibleContent, onAppClick },
    ref
  ) => {
    const [showAllForSubcategory, setShowAllForSubcategory] = useState<
      Record<string, boolean>
    >({})

    useEffect(() => {
      if (visibleContent && visibleContent !== 'all-collections') {
        setShowAllForSubcategory(prev => ({
          ...prev,
          [visibleContent]: true
        }))
      }
    }, [visibleContent])

    // Convert apps to carousel items
    const toCarouselItems = (apps: App[]) =>
      apps.map(app => ({
        id: app.id,
        category: app.category ?? '',
        title: app.title,
        icon: app.icon,
        color: app.iconColor,
        image: app.image,
        description: app.description || '',
        app,
        onPress: () => onAppClick(app.id, app)
      }))

    const SectionWithControls = ({
      id,
      title,
      apps
    }: {
      id: string
      title: string
      apps: App[]
    }) => {
      const carouselRef = useRef<AppleStyleCarouselRef>(null)
      const [canScrollLeft, setCanScrollLeft] = useState(false)
      const [canScrollRight, setCanScrollRight] = useState(true)

      const updateScrollState = () => {
        if (carouselRef.current) {
          setCanScrollLeft(carouselRef.current.canScrollLeft)
          setCanScrollRight(carouselRef.current.canScrollRight)
        }
      }

      useEffect(() => {
        const interval = setInterval(updateScrollState, 200)
        return () => clearInterval(interval)
      }, [])

      return (
        <div
          key={id}
          id={id}
          ref={el => (contentRefs.current[id] = el)}
          className="scroll-mt-20 py-2">
          <div className="mb-5 flex items-center justify-between">
            <h2
              className="text-[28px] md:text-[40px] lg:text-[48px]"
              style={{ fontWeight: 600 }}>
              {title}
            </h2>

            <div className="flex gap-3">
              <button
                onClick={() => carouselRef.current?.scrollLeft()}
                disabled={!canScrollLeft}
                className={`flex h-9 w-9 items-center justify-center rounded-full ${
                  canScrollLeft
                    ? 'dark:bg-content1 bg-gray-200 transition-colors hover:bg-gray-300'
                    : 'cursor-not-allowed opacity-40'
                }`}>
                <Icon icon="lucide:chevron-left" />
              </button>
              <button
                onClick={() => carouselRef.current?.scrollRight()}
                disabled={!canScrollRight}
                className={`flex h-9 w-9 items-center justify-center rounded-full ${
                  canScrollRight
                    ? 'dark:bg-content1 bg-gray-200 transition-colors hover:bg-gray-300'
                    : 'cursor-not-allowed opacity-40'
                }`}>
                <Icon icon="lucide:chevron-right" />
              </button>
            </div>
          </div>

          {/* Carousel */}
          <ScrollShadow orientation="vertical">
            <AppleStyleCarousel
              ref={carouselRef}
              items={toCarouselItems(apps)}
              navigateBasePath="apps/explore-1"
            />
          </ScrollShadow>
        </div>
      )
    }

    const renderFeaturedSubcategories = () => {
      const featuredCategory = categories.find(cat => cat.id === 'featured')
      const featuredSubs = featuredCategory?.subcategories || []

      return (
        <>
          {featuredSubs
            .filter(sub => sub.id !== 'all-collections')
            .map(sub => {
              const content = categoryContents[sub.id]
              if (!content) return null
              return (
                <SectionWithControls
                  key={sub.id}
                  id={sub.id}
                  title={content.title}
                  apps={content.apps}
                />
              )
            })}
        </>
      )
    }

    const renderCategoriesSections = () => {
      const catCategory = categories.find(cat => cat.id === 'categories')
      const subs = catCategory?.subcategories || []

      return (
        <>
          {subs.map(sub => {
            const content = categoryContents[sub.id]
            if (!content) return null
            return (
              <SectionWithControls
                key={sub.id}
                id={sub.id}
                title={content.title}
                apps={content.apps}
              />
            )
          })}
        </>
      )
    }

    const renderAllContent = () => (
      <div id="continuous-scroll-container" className="space-y-12">
        <div
          id="all-collections"
          ref={el => (contentRefs.current['all-collections'] = el)}
          className="p-4 lg:p-6">
          <div className="mb-4 flex items-center justify-between">
            <div className="flex items-center">
              <button
                onClick={onBackClick}
                className="mr-3 flex h-10 w-10 items-center justify-center rounded-full bg-black/[0.05] transition-colors hover:bg-black/[0.1] lg:hidden"
                aria-label="Show sidebar">
                <Icon icon="lucide:menu" width={20} height={20} />
              </button>
              <h2
                className="text-[28px] md:text-[40px] lg:text-[48px]"
                style={{ fontWeight: 600 }}>
                All Collections
              </h2>
            </div>
          </div>

          {renderFeaturedSubcategories()}
          {renderCategoriesSections()}
        </div>
      </div>
    )

    return (
      <div
        ref={ref}
        className="bg-background text-foreground min-h-screen w-full">
        {renderAllContent()}
      </div>
    )
  }
)

ContentArea.displayName = 'ContentArea'
