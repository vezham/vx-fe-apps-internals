import React from 'react'

import { AppNavbar } from '../../components/navbar'
import { items, navItems } from '../../components/navbar/data'

const Herosection = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false)
  const [isDrawerOpen, setIsDrawerOpen] = React.useState(false)
  const [activeNavbarItem, setActiveNavbarItem] = React.useState('features')
  const [selectedTab, setSelectedTab] = React.useState(items[2].key)
  const [activeItem, setActiveItem] = React.useState(items[2])

  const handleTabClick = (item: any) => {
    setSelectedTab(item.key)
    setActiveItem(item)
    setIsDrawerOpen(true)
  }

  const handleNavbarClick = (key: string) => {
    setActiveNavbarItem(key)
  }

  const handleSelectionChange = (key: string) => {
    setSelectedTab(key)
    const item = items.find(item => item.key === key)
    if (item) {
      setActiveItem(item)
      setIsDrawerOpen(true)
    }
  }

  const handleDrawerClose = () => {
    setIsDrawerOpen(false)
  }

  return (
    <AppNavbar
      navItems={navItems}
      tabItems={items}
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
      activeNavbarItem={activeNavbarItem}
      selectedTab={selectedTab}
      activeItem={activeItem}
      isDrawerOpen={isDrawerOpen}
      onNavbarItemClick={handleNavbarClick}
      onTabClick={handleTabClick}
      onSelectionChange={handleSelectionChange}
      onDrawerOpenChange={setIsDrawerOpen}
      onDrawerClose={handleDrawerClose}
    />
  )
}

export { Herosection }
