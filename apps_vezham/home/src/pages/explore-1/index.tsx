import {
  RootRoute,
  RouterProvider,
  createRoute,
  createRouter
} from '@tanstack/react-router'
import React from 'react'

import { AppDetailView } from '../../components/appExplore-1/appDetailPage'
import { ContentArea } from '../../components/appExplore-1/contentArea'
import {
  categories,
  categoryContents
} from '../../components/appExplore-1/data'
import { type App } from '../../components/appExplore-1/types'
import { HeroBanner } from '../../components/heroBanner'
import { AppDetailModal } from '../../components/modal'
import { Sidebar } from '../../components/sidebar'
import { Footer } from '../footer'
import { Header } from '../header'

// ---------------------- APP CONTENT ----------------------
const AppExploreContent = () => {
  const [activeCategory, setActiveCategory] = React.useState(() => {
    return localStorage.getItem('activeCategory') || 'featured'
  })

  const [activeSubcategory, setActiveSubcategory] = React.useState(() => {
    return localStorage.getItem('activeSubcategory') || 'all-collections'
  })

  // Initialize visibleContent from localStorage or default to all-collections
  const [visibleContent, setVisibleContent] = React.useState<string>(() => {
    return localStorage.getItem('visibleContent') || 'all-collections'
  })

  const contentRefs = React.useRef<Record<string, HTMLDivElement | null>>({})
  const contentAreaRef = React.useRef<HTMLDivElement | null>(null)
  // Add state for mobile sidebar visibility
  const [isMobileSidebarVisible, setIsMobileSidebarVisible] =
    React.useState(false)

  // Add state for the app detail modal
  const [selectedAppId, setSelectedAppId] = React.useState<string | null>(null)
  const [isAppModalOpen, setIsAppModalOpen] = React.useState(false)
  const [selectedApp, setSelectedApp] = React.useState<App | null>(null)

  const selectedAppDetails = React.useMemo(() => {
    if (!selectedAppId) return null
    return (
      Object.values(categoryContents)
        .flatMap(category => category.apps)
        .find(app => app.id === selectedAppId) || null
    )
  }, [selectedAppId])

  const handleAppClick = (appsId: string, app: App) => {
    setSelectedAppId(appsId)
    setSelectedApp(app)
    setIsAppModalOpen(true)
  }

  const handleModalClose = () => {
    setIsAppModalOpen(false)
  }

  const isScrollingRef = React.useRef(false)

  const ignoreScrollUpdatesRef = React.useRef(false)

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        if (ignoreScrollUpdatesRef.current) {
          return
        }

        let maxVisibility = 0
        let mostVisibleEntry = null

        entries.forEach(entry => {
          const rect = entry.boundingClientRect
          const windowHeight = window.innerHeight

          if (rect.height < 50 || !entry.isIntersecting) {
            return
          }

          const visibleTop = Math.max(0, rect.top)
          const visibleBottom = Math.min(windowHeight, rect.bottom)
          const visibleHeight = Math.max(0, visibleBottom - visibleTop)

          const visibilityRatio = visibleHeight / rect.height
          const topProximityBonus = 1 - Math.max(0, visibleTop) / windowHeight
          const visibility = visibilityRatio * 0.7 + topProximityBonus * 0.3

          if (visibility > maxVisibility && visibility > 0.1) {
            maxVisibility = visibility
            mostVisibleEntry = entry
          }
        })

        if (mostVisibleEntry) {
          const sectionId = mostVisibleEntry.target.id
          console.log(
            'Most visible section:',
            sectionId,
            'with visibility:',
            maxVisibility
          )

          isScrollingRef.current = true

          let foundCategory = ''
          let foundSubcategory = ''

          const isMainCategory = categories.some(cat => cat.id === sectionId)
          if (isMainCategory) {
            foundCategory = sectionId
            foundSubcategory = ''
          } else {
            for (const category of categories) {
              if (category.subcategories) {
                const subcategory = category.subcategories.find(
                  sub => sub.id === sectionId
                )
                if (subcategory) {
                  foundCategory = category.id
                  foundSubcategory = subcategory.id
                  break
                }
              }
            }
          }

          // Update active category and subcategory based on scroll position
          if (sectionId === 'all-collections') {
            setActiveCategory('featured')
            setActiveSubcategory('all-collections')
            localStorage.setItem('activeCategory', 'featured')
            localStorage.setItem('activeSubcategory', 'all-collections')
          } else if (foundSubcategory) {
            // If we found a subcategory, update both category and subcategory
            setActiveCategory(foundCategory)
            setActiveSubcategory(foundSubcategory)
            localStorage.setItem('activeCategory', foundCategory)
            localStorage.setItem('activeSubcategory', foundSubcategory)

            // Only update visibleContent if we're not in all-collections view
            if (visibleContent !== 'all-collections') {
              setVisibleContent(foundSubcategory)
              localStorage.setItem('visibleContent', foundSubcategory)
            }
          } else if (foundCategory) {
            // If we only found a category, update just the category
            setActiveCategory(foundCategory)
            setActiveSubcategory('')
            localStorage.setItem('activeCategory', foundCategory)
            localStorage.setItem('activeSubcategory', '')

            // Only update visibleContent if we're not in all-collections view
            if (visibleContent !== 'all-collections') {
              setVisibleContent(foundCategory)
              localStorage.setItem('visibleContent', foundCategory)
            }
          }

          // Reset scrolling flag after a short delay
          setTimeout(() => {
            isScrollingRef.current = false
          }, 150)
        }
      },
      {
        // More granular thresholds for better detection
        threshold: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1.0],
        // Adjust rootMargin to better detect sections at the top of the viewport
        rootMargin: '-5% 0px -45% 0px'
      }
    )

    const observeSections = () => {
      observer.disconnect()

      // Find all sections with IDs
      const allSections = document.querySelectorAll('[id]')
      console.log(`Found ${allSections.length} sections to observe`)

      allSections.forEach(section => {
        if (
          section.id &&
          !section.id.startsWith('modal-') &&
          !section.id.startsWith('drawer-')
        ) {
          observer.observe(section)
        }
      })
    }

    // Initial observation
    observeSections()

    // Re-observe after a delay to catch any dynamically rendered sections
    const timer = setTimeout(observeSections, 500)
    const contentChangeTimer = setTimeout(observeSections, 1000)

    return () => {
      clearTimeout(timer)
      clearTimeout(contentChangeTimer)
      observer.disconnect()
    }
  }, [categories, visibleContent])

  React.useEffect(() => {
    const safetyTimer = setInterval(() => {
      if (ignoreScrollUpdatesRef.current) {
        ignoreScrollUpdatesRef.current = false
      }
    }, 2000)

    return () => clearInterval(safetyTimer)
  }, [])

  const handleCategoryClick = (categoryId: string) => {
    setActiveCategory(categoryId)
    localStorage.setItem('activeCategory', categoryId)
  }

  const handleSubcategoryClick = (subcategoryId: string) => {
    if (isScrollingRef.current) {
      setActiveSubcategory(subcategoryId)
      localStorage.setItem('activeSubcategory', subcategoryId)

      const featuredCategory = categories.find(cat => cat.id === 'featured')
      const isFeatureSubcategory = featuredCategory?.subcategories?.some(
        sub => sub.id === subcategoryId
      )

      if (isFeatureSubcategory) {
        setActiveCategory('featured')
        localStorage.setItem('activeCategory', 'featured')
      } else {
        for (const category of categories) {
          if (category.subcategories?.some(sub => sub.id === subcategoryId)) {
            setActiveCategory(category.id)
            localStorage.setItem('activeCategory', category.id)
            break
          }
        }
      }
      return
    }

    ignoreScrollUpdatesRef.current = true

    setActiveSubcategory(subcategoryId)
    localStorage.setItem('activeSubcategory', subcategoryId)

    const featuredCategory = categories.find(cat => cat.id === 'featured')
    const isFeatureSubcategory = featuredCategory?.subcategories?.some(
      sub => sub.id === subcategoryId
    )

    if (isFeatureSubcategory) {
      setActiveCategory('featured')
      localStorage.setItem('activeCategory', 'featured')

      setVisibleContent(subcategoryId)
      localStorage.setItem('visibleContent', subcategoryId)
    } else {
      for (const category of categories) {
        if (category.subcategories?.some(sub => sub.id === subcategoryId)) {
          setActiveCategory(category.id)
          localStorage.setItem('activeCategory', category.id)
          break
        }
      }

      setVisibleContent(subcategoryId)
      localStorage.setItem('visibleContent', subcategoryId)
    }

    if (contentRefs.current[subcategoryId]) {
      const element = contentRefs.current[subcategoryId]
      const offsetTop = element?.getBoundingClientRect().top || 0
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop

      window.scrollTo({
        top: offsetTop + scrollTop - 80,
        behavior: 'smooth'
      })
    }

    setIsMobileSidebarVisible(false)

    setTimeout(() => {
      ignoreScrollUpdatesRef.current = false
    }, 800)
  }

  React.useEffect(() => {
    const handleScroll = () => {
      if (ignoreScrollUpdatesRef.current) {
        setTimeout(() => {
          ignoreScrollUpdatesRef.current = false
        }, 200)
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  React.useEffect(() => {
    ;(window as any).handleSubcategoryClick = handleSubcategoryClick

    return () => {
      delete (window as any).handleSubcategoryClick
    }
  }, [])

  const toggleMobileSidebar = () => {
    setIsMobileSidebarVisible(prev => !prev)
  }

  return (
    <div className="bg-background text-foreground flex min-h-screen flex-col scroll-smooth">
      {<Header />}
      {<HeroBanner />}

      <div className="relative flex flex-1">
        {/* Mobile sidebar overlay */}
        {isMobileSidebarVisible && (
          <div
            className="bg-overlay/50 fixed inset-0 z-30 lg:hidden"
            onClick={toggleMobileSidebar}></div>
        )}

        {/* Sidebar - Fixed positioning for mobile, static for desktop */}
        <div
          className={`${isMobileSidebarVisible ? 'translate-x-0' : '-translate-x-full'} border-divider fixed top-0 bottom-0 left-0 z-40 flex h-full w-64 flex-col overflow-hidden border-r bg-white transition-transform duration-300 ease-in-out lg:sticky lg:top-0 lg:h-screen lg:translate-x-0 dark:bg-black`}>
          {/* Scrollable sidebar content with inline scrollbar styles */}
          <div className="flex-1 overflow-y-auto">
            <Sidebar
              categories={categories}
              activeCategory={activeCategory}
              activeSubcategory={activeSubcategory}
              onCategoryClick={handleCategoryClick}
              onSubcategoryClick={handleSubcategoryClick}
            />
          </div>
        </div>

        {/* Content area - with proper left padding on desktop */}
        <div className="w-0 flex-1 lg:pl-0">
          <ContentArea
            ref={contentAreaRef}
            activeCategory={activeCategory}
            activeSubcategory={activeSubcategory}
            categoryContents={categoryContents}
            contentRefs={contentRefs}
            onBackClick={toggleMobileSidebar}
            isMobileView={true} // Always show back button on mobile
            visibleContent={visibleContent}
            onAppClick={handleAppClick}
          />
        </div>
      </div>

      {/* App Detail Modal - now using selectedApp directly */}
      <AppDetailModal
        isOpen={isAppModalOpen}
        onClose={handleModalClose}
        app={selectedAppDetails}
        navigatePath="apps/explore-1"
      />
      <Footer />
    </div>
  )
}

export { AppExploreContent }

// ---------------------- ROUTES ----------------------

const rootRoute = new RootRoute({
  component: () => <AppExploreContent />
})

const appRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/apps/$appExploreId',
  component: AppDetailView
})

const router = createRouter({
  routeTree: rootRoute.addChildren([appRoute])
})

// ---------------------- MAIN APP ----------------------

export default function App() {
  return <RouterProvider router={router} />
}
