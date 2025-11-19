import { Icon } from '@iconify/react'
import React from 'react'

import { useFeatures } from '../../store/useFeatures'
import { AppCard } from '../card'
import { ContentAreaProps, useProps } from './types'

export const ContentArea = React.forwardRef<HTMLDivElement, ContentAreaProps>(
  ({ contentRefs, onBackClick, visibleContent, onAppClick }, ref) => {
    const props = useProps({})
    const [showAllForSubcategory, setShowAllForSubcategory] = React.useState<
      Record<string, boolean>
    >({})

    const { data: categories = [] } = useFeatures.sidebarlist({})
    const { data: categoryContents = {} } = useFeatures.contentlist({})

    React.useEffect(() => {
      if (visibleContent && visibleContent !== 'all-features') {
        setShowAllForSubcategory(prev => ({ ...prev, [visibleContent]: true }))
      }
    }, [visibleContent])

    const renderSingleSection = (contentId: string) => {
      const content = categoryContents[contentId]

      // Add safety check - if content doesn't exist, show fallback
      if (!content) {
        console.warn(`Content not found for: ${contentId}`)
        return (
          <div
            id={contentId}
            ref={el => {
              contentRefs.current[contentId] = el
            }}
            {...props.getSectionProps()}>
            <div {...props.getHeaderProps()}>
              <div {...props.getHeaderMenuProps()}>
                <button
                  onClick={onBackClick}
                  {...props.getSeeAllSingleButtonProps()}
                  aria-label="Show sidebar">
                  <Icon icon="lucide:menu" width={20} height={20} />
                </button>
                <div>
                  <h2 {...props.getTitleProps()}>Content Not Found</h2>
                </div>
              </div>
            </div>
            <div {...props.getGridProps()}>
              <p>No content available for this section.</p>
            </div>
          </div>
        )
      }

      return (
        <div
          id={contentId}
          ref={el => {
            contentRefs.current[contentId] = el
          }}
          {...props.getSectionProps()}>
          <div {...props.getHeaderProps()}>
            <div {...props.getHeaderMenuProps()}>
              <button
                onClick={onBackClick}
                {...props.getSeeAllSingleButtonProps()}
                aria-label="Show sidebar">
                <Icon icon="lucide:menu" width={20} height={20} />
              </button>
              <div>
                <h2 {...props.getTitleProps()}>{content.title}</h2>
              </div>
            </div>
          </div>

          <div {...props.getGridProps()}>
            {content.apps && content.apps.length > 0 ? (
              content.apps.map(app => (
                <AppCard
                  key={app.id}
                  icon={app.icon}
                  iconColor={app.iconColor}
                  title={app.title}
                  description={app.description}
                  onPress={() => onAppClick(app.id, app)}
                />
              ))
            ) : (
              <p>No apps available in this category.</p>
            )}
          </div>
        </div>
      )
    }

    const renderAllContent = () => (
      <div id="continuous-scroll-container">
        <div
          id="all-features"
          ref={el => {
            contentRefs.current['all-features'] = el
          }}
          {...props.getScrollSectionProps()}>
          <div {...props.getHeaderProps()}>
            <div {...props.getSidebarWrapperProps()}>
              <button
                onClick={onBackClick}
                {...props.getSidebarButtonProps()}
                aria-label="Show sidebar">
                <Icon icon="lucide:menu" width={20} height={20} />
              </button>
              <div>
                <h2 {...props.getTitleProps()}>All Features</h2>
              </div>
            </div>
          </div>

          {renderFeaturedSubcategories()}
        </div>
      </div>
    )

    const renderFeaturedSubcategories = () => {
      const featuredCategory = categories.find(cat => cat.id === 'features')
      const featuredSubcategories = featuredCategory?.subcategories ?? []

      return (
        <>
          {featuredSubcategories
            .filter(sub => sub.id !== 'all-features')
            .map(subcategory => {
              const content = categoryContents[subcategory.id]

              // Add safety check for content
              if (!content) {
                console.warn(`Subcategory content not found: ${subcategory.id}`)
                return null
              }

              const displayedApps = content.apps ? content.apps.slice(0, 3) : []

              return (
                <div
                  key={subcategory.id}
                  id={subcategory.id}
                  ref={el => {
                    contentRefs.current[subcategory.id] = el
                  }}
                  {...props.getCategoryWrapperProps()}>
                  <div {...props.getHeaderProps()}>
                    <div {...props.getHeaderSectionProps()}>
                      <h2 {...props.getTitleProps()}>
                        {content.title}
                        {content.apps && content.apps.length > 3 && (
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
                    {displayedApps.length > 0 ? (
                      displayedApps.map(app => (
                        <AppCard
                          key={app.id}
                          icon={app.icon}
                          iconColor={app.iconColor}
                          title={app.title}
                          description={app.description}
                          onPress={() => onAppClick(app.id, app)}
                        />
                      ))
                    ) : (
                      <p>No apps available.</p>
                    )}
                  </div>
                </div>
              )
            })}
        </>
      )
    }

    const renderContent = React.useCallback(() => {
      if (visibleContent === 'all-features') return renderAllContent()

      if (!visibleContent || !categoryContents[visibleContent]) {
        console.warn(
          `Invalid visibleContent: ${visibleContent}, falling back to all-features`
        )
        return renderAllContent()
      }

      return renderSingleSection(visibleContent)
    }, [visibleContent, categoryContents])

    return (
      <div ref={ref} {...props.getBaseProps()}>
        {renderContent()}
      </div>
    )
  }
)

ContentArea.displayName = 'ContentArea'
