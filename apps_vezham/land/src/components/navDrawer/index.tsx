// import { Icon } from '@iconify/react'
// import { forwardRef } from '@vezham/react-utils'
// import { Drawer, DrawerBody, DrawerContent, DrawerHeader } from '@vx-oss/react'
// import { Props, useProps } from './types'
// const NavDrawer = forwardRef<'div', Props>((props, ref) => {
//   const {
//     getBaseProps,
//     getDrawerHeaderProps,
//     getHeaderTitleProps,
//     getDrawerBodyProps,
//     getGridProps,
//     getSectionProps,
//     getSectionTitleProps,
//     getItemsGridProps,
//     getItemProps,
//     getItemIconProps,
//     getItemContentProps,
//     getItemNameProps,
//     getItemDescriptionProps,
//     isOpen = false,
//     onOpenChange,
//     title = 'All Products',
//     sections = [],
//     placement = 'top'
//   } = useProps({
//     ...props,
//     ref
//   })
//   return (
//     <Drawer
//       isOpen={isOpen}
//       placement={placement}
//       size="xs"
//       onOpenChange={onOpenChange}>
//       <DrawerContent>
//         {(onClose: () => void) => (
//           <>
//             <DrawerHeader {...getDrawerHeaderProps()}>
//               <div>
//                 <div {...getHeaderTitleProps()}>{title}</div>
//               </div>
//             </DrawerHeader>
//             <DrawerBody {...getDrawerBodyProps()}>
//               <div {...getGridProps()}>
//                 {sections.map(section => (
//                   <div key={section.title} {...getSectionProps()}>
//                     <h3 {...getSectionTitleProps()}>{section.title}</h3>
//                     <div {...getItemsGridProps()}>
//                       {section.Items.map(item => (
//                         <a key={item.name} href={item.link} {...getItemProps()}>
//                           {item.icon ? (
//                             <span {...getItemIconProps()}>
//                               <Icon icon={item.icon} width="20" height="20" />
//                             </span>
//                           ) : (
//                             <span className="w-5" />
//                           )}
//                           <div {...getItemContentProps()}>
//                             <div {...getItemNameProps()}>{item.name}</div>
//                             {item.description && (
//                               <div {...getItemDescriptionProps()}>
//                                 {item.description}
//                               </div>
//                             )}
//                           </div>
//                         </a>
//                       ))}
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </DrawerBody>
//           </>
//         )}
//       </DrawerContent>
//     </Drawer>
//   )
// })
// NavDrawer.displayName = 'NavDrawer'
// export { NavDrawer }
import { Icon } from '@iconify/react'
import { forwardRef, useState } from 'react'

