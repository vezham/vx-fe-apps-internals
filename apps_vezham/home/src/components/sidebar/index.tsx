import { Icon } from '@iconify/react'
import React from 'react'

import { forwardRef } from '@vezham/react-utils'

import { SidebarProps, useProps } from './types'

const Sidebar = forwardRef<'div', SidebarProps>((props, ref) => {
  const {
    categories,
    activeCategory,
    activeSubcategory,
    onCategoryClick,
    onSubcategoryClick,
    getBaseProps,
    getContainerProps,
    getCategoryWrapperProps,
    getCategoryHeaderProps,
    getSubcategoriesWrapperProps,
    getSubcategoryProps
  } = useProps({ ...props, ref })

  const [expandedCategories, setExpandedCategories] = React.useState<
    Record<string, boolean>
  >(() => {
    const saved = localStorage.getItem('expandedCategories')
    return saved ? JSON.parse(saved) : {}
  })

  const sidebarRef = React.useRef<HTMLDivElement>(null)
  const contentRefs = React.useRef<Record<string, HTMLDivElement | null>>({})

  const toggleCategoryExpansion = (categoryId: string) => {
    setExpandedCategories(prev => {
      const newState = { ...prev, [categoryId]: !prev[categoryId] }
      localStorage.setItem('expandedCategories', JSON.stringify(newState))
      return newState
    })
    onCategoryClick?.(categoryId)
  }

  // Auto-expand for active category / subcategory
  React.useEffect(() => {
    setExpandedCategories(prev => {
      const newState = { ...prev }
      if (activeCategory && !prev[activeCategory])
        newState[activeCategory] = true

      if (activeSubcategory) {
        for (const cat of categories) {
          if (cat.subcategories?.some(sub => sub.id === activeSubcategory)) {
            newState[cat.id] = true
            break
          }
        }
      }

      localStorage.setItem('expandedCategories', JSON.stringify(newState))
      return newState
    })
  }, [activeCategory, activeSubcategory, categories])

  // Smooth scroll active subcategory into view
  React.useEffect(() => {
    if (activeSubcategory && contentRefs.current[activeSubcategory]) {
      const element = contentRefs.current[activeSubcategory]
      if (element && sidebarRef.current) {
        const sidebarTop = sidebarRef.current.getBoundingClientRect().top
        const elementTop = element.getBoundingClientRect().top
        const offset = elementTop - sidebarTop - 100

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
    <div ref={sidebarRef} {...getBaseProps()}>
      <div {...getContainerProps()}>
        {categories.map(category => (
          <div key={category.id} {...getCategoryWrapperProps()}>
            <div
              ref={el => {
                contentRefs.current[category.id] = el ?? null
              }}
              onClick={() => toggleCategoryExpansion(category.id)}
              {...getCategoryHeaderProps(
                activeCategory === category.id && !activeSubcategory
              )()}>
              <span>{category.name}</span>
              {category.subcategories?.length ? (
                <Icon
                  icon={
                    expandedCategories[category.id]
                      ? 'lucide:chevron-down'
                      : 'lucide:chevron-right'
                  }
                  width={18}
                />
              ) : null}
            </div>

            {category.subcategories && expandedCategories[category.id] && (
              <div {...getSubcategoriesWrapperProps()}>
                {category.subcategories.map(subcategory => (
                  <div
                    key={subcategory.id}
                    ref={el => {
                      contentRefs.current[subcategory.id] = el ?? null
                    }}
                    onClick={() => onSubcategoryClick(subcategory.id)}
                    {...getSubcategoryProps(
                      activeSubcategory === subcategory.id
                    )()}>
                    {subcategory.name}
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
})

Sidebar.displayName = 'Sidebar'
export { Sidebar }
