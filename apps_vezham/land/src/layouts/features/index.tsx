import {
  RootRoute,
  RouterProvider,
  createRoute,
  createRouter
} from '@tanstack/react-router'
import React from 'react'

import { AppDetailPage } from '../../components/appFeatures/appDetailPage'
import { ContentArea } from '../../components/appFeatures/contentArea'
import { type App } from '../../components/appFeatures/types'
import { AppDetailModal } from '../../components/modal'
import { Sidebar } from '../../components/sidebar'
import { useFeatures } from '../../store/useFeatures'

const AppContent = () => {
  const { data: categories = [] } = useFeatures.sidebarlist({})
  const { data: categoryContents = {} } = useFeatures.contentlist({})

  const [activeCategory, setActiveCategory] = React.useState(() => {
    return localStorage.getItem('activeCategory') || 'all-features'
  })

  const [activeSubcategory, setActiveSubcategory] = React.useState(() => {
    return localStorage.getItem('activeSubcategory') || 'all-features'
  })

  const [visibleContent, setVisibleContent] = React.useState<string>(() => {
    return localStorage.getItem('visibleContent') || 'all-features'
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

    const allApps: App[] = []
    Object.values(categoryContents).forEach(content => {
      if (content && content.apps) {
        allApps.push(...content.apps)
      }
    })

    return allApps.find(app => app.id === selectedAppId) || null
  }, [selectedAppId, categoryContents])

  const handleAppClick = (appId: string, app: App) => {
    setSelectedAppId(appId)
    setSelectedApp(app)
    setIsAppModalOpen(true)
  }

  const handleModalClose = () => {
    setIsAppModalOpen(false)
    setSelectedAppId(null)
    setSelectedApp(null)
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

          if (sectionId === 'all-features') {
            setActiveCategory('featured')
            setActiveSubcategory('all-features')
            localStorage.setItem('activeCategory', 'featured')
            localStorage.setItem('activeSubcategory', 'all-features')
          } else if (foundSubcategory) {
            setActiveCategory(foundCategory)
            setActiveSubcategory(foundSubcategory)
            localStorage.setItem('activeCategory', foundCategory)
            localStorage.setItem('activeSubcategory', foundSubcategory)

            if (visibleContent !== 'all-features') {
              setVisibleContent(foundSubcategory)
              localStorage.setItem('visibleContent', foundSubcategory)
            }
          } else if (foundCategory) {
            setActiveCategory(foundCategory)
            setActiveSubcategory('')
            localStorage.setItem('activeCategory', foundCategory)
            localStorage.setItem('activeSubcategory', '')

            if (visibleContent !== 'all-features') {
              setVisibleContent(foundCategory)
              localStorage.setItem('visibleContent', foundCategory)
            }
          }

          setTimeout(() => {
            isScrollingRef.current = false
          }, 100)
        }
      },
      {
        threshold: [
          0, 0.05, 0.1, 0.15, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1.0
        ],
        rootMargin: '-5% 0px -45% 0px'
      }
    )

    const observeSections = () => {
      observer.disconnect()

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

    observeSections()

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
        console.log('Safety reset of ignoreScrollUpdatesRef')
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

    console.log('Navigating to subcategory:', subcategoryId)

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
  }, [handleSubcategoryClick])

  const toggleMobileSidebar = () => {
    setIsMobileSidebarVisible(prev => !prev)
  }

  return (
    <div className="bg-background text-foreground flex min-h-screen flex-col scroll-smooth">
      <div className="flex flex-1">
        {isMobileSidebarVisible && (
          <div
            className="bg-overlay/50 fixed inset-0 lg:hidden"
            onClick={toggleMobileSidebar}
          />
        )}
        <div
          className={`${isMobileSidebarVisible ? 'translate-x-0' : '-translate-x-full'} border-divider fixed top-0 bottom-0 left-0 z-5 flex h-full w-64 flex-col overflow-hidden border-r bg-white transition-transform duration-300 ease-in-out lg:sticky lg:top-0 lg:h-screen lg:translate-x-0 dark:bg-black`}>
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
        <div className="flex-1">
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
      <AppDetailModal
        isOpen={isAppModalOpen}
        onClose={handleModalClose}
        app={selectedAppDetails}
        navigatePath="apps/explore"
      />
    </div>
  )
}

export { AppContent }

// ---------------------- ROUTES ----------------------

const rootRoute = new RootRoute({
  component: () => <AppContent />
})

const appRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/app/$appId',
  component: AppDetailPage
})

const router = createRouter({
  routeTree: rootRoute.addChildren([appRoute])
})

// ---------------------- MAIN APP ----------------------

export default function App() {
  return <RouterProvider router={router} />
}
