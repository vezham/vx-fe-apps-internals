import { Icon } from '@iconify/react'
import { Link } from '@tanstack/react-router'
import { AnimatePresence, motion } from 'framer-motion'
import { useState } from 'react'

import { dropdownProps, useDropdownProps } from './types'

const DropdownNavigation = (originalProps: dropdownProps) => {
  const [openMenu, setOpenMenu] = useState<string | null>(null)
  const [isHover, setIsHover] = useState<number | null>(null)

  const {
    navItems,
    getContainerProps,
    getInnerWrapperProps,
    getNavListProps,
    getNavButtonProps,
    getDropdownMenuProps,
    getMenuContentProps,
    getMenuContentMoreProps,
    getSubmenuWrapperProps,
    getSubmenuTitleProps,
    getSubmenuItemProps,
    getSubmenuIconProps,
    getSubmenuNameProps,
    getSubmenuDescProps,
    getExploreAllWrapperProps,
    getExploreAllLinkProps,
    getExploreAllIconProps,
    getExploreAllNameProps,
    getMoreItemLinkProps,
    getMoreItemLabelProps
  } = useDropdownProps(originalProps)

  const handleHover = (menuLabel: string | null) => setOpenMenu(menuLabel)
  const visibleNavItems = navItems.slice(0, 5)
  const moreNavItems = navItems.slice(5)
  const isExternalLink = (link: string) =>
    link?.startsWith('http') || link?.startsWith('https')

  return (
    <div {...getContainerProps()}>
      <div {...getInnerWrapperProps()}>
        <ul {...getNavListProps()}>
          {visibleNavItems.map(navItem => (
            <li
              key={navItem.label}
              onMouseEnter={() => handleHover(navItem.label)}
              onMouseLeave={() => handleHover(null)}>
              <button
                {...getNavButtonProps()}
                onMouseEnter={() => setIsHover(navItem.id)}
                onMouseLeave={() => setIsHover(null)}>
                <span>{navItem.label}</span>
                {navItem.subMenus && (
                  <Icon
                    icon="lucide:chevron-down"
                    className={`transition-transform duration-300 ${
                      openMenu === navItem.label ? 'rotate-180' : ''
                    }`}
                  />
                )}
                {(isHover === navItem.id || openMenu === navItem.label) && (
                  <motion.div
                    layoutId="hover-bg"
                    className="bg-primary/10 absolute inset-0 rounded-full"
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
                    {...getDropdownMenuProps()}
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}>
                    <div {...getMenuContentProps()}>
                      <div className="flex flex-col gap-6 md:flex-row md:gap-9">
                        {navItem.subMenus.map(sub => (
                          <motion.div
                            layout
                            {...getSubmenuWrapperProps()}
                            key={sub.title}>
                            <h3 {...getSubmenuTitleProps()}>{sub.title}</h3>
                            <ul>
                              {sub.items.slice(0, 5).map(item => (
                                <li key={item.name}>
                                  {isExternalLink(item.link) ? (
                                    <a
                                      href={item.link}
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      {...getSubmenuItemProps()}>
                                      <div {...getSubmenuIconProps()}>
                                        <Icon
                                          icon={item.icon}
                                          className="h-5 w-5 flex-none"
                                        />
                                      </div>
                                      <div>
                                        <p {...getSubmenuNameProps()}>
                                          {item.name}
                                        </p>
                                        <p {...getSubmenuDescProps()}>
                                          {item.description}
                                        </p>
                                      </div>
                                    </a>
                                  ) : (
                                    <Link
                                      to={item.link || '/'}
                                      {...getSubmenuItemProps()}>
                                      <div {...getSubmenuIconProps()}>
                                        <Icon
                                          icon={item.icon}
                                          className="h-5 w-5 flex-none"
                                        />
                                      </div>
                                      <div>
                                        <p {...getSubmenuNameProps()}>
                                          {item.name}
                                        </p>
                                        <p {...getSubmenuDescProps()}>
                                          {item.description}
                                        </p>
                                      </div>
                                    </Link>
                                  )}
                                </li>
                              ))}

                              {sub.items.length > 5 && (
                                <li>
                                  {sub.learn_more && sub.more ? (
                                    <>
                                      <div {...getExploreAllWrapperProps()}>
                                        <Link
                                          to={sub.learn_more.link}
                                          {...getExploreAllLinkProps()}>
                                          <div {...getExploreAllIconProps()}>
                                            <Icon
                                              icon="lucide:layout-grid"
                                              className="h-5 w-5 flex-none"
                                            />
                                          </div>
                                          <div>
                                            <p {...getExploreAllNameProps()}>
                                              {sub.learn_more.label}
                                            </p>
                                          </div>
                                        </Link>
                                      </div>

                                      <div {...getExploreAllWrapperProps()}>
                                        <Link
                                          to={sub.more.link}
                                          {...getExploreAllLinkProps()}>
                                          <div {...getExploreAllIconProps()}>
                                            <Icon
                                              icon="lucide:layout-grid"
                                              className="h-5 w-5 flex-none"
                                            />
                                          </div>
                                          <div>
                                            <p {...getExploreAllNameProps()}>
                                              {sub.more.label}
                                            </p>
                                          </div>
                                        </Link>
                                      </div>
                                    </>
                                  ) : (
                                    <div {...getExploreAllWrapperProps()}>
                                      <Link
                                        to={
                                          sub.learn_more?.link ||
                                          sub.more?.link ||
                                          `/${sub.title
                                            .toLowerCase()
                                            .replace(/\s+/g, '-')}`
                                        }
                                        {...getExploreAllLinkProps()}>
                                        <div {...getExploreAllIconProps()}>
                                          <Icon
                                            icon="lucide:layout-grid"
                                            className="h-5 w-5 flex-none"
                                          />
                                        </div>
                                        <div>
                                          <p {...getExploreAllNameProps()}>
                                            {sub.learn_more?.label ||
                                              sub.more?.label ||
                                              `Explore All ${sub.title}`}
                                          </p>
                                        </div>
                                      </Link>
                                    </div>
                                  )}
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

          {moreNavItems.length > 0 && (
            <li
              onMouseEnter={() => handleHover('More')}
              onMouseLeave={() => handleHover(null)}>
              <button
                {...getNavButtonProps()}
                onMouseEnter={() => setIsHover(999)}
                onMouseLeave={() => setIsHover(null)}>
                <Icon icon="lucide:more-vertical" width={16} height={16} />
                {(isHover === 999 || openMenu === 'More') && (
                  <motion.div
                    layoutId="hover-bg"
                    className="bg-primary/10 absolute inset-0 rounded-full"
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
                    {...getDropdownMenuProps()}
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}>
                    <div {...getMenuContentMoreProps()}>
                      <ul>
                        {moreNavItems.map(item => (
                          <li key={item.label}>
                            {isExternalLink(item.link) ? (
                              <a
                                href={item.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                {...getMoreItemLinkProps()}>
                                <span {...getMoreItemLabelProps()}>
                                  {item.label}
                                </span>
                              </a>
                            ) : (
                              <Link
                                to={item.link || '/'}
                                {...getMoreItemLinkProps()}>
                                <span {...getMoreItemLabelProps()}>
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

DropdownNavigation.displayName = 'DropdownNavigation'
export { DropdownNavigation }
