// import {
//   RootRoute,
//   RouterProvider,
//   createRoute,
//   createRouter
// } from '@tanstack/react-router'
// import React from 'react'
// import { AppDetailView } from '../../components/appExplore-1/appDetailPage'
// import { ContentArea } from '../../components/appExplore-1/contentArea'
// import {
//   categories,
//   categoryContents
// } from '../../components/appExplore-1/data'
// import { type App } from '../../components/appExplore-1/types'
// import { HeroBanner } from '../../components/heroBanner'
// import { AppDetailModal } from '../../components/modal'
// import { Sidebar } from '../../components/sidebar'
// import { Footer } from '../footer'
// import { Header } from '../header'
// const AppExploreContent = () => {
//   const [activeCategory, setActiveCategory] = React.useState(() => {
//     return localStorage.getItem('activeCategory') || 'featured'
//   })
//   const [activeSubcategory, setActiveSubcategory] = React.useState(() => {
//     return localStorage.getItem('activeSubcategory') || 'all-collections'
//   })
//   const [visibleContent, setVisibleContent] = React.useState<string>(() => {
//     return localStorage.getItem('visibleContent') || 'all-collections'
//   })
//   const contentRefs = React.useRef<Record<string, HTMLDivElement | null>>({})
//   const contentAreaRef = React.useRef<HTMLDivElement | null>(null)
//   const [isMobileSidebarVisible, setIsMobileSidebarVisible] =
//     React.useState(false)
//   const [selectedAppId, setSelectedAppId] = React.useState<string | null>(null)
//   const [isAppModalOpen, setIsAppModalOpen] = React.useState(false)
//   const [selectedApp, setSelectedApp] = React.useState<App | null>(null)
//   const selectedAppDetails = React.useMemo(() => {
//     if (!selectedAppId) return null
//     return (
//       Object.values(categoryContents)
//         .flatMap(category => category.apps)
//         .find(app => app.id === selectedAppId) || null
//     )
//   }, [selectedAppId])
//   const handleAppClick = (appsId: string, app: App) => {
//     setSelectedAppId(appsId)
//     setSelectedApp(app)
//     setIsAppModalOpen(true)
//   }
//   const handleModalClose = () => {
//     setIsAppModalOpen(false)
//   }
//   const isScrollingRef = React.useRef(false)
//   const ignoreScrollUpdatesRef = React.useRef(false)
//   // React.useEffect(() => {
//   //   const observer = new IntersectionObserver(
//   //     entries => {
//   //       if (ignoreScrollUpdatesRef.current) return
//   //       let mostVisibleEntry: IntersectionObserverEntry | null = null
//   //       let highestVisibility = 0
//   //       entries.forEach(entry => {
//   //         if (!entry.isIntersecting) return
//   //         const rect = entry.boundingClientRect
//   //         const viewportHeight = window.innerHeight
//   //         // Calculate visible height
//   //         const visibleTop = Math.max(0, rect.top)
//   //         const visibleBottom = Math.min(viewportHeight, rect.bottom)
//   //         const visibleHeight = Math.max(0, visibleBottom - visibleTop)
//   //         if (visibleHeight === 0) return
//   //         const visibilityRatio = visibleHeight / rect.height
//   //         const distanceFromTop = Math.max(0, rect.top)
//   //         const topProximityBonus = 1 - distanceFromTop / viewportHeight
//   //         // Combined visibility score (weighted towards elements near top)
//   //         const visibilityScore =
//   //           visibilityRatio * 0.4 + topProximityBonus * 0.6
//   //         if (visibilityScore > highestVisibility) {
//   //           highestVisibility = visibilityScore
//   //           mostVisibleEntry = entry
//   //         }
//   //       })
//   //       if (mostVisibleEntry && highestVisibility > 0.3) {
//   //         const sectionId = mostVisibleEntry.target.id
//   //         console.log(
//   //           '🔄 Active section:',
//   //           sectionId,
//   //           'Score:',
//   //           highestVisibility.toFixed(2)
//   //         )
//   //         isScrollingRef.current = true
//   //         let foundCategory = ''
//   //         let foundSubcategory = ''
//   //         const isMainCategory = categories.some(cat => cat.id === sectionId)
//   //         if (isMainCategory) {
//   //           foundCategory = sectionId
//   //           foundSubcategory = ''
//   //         } else {
//   //           for (const category of categories) {
//   //             if (category.subcategories) {
//   //               const subcategory = category.subcategories.find(
//   //                 sub => sub.id === sectionId
//   //               )
//   //               if (subcategory) {
//   //                 foundCategory = category.id
//   //                 foundSubcategory = subcategory.id
//   //                 break
//   //               }
//   //             }
//   //           }
//   //         }
//   //         if (sectionId === 'all-collections') {
//   //           setActiveCategory('featured')
//   //           setActiveSubcategory('all-collections')
//   //           localStorage.setItem('activeCategory', 'featured')
//   //           localStorage.setItem('activeSubcategory', 'all-collections')
//   //         } else if (foundSubcategory) {
//   //           setActiveCategory(foundCategory)
//   //           setActiveSubcategory(foundSubcategory)
//   //           localStorage.setItem('activeCategory', foundCategory)
//   //           localStorage.setItem('activeSubcategory', foundSubcategory)
//   //           if (visibleContent !== 'all-collections') {
//   //             setVisibleContent(foundSubcategory)
//   //             localStorage.setItem('visibleContent', foundSubcategory)
//   //           }
//   //         } else if (foundCategory) {
//   //           setActiveCategory(foundCategory)
//   //           setActiveSubcategory('')
//   //           localStorage.setItem('activeCategory', foundCategory)
//   //           localStorage.setItem('activeSubcategory', '')
//   //           if (visibleContent !== 'all-collections') {
//   //             setVisibleContent(foundCategory)
//   //             localStorage.setItem('visibleContent', foundCategory)
//   //           }
//   //         }
//   //         setTimeout(() => {
//   //           isScrollingRef.current = false
//   //         }, 100)
//   //       }
//   //     },
//   //     {
//   //       threshold: [0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9],
//   //       rootMargin: '-20% 0px -30% 0px'
//   //     }
//   //   )
//   //   const observeSections = () => {
//   //     observer.disconnect()
//   //     // Observe all known sections
//   //     const sectionIds = [
//   //       'all-collections',
//   //       'popular',
//   //       'new',
//   //       'free-install',
//   //       'support-teams', // featured subcategories
//   //       'sales',
//   //       'marketing',
//   //       'e-commerce',
//   //       'service',
//   //       'finance' // categories subcategories
//   //     ]
//   //     let observedCount = 0
//   //     sectionIds.forEach(sectionId => {
//   //       const element = document.getElementById(sectionId)
//   //       if (element) {
//   //         observer.observe(element)
//   //         observedCount++
//   //         console.log(`👀 Observing: ${sectionId}`)
//   //       } else {
//   //         console.warn(`❌ Section not found: ${sectionId}`)
//   //       }
//   //     })
//   //     console.log(`✅ Total sections being observed: ${observedCount}`)
//   //   }
//   //   // Initial observation with delay to ensure DOM is ready
//   //   const initTimer = setTimeout(observeSections, 500)
//   //   // Re-observe when content changes
//   //   const contentTimer = setTimeout(observeSections, 1000)
//   //   // Also observe on resize
//   //   window.addEventListener('resize', observeSections)
//   //   return () => {
//   //     clearTimeout(initTimer)
//   //     clearTimeout(contentTimer)
//   //     window.removeEventListener('resize', observeSections)
//   //     observer.disconnect()
//   //   }
//   // }, [categories, visibleContent, activeCategory, activeSubcategory])
//     React.useEffect(() => {
//       const observer = new IntersectionObserver(
//         entries => {
//           if (ignoreScrollUpdatesRef.current) {
//             return
//           }
//           let maxVisibility = 0
//           let mostVisibleEntry = null
//           entries.forEach(entry => {
//             const rect = entry.boundingClientRect
//             const windowHeight = window.innerHeight
//             if (rect.height < 50 || !entry.isIntersecting) {
//               return
//             }
//             const visibleTop = Math.max(0, rect.top)
//             const visibleBottom = Math.min(windowHeight, rect.bottom)
//             const visibleHeight = Math.max(0, visibleBottom - visibleTop)
//             const visibilityRatio = visibleHeight / rect.height
//             const topProximityBonus = 1 - Math.max(0, visibleTop) / windowHeight
//             const visibility = visibilityRatio * 0.7 + topProximityBonus * 0.3
//             if (visibility > maxVisibility && visibility > 0.1) {
//               maxVisibility = visibility
//               mostVisibleEntry = entry
//             }
//           })
//           if (mostVisibleEntry) {
//             const sectionId = mostVisibleEntry.target.id
//             console.log(
//               'Most visible section:',
//               sectionId,
//               'with visibility:',
//               maxVisibility
//             )
//             isScrollingRef.current = true
//             let foundCategory = ''
//             let foundSubcategory = ''
//             const isMainCategory = categories.some(cat => cat.id === sectionId)
//             if (isMainCategory) {
//               foundCategory = sectionId
//               foundSubcategory = ''
//             } else {
//               for (const category of categories) {
//                 if (category.subcategories) {
//                   const subcategory = category.subcategories.find(
//                     sub => sub.id === sectionId
//                   )
//                   if (subcategory) {
//                     foundCategory = category.id
//                     foundSubcategory = subcategory.id
//                     break
//                   }
//                 }
//               }
//             }
//             if (sectionId === 'all-collections') {
//               setActiveCategory('featured')
//               setActiveSubcategory('all-collections')
//               localStorage.setItem('activeCategory', 'featured')
//               localStorage.setItem('activeSubcategory', 'all-collections')
//             } else if (foundSubcategory) {
//               setActiveCategory(foundCategory)
//               setActiveSubcategory(foundSubcategory)
//               localStorage.setItem('activeCategory', foundCategory)
//               localStorage.setItem('activeSubcategory', foundSubcategory)
//               if (visibleContent !== 'all-collections') {
//                 setVisibleContent(foundSubcategory)
//                 localStorage.setItem('visibleContent', foundSubcategory)
//               }
//             } else if (foundCategory) {
//               setActiveCategory(foundCategory)
//               setActiveSubcategory('')
//               localStorage.setItem('activeCategory', foundCategory)
//               localStorage.setItem('activeSubcategory', '')
//               if (visibleContent !== 'all-collections') {
//                 setVisibleContent(foundCategory)
//                 localStorage.setItem('visibleContent', foundCategory)
//               }
//             }
//             setTimeout(() => {
//               isScrollingRef.current = false
//             }, 100)
//           }
//         },
//         {
//           threshold: [
//             0, 0.05, 0.1, 0.15, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1.0
//           ],
//           rootMargin: '-5% 0px -45% 0px'
//         }
//       )
//       const observeSections = () => {
//         observer.disconnect()
//         const allSections = document.querySelectorAll('[id]')
//         console.log(`Found ${allSections.length} sections to observe`)
//         allSections.forEach(section => {
//           if (
//             section.id &&
//             !section.id.startsWith('modal-') &&
//             !section.id.startsWith('drawer-')
//           ) {
//             observer.observe(section)
//           }
//         })
//       }
//       observeSections()
//       const timer = setTimeout(observeSections, 500)
//       const contentChangeTimer = setTimeout(observeSections, 1000)
//       return () => {
//         clearTimeout(timer)
//         clearTimeout(contentChangeTimer)
//         observer.disconnect()
//       }
//     }, [categories, visibleContent, activeCategory, activeSubcategory])
//   React.useEffect(() => {
//     const safetyTimer = setInterval(() => {
//       if (ignoreScrollUpdatesRef.current) {
//         ignoreScrollUpdatesRef.current = false
//       }
//     }, 3000)
//     return () => clearInterval(safetyTimer)
//   }, [])
//   const handleCategoryClick = (categoryId: string) => {
//     setActiveCategory(categoryId)
//     localStorage.setItem('activeCategory', categoryId)
//   }
//   const handleSubcategoryClick = (subcategoryId: string) => {
//     if (isScrollingRef.current) {
//       setActiveSubcategory(subcategoryId)
//       localStorage.setItem('activeSubcategory', subcategoryId)
//       const featuredCategory = categories.find(cat => cat.id === 'featured')
//       const isFeatureSubcategory = featuredCategory?.subcategories?.some(
//         sub => sub.id === subcategoryId
//       )
//       if (isFeatureSubcategory) {
//         setActiveCategory('featured')
//         localStorage.setItem('activeCategory', 'featured')
//       } else {
//         for (const category of categories) {
//           if (category.subcategories?.some(sub => sub.id === subcategoryId)) {
//             setActiveCategory(category.id)
//             localStorage.setItem('activeCategory', category.id)
//             break
//           }
//         }
//       }
//       return
//     }
//     ignoreScrollUpdatesRef.current = true
//     console.log('Navigating to subcategory:', subcategoryId)
//     setActiveSubcategory(subcategoryId)
//     localStorage.setItem('activeSubcategory', subcategoryId)
//     const featuredCategory = categories.find(cat => cat.id === 'featured')
//     const isFeatureSubcategory = featuredCategory?.subcategories?.some(
//       sub => sub.id === subcategoryId
//     )
//     if (isFeatureSubcategory) {
//       setActiveCategory('featured')
//       localStorage.setItem('activeCategory', 'featured')
//       setVisibleContent(subcategoryId)
//       localStorage.setItem('visibleContent', subcategoryId)
//     } else {
//       for (const category of categories) {
//         if (category.subcategories?.some(sub => sub.id === subcategoryId)) {
//           setActiveCategory(category.id)
//           localStorage.setItem('activeCategory', category.id)
//           break
//         }
//       }
//       setVisibleContent(subcategoryId)
//       localStorage.setItem('visibleContent', subcategoryId)
//     }
//     if (contentRefs.current[subcategoryId]) {
//       const element = contentRefs.current[subcategoryId]
//       const offsetTop = element?.getBoundingClientRect().top || 0
//       const scrollTop = window.pageYOffset || document.documentElement.scrollTop
//       window.scrollTo({
//         top: offsetTop + scrollTop - 80,
//         behavior: 'smooth'
//       })
//     }
//     setIsMobileSidebarVisible(false)
//     setTimeout(() => {
//       ignoreScrollUpdatesRef.current = false
//     }, 1000)
//   }
//   React.useEffect(() => {
//     const handleScroll = () => {
//       if (ignoreScrollUpdatesRef.current) {
//         setTimeout(() => {
//           ignoreScrollUpdatesRef.current = false
//         }, 300)
//       }
//     }
//     window.addEventListener('scroll', handleScroll, { passive: true })
//     return () => window.removeEventListener('scroll', handleScroll)
//   }, [])
//   // Global access for debugging
//   React.useEffect(() => {
//     ;(window as any).handleSubcategoryClick = handleSubcategoryClick
//     return () => {
//       delete (window as any).handleSubcategoryClick
//     }
//   }, [])
//   const toggleMobileSidebar = () => {
//     setIsMobileSidebarVisible(prev => !prev)
//   }
//   return (
//     <div className="bg-background text-foreground flex min-h-screen flex-col scroll-smooth">
//       {<Header />}
//       {<HeroBanner />}
//       <div className="flex flex-1">
//         {/* Mobile sidebar overlay */}
//         {isMobileSidebarVisible && (
//           <div
//             className="bg-overlay/50 fixed inset-0 z-30 lg:hidden"
//             onClick={toggleMobileSidebar}></div>
//         )}
//         {/* Sidebar */}
//         <div
//           className={`${isMobileSidebarVisible ? 'translate-x-0' : '-translate-x-full'} border-divider fixed top-0 bottom-0 left-0 z-40 flex h-full w-64 flex-col overflow-hidden border-r bg-white transition-transform duration-300 ease-in-out lg:sticky lg:top-0 lg:h-screen lg:translate-x-0 dark:bg-black`}>
//           <div className="flex-1 overflow-y-auto [scrollbar-color:rgba(0,0,0,0.2)_transparent] [scrollbar-width:thin] [&::-webkit-scrollbar]:w-[6px] [&::-webkit-scrollbar-thumb]:rounded-md [&::-webkit-scrollbar-thumb]:bg-black/20 [&::-webkit-scrollbar-track]:bg-transparent">
//             <Sidebar
//               categories={categories}
//               activeCategory={activeCategory}
//               activeSubcategory={activeSubcategory}
//               onCategoryClick={handleCategoryClick}
//               onSubcategoryClick={handleSubcategoryClick}
//             />
//           </div>
//         </div>
//         {/* Content area */}
//         <div className="w-0 flex-1 lg:pl-0">
//           <ContentArea
//             ref={contentAreaRef}
//             activeCategory={activeCategory}
//             activeSubcategory={activeSubcategory}
//             categoryContents={categoryContents}
//             contentRefs={contentRefs}
//             onBackClick={toggleMobileSidebar}
//             isMobileView={true}
//             visibleContent={visibleContent}
//             onAppClick={handleAppClick}
//           />
//         </div>
//       </div>
//       {/* App Detail Modal */}
//       <AppDetailModal
//         isOpen={isAppModalOpen}
//         onClose={handleModalClose}
//         app={selectedAppDetails}
//         navigatePath="apps/explore-1"
//       />
//       <div className="md:pt-10">
//         <Footer />
//       </div>
//     </div>
//   )
// }
// export { AppExploreContent }
// // ---------------------- ROUTES ----------------------
// const rootRoute = new RootRoute({
//   component: () => <AppExploreContent />
// })
// const appRoute = createRoute({
//   getParentRoute: () => rootRoute,
//   path: '/apps/$appExploreId',
//   component: AppDetailView
// })
// const router = createRouter({
//   routeTree: rootRoute.addChildren([appRoute])
// })
// // ---------------------- MAIN APP ----------------------
// export default function App() {
//   return <RouterProvider router={router} />
// }
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

  // Intersection Observer for scroll detection
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

          if (sectionId === 'all-collections') {
            setActiveCategory('featured')
            setActiveSubcategory('all-collections')
            localStorage.setItem('activeCategory', 'featured')
            localStorage.setItem('activeSubcategory', 'all-collections')
          } else if (foundSubcategory) {
            setActiveCategory(foundCategory)
            setActiveSubcategory(foundSubcategory)
            localStorage.setItem('activeCategory', foundCategory)
            localStorage.setItem('activeSubcategory', foundSubcategory)

            if (visibleContent !== 'all-collections') {
              setVisibleContent(foundSubcategory)
              localStorage.setItem('visibleContent', foundSubcategory)
            }
          } else if (foundCategory) {
            setActiveCategory(foundCategory)
            setActiveSubcategory('')
            localStorage.setItem('activeCategory', foundCategory)
            localStorage.setItem('activeSubcategory', '')

            if (visibleContent !== 'all-collections') {
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
  }, [categories, visibleContent, activeCategory, activeSubcategory])

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
    console.log('🎯 Subcategory clicked:', subcategoryId)

    // Set ignore flag to prevent intersection observer interference
    ignoreScrollUpdatesRef.current = true

    // Update active states immediately
    setActiveSubcategory(subcategoryId)
    localStorage.setItem('activeSubcategory', subcategoryId)

    // Find and set the correct category
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

    // Update visible content
    setVisibleContent(subcategoryId)
    localStorage.setItem('visibleContent', subcategoryId)

    // Scroll to the section after a small delay to ensure DOM is updated
    setTimeout(() => {
      const element = document.getElementById(subcategoryId)
      if (element) {
        const elementRect = element.getBoundingClientRect()
        const absoluteElementTop = elementRect.top + window.pageYOffset
        const scrollPosition = absoluteElementTop - 100 // Adjust offset as needed

        console.log(
          '📜 Scrolling to:',
          subcategoryId,
          'at position:',
          scrollPosition
        )

        window.scrollTo({
          top: scrollPosition,
          behavior: 'smooth'
        })
      } else {
        console.warn('❌ Element not found for subcategory:', subcategoryId)
        // Fallback to contentRefs
        if (contentRefs.current[subcategoryId]) {
          const element = contentRefs.current[subcategoryId]
          const elementRect = element!.getBoundingClientRect()
          const absoluteElementTop = elementRect.top + window.pageYOffset
          const scrollPosition = absoluteElementTop - 100

          window.scrollTo({
            top: scrollPosition,
            behavior: 'smooth'
          })
        }
      }

      // Reset ignore flag after scroll completes
      setTimeout(() => {
        ignoreScrollUpdatesRef.current = false
        console.log('🔄 Scroll complete, observer re-enabled')
      }, 1000)
    }, 100)

    setIsMobileSidebarVisible(false)
  }

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
