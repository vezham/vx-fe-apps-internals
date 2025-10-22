import { Icon } from '@iconify/react'
import React from 'react'

import { AppCard } from './appCard'
import { categories } from './data'
import { App, CategoryContent } from './types'

interface ContentAreaProps {
  activeCategory: string
  activeSubcategory: string
  categoryContents: Record<string, CategoryContent>
  contentRefs: React.MutableRefObject<Record<string, HTMLDivElement | null>>
  onBackClick?: () => void
  isMobileView?: boolean
  visibleContent: string // Add prop to control which content is visible
  onAppClick: (appId: string, app: App) => void
}

// Convert to forwardRef to get a reference to the scrollable container
export const ContentArea = React.forwardRef<HTMLDivElement, ContentAreaProps>(
  (
    { categoryContents, contentRefs, onBackClick, visibleContent, onAppClick },
    ref
  ) => {
    // Add state to track which sections are expanded
    const [expandedSections, setExpandedSections] = React.useState<
      Record<string, boolean>
    >({})

    // Add state to track which subcategories should show all cards
    const [showAllForSubcategory, setShowAllForSubcategory] = React.useState<
      Record<string, boolean>
    >({})

    const getDisplayedApps = React.useCallback(
      (apps: any[], sectionId: string, limit = 3) => {
        if (
          expandedSections[sectionId] ||
          showAllForSubcategory[sectionId] ||
          visibleContent === sectionId
        ) {
          return apps
        }
        return apps.slice(0, limit)
      },
      [expandedSections, showAllForSubcategory, visibleContent]
    )

    // When visibleContent changes, update the showAllForSubcategory state
    React.useEffect(() => {
      if (visibleContent && visibleContent !== 'all-collections') {
        setShowAllForSubcategory(prev => ({
          ...prev,
          [visibleContent]: true
        }))
      }
    }, [visibleContent])

    // Render a single section based on the visibleContent ID
    const renderSingleSection = (contentId: string) => {
      const content = categoryContents[contentId]

      return (
        <div
          id={contentId}
          ref={el => (contentRefs.current[contentId] = el)}
          className="p-8">
          <div className="mb-4 flex items-center justify-between">
            <div className="flex items-center">
              <button
                onClick={onBackClick}
                className="mr-3 flex h-10 w-10 items-center justify-center rounded-full bg-black/[0.05] transition-colors hover:bg-black/[0.1] lg:hidden"
                aria-label="Show sidebar">
                <Icon icon="lucide:menu" width={20} height={20} />
              </button>
              <div>
                <h2 className="mb-1 text-xl font-bold sm:mb-2">
                  {content.title}
                </h2>
              </div>
            </div>
          </div>

          {/* Always show all apps when directly viewing a subcategory */}
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-10 lg:grid-cols-3">
            {content.apps.map(app => (
              <AppCard
                key={app.id}
                icon={app.icon}
                iconColor={app.iconColor}
                title={app.title}
                description={app.description}
                onPress={() => onAppClick(app.id, app)}
              />
            ))}
          </div>
        </div>
      )
    }

    // Render all content sections for continuous scrolling
    const renderAllContent = () => {
      return (
        <div
          className="pb-20"
          id="continuous-scroll-container"
          data-scroll-container="true">
          {/* First render the all collections section with proper ID */}
          <div
            id="all-collections"
            ref={el => (contentRefs.current['all-collections'] = el)}
            className="scroll-mt-20 p-8"
            data-section-type="header">
            <div className="mb-4 flex items-center justify-between">
              <div className="flex items-center">
                {/* Back button - always visible on mobile */}
                <button
                  onClick={onBackClick}
                  className="mr-3 flex h-10 w-10 items-center justify-center rounded-full bg-black/[0.05] transition-colors hover:bg-black/[0.1] lg:hidden"
                  aria-label="Show sidebar">
                  <Icon icon="lucide:menu" width={20} height={20} />
                </button>
                <div>
                  <h2 className="mb-1 text-xl font-bold">All Collections</h2>
                </div>
              </div>
            </div>

            {/* Then render all featured subcategories with improved scroll detection */}
            {renderFeaturedSubcategories()}

            {/* Finally render Categories sections */}
            {renderCategoriesSections()}
          </div>
        </div>
      )
    }

    // Render all featured subcategories
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

              const displayedApps = content.apps.slice(0, 3)

              return (
                <div
                  key={subcategory.id}
                  id={subcategory.id} // Ensure ID matches subcategory.id exactly
                  ref={el => (contentRefs.current[subcategory.id] = el)}
                  className="min-h-[auto] scroll-mt-20 pb-5">
                  <div className="mb-4 flex items-center justify-between">
                    <div>
                      <h2 className="mb-1 flex text-xl font-bold">
                        {content.title}{' '}
                        {content.apps.length > 3 && (
                          <button
                            onClick={() => {
                              if (window.handleSubcategoryClick) {
                                window.handleSubcategoryClick(subcategory.id)
                              }
                            }}
                            className="text-foreground-500 hover:text-foreground flex items-center text-sm font-medium transition-all duration-200">
                            <Icon
                              icon="lucide:chevron-right"
                              className="mt-1 ml-2"
                              width={20}
                            />
                          </button>
                        )}
                      </h2>
                    </div>

                    {/* {content.apps.length > 3 && (
                      <button
                        onClick={() => {
                          // Navigate to the specific subcategory view
                          if (window.handleSubcategoryClick) {
                            window.handleSubcategoryClick(subcategory.id)
                          }
                        }}
                        className="flex items-center text-sm font-medium text-blue-600 transition-all duration-200 hover:text-blue-800 hover:underline sm:text-base">
                        See all
                        <Icon
                          icon="lucide:arrow-right"
                          className="ml-1"
                          width={16}
                        />
                      </button>
                    )} */}
                  </div>

                  <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-10 md:pb-0 lg:grid-cols-3">
                    {displayedApps.map(app => (
                      <AppCard
                        key={app.id}
                        icon={app.icon}
                        iconColor={app.iconColor}
                        title={app.title}
                        description={app.description}
                        onPress={() => onAppClick(app.id, app)}
                      />
                    ))}
                  </div>
                </div>
              )
            })}
        </>
      )
    }

    // Render all Categories sections
    const renderCategoriesSections = () => {
      const categoriesCategory = categories.find(cat => cat.id === 'categories')
      const categoriesSubcategories = categoriesCategory?.subcategories || []

      return (
        <>
          {/* Then render each subcategory */}
          {categoriesSubcategories.map(subcategory => {
            const content = categoryContents[subcategory.id]
            if (!content) return null

            const displayedApps = content.apps.slice(0, 3)

            return (
              <div
                key={subcategory.id}
                id={subcategory.id}
                ref={el => (contentRefs.current[subcategory.id] = el)}
                className="min-h-[auto] scroll-mt-20 pb-5">
                <div className="mb-4 flex items-center justify-between">
                  <div>
                    <h2 className="mb-1 flex items-center text-xl font-bold">
                      {content.title}{' '}
                      {content.apps.length > 3 && (
                        <button
                          onClick={() => {
                            // MODIFIED: Instead of toggling expansion, navigate to the specific subcategory view
                            if (window.handleSubcategoryClick) {
                              window.handleSubcategoryClick(subcategory.id)
                            }
                          }}
                          className="text-foreground-500 hover:text-foreground flex items-center text-sm font-medium transition-all duration-200">
                          <Icon
                            icon="lucide:chevron-right"
                            className="mt-1 ml-2"
                            width={20}
                          />
                        </button>
                      )}
                    </h2>
                  </div>

                  {/* {content.apps.length > 3 && (
                    <button
                      onClick={() => {
                        // MODIFIED: Instead of toggling expansion, navigate to the specific subcategory view
                        if (window.handleSubcategoryClick) {
                          window.handleSubcategoryClick(subcategory.id)
                        }
                      }}
                      className="flex items-center text-sm font-medium text-blue-600 transition-all duration-200 hover:text-blue-800 hover:underline sm:text-base">
                      See all
                      <Icon
                        icon="lucide:arrow-right"
                        className="ml-1"
                        width={16}
                      />
                    </button>
                  )} */}
                </div>

                <div className="grid grid-cols-1 gap-6 pb-5 md:grid-cols-2 md:gap-10 md:pb-0 lg:grid-cols-3">
                  {displayedApps.map(app => (
                    <AppCard
                      key={app.id}
                      icon={app.icon}
                      iconColor={app.iconColor}
                      title={app.title}
                      description={app.description}
                      onPress={() => onAppClick(app.id, app)}
                    />
                  ))}
                </div>
              </div>
            )
          })}
        </>
      )
    }

    // Modify the renderContent function to include the continuous scrolling option
    const renderContent = React.useCallback(() => {
      // If visibleContent is "all-collections", render all content for continuous scrolling
      if (visibleContent === 'all-collections') {
        return renderAllContent()
      }

      return renderSingleSection(visibleContent)
    }, [visibleContent, renderAllContent, renderSingleSection])

    return (
      <div
        ref={ref}
        className="bg-background text-foreground min-h-screen w-full pb-20">
        {renderContent()}
      </div>
    )
  }
)

ContentArea.displayName = 'ContentArea'
