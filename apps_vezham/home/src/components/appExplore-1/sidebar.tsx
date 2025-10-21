import { Icon } from '@iconify/react'
import React from 'react'

import { Category } from './types'

interface SidebarProps {
  categories: Category[]
  activeCategory: string
  activeSubcategory: string
  onCategoryClick: (categoryId: string) => void
  onSubcategoryClick: (subcategoryId: string) => void
}

export const Sidebar: React.FC<SidebarProps> = ({
  categories,
  activeCategory,
  activeSubcategory,
  onCategoryClick,
  onSubcategoryClick
}) => {
  // Initialize expanded categories from localStorage or defaults
  const [expandedCategories, setExpandedCategories] = React.useState<
    Record<string, boolean>
  >(() => {
    const saved = localStorage.getItem('expandedCategories')
    if (saved) return JSON.parse(saved)
    return {
      featured: true,
      categories: true
    }
  })

  const sidebarRef = React.useRef<HTMLDivElement>(null)
  const itemRefs = React.useRef<Record<string, HTMLDivElement | null>>({})

  // Unified category toggle handler
  const toggleCategoryExpansion = (categoryId: string) => {
    setExpandedCategories(prev => {
      const newState = { ...prev, [categoryId]: !prev[categoryId] }
      localStorage.setItem('expandedCategories', JSON.stringify(newState))
      return newState
    })
  }

  // Ensure active category and subcategory remain expanded
  React.useEffect(() => {
    setExpandedCategories(prev => {
      let changed = false
      const newState = { ...prev }

      if (activeCategory && !prev[activeCategory]) {
        newState[activeCategory] = true
        changed = true
      }

      if (activeSubcategory) {
        for (const cat of categories) {
          if (cat.subcategories?.some(sub => sub.id === activeSubcategory)) {
            if (!prev[cat.id]) {
              newState[cat.id] = true
              changed = true
            }
            break
          }
        }
      }

      if (changed) {
        localStorage.setItem('expandedCategories', JSON.stringify(newState))
        return newState
      }
      return prev
    })
  }, [activeCategory, activeSubcategory, categories])

  // Scroll active item into view when it changes
  React.useEffect(() => {
    if (activeSubcategory && itemRefs.current[activeSubcategory]) {
      const element = itemRefs.current[activeSubcategory]
      if (element && sidebarRef.current) {
        // Smooth scroll the sidebar to show the active item
        const sidebarTop = sidebarRef.current.getBoundingClientRect().top
        const elementTop = element.getBoundingClientRect().top
        const offset = elementTop - sidebarTop - 100 // 100px from top

        if (offset < 0 || offset > sidebarRef.current.clientHeight - 100) {
          sidebarRef.current.scrollTo({
            top: sidebarRef.current.scrollTop + offset,
            behavior: 'smooth'
          })
        }
      }
    }
  }, [activeSubcategory])

  return (
    <div
      ref={sidebarRef}
      className="text-foreground h-full w-full flex-shrink-0">
      <div className="pt-20 pb-5 lg:py-3 lg:pb-0">
        {categories.map(category => (
          <div key={category.id} className="mb-1">
            {/* Category header (whole area toggles expansion) */}
            <div
              ref={el => (itemRefs.current[category.id] = el)}
              data-category-id={category.id}
              onClick={() => toggleCategoryExpansion(category.id)}
              className={`sticky top-0 z-10 flex cursor-pointer items-center justify-between overflow-y-auto px-5 py-3 text-sm backdrop-blur-sm transition-all duration-200 ease-out sm:text-base ${
                activeCategory === category.id && !activeSubcategory
                  ? 'text-foreground font-medium'
                  : 'text-foreground-500'
              } hover:bg-default-100`}>
              <span className="font-medium select-none">{category.name}</span>

              {category.subcategories?.length > 0 && (
                <Icon
                  icon={
                    expandedCategories[category.id]
                      ? 'lucide:chevron-down'
                      : 'lucide:chevron-right'
                  }
                  width={18}
                  className="transition-transform duration-300"
                />
              )}
            </div>

            {/* Subcategories (only clickable for navigation) */}
            {category.subcategories && expandedCategories[category.id] && (
              <div className="transition-all duration-300 ease-in-out">
                {category.subcategories.map(subcategory => (
                  <div
                    key={subcategory.id}
                    ref={el => (itemRefs.current[subcategory.id] = el)}
                    onClick={() => onSubcategoryClick(subcategory.id)}
                    className={`relative my-2 flex cursor-pointer items-center py-3 text-sm transition-all duration-200 ease-out ${
                      activeSubcategory === subcategory.id
                        ? 'bg-default-100 text-primary font-medium'
                        : 'text-foreground-400 hover:bg-default-100'
                    }`}>
                    <span className="ml-5">{subcategory.name}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
