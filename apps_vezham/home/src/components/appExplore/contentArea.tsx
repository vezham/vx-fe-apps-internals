import { Icon } from '@iconify/react'
import React from 'react'

import { AppCard } from '../card'
import { categories } from './data'
import { ContentAreaProps } from './types'
import { contentAreaVariants as styles } from './variant'

export const ContentArea = React.forwardRef<HTMLDivElement, ContentAreaProps>(
  (
    { categoryContents, contentRefs, onBackClick, visibleContent, onAppClick },
    ref
  ) => {
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

    const renderSingleSection = (contentId: string) => {
      const content = categoryContents[contentId]
      return (
        <div
          id={contentId}
          ref={el => {
            contentRefs.current[contentId] = el
          }}
          className={styles.section}>
          <div className={styles.header}>
            <div className="flex items-center">
              <button
                onClick={onBackClick}
                className={styles.backButton}
                aria-label="Show sidebar">
                <Icon icon="lucide:menu" width={20} height={20} />
              </button>
              <div>
                <h2 className={styles.title}>{content.title}</h2>
              </div>
            </div>
          </div>

          <div className={styles.grid}>
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
      <div className={styles.continuousScroll} id="continuous-scroll-container">
        <div
          id="all-collections"
          ref={el => {
            contentRefs.current['all-collections'] = el
          }}
          className={styles.scrollSection}
          data-section-type="header">
          <div className={styles.header}>
            <div className="flex items-center">
              <button
                onClick={onBackClick}
                className={styles.backButton}
                aria-label="Show sidebar">
                <Icon icon="lucide:menu" width={20} height={20} />
              </button>
              <div>
                <h2 className={styles.title}>All Collections</h2>
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
                  ref={el => {
                    contentRefs.current[subcategory.id] = el
                  }}
                  className={styles.categoryWrapper}>
                  <div className={styles.header}>
                    <div>
                      <h2 className="mb-1 flex text-xl font-bold">
                        {content.title}
                        {content.apps.length > 3 && (
                          <button
                            onClick={() =>
                              window.handleSubcategoryClick?.(subcategory.id)
                            }
                            className={styles.seeAllButton}>
                            <Icon
                              icon="lucide:chevron-right"
                              className="mt-1 ml-2"
                              width={20}
                            />
                          </button>
                        )}
                      </h2>
                    </div>
                  </div>

                  <div className={styles.subGrid}>
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
                ref={el => {
                  contentRefs.current[subcategory.id] = el
                }}
                className={styles.categoryWrapper}>
                <div className={styles.header}>
                  <div>
                    <h2 className="mb-1 flex items-center text-xl font-bold">
                      {content.title}
                      {content.apps.length > 3 && (
                        <button
                          onClick={() =>
                            window.handleSubcategoryClick?.(subcategory.id)
                          }
                          className={styles.seeAllButton}>
                          <Icon
                            icon="lucide:chevron-right"
                            className="mt-1 ml-2"
                            width={20}
                          />
                        </button>
                      )}
                    </h2>
                  </div>
                </div>

                <div className={styles.subGrid}>
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
    }, [visibleContent, renderAllContent, renderSingleSection])

    return (
      <div ref={ref} className={styles.base}>
        {renderContent()}
      </div>
    )
  }
)

ContentArea.displayName = 'ContentArea'
