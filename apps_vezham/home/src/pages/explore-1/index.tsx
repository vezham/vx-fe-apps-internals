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

const AppExploreContent = () => {
  const [activeCategory, setActiveCategory] = React.useState(() => {
    return localStorage.getItem('activeCategory') || 'featured'
  })

  const [activeSubcategory, setActiveSubcategory] = React.useState(() => {
    return localStorage.getItem('activeSubcategory') || 'all-collections'
  })

  const [visibleContent, setVisibleContent] = React.useState<string>(() => {
    return localStorage.getItem('visibleContent') || 'all-collections'
  })

  const contentRefs = React.useRef<Record<string, HTMLDivElement | null>>({})
  const contentAreaRef = React.useRef<HTMLDivElement | null>(null)
  const [isMobileSidebarVisible, setIsMobileSidebarVisible] =
    React.useState(false)
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

  // In your AppExploreContent component, replace the intersection observer useEffect with this:

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        if (ignoreScrollUpdatesRef.current) return

        let mostVisibleEntry: IntersectionObserverEntry | null = null
        let highestVisibility = 0

        entries.forEach(entry => {
          if (!entry.isIntersecting) return

          const rect = entry.boundingClientRect
          const viewportHeight = window.innerHeight

          // Calculate visible height
          const visibleTop = Math.max(0, rect.top)
          const visibleBottom = Math.min(viewportHeight, rect.bottom)
          const visibleHeight = Math.max(0, visibleBottom - visibleTop)

          if (visibleHeight === 0) return

          const visibilityRatio = visibleHeight / rect.height
          const distanceFromTop = Math.max(0, rect.top)
          const topProximityBonus = 1 - distanceFromTop / viewportHeight

          // Combined visibility score (weighted towards elements near top)
          const visibilityScore =
            visibilityRatio * 0.4 + topProximityBonus * 0.6

          if (visibilityScore > highestVisibility) {
            highestVisibility = visibilityScore
            mostVisibleEntry = entry
          }
        })

        if (mostVisibleEntry && highestVisibility > 0.3) {
          const sectionId = mostVisibleEntry.target.id
          console.log(
            '🔄 Active section:',
            sectionId,
            'Score:',
            highestVisibility.toFixed(2)
          )

          isScrollingRef.current = true

          // Reset states first
          let newCategory = activeCategory
          let newSubcategory = activeSubcategory

          // Check if it's the all-collections section
          if (sectionId === 'all-collections') {
            newCategory = 'featured'
            newSubcategory = 'all-collections'
          }
          // Check if it's a featured subcategory
          else if (
            ['popular', 'new', 'free-install', 'support-teams'].includes(
              sectionId
            )
          ) {
            newCategory = 'featured'
            newSubcategory = sectionId
          }
          // Check if it's a categories subcategory
          else if (
            ['sales', 'marketing', 'e-commerce', 'service', 'finance'].includes(
              sectionId
            )
          ) {
            newCategory = 'categories'
            newSubcategory = sectionId
          }

          // Only update if changed
          if (
            newCategory !== activeCategory ||
            newSubcategory !== activeSubcategory
          ) {
            setActiveCategory(newCategory)
            setActiveSubcategory(newSubcategory)
            localStorage.setItem('activeCategory', newCategory)
            localStorage.setItem('activeSubcategory', newSubcategory)

            if (visibleContent !== 'all-collections') {
              setVisibleContent(newSubcategory)
              localStorage.setItem('visibleContent', newSubcategory)
            }
          }

          setTimeout(() => {
            isScrollingRef.current = false
          }, 100)
        }
      },
      {
        threshold: [0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9],
        rootMargin: '-20% 0px -30% 0px'
      }
    )

    const observeSections = () => {
      observer.disconnect()

      // Observe all known sections
      const sectionIds = [
        'all-collections',
        'popular',
        'new',
        'free-install',
        'support-teams', // featured subcategories
        'sales',
        'marketing',
        'e-commerce',
        'service',
        'finance' // categories subcategories
      ]

      let observedCount = 0
      sectionIds.forEach(sectionId => {
        const element = document.getElementById(sectionId)
        if (element) {
          observer.observe(element)
          observedCount++
          console.log(`👀 Observing: ${sectionId}`)
        } else {
          console.warn(`❌ Section not found: ${sectionId}`)
        }
      })

      console.log(`✅ Total sections being observed: ${observedCount}`)
    }

    // Initial observation with delay to ensure DOM is ready
    const initTimer = setTimeout(observeSections, 500)

    // Re-observe when content changes
    const contentTimer = setTimeout(observeSections, 1000)

    // Also observe on resize
    window.addEventListener('resize', observeSections)

    return () => {
      clearTimeout(initTimer)
      clearTimeout(contentTimer)
      window.removeEventListener('resize', observeSections)
      observer.disconnect()
    }
  }, [categories, visibleContent, activeCategory, activeSubcategory])

  // Safety timer to reset ignore flag
  React.useEffect(() => {
    const safetyTimer = setInterval(() => {
      if (ignoreScrollUpdatesRef.current) {
        ignoreScrollUpdatesRef.current = false
      }
    }, 3000)

    return () => clearInterval(safetyTimer)
  }, [])

  const handleCategoryClick = (categoryId: string) => {
    setActiveCategory(categoryId)
    localStorage.setItem('activeCategory', categoryId)
  }

  const handleSubcategoryClick = (subcategoryId: string) => {
    ignoreScrollUpdatesRef.current = true

    setActiveSubcategory(subcategoryId)
    localStorage.setItem('activeSubcategory', subcategoryId)

    // Find which category this subcategory belongs to
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

    setVisibleContent(subcategoryId)
    localStorage.setItem('visibleContent', subcategoryId)

    // Scroll to the section
    if (contentRefs.current[subcategoryId]) {
      const element = contentRefs.current[subcategoryId]
      const elementTop = element?.getBoundingClientRect().top || 0
      const offsetPosition = elementTop + window.pageYOffset - 80

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      })
    }

    setIsMobileSidebarVisible(false)

    // Reset ignore flag after scroll completes
    setTimeout(() => {
      ignoreScrollUpdatesRef.current = false
    }, 1000)
  }

  // Reset ignore flag on scroll end
  React.useEffect(() => {
    const handleScroll = () => {
      if (ignoreScrollUpdatesRef.current) {
        setTimeout(() => {
          ignoreScrollUpdatesRef.current = false
        }, 300)
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Global access for debugging
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

      <div className="flex flex-1">
        {/* Mobile sidebar overlay */}
        {isMobileSidebarVisible && (
          <div
            className="bg-overlay/50 fixed inset-0 z-30 lg:hidden"
            onClick={toggleMobileSidebar}></div>
        )}

        {/* Sidebar */}
        <div
          className={`${isMobileSidebarVisible ? 'translate-x-0' : '-translate-x-full'} border-divider fixed top-0 bottom-0 left-0 z-40 flex h-full w-64 flex-col overflow-hidden border-r bg-white transition-transform duration-300 ease-in-out lg:sticky lg:top-0 lg:h-screen lg:translate-x-0 dark:bg-black`}>
          <div className="flex-1 overflow-y-auto [scrollbar-color:rgba(0,0,0,0.2)_transparent] [scrollbar-width:thin] [&::-webkit-scrollbar]:w-[6px] [&::-webkit-scrollbar-thumb]:rounded-md [&::-webkit-scrollbar-thumb]:bg-black/20 [&::-webkit-scrollbar-track]:bg-transparent">
            <Sidebar
              categories={categories}
              activeCategory={activeCategory}
              activeSubcategory={activeSubcategory}
              onCategoryClick={handleCategoryClick}
              onSubcategoryClick={handleSubcategoryClick}
            />
          </div>
        </div>

        {/* Content area */}
        <div className="w-0 flex-1 lg:pl-0">
          <ContentArea
            ref={contentAreaRef}
            activeCategory={activeCategory}
            activeSubcategory={activeSubcategory}
            categoryContents={categoryContents}
            contentRefs={contentRefs}
            onBackClick={toggleMobileSidebar}
            isMobileView={true}
            visibleContent={visibleContent}
            onAppClick={handleAppClick}
          />
        </div>
      </div>

      {/* App Detail Modal */}
      <AppDetailModal
        isOpen={isAppModalOpen}
        onClose={handleModalClose}
        app={selectedAppDetails}
        navigatePath="apps/explore-1"
      />
      <div className="md:pt-10">
        <Footer />
      </div>
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
