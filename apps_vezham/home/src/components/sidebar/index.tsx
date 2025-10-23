import { Icon } from '@iconify/react'
import React from 'react'

import type { SidebarProps } from './types'
import { styles } from './variant'

export const Sidebar: React.FC<SidebarProps> = ({
  categories,
  activeCategory,
  activeSubcategory,
  onCategoryClick,
  onSubcategoryClick
}) => {
  const [expandedCategories, setExpandedCategories] = React.useState<
    Record<string, boolean>
  >(() => {
    const saved = localStorage.getItem('expandedCategories')
    if (saved) return JSON.parse(saved)
    return {}
  })

  const sidebarRef = React.useRef<HTMLDivElement>(null)
  const itemRefs = React.useRef<Record<string, HTMLDivElement | null>>({})

  const toggleCategoryExpansion = (categoryId: string) => {
    setExpandedCategories(prev => {
      const newState = { ...prev, [categoryId]: !prev[categoryId] }
      localStorage.setItem('expandedCategories', JSON.stringify(newState))
      return newState
    })
    onCategoryClick?.(categoryId)
  }

  React.useEffect(() => {
    setExpandedCategories(prev => {
      const newState = { ...prev }
      if (activeCategory && !prev[activeCategory])
        newState[activeCategory] = true

      if (activeSubcategory) {
        for (const cat of categories) {
          if (cat.subcategories?.some(sub => sub.id === activeSubcategory)) {
            if (!prev[cat.id]) newState[cat.id] = true
            break
          }
        }
      }
      localStorage.setItem('expandedCategories', JSON.stringify(newState))
      return newState
    })
  }, [activeCategory, activeSubcategory, categories])

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
    <div ref={sidebarRef} className={styles.wrapper}>
      <div className={styles.container}>
        {categories.map(category => (
          <div key={category.id} className={styles.categoryWrapper}>
            <div
              ref={el => {
                itemRefs.current[category.id] = el ?? null
              }}
              onClick={() => toggleCategoryExpansion(category.id)}
              className={`${styles.categoryHeader} ${
                activeCategory === category.id && !activeSubcategory
                  ? styles.activeCategory
                  : styles.inactiveCategory
              }`}>
              <span className={styles.categoryName}>{category.name}</span>
              {category.subcategories?.length ? (
                <Icon
                  icon={
                    expandedCategories[category.id]
                      ? 'lucide:chevron-down'
                      : 'lucide:chevron-right'
                  }
                  width={18}
                  className={styles.chevron}
                />
              ) : null}
            </div>

            {category.subcategories && expandedCategories[category.id] && (
              <div className={styles.subcategoriesWrapper}>
                {category.subcategories.map(subcategory => (
                  <div
                    key={subcategory.id}
                    ref={el => {
                      itemRefs.current[subcategory.id] = el ?? null
                    }}
                    onClick={() => onSubcategoryClick(subcategory.id)}
                    className={
                      activeSubcategory === subcategory.id
                        ? `${styles.subcategory} ${styles.activeSubcategory}`
                        : `${styles.subcategory} ${styles.inactiveSubcategory}`
                    }>
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
}

export default Sidebar
