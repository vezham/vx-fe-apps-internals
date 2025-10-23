import { Icon } from '@iconify/react'
import { Link } from '@tanstack/react-router'
import { AnimatePresence, motion } from 'framer-motion'
import { useState } from 'react'

import { DropdownNavigationProps } from './types'
import { dropdownVariants as dv } from './variant'

export function DropdownNavigation({ navItems }: DropdownNavigationProps) {
  const [openMenu, setOpenMenu] = useState<string | null>(null)
  const [isHover, setIsHover] = useState<number | null>(null)

  const handleHover = (menuLabel: string | null) => setOpenMenu(menuLabel)

  const visibleNavItems = navItems.slice(0, 5)
  const moreNavItems = navItems.slice(5)

  const isExternalLink = (link: string) =>
    link?.startsWith('http') || link?.startsWith('https')

  return (
    <div className={dv.base.container}>
      <div className={dv.base.innerWrapper}>
        <ul className={dv.base.navList}>
          {visibleNavItems.map(navItem => (
            <li
              key={navItem.label}
              className="dropdown-container relative"
              onMouseEnter={() => handleHover(navItem.label)}
              onMouseLeave={() => handleHover(null)}>
              <button
                className={dv.base.navButton}
                onMouseEnter={() => setIsHover(navItem.id)}
                onMouseLeave={() => setIsHover(null)}>
                <span>{navItem.label}</span>
                {navItem.subMenus && (
                  <Icon
                    icon="lucide:chevron-down"
                    className={`${dv.variants.moreButtonIcon} ${openMenu === navItem.label ? 'rotate-180' : ''}`}
                  />
                )}
                {(isHover === navItem.id || openMenu === navItem.label) && (
                  <motion.div
                    layoutId="hover-bg"
                    className={dv.variants.navButtonHoverBg}
                    initial={dv.animations.hoverBg.initial}
                    animate={dv.animations.hoverBg.animate}
                    exit={dv.animations.hoverBg.exit}
                    transition={dv.animations.hoverBg.transition}
                  />
                )}
              </button>

              <AnimatePresence>
                {openMenu === navItem.label && navItem.subMenus && (
                  <motion.div
                    className={`${dv.base.dropdownMenu} left-0`}
                    initial={dv.animations.dropdown.initial}
                    animate={dv.animations.dropdown.animate}
                    exit={dv.animations.dropdown.exit}
                    transition={dv.animations.dropdown.transition}>
                    <div className={dv.base.menuContent}>
                      <div className="flex flex-col gap-6 md:flex-row md:gap-9">
                        {navItem.subMenus.map(sub => (
                          <motion.div
                            layout
                            className="w-full min-w-[200px]"
                            key={sub.title}>
                            <h3 className={dv.variants.submenuTitle}>
                              {sub.title}
                            </h3>
                            <ul className="space-y-4">
                              {sub.items.slice(0, 5).map(item => (
                                <li key={item.name}>
                                  {isExternalLink(item.link) ? (
                                    <a
                                      href={item.link}
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      className={dv.variants.submenuItem}>
                                      <div className={dv.variants.submenuIcon}>
                                        <Icon
                                          icon={item.icon}
                                          className="h-5 w-5 flex-none"
                                        />
                                      </div>
                                      <div
                                        className={dv.base.submenuTextWrapper}>
                                        <p className={dv.variants.submenuName}>
                                          {item.name}
                                        </p>
                                        <p className={dv.variants.submenuDesc}>
                                          {item.description}
                                        </p>
                                      </div>
                                    </a>
                                  ) : (
                                    <Link
                                      to={item.link || '/'}
                                      className={dv.variants.submenuItem}>
                                      <div className={dv.variants.submenuIcon}>
                                        <Icon
                                          icon={item.icon}
                                          className="h-5 w-5 flex-none"
                                        />
                                      </div>
                                      <div
                                        className={dv.base.submenuTextWrapper}>
                                        <p className={dv.variants.submenuName}>
                                          {item.name}
                                        </p>
                                        <p className={dv.variants.submenuDesc}>
                                          {item.description}
                                        </p>
                                      </div>
                                    </Link>
                                  )}
                                </li>
                              ))}

                              {sub.items.length > 5 && (
                                <li>
                                  {/* Case 1: Both learn_more and more exist → render both */}
                                  {sub.learn_more && sub.more ? (
                                    <>
                                      <div
                                        className={dv.base.exploreAllWrapper}>
                                        <Link
                                          to={sub.learn_more.link}
                                          className={
                                            dv.variants.exploreAllLink
                                          }>
                                          <div
                                            className={
                                              dv.variants.exploreAllIcon
                                            }>
                                            <Icon
                                              icon="lucide:layout-grid"
                                              className="h-5 w-5 flex-none"
                                            />
                                          </div>
                                          <div
                                            className={dv.base.exploreAllText}>
                                            <p
                                              className={
                                                dv.variants.exploreAllNameMore
                                              }>
                                              {sub.learn_more.label}
                                            </p>
                                          </div>
                                        </Link>
                                      </div>

                                      <div
                                        className={dv.base.exploreAllWrapper}>
                                        <Link
                                          to={sub.more.link}
                                          className={
                                            dv.variants.exploreAllLink
                                          }>
                                          <div
                                            className={
                                              dv.variants.exploreAllIcon
                                            }>
                                            <Icon
                                              icon="lucide:layout-grid"
                                              className="h-5 w-5 flex-none"
                                            />
                                          </div>
                                          <div
                                            className={dv.base.exploreAllText}>
                                            <p
                                              className={
                                                dv.variants.exploreAllNameMore
                                              }>
                                              {sub.more.label}
                                            </p>
                                          </div>
                                        </Link>
                                      </div>
                                    </>
                                  ) : (
                                    // Case 2: Only one exists or fallback → render single "Explore All"
                                    <div className={dv.base.exploreAllWrapper}>
                                      <Link
                                        to={
                                          sub.learn_more?.link ||
                                          sub.more?.link ||
                                          `/${sub.title.toLowerCase().replace(/\s+/g, '-')}`
                                        }
                                        className={dv.variants.exploreAllLink}>
                                        <div
                                          className={
                                            dv.variants.exploreAllIcon
                                          }>
                                          <Icon
                                            icon="lucide:layout-grid"
                                            className="h-5 w-5 flex-none"
                                          />
                                        </div>
                                        <div className={dv.base.exploreAllText}>
                                          <p
                                            className={
                                              dv.variants.exploreAllNameMore
                                            }>
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
              className="dropdown-container relative"
              onMouseEnter={() => handleHover('More')}
              onMouseLeave={() => handleHover(null)}>
              <button
                className={dv.base.navButton}
                onMouseEnter={() => setIsHover(999)}
                onMouseLeave={() => setIsHover(null)}>
                <Icon
                  icon="lucide:more-vertical"
                  className={dv.variants.moreButtonIcon}
                />
                {(isHover === 999 || openMenu === 'More') && (
                  <motion.div
                    layoutId="hover-bg"
                    className={dv.variants.navButtonHoverBg}
                    initial={dv.animations.hoverBg.initial}
                    animate={dv.animations.hoverBg.animate}
                    exit={dv.animations.hoverBg.exit}
                    transition={dv.animations.hoverBg.transition}
                  />
                )}
              </button>

              <AnimatePresence>
                {openMenu === 'More' && (
                  <motion.div
                    className={`${dv.base.dropdownMenu} right-0`}
                    initial={dv.animations.dropdown.initial}
                    animate={dv.animations.dropdown.animate}
                    exit={dv.animations.dropdown.exit}
                    transition={dv.animations.dropdown.transition}>
                    <div className={dv.base.menuContentMore}>
                      <ul className="space-y-1">
                        {moreNavItems.map(item => (
                          <li key={item.label}>
                            {isExternalLink(item.link) ? (
                              <a
                                href={item.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={dv.base.moreItemLink}>
                                <span className={dv.base.moreItemLabel}>
                                  {item.label}
                                </span>
                              </a>
                            ) : (
                              <Link
                                to={item.link || '/'}
                                className={dv.base.moreItemLink}>
                                <span className={dv.base.moreItemLabel}>
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
