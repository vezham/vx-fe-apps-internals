import { Icon } from '@iconify/react'
import { Link } from '@tanstack/react-router'
import { AnimatePresence, motion } from 'framer-motion'
import React, { useState } from 'react'

type SubMenuItem = {
  name: string
  description: string
  icon: string
  link: string
}

type Link = {
  label: string
  link: string
}

type SubMenu = {
  more: any
  title: string
  learn_more?: Link
  items: SubMenuItem[]
}

type NavItem = {
  id: number
  label: string
  subMenus?: SubMenu[]
  link?: string
}

type Props = {
  navItems: NavItem[]
}

export function DropdownNavigation({ navItems }: Props) {
  const [openMenu, setOpenMenu] = React.useState<string | null>(null)

  const handleHover = (menuLabel: string | null) => {
    setOpenMenu(menuLabel)
  }

  const [isHover, setIsHover] = useState<number | null>(null)

  // Split navigation items - first 5 visible, rest under "More"
  const visibleNavItems = navItems.slice(0, 5)
  const moreNavItems = navItems.slice(5)

  // Add helper function to determine if a link is external
  const isExternalLink = (link: string): boolean => {
    return link?.startsWith('http') || link?.startsWith('https')
  }

  return (
    <div className="flex w-full items-start justify-center">
      <div className="flex flex-col items-center justify-center gap-5">
        <ul className="relative flex flex-wrap items-center justify-center space-x-0">
          {/* Render the first 5 navigation items */}
          {visibleNavItems.map(navItem => (
            <li
              key={navItem.label}
              className="dropdown-container relative"
              onMouseEnter={() => handleHover(navItem.label)}
              onMouseLeave={() => handleHover(null)}>
              <button
                className="group text-foreground-500 hover:text-foreground relative flex cursor-pointer items-center justify-center gap-1 px-3 py-1.5 text-sm whitespace-nowrap transition-colors duration-300 sm:px-4"
                onMouseEnter={() => setIsHover(navItem.id)}
                onMouseLeave={() => setIsHover(null)}>
                <span>{navItem.label}</span>
                {navItem.subMenus && (
                  <Icon
                    icon="lucide:chevron-down"
                    className={`h-4 w-4 transition-transform duration-300 group-hover:rotate-180 ${openMenu === navItem.label ? 'rotate-180' : ''}`}
                  />
                )}
                {(isHover === navItem.id || openMenu === navItem.label) && (
                  <motion.div
                    layoutId="hover-bg"
                    className="bg-primary/10 absolute inset-0 size-full rounded-full"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  />
                )}
              </button>

              <AnimatePresence>
                {openMenu === navItem.label && navItem.subMenus && (
                  <motion.div
                    className="dropdown-menu absolute top-full left-0 pt-2"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}>
                    <div className="bg-background border-divider max-h-[80vh] w-max max-w-[90vw] overflow-auto rounded-lg border p-4 shadow-lg">
                      <div className="flex flex-col gap-6 md:flex-row md:gap-9">
                        {navItem.subMenus.map(sub => (
                          <motion.div
                            layout
                            className="w-full min-w-[200px]"
                            key={sub.title}>
                            <h3 className="text-foreground-500 mb-4 text-sm font-medium capitalize">
                              {sub.title}
                            </h3>
                            <ul className="space-y-4">
                              {/* Show only first 5 items */}
                              {sub.items.slice(0, 5).map(item => (
                                <li key={item.name}>
                                  {isExternalLink(item.link) ? (
                                    <a
                                      href={item.link}
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      className="group flex items-start space-x-3">
                                      <div className="border-divider text-foreground group-hover:bg-content2 flex size-9 shrink-0 items-center justify-center rounded-md border transition-colors duration-300">
                                        <Icon
                                          icon={item.icon}
                                          className="h-5 w-5 flex-none"
                                        />
                                      </div>
                                      <div className="leading-5">
                                        <p className="text-foreground text-sm font-medium">
                                          {item.name}
                                        </p>
                                        <p className="text-foreground-500 group-hover:text-foreground text-xs transition-colors duration-300">
                                          {item.description}
                                        </p>
                                      </div>
                                    </a>
                                  ) : (
                                    <Link
                                      to={item.link || '/'}
                                      className="group flex items-start space-x-3">
                                      <div className="border-divider text-foreground group-hover:bg-content2 flex size-9 shrink-0 items-center justify-center rounded-md border transition-colors duration-300">
                                        <Icon
                                          icon={item.icon}
                                          className="h-5 w-5 flex-none"
                                        />
                                      </div>
                                      <div className="leading-5">
                                        <p className="text-foreground text-sm font-medium">
                                          {item.name}
                                        </p>
                                        <p className="text-foreground-500 group-hover:text-foreground text-xs transition-colors duration-300">
                                          {item.description}
                                        </p>
                                      </div>
                                    </Link>
                                  )}
                                </li>
                              ))}

                              {/* Add "Explore All Products" section if there are more than 5 items */}
                              {sub.items.length > 5 && (
                                <li>
                                  <div className="border-divider mt-2 border-t pt-2">
                                    {isExternalLink(sub.learn_more?.link) ? (
                                      <a
                                        href={
                                          sub.learn_more?.link ||
                                          `/${sub.title.toLowerCase().replace(/\s+/g, '-')}`
                                        }
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="group flex w-full items-center space-x-3">
                                        <div className="text-foreground group-hover:bg-content2 flex size-9 shrink-0 items-center justify-center rounded-md transition-colors duration-300">
                                          <Icon
                                            icon="lucide:external-link"
                                            className="h-5 w-5 flex-none"
                                          />
                                        </div>
                                        <div className="leading-5">
                                          <p className="text-foreground text-sm font-medium">
                                            {sub.learn_more?.label ||
                                              `Explore All ${sub.title}`}
                                          </p>
                                          {/* <p className="text-foreground-500 group-hover:text-foreground text-xs transition-colors duration-300">
                                            View all {sub.items.length} products
                                          </p> */}
                                        </div>
                                      </a>
                                    ) : (
                                      <Link
                                        to={
                                          sub.learn_more?.link ||
                                          `/${sub.title.toLowerCase().replace(/\s+/g, '-')}`
                                        }
                                        className="group flex w-full items-center space-x-3">
                                        <div className="text-foreground-500 group-hover:bg-content2 flex size-9 shrink-0 items-center justify-center rounded-md transition-colors duration-300">
                                          <Icon
                                            icon="lucide:layout-grid"
                                            className="h-5 w-5 flex-none"
                                          />
                                        </div>
                                        <div className="leading-5">
                                          <p className="text-foreground-500 text-sm font-medium">
                                            {sub.learn_more?.label ||
                                              `Explore All ${sub.title}`}
                                          </p>

                                          {/* <p className="text-foreground-500 group-hover:text-foreground text-xs transition-colors duration-300">
                                            View all {sub.items.length} products
                                          </p> */}
                                        </div>
                                      </Link>
                                    )}
                                  </div>
                                  <div className="border-divider mt-2 border-t pt-2">
                                    {isExternalLink(sub.more?.link) ? (
                                      <a
                                        href={
                                          sub.more?.link ||
                                          `/${sub.title.toLowerCase().replace(/\s+/g, '-')}`
                                        }
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="group flex w-full items-center space-x-3">
                                        <div className="text-foreground group-hover:bg-content2 flex size-9 shrink-0 items-center justify-center rounded-md transition-colors duration-300">
                                          <Icon
                                            icon="lucide:external-link"
                                            className="h-5 w-5 flex-none"
                                          />
                                        </div>
                                        <div className="leading-5">
                                          <p className="text-foreground text-sm font-medium">
                                            {sub.more?.label ||
                                              `Explore All ${sub.title}`}
                                          </p>
                                          {/* <p className="text-foreground-500 group-hover:text-foreground text-xs transition-colors duration-300">
                                            View all {sub.items.length} products
                                          </p> */}
                                        </div>
                                      </a>
                                    ) : (
                                      <Link
                                        to={
                                          sub.more?.link ||
                                          `/${sub.title.toLowerCase().replace(/\s+/g, '-')}`
                                        }
                                        className="group flex w-full items-center space-x-3">
                                        <div className="text-foreground-500 group-hover:bg-content2 flex size-9 shrink-0 items-center justify-center rounded-md transition-colors duration-300">
                                          <Icon
                                            icon="lucide:layout-grid"
                                            className="h-5 w-5 flex-none"
                                          />
                                        </div>
                                        <div className="leading-5">
                                          <p className="text-foreground-500 text-sm font-medium">
                                            {sub.more?.label ||
                                              `Explore All ${sub.title}`}
                                          </p>

                                          {/* <p className="text-foreground-500 group-hover:text-foreground text-xs transition-colors duration-300">
                                            View all {sub.items.length} products
                                          </p> */}
                                        </div>
                                      </Link>
                                    )}
                                  </div>
                                </li>
                              )}
                            </ul>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </li>
          ))}

          {/* Add "More" dropdown if there are more than 5 items */}
          {moreNavItems.length > 0 && (
            <li
              className="dropdown-container relative"
              onMouseEnter={() => handleHover('More')}
              onMouseLeave={() => handleHover(null)}>
              <button
                className="group text-foreground-500 hover:text-foreground relative flex cursor-pointer items-center justify-center gap-1 px-3 py-1.5 text-sm whitespace-nowrap transition-colors duration-300 sm:px-4"
                onMouseEnter={() => setIsHover(999)}
                onMouseLeave={() => setIsHover(null)}>
                <span>
                  {' '}
                  <Icon
                    icon="lucide:more-vertical"
                    className={`h-4 w-4 transition-transform duration-300 ${
                      openMenu === 'More' ? 'rotate-180' : ''
                    }`}
                  />
                </span>

                {(isHover === 999 || openMenu === 'More') && (
                  <motion.div
                    layoutId="hover-bg"
                    className="bg-primary/10 absolute inset-0 size-full rounded-full"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  />
                )}
              </button>

              <AnimatePresence>
                {openMenu === 'More' && (
                  <motion.div
                    className="dropdown-menu absolute top-full right-0 pt-2"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}>
                    <div className="bg-background border-divider w-56 overflow-auto rounded-lg border p-2 shadow-lg">
                      <ul className="space-y-1">
                        {moreNavItems.map(item => (
                          <li key={item.label}>
                            {isExternalLink(item.link) ? (
                              <a
                                href={item.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:bg-content2 flex items-center rounded-md px-3 py-2 transition-colors">
                                <span className="text-sm font-medium">
                                  {item.label}
                                </span>
                              </a>
                            ) : (
                              <Link
                                to={item.link || '/'}
                                className="hover:bg-content2 flex items-center rounded-md px-3 py-2 transition-colors">
                                <span className="text-sm font-medium">
                                  {item.label}
                                </span>
                              </Link>
                            )}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </li>
          )}
        </ul>
      </div>
    </div>
  )
}
