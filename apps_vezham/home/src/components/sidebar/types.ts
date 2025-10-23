export type Subcategory = {
  id: string
  name: string
}

export type Category = {
  id: string
  name: string
  subcategories?: Subcategory[]
}

export interface SidebarProps {
  categories: Category[]
  activeCategory: string
  activeSubcategory: string
  onCategoryClick: (categoryId: string) => void
  onSubcategoryClick: (subcategoryId: string) => void
}
