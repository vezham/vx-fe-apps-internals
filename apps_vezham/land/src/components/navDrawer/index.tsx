import { Icon } from '@iconify/react'
import { useRouter } from '@tanstack/react-router'
import { useState } from 'react'

import { forwardRef } from '@vezham/react-utils'

import {
  Button,
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

  const [selectedSection, setSelectedSection] = useState('Featured')
  const [searchQuery, setSearchQuery] = useState('')
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const activeNavItem = navitems?.find(item => item.key === activeItemKey)

  const featuredSection = {
    title: 'Featured',
    isFeatured: true,
    sections: sections.map(section => ({
      ...section,
      Items: section.Items.slice(0, 3)
    }))
  }

  const allSections = [featuredSection, ...sections]

  const filteredSections = allSections
    .map(section => {
      const sectionTitleMatches = section.title
        .toLowerCase()
        .includes(searchQuery.toLowerCase())

      if (sectionTitleMatches) {
        return section
      }

      if (section.isFeatured) {
        const filteredSubSections = section.sections
          .map(subSection => {
            const filteredItems = subSection.Items.filter(
              item =>
                item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                item.description
                  ?.toLowerCase()
                  .includes(searchQuery.toLowerCase())
            )
            return { ...subSection, Items: filteredItems }
          })
          .filter(subSection => subSection.Items.length > 0)

        return { ...section, sections: filteredSubSections }
      }

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
    .filter(section =>
      section.isFeatured
        ? section.sections.length > 0
        : section.Items.length > 0
    )

  const currentSection =
    filteredSections.find(section => section.title === selectedSection) ||
    filteredSections[0]

  const handleCardClick = (item: any) => {
    if (item.detailedItems && item.detailedItems.length > 0) {
      const productId = item.name.toLowerCase().replace(/\s+/g, '-')
      router.navigate({ to: `/vezham/products/${productId}` })
      onOpenChange?.(false)
      return
    }
  }

  const handleViewAllProducts = () => {
    router.navigate({ to: '/vezham/products' })
    onOpenChange?.(false)
  }

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
                        isExternal
                        showAnchorIcon
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
                              {section.isFeatured
                                ? section.sections.reduce(
                                    (total, sub) => total + sub.Items.length,
                                    0
                                  )
                                : section.Items.length}
                            </span>
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                <div {...getDesktopSidebarProps()}>
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
                            {section.isFeatured
                              ? section.sections.reduce(
                                  (total, sub) => total + sub.Items.length,
                                  0
                                )
                              : section.Items.length}
                          </span>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>

                <div {...getContentAreaProps()}>
                  <div {...getContentHeaderProps()}>
                    <h3 {...getContentTitleProps()}>
                      {currentSection?.title || 'Featured'}
                    </h3>
                    {selectedSection === 'Featured' && (
                      <p className="text-default-500 mt-1 text-sm">
                        Top products from all categories
                      </p>
                    )}
                  </div>

                  {currentSection && (
                    <div {...getSectionProps()}>
                      {currentSection.isFeatured ? (
                        <div className="space-y-8">
                          {currentSection.sections.map(section => (
                            <div key={section.title} className="space-y-4">
                              <h4 className="text-foreground text-lg font-semibold">
                                {section.title}
                              </h4>

                              {currentSection && (
                                <div {...getSectionProps()}>
                                  <div {...getGridProps()}>
                                    {section.Items.map(category => (
                                      <Card
                                        key={category.name}
                                        isPressable
                                        {...getCardProps()}
                                        onPress={() =>
                                          handleCardClick(category)
                                        }
                                        shadow="none">
                                        <CardHeader {...getCardHeaderProps()}>
                                          <p {...getCardTitleProps()}>
                                            {category.name}
                                          </p>
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
                            </div>
                          ))}

                          <div className="border-default-200 mt-8 border-t pt-6">
                            <div className="text-center">
                              <Button
                                variant="flat"
                                color="primary"
                                onPress={handleViewAllProducts}
                                endContent={
                                  <Icon icon="lucide:arrow-right" width={16} />
                                }>
                                Explore All Products
                              </Button>
                            </div>
                          </div>
                        </div>
                      ) : (
                        <div {...getGridProps()}>
                          {currentSection.Items.map(category => (
                            <Card
                              key={category.name}
                              isPressable
                              {...getCardProps()}
                              onPress={() => handleCardClick(category)}
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
                      )}
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
