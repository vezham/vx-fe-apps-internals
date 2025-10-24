import { Icon } from '@iconify/react'
import React, { useEffect, useRef, useState } from 'react'

import { ScrollShadow } from '@vx-oss/react'

import { AppleStyleCarousel } from '../carousel'
import { AppleStyleCarouselRef } from '../carousel/types'
import { categories } from './data'
import { App, ContentAreaProps, SectionWithControlsProps } from './types'
import { contentAreaStyles } from './variant'

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

    const SectionWithControls: React.FC<SectionWithControlsProps> = ({
      id,
      title,
      apps,
      contentRefs
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
          ref={el => {
            contentRefs.current[id] = el
          }}
          className={contentAreaStyles.section}>
          <div className={contentAreaStyles.sectionHeader}>
            <h2 className={contentAreaStyles.sectionTitle}>{title}</h2>
            <div className={contentAreaStyles.controls}>
              <button
                onClick={() => carouselRef.current?.scrollLeft()}
                disabled={!canScrollLeft}
                className={
                  canScrollLeft
                    ? contentAreaStyles.controlBtn
                    : contentAreaStyles.controlBtnDisabled
                }>
                <Icon icon="lucide:chevron-left" />
              </button>
              <button
                onClick={() => carouselRef.current?.scrollRight()}
                disabled={!canScrollRight}
                className={
                  canScrollRight
                    ? contentAreaStyles.controlBtn
                    : contentAreaStyles.controlBtnDisabled
                }>
                <Icon icon="lucide:chevron-right" />
              </button>
            </div>
          </div>

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
                  contentRefs={contentRefs}
                  onAppClick={onAppClick}
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
                contentRefs={contentRefs}
                onAppClick={onAppClick}
              />
            )
          })}
        </>
      )
    }

    const renderAllContent = () => (
      <div
        id="continuous-scroll-container"
        className={contentAreaStyles.continuousContainer}>
        <div
          id="all-collections"
          ref={el => {
            contentRefs.current['all-collections'] = el
          }}
          className={contentAreaStyles.allCollectionsWrapper}>
          <div className={contentAreaStyles.allCollectionsHeader}>
            <div className="flex items-center">
              <button
                onClick={onBackClick}
                className={contentAreaStyles.backButton}
                aria-label="Show sidebar">
                <Icon icon="lucide:menu" width={20} height={20} />
              </button>
              <h2 className={contentAreaStyles.sectionTitle}>
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
      <div ref={ref} className={contentAreaStyles.wrapper}>
        {renderAllContent()}
      </div>
    )
  }
)

ContentArea.displayName = 'ContentArea'
