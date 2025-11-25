import { Icon } from '@iconify/react'
import { Link, useRouter } from '@tanstack/react-router'
import { motion } from 'framer-motion'
import { MailIcon } from 'lucide-react'
import { useCallback, useEffect, useRef, useState } from 'react'
import React from 'react'

import {
  Button,
  Card,
  CardHeader,
  Checkbox,
  Image,
  Input,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  Textarea,
  useDisclosure,
  useDraggable
} from '@vx-oss/react'

import { usePersonalize } from '../../store/useHomeSection'
import { useShortcut } from '../../store/useShortcut'
import { Shortcut } from '../popover'
import { NavbarTabs } from '../tabs'
import { ProductCompProps, useProductCompProps } from './types'

const ProductComp = React.forwardRef<HTMLDivElement, ProductCompProps>(
  (props, ref) => {
    const {
      getBaseProps,
      getFloatingNavProps,
      getTabsContentWrapProps,
      getTabsButtonProps,
      getSearchSectionProps,
      getSearchInputProps,
      getSearchCloseButtonProps,
      getSearchButtonProps,
      getProductsContainerProps,
      getCategoryTitleProps,
      getCategoryNameProps,
      getCategoryDescriptionProps,
      getProductsGridProps,
      getProductCardProps,
      getProductImageContainerProps,
      getProductImageProps,
      getProductGradientProps,
      getProductCardHeaderProps,
      getProductIconProps,
      getProductCategoryProps,
      getProductTitleProps,
      getSearchNotFoundProps,
      getSearchNotFoundIconProps,
      getSearchNotFoundTitleProps,
      getSearchNotFoundDescriptionProps,
      getEmptyStateProps,
      getEmptyStateIconProps,
      getEmptyStateTitleProps,
      getEmptyStateDescriptionProps
    } = useProductCompProps({
      ...props,
      ref
    })

    const { data: personal } = usePersonalize.list({})
    const { data: shortcuts } = useShortcut.list({})
    const { isOpen, onOpen, onOpenChange } = useDisclosure()
    const router = useRouter()
    const targetRef = React.useRef(null)
    const { moveProps } = useDraggable({ targetRef, isDisabled: !isOpen })

    const searchInputRef = useRef<HTMLInputElement>(null)
    const searchSectionRef = useRef<HTMLDivElement>(null) // Add this ref

    // States
    const [selectedTab, setSelectedTab] = useState('all')
    const [areTabsCollapsed, setAreTabsCollapsed] = useState(false)
    const [isSearchExpanded, setIsSearchExpanded] = useState(false)
    const [filterValue, setFilterValue] = useState('')

    // Click outside handler
    useEffect(() => {
      const handleClickOutside = (event: MouseEvent) => {
        // If search is expanded and click is outside search section, close search
        if (isSearchExpanded && searchSectionRef.current) {
          if (!searchSectionRef.current.contains(event.target as Node)) {
            closeSearch()
          }
        }
      }

      // Add event listener
      document.addEventListener('mousedown', handleClickOutside)

      // Cleanup
      return () => {
        document.removeEventListener('mousedown', handleClickOutside)
      }
    }, [isSearchExpanded])

    // Get the All Products navigation item
    const allProductsItem = personal?.navItems?.find(
      item => item.key === 'allproducts'
    )
    const subItems = allProductsItem?.subItems || []

    // Convert subItems to tab format for NavbarTabs and add "All" tab
    const tabItems = [
      {
        label: 'All Products',
        key: 'all',
        subItems: []
      },
      ...subItems.map(subItem => ({
        label: subItem.title,
        key: subItem.title.toLowerCase().replace(/\s+/g, '-'),
        subItems: []
      }))
    ]

    // Handle card click to navigate to product detail page
    const handleCardClick = (item: any) => {
      const productId = item.name.toLowerCase().replace(/\s+/g, '-')
      router.navigate({ to: `/vezham/products/${productId}` })
    }

    // Handle tab selection
    const handleTabChange = (key: string) => {
      setSelectedTab(key)
    }

    const toggleSearch = useCallback(() => {
      setIsSearchExpanded(true)
      setAreTabsCollapsed(true)
    }, [])

    const closeSearch = () => {
      if (filterValue) {
        setFilterValue('')
      } else {
        setIsSearchExpanded(false)
        setAreTabsCollapsed(false)
      }
    }

    useEffect(() => {
      const handleResize = () => {
        if (isSearchExpanded) {
          closeSearch()
        }
      }

      window.addEventListener('resize', handleResize)

      return () => {
        window.removeEventListener('resize', handleResize)
      }
    }, [isSearchExpanded])

    const toggleTabs = () => {
      setAreTabsCollapsed(prev => !prev)

      if (areTabsCollapsed) {
        setIsSearchExpanded(false)
      }
    }

    // Get products based on selected tab and search filter
    const getDisplayProducts = () => {
      let products = []

      if (selectedTab === 'all') {
        // Return all products from all categories
        products = subItems.flatMap(subItem => subItem.Items)
      } else {
        // Return products from specific category
        const currentCategory = subItems.find(
          subItem =>
            subItem.title.toLowerCase().replace(/\s+/g, '-') === selectedTab
        )
        products = currentCategory?.Items || []
      }

      // Apply search filter if exists
      if (filterValue) {
        products = products.filter(
          item =>
            item.name.toLowerCase().includes(filterValue.toLowerCase()) ||
            item.description?.toLowerCase().includes(filterValue.toLowerCase())
        )
      }

      return products
    }

    const displayProducts = getDisplayProducts()
    const isMobile = typeof window !== 'undefined' && window.innerWidth < 768

    // Search Not Found Component
    const SearchNotFound = ({ searchQuery }: { searchQuery: string }) => {
      return (
        <div {...getSearchNotFoundProps()}>
          <Icon
            {...getSearchNotFoundIconProps()}
            icon="solar:magnifier-linear"
          />
          <h3 {...getSearchNotFoundTitleProps()}>No results found</h3>
          <p {...getSearchNotFoundDescriptionProps()}>
            No results found for{' '}
            <span className="font-medium">"{searchQuery}"</span>. Try different
            keywords or check the spelling.
          </p>
        </div>
      )
    }

    const AppsIcon = ({ width = 18 }: { width?: number }) => (
      <svg width={width} height={width} viewBox="0 0 20 20" fill="currentColor">
        {[4, 10, 16].map(x =>
          [4, 10, 16].map(y => <circle key={`${x}-${y}`} cx={x} cy={y} r="2" />)
        )}
      </svg>
    )

    const SearchIcon = ({ size = 18 }: { size?: number }) => (
      <svg
        aria-hidden="true"
        fill="none"
        height={size}
        width={size}
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth="1.5">
        <circle cx="11.5" cy="11.5" r="9.5" />
        <line x1="22" y1="22" x2="20" y2="20" strokeWidth="1.5" />
      </svg>
    )

    return (
      <div {...getBaseProps()}>
        <div {...getFloatingNavProps()}>
          {/* Tabs Section */}
          <motion.div
            animate={{
              width: areTabsCollapsed ? 40 : isMobile ? 550 : 550
            }}
            className={
              areTabsCollapsed ? '' : getTabsContentWrapProps().className
            }>
            {areTabsCollapsed ? (
              <Button
                {...getTabsButtonProps()}
                onPress={toggleTabs}
                endContent={<AppsIcon width={16} />}
              />
            ) : (
              <div>
                <NavbarTabs
                  className="scrollbar-hide inline-flex"
                  items={tabItems}
                  selectedTab={selectedTab}
                  onSelectionChange={handleTabChange}
                />
              </div>
            )}
          </motion.div>

          {/* Search Section */}
          <motion.div
            ref={searchSectionRef} // Add the ref here
            {...getSearchSectionProps()}
            animate={{
              width: isSearchExpanded ? (isMobile ? '100%' : 550) : 40
            }}>
            {isSearchExpanded ? (
              <Input
                ref={searchInputRef}
                {...getSearchInputProps()}
                value={filterValue}
                onValueChange={setFilterValue}
                endContent={
                  <button
                    {...getSearchCloseButtonProps()}
                    onClick={closeSearch}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2}
                      stroke="currentColor">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                }
              />
            ) : (
              <Button
                {...getSearchButtonProps()}
                onPress={toggleSearch}
                endContent={<SearchIcon size={16} />}
              />
            )}
          </motion.div>
        </div>

        {/* Products Grid */}
        <div {...getProductsContainerProps()}>
          {/* Category Title */}
          <div {...getCategoryTitleProps()}>
            <h1 {...getCategoryNameProps()}>
              {selectedTab === 'all'
                ? 'All Products'
                : subItems.find(
                    sub =>
                      sub.title.toLowerCase().replace(/\s+/g, '-') ===
                      selectedTab
                  )?.title || 'Products'}
            </h1>
            <p {...getCategoryDescriptionProps()}>
              {selectedTab === 'all'
                ? 'Explore all our products and find the perfect solution for your needs'
                : `Explore our ${subItems.find(sub => sub.title.toLowerCase().replace(/\s+/g, '-') === selectedTab)?.title.toLowerCase()} and find the perfect solution for your needs`}
            </p>
          </div>

          {/* Products Grid */}
          {displayProducts.length > 0 ? (
            <div {...getProductsGridProps()}>
              {displayProducts.map((item, index) => (
                <Card
                  key={`${item.name}-${index}`}
                  {...getProductCardProps()}
                  onPress={() => handleCardClick(item)}>
                  {/* Product Image with Gradient Overlay */}
                  <div {...getProductImageContainerProps()}>
                    <Image
                      removeWrapper
                      alt={item.name}
                      {...getProductImageProps()}
                      src={
                        item.detailedItems?.[0]?.image ||
                        'https://heroui.com/images/card-example-2.jpeg'
                      }
                    />
                    {/* Gradient Overlay */}
                    <div {...getProductGradientProps()} />
                  </div>

                  {/* Content Overlay */}
                  <CardHeader {...getProductCardHeaderProps()}>
                    <div>
                      <Icon {...getProductIconProps()} icon={item.icon} />
                      <p {...getProductCategoryProps()}>{item.name}</p>
                    </div>
                    <h4 {...getProductTitleProps()}>{item.description}</h4>
                  </CardHeader>
                </Card>
              ))}
            </div>
          ) : filterValue ? (
            /* Search Not Found State */
            <SearchNotFound searchQuery={filterValue} />
          ) : (
            /* Empty State (No products in category) */
            <div {...getEmptyStateProps()}>
              <Icon {...getEmptyStateIconProps()} icon="lucide:package" />
              <h3 {...getEmptyStateTitleProps()}>No products found</h3>
              <p {...getEmptyStateDescriptionProps()}>
                There are no products available in this category.
              </p>
            </div>
          )}
        </div>

        <div className="pointer-events-auto fixed top-22 right-0 z-[20] -translate-y-1/2 transform">
          <Shortcut onOpen={onOpen} shortcuts={shortcuts} />
        </div>

        <Modal
          ref={targetRef}
          isOpen={isOpen}
          onOpenChange={onOpenChange}
          backdrop="opaque"
          placement="top-center"
          scrollBehavior="inside"
          size="sm"
          classNames={{
            backdrop:
              'bg-linear-to-t from-zinc-900 to-zinc-900/10 backdrop-opacity-20'
          }}>
          <ModalContent>
            {onClose => (
              <>
                <ModalHeader {...moveProps} className="flex flex-col gap-1">
                  Request Demo
                </ModalHeader>
                <ModalBody>
                  <Input
                    label="Name"
                    placeholder="Enter your name"
                    variant="bordered"
                  />
                  <Input
                    label="Company Name"
                    placeholder="Enter your name"
                    variant="bordered"
                  />
                  <Input
                    endContent={
                      <MailIcon className="text-default-400 pointer-events-none shrink-0 text-2xl" />
                    }
                    label="Email"
                    placeholder="Enter your email"
                    variant="bordered"
                  />
                  <Input
                    label="Phone"
                    placeholder="Enter your number"
                    variant="bordered"
                  />
                  <Input
                    label="Country"
                    placeholder="Enter your country"
                    variant="bordered"
                  />
                  <Textarea />

                  <div className="flex justify-between px-1 py-2">
                    <Checkbox
                      classNames={{
                        label: 'text-small'
                      }}>
                      Remember me
                    </Checkbox>
                    <Link color="primary" href="#" size="sm">
                      Forgot password?
                    </Link>
                  </div>
                </ModalBody>
                <ModalFooter>
                  <Button className="w-full" color="primary" onPress={onClose}>
                    Submit
                  </Button>
                </ModalFooter>
              </>
            )}
          </ModalContent>
        </Modal>
      </div>
    )
  }
)

ProductComp.displayName = 'ProductComp'

export { ProductComp }
