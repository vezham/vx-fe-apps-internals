import { Icon } from '@iconify/react'
import React, { useEffect, useRef, useState } from 'react'

import { Button, ScrollShadow } from '@vx-oss/react'

import { AppleStyleCarousel } from '../carousel'
import { AppleStyleCarouselRef } from '../carousel/types'
import { categories } from './data'
import {
  App,
  ContentAreaProps,
  SectionWithControlsProps,
  useProps
} from './types'

export const ContentArea = React.forwardRef<HTMLDivElement, ContentAreaProps>(
  (
    { categoryContents, contentRefs, onBackClick, visibleContent, onAppClick },
    ref
  ) => {
    const props = useProps({ ref })
    const [showAllForSubcategory, setShowAllForSubcategory] = useState<
      Record<string, boolean>
    >({})

    useEffect(() => {
      if (visibleContent && visibleContent !== 'all-collections') {
        setShowAllForSubcategory(prev => ({ ...prev, [visibleContent]: true }))
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
        description: app.description,
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
          id={id}
          ref={el => {
            contentRefs.current[id] = el
          }}
          {...props.getSectionProps()}>
          <div {...props.getSectionHeaderProps()}>
            <h2 {...props.getSectionTitleProps()}>{title}</h2>
            <div {...props.getControlsProps()}>
              <button
                {...props.getControlBtnProps()}
                onClick={() => carouselRef.current?.scrollLeft()}
                disabled={!canScrollLeft}
                className={
                  canScrollLeft
                    ? props.getControlBtnProps().className
                    : props.getControlBtnDisabledProps().className
                }>
                <Icon icon="lucide:chevron-left" />
              </button>

              <button
                {...props.getControlBtnProps()}
                onClick={() => carouselRef.current?.scrollRight()}
                disabled={!canScrollRight}
                className={
                  canScrollRight
                    ? props.getControlBtnProps().className
                    : props.getControlBtnDisabledProps().className
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

      return featuredSubs.map(sub => {
        const content = categoryContents[sub.id]
        if (!content || !content.apps || content.apps.length === 0) return null

        return (
          <SectionWithControls
            key={sub.id}
            id={sub.id}
            title={content.title || sub.name}
            apps={content.apps}
            contentRefs={contentRefs}
            onAppClick={onAppClick}
          />
        )
      })
    }

    const renderCategoriesSections = () => {
      const catCategory = categories.find(cat => cat.id === 'categories')
      const subs = catCategory?.subcategories || []

      return subs.map(sub => {
        const content = categoryContents[sub.id]
        if (!content || !content.apps || content.apps.length === 0) return null

        return (
          <SectionWithControls
            key={sub.id}
            id={sub.id}
            title={content.title || sub.name}
            apps={content.apps}
            contentRefs={contentRefs}
            onAppClick={onAppClick}
          />
        )
      })
    }

    // Render all sections in the correct order
    const renderAllSections = () => {
      return (
        <>
          <section
            id="all-collections"
            ref={el => {
              contentRefs.current['all-collections'] = el
            }}>
            <div {...props.getAllCollectionsHeaderProps()}>
              <Button
                isIconOnly
                variant="light"
                {...props.getBackButtonProps()}
                onClick={onBackClick}>
                <Icon icon="lucide:menu" width={20} height={20} />
              </Button>
              <h2 {...props.getSectionTitleProps()}>All Collections</h2>
            </div>
          </section>

          {/* Featured subcategories */}
          {renderFeaturedSubcategories()}

          {/* Categories sections */}
          {renderCategoriesSections()}
        </>
      )
    }

    return (
      <div ref={ref} {...props.getContentWrapperProps()}>
        <div {...props.getContinuousContainerProps()}>
          {renderAllSections()}
        </div>
      </div>
    )
  }
)

ContentArea.displayName = 'ContentArea'
