import { Icon } from '@iconify/react'
import React from 'react'

import { AppCard } from '../card'
import { categories } from './data'
import { ContentAreaProps, useProps } from './types'

export const ContentArea = React.forwardRef<HTMLDivElement, ContentAreaProps>(
  (
    { categoryContents, contentRefs, onBackClick, visibleContent, onAppClick },
    ref
  ) => {
    const props = useProps({})
    const [showAllForSubcategory, setShowAllForSubcategory] = React.useState<
      Record<string, boolean>
    >({})

    React.useEffect(() => {
      if (visibleContent && visibleContent !== 'all-collections') {
        setShowAllForSubcategory(prev => ({ ...prev, [visibleContent]: true }))
      }
    }, [visibleContent])

    const renderSingleSection = (contentId: string) => {
      const content = categoryContents[contentId]
      return (
        <div
          id={contentId}
          ref={el => (contentRefs.current[contentId] = el)}
          {...props.getSectionProps()}>
          <div {...props.getHeaderProps()}>
            <div className="flex items-center">
              <button
                onClick={onBackClick}
                {...props.getSeeAllButtonProps()}
                aria-label="Show sidebar">
                <Icon icon="lucide:menu" width={20} height={20} />
              </button>
              <div>
                <h2 {...props.getTitleProps()}>{content.title}</h2>
              </div>
            </div>
          </div>

          <div {...props.getGridProps()}>
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

    const renderAllContent = () => (
      <div
        {...props.getContinuousScrollProps()}
        id="continuous-scroll-container">
        <div
          id="all-collections"
          ref={el => (contentRefs.current['all-collections'] = el)}
          {...props.getScrollSectionProps()}>
          <div {...props.getHeaderProps()}>
            <div className="mb-4 flex items-center gap-3">
              <button
                onClick={onBackClick}
                {...props.getSidebarButtonProps()}
                aria-label="Show sidebar">
                <Icon icon="lucide:menu" width={24} height={24} />
              </button>
              <div>
                <h2 {...props.getTitleProps()}>All Collections</h2>
              </div>
            </div>
          </div>

          {renderFeaturedSubcategories()}
          {renderCategoriesSections()}
        </div>
      </div>
    )

    const renderFeaturedSubcategories = () => {
      const featuredCategory = categories.find(cat => cat.id === 'featured')
      const featuredSubcategories = featuredCategory?.subcategories ?? []

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
                  id={subcategory.id}
                  ref={el => (contentRefs.current[subcategory.id] = el)}
                  {...props.getCategoryWrapperProps()}>
                  <div {...props.getHeaderProps()}>
                    <div>
                      <h2 {...props.getTitleProps()}>
                        {content.title}
                        {content.apps.length > 3 && (
                          <button
                            onClick={() =>
                              window.handleSubcategoryClick?.(subcategory.id)
                            }
                            {...props.getSeeAllButtonProps()}>
                            <Icon icon="lucide:chevron-right" width={20} />
                          </button>
                        )}
                      </h2>
                    </div>
                  </div>

                  <div {...props.getSubGridProps()}>
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

    const renderCategoriesSections = () => {
      const categoriesCategory = categories.find(cat => cat.id === 'categories')
      const categoriesSubcategories = categoriesCategory?.subcategories ?? []

      return (
        <>
          {categoriesSubcategories.map(subcategory => {
            const content = categoryContents[subcategory.id]
            if (!content) return null
            const displayedApps = content.apps.slice(0, 3)
            return (
              <div
                key={subcategory.id}
                id={subcategory.id}
                ref={el => (contentRefs.current[subcategory.id] = el)}
                {...props.getCategoryWrapperProps()}>
                <div {...props.getHeaderProps()}>
                  <div>
                    <h2 {...props.getTitleProps()}>
                      {content.title}
                      {content.apps.length > 3 && (
                        <button
                          onClick={() =>
                            window.handleSubcategoryClick?.(subcategory.id)
                          }
                          {...props.getSeeAllButtonProps()}>
                          <Icon icon="lucide:chevron-right" width={20} />
                        </button>
                      )}
                    </h2>
                  </div>
                </div>

                <div {...props.getSubGridProps()}>
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

    const renderContent = React.useCallback(() => {
      if (visibleContent === 'all-collections') return renderAllContent()
      return renderSingleSection(visibleContent)
    }, [visibleContent])

    return (
      <div ref={ref} {...props.getBaseProps()}>
        {renderContent()}
      </div>
    )
  }
)

ContentArea.displayName = 'ContentArea'
