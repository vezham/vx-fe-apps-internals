import { Icon } from '@iconify/react'
import React from 'react'

import { AppleStyleCarousel } from './apple-style-carousel'
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
  onAppClick: (appsId: string, app: App) => void
}

export const ContentArea = React.forwardRef<HTMLDivElement, ContentAreaProps>(
  (
    { categoryContents, contentRefs, onBackClick, visibleContent, onAppClick },
    ref
  ) => {
    const [expandedSections, setExpandedSections] = React.useState<
      Record<string, boolean>
    >({})
    const [showAllForSubcategory, setShowAllForSubcategory] = React.useState<
      Record<string, boolean>
    >({})

    React.useEffect(() => {
      if (visibleContent && visibleContent !== 'all-collections') {
        setShowAllForSubcategory(prev => ({
          ...prev,
          [visibleContent]: true
        }))
      }
    }, [visibleContent])

    // Modify toCarouselItems to include the app ID
    const toCarouselItems = (apps: App[]) =>
      apps.map(app => ({
        id: app.id, // Add the ID directly to the carousel item
        category: app.category ?? '',
        title: app.title,
        icon: app.icon,
        color: app.iconColor,
        image: app.image,
        description: app.description || '',
        app: app, // Pass the entire app object as well
        onPress: () => onAppClick(app.id, app)
      }))

    // 🔹 Render featured subcategories
    const renderFeaturedSubcategories = () => {
      const featuredCategory = categories.find(cat => cat.id === 'featured')
      const featuredSubcategories = featuredCategory?.subcategories || []

      return (
        <>
          {featuredSubcategories
            .filter(sub => sub.id !== 'all-collections')
            .map(subcategory => {
              const content = categoryContents[subcategory.id]
              if (!content) return null

              const displayedApps = content.apps

              return (
                <div
                  key={subcategory.id}
                  id={subcategory.id}
                  ref={el => (contentRefs.current[subcategory.id] = el)}
                  className="scroll-mt-20 pb-10">
                  <div className="flex items-center">
                    <h2 className="items-center text-[28px] font-medium md:text-[40px] lg:text-[48px]">
                      {content.title}
                    </h2>
                  </div>

                  {/* 🔸 Replace AppCard grid with Carousel */}
                  <div className="container mx-auto">
                    <AppleStyleCarousel
                      items={toCarouselItems(displayedApps)}
                    />
                  </div>
                </div>
              )
            })}
        </>
      )
    }

    // 🔹 Render category sections
    const renderCategoriesSections = () => {
      const categoriesCategory = categories.find(cat => cat.id === 'categories')
      const categoriesSubcategories = categoriesCategory?.subcategories || []

      return (
        <>
          {categoriesSubcategories.map(subcategory => {
            const content = categoryContents[subcategory.id]
            if (!content) return null

            const displayedApps = content.apps

            return (
              <div
                key={subcategory.id}
                id={subcategory.id}
                ref={el => (contentRefs.current[subcategory.id] = el)}
                className="scroll-mt-20 pb-10">
                <div className="flex items-center">
                  <h2 className="items-center text-[28px] font-medium md:text-[40px] lg:text-[48px]">
                    {content.title}
                  </h2>
                </div>

                <div className="container mx-auto">
                  <AppleStyleCarousel items={toCarouselItems(displayedApps)} />
                </div>
              </div>
            )
          })}
        </>
      )
    }

    // 🔹 Render all collections page
    const renderAllContent = () => (
      <div className="pb-20" id="continuous-scroll-container">
        <div
          id="all-collections"
          ref={el => (contentRefs.current['all-collections'] = el)}
          className="scroll-mt-20 p-4 lg:p-8"
          data-section-type="header">
          <div className="mb-4 flex items-center justify-between">
            <div className="flex items-center">
              <button
                onClick={onBackClick}
                className="mr-3 flex h-10 w-10 items-center justify-center rounded-full bg-black/[0.05] transition-colors hover:bg-black/[0.1] lg:hidden"
                aria-label="Show sidebar">
                <Icon icon="lucide:menu" width={20} height={20} />
              </button>
              <h2 className="text-[28px] font-bold md:text-[40px] lg:text-[48px]">
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
        className="bg-background text-foreground min-h-screen w-full pb-20">
        {renderAllContent()}
      </div>
    )
  }
)

ContentArea.displayName = 'ContentArea'
