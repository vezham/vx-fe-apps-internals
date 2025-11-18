import React from 'react'

import { Button } from '@vx-oss/react'

import { HomeSection } from '../../components/herosection'
import { AppNavbar } from '../../components/navbar'
import { usePersonalize } from '../../store/useHomeSection'

const Herosection = () => {
  const { data: personal } = usePersonalize.list({})

  const navItems = personal?.navItems ?? []
  const items = personal?.tabItems ?? []

  const [isMenuOpen, setIsMenuOpen] = React.useState(false)
  const [isDrawerOpen, setIsDrawerOpen] = React.useState(false)

  const [activeNavbarItem, setActiveNavbarItem] = React.useState<string>('')

  const [selectedTab, setSelectedTab] = React.useState<string>('')
  const [activeItem, setActiveItem] = React.useState<any>(null)

  React.useEffect(() => {
    if (navItems.length > 0) {
      setActiveNavbarItem(navItems[0].key)
    }

    if (items.length > 0) {
      setSelectedTab(items[2].key)
      setActiveItem(items[2])
    }
  }, [navItems.length, items.length])

  const handleNavbarClick = (key: string) => {
    setActiveNavbarItem(key)
  }

  const handleTabClick = (item: any) => {
    setSelectedTab(item.key)
    setActiveItem(item)
    setIsDrawerOpen(true)
  }

  const handleSelectionChange = (key: string) => {
    setSelectedTab(key)
    const found = items.find(i => i.key === key)
    if (found) {
      setActiveItem(found)
      setIsDrawerOpen(true)
    }
  }

  return (
    <AppNavbar
      navItems={navItems}
      tabItems={items}
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
      activeNavbarItem={activeNavbarItem} // ✔ string
      selectedTab={selectedTab}
      activeItem={activeItem}
      isDrawerOpen={isDrawerOpen}
      onNavbarItemClick={handleNavbarClick}
      onTabClick={handleTabClick}
      onSelectionChange={handleSelectionChange}
      onDrawerOpenChange={setIsDrawerOpen}
      onDrawerClose={() => setIsDrawerOpen(false)}>
      <HomeSection {...personal?.cards?.welcome_message}></HomeSection>
    </AppNavbar>
  )
}

export { Herosection }