import {
  Card,
  CardBody,
  CardHeader,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerHeader
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
    getSectionTitleProps,
    getItemsGridProps,
    getItemProps,
    getItemIconProps,
    getItemContentProps,
    getItemNameProps,
    getItemDescriptionProps,
    isOpen = false,
    onOpenChange,
    title = 'All Products',
    sections = [],
    placement = 'top'
  } = useProps({
    ...props,
    ref
  })

  const [selectedSection, setSelectedSection] = useState(
    sections[0]?.title || ''
  )
  const [searchQuery, setSearchQuery] = useState('')
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

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
      onOpenChange={onOpenChange}>
      <DrawerContent>
        {(onClose: () => void) => (
          <>
            <DrawerHeader {...getDrawerHeaderProps()}>
              <div className="w-full">
                {/* Mobile Menu Toggle */}
                <div className="flex flex-col">
                  <div className="mb-4 flex items-center justify-between lg:hidden">
                    <button
                      onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                      className="rounded-lg p-2 hover:bg-neutral-100 dark:hover:bg-neutral-800">
                      <Icon
                        icon={isMobileMenuOpen ? 'lucide:x' : 'lucide:menu'}
                        width="20"
                        height="20"
                      />
                    </button>
                    <div
                      {...getHeaderTitleProps()}
                      className="text-lg font-semibold">
                      {title}
                    </div>
                    <div className="w-10"></div> {/* Spacer for balance */}
                  </div>
                  <div className="border-b border-neutral-200 pb-4 lg:hidden dark:border-neutral-800">
                    <div className="relative">
                      <Icon
                        icon="lucide:search"
                        className="absolute top-1/2 left-3 -translate-y-1/2 transform text-neutral-400"
                        width="16"
                        height="16"
                      />
                      <input
                        type="text"
                        placeholder="Search products..."
                        value={searchQuery}
                        onChange={e => setSearchQuery(e.target.value)}
                        className="w-full rounded-lg border border-neutral-300 bg-transparent py-2 pr-4 pl-10 text-sm focus:ring-2 focus:ring-blue-500 focus:outline-none dark:border-neutral-700"
                      />
                    </div>
                  </div>
                </div>

                {/* Desktop Title */}
                <div className="hidden lg:block">
                  <div {...getHeaderTitleProps()}>{title}</div>
                </div>
              </div>
            </DrawerHeader>

            <DrawerBody {...getDrawerBodyProps()}>
              <div className="flex h-full flex-col md:flex-row">
                {/* Mobile Sidebar - Only shown when menu is open */}
                {isMobileMenuOpen && (
                  <div className="mb-4 w-full border-b border-neutral-200 pb-4 lg:hidden dark:border-neutral-800">
                    <div className="space-y-1">
                      {filteredSections.map(section => (
                        <button
                          key={section.title}
                          onClick={() => {
                            setSelectedSection(section.title)
                            setIsMobileMenuOpen(false)
                          }}
                          className={`w-full rounded-lg px-3 py-3 text-left text-sm font-medium transition-colors ${
                            selectedSection === section.title
                              ? 'bg-black/10 dark:bg-white/5'
                              : 'hover:bg-black/10 dark:hover:bg-white/5'
                          }`}>
                          <div className="flex items-center justify-between">
                            <span>{section.title}</span>
                            <span className="rounded bg-black/20 px-2 py-1 text-xs dark:bg-neutral-700">
                              {section.Items.length}
                            </span>
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {/* Desktop Sidebar */}
                <div className="hidden w-1/3 border-r border-neutral-200 pr-5 lg:block dark:border-neutral-800">
                  {/* Desktop Search Bar */}
                  <div className="hidden border-b border-neutral-200 pb-4 md:block dark:border-neutral-800">
                    <div className="relative">
                      <Icon
                        icon="lucide:search"
                        className="absolute top-1/2 left-3 -translate-y-1/2 transform text-neutral-400"
                        width="16"
                        height="16"
                      />
                      <input
                        type="text"
                        placeholder="Search products..."
                        value={searchQuery}
                        onChange={e => setSearchQuery(e.target.value)}
                        className="w-full rounded-lg border border-neutral-300 bg-transparent py-2 pr-4 pl-10 text-sm focus:ring-2 focus:ring-blue-500 focus:outline-none dark:border-neutral-700"
                      />
                    </div>
                  </div>

                  {/* Desktop Navigation */}
                  <div className="p-2">
                    {filteredSections.map(section => (
                      <button
                        key={section.title}
                        onClick={() => setSelectedSection(section.title)}
                        className={`my-1 w-full rounded-lg px-3 py-3 text-left text-sm font-medium transition-colors ${
                          selectedSection === section.title
                            ? 'border border-transparent bg-black/10 dark:bg-white/5'
                            : 'border border-transparent hover:bg-black/10 dark:hover:bg-white/5'
                        }`}>
                        <div className="flex items-center justify-between">
                          <span>{section.title}</span>
                          <span className="rounded bg-black/20 px-2 py-1 text-xs dark:bg-neutral-700">
                            {section.Items.length}
                          </span>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Content Area */}
                <div className="flex-1 overflow-auto lg:px-4">
                  <div className="mb-4">
                    <h3 className="text-xl font-semibold text-neutral-900 dark:text-neutral-100">
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
                            className="bg-default-100 flex flex-col justify-between p-[28px]"
                            shadow="none">
                            <CardHeader className="flex flex-col gap-2 p-0">
                              <p className="text-foreground-700 text-left text-2xl leading-9 font-medium">
                                {category.name}
                              </p>
                              <p>{category.description}</p>
                            </CardHeader>
                            <CardBody className="text-default-500 flex flex-col items-end justify-end gap-2 p-0">
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
                    <div className="py-10 text-center">
                      <Icon
                        icon="lucide:search"
                        className="mx-auto mb-4 text-neutral-400"
                        width="30"
                        height="30"
                      />
                      <p className="text-neutral-500 dark:text-neutral-400">
                        No products found
                      </p>
                      <button
                        onClick={() => setSearchQuery('')}
                        className="mt-2 text-sm font-medium text-blue-600 dark:text-blue-400">
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
