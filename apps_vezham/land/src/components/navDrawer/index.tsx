import { Icon } from '@iconify/react'
import { useRouter } from '@tanstack/react-router'
import { forwardRef, useState } from 'react'

import {
  Card,
  CardBody,
  CardHeader,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
  Link
} from '@vx-oss/react'

import { Props, useProps } from './types'

const NavDrawer = forwardRef<'div', Props>((props, ref) => {
  const {
    getBaseProps,
    getDrawerHeaderProps,
    getHeaderTitleProps,
    getDrawerBodyProps,
    getGridProps,
    getSectionProps,
    getMobileMenuToggleProps,
    getHeaderContainerProps,
    getMobileHeaderProps,
    getMobileMenuContainerProps,
    getMobileTitleProps,
    getMobileSpacerProps,
    getSearchContainerProps,
    getSearchWrapperProps,
    getSearchIconProps,
    getSearchInputProps,
    getDesktopTitleProps,
    getContentContainerProps,
    getMobileSidebarProps,
    getMobileSectionListProps,
    getMobileSectionButtonProps,
    getSectionCountProps,
    getDesktopSidebarProps,
    getDesktopSearchContainerProps,
    getDesktopNavigationProps,
    getDesktopSectionButtonProps,
    getContentAreaProps,
    getContentHeaderProps,
    getContentTitleProps,
    getCardProps,
    getCardHeaderProps,
    getCardTitleProps,
    getCardBodyProps,
    getEmptyStateProps,
    getEmptyStateIconProps,
    getEmptyStateTextProps,
    getClearSearchButtonProps,
    isOpen = false,
    onOpenChange,
    navitems,
    activeItemKey,
    sections = [],
    placement = 'top'
  } = useProps({
    ...props,
    ref
  })

  const router = useRouter()

  const [selectedSection, setSelectedSection] = useState(
    sections[0]?.title || ''
  )
  const [searchQuery, setSearchQuery] = useState('')
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const activeNavItem = navitems?.find(item => item.key === activeItemKey)

  // Filter sections based on search query
  const filteredSections = sections
    .map(section => {
      const sectionTitleMatches = section.title
        .toLowerCase()
        .includes(searchQuery.toLowerCase())

      // If section title matches, show all items in that section
      if (sectionTitleMatches) {
        return section
      }

      // Otherwise, filter items within the section
      const filteredItems = section.Items.filter(
        item =>
          item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          item.description?.toLowerCase().includes(searchQuery.toLowerCase())
      )

      return {
        ...section,
        Items: filteredItems
      }
    })
    .filter(section => section.Items.length > 0)

  const currentSection =
    filteredSections.find(section => section.title === selectedSection) ||
    filteredSections[0]

  return (
    <Drawer
      isOpen={isOpen}
      placement={placement}
      size="xs"
      onOpenChange={onOpenChange}
      {...getBaseProps()}>
      <DrawerContent>
        {(onClose: () => void) => (
          <>
            <DrawerHeader {...getDrawerHeaderProps()}>
              <div {...getHeaderContainerProps()}>
                {/* Mobile Menu Toggle */}
                <div {...getMobileHeaderProps()}>
                  <div {...getMobileMenuContainerProps()}>
                    <button
                      onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                      {...getMobileMenuToggleProps()}>
                      <Icon
                        icon={isMobileMenuOpen ? 'lucide:x' : 'lucide:menu'}
                        width="20"
                        height="20"
                      />
                    </button>
                    <div {...getHeaderTitleProps()} {...getMobileTitleProps()}>
                      <Link
                        isExternal={activeNavItem?.href?.startsWith('http')}
                        showAnchorIcon={activeNavItem?.href?.startsWith('http')}
                        color="foreground"
                        onPress={() =>
                          router.navigate({ to: activeNavItem?.href })
                        }>
                        {activeNavItem?.label}
                      </Link>
                    </div>
                    <div {...getMobileSpacerProps()}></div>
                  </div>
                  <div {...getSearchContainerProps()}>
                    <div {...getSearchWrapperProps()}>
                      <Icon
                        icon="lucide:search"
                        {...getSearchIconProps()}
                        width="16"
                        height="16"
                      />
                      <input
                        type="text"
                        placeholder="Search products..."
                        value={searchQuery}
                        onChange={e => setSearchQuery(e.target.value)}
                        {...getSearchInputProps()}
                      />
                    </div>
                  </div>
                </div>

                {/* Desktop Title */}
                <div {...getDesktopTitleProps()}>
                  <Link
                    isExternal
                    showAnchorIcon
                    color="foreground"
                    onPress={() =>
                      router.navigate({ to: activeNavItem?.href })
                    }>
                    {activeNavItem?.label}
                  </Link>
                </div>
              </div>
            </DrawerHeader>

            <DrawerBody {...getDrawerBodyProps()}>
              <div {...getContentContainerProps()}>
                {/* Mobile Sidebar - Only shown when menu is open */}
                {isMobileMenuOpen && (
                  <div {...getMobileSidebarProps()}>
                    <div {...getMobileSectionListProps()}>
                      {filteredSections.map(section => (
                        <button
                          key={section.title}
                          onClick={() => {
                            setSelectedSection(section.title)
                            setIsMobileMenuOpen(false)
                          }}
                          {...getMobileSectionButtonProps({
                            isActive: selectedSection === section.title
                          })}>
                          <div className="flex items-center justify-between">
                            <span>{section.title}</span>
                            <span {...getSectionCountProps()}>
                              {section.Items.length}
                            </span>
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {/* Desktop Sidebar */}
                <div {...getDesktopSidebarProps()}>
                  {/* Desktop Search Bar */}
                  <div {...getDesktopSearchContainerProps()}>
                    <div {...getSearchWrapperProps()}>
                      <Icon
                        icon="lucide:search"
                        {...getSearchIconProps()}
                        width="16"
                        height="16"
                      />
                      <input
                        type="text"
                        placeholder="Search products..."
                        value={searchQuery}
                        onChange={e => setSearchQuery(e.target.value)}
                        {...getSearchInputProps()}
                      />
                    </div>
                  </div>

                  {/* Desktop Navigation */}
                  <div {...getDesktopNavigationProps()}>
                    {filteredSections.map(section => (
                      <button
                        key={section.title}
                        onClick={() => setSelectedSection(section.title)}
                        {...getDesktopSectionButtonProps({
                          isActive: selectedSection === section.title
                        })}>
                        <div className="flex items-center justify-between">
                          <span>{section.title}</span>
                          <span {...getSectionCountProps()}>
                            {section.Items.length}
                          </span>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Content Area */}
                <div {...getContentAreaProps()}>
                  <div {...getContentHeaderProps()}>
                    <h3 {...getContentTitleProps()}>
                      {currentSection?.title || ''}
                    </h3>
                  </div>

                  {currentSection && (
                    <div {...getSectionProps()}>
                      <div {...getGridProps()}>
                        {currentSection.Items.map(category => (
                          <Card
                            key={category.name}
                            isPressable
                            {...getCardProps()}
                            shadow="none">
                            <CardHeader {...getCardHeaderProps()}>
                              <p {...getCardTitleProps()}>{category.name}</p>
                              <p>{category.description}</p>
                            </CardHeader>
                            <CardBody {...getCardBodyProps()}>
                              <Icon
                                icon={category.icon}
                                width="20"
                                height="20"
                              />
                            </CardBody>
                          </Card>
                        ))}
                      </div>
                    </div>
                  )}

                  {!currentSection && (
                    <div {...getEmptyStateProps()}>
                      <Icon
                        icon="lucide:search"
                        {...getEmptyStateIconProps()}
                        width="30"
                        height="30"
                      />
                      <p {...getEmptyStateTextProps()}>No products found</p>
                      <button
                        onClick={() => setSearchQuery('')}
                        {...getClearSearchButtonProps()}>
                        Clear search
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </DrawerBody>
          </>
        )}
      </DrawerContent>
    </Drawer>
  )
})

NavDrawer.displayName = 'NavDrawer'

export { NavDrawer }
