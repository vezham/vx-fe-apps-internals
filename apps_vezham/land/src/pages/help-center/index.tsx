import React from 'react'

import { HelpCenter } from '../../components/appResources/help-center'
import { Support } from '../../components/appResources/support'
import { HomeSection } from '../../components/herosection-II'
import { AppNavbar } from '../../components/navbar'
import { Footer } from '../../layouts/footers'
import { useHelpCenter } from '../../store/useHelpcenter'
import { usePersonalize } from '../../store/useHomeSection'

const HelpComp = () => {
  const { data: personal } = usePersonalize.list({})
  const { data: helpCenter } = useHelpCenter.homelist({})

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
    <div className="">
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
        <HomeSection {...helpCenter?.cards?.welcome_message} />
        <HelpCenter />

        <Footer />
      </AppNavbar>
    </div>
  )
}

export { HelpComp }
