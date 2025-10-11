import { Icon } from '@iconify/react'
import { Link } from '@tanstack/react-router'
import React from 'react'

type SubMenuItem = {
  name: string
  description: string
  icon: string
  link: string
}

type NavItem = {
  learn_more: any
  title: string
  items: SubMenuItem[]
}

type MobileSubmenuProps = {
  subMenus: NavItem[]
}

export default function MobileSubmenu({ subMenus }: MobileSubmenuProps) {
  const isExternalLink = (link: string): boolean => {
    return link.startsWith('http') || link.startsWith('https')
  }

  return (
    <div className="pl-4">
      {subMenus.map((navItem, index) => (
        <div key={index} className="mb-4">
          {navItem.title && (
            <p className="text-default-500 mb-2 text-xs font-bold">
              {navItem.title}
            </p>
          )}

          <div className="flex flex-col gap-3">
            {/* First 5 items */}
            {navItem.items.slice(0, 5).map((item, idx) => (
              <React.Fragment key={idx}>
                {isExternalLink(item.link) ? (
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:bg-default-100 dark:hover:bg-default-200/20 flex items-start gap-3 rounded-md p-2 transition-colors">
                    <div className="bg-primary/10 flex h-7 w-7 items-center justify-center rounded-md">
                      <Icon
                        icon={item.icon}
                        width={20}
                        className="text-primary"
                      />
                    </div>
                    <div>
                      <p className="text-sm font-medium">{item.name}</p>
                      {item.description && (
                        <p className="text-default-500 text-xs">
                          {item.description}
                        </p>
                      )}
                    </div>
                  </a>
                ) : (
                  <Link
                    to={item.link || '/'}
                    className="hover:bg-default-100 dark:hover:bg-default-200/20 flex items-start gap-3 rounded-md p-2 transition-colors">
                    <div className="bg-primary/10 flex h-7 w-7 items-center justify-center rounded-md">
                      <Icon
                        icon={item.icon}
                        width={20}
                        className="text-primary"
                      />
                    </div>
                    <div>
                      <p className="text-sm font-medium">{item.name}</p>
                      {item.description && (
                        <p className="text-default-500 text-xs">
                          {item.description}
                        </p>
                      )}
                    </div>
                  </Link>
                )}
              </React.Fragment>
            ))}

            {/* "Explore All Products" section */}
            {navItem.items.length > 5 && (
              <div className="border-divider mt-2 border-t pt-2">
                {isExternalLink(navItem.learn_more?.link) ? (
                  <a
                    href={
                      navItem.learn_more?.link ||
                      `/explore/${navItem.title.toLowerCase().replace(/\s+/g, '-')}`
                    }
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:bg-default-100 dark:hover:bg-default-200/20 flex w-full items-start gap-3 rounded-md p-2 transition-colors">
                    <div className="bg-primary/10 flex h-7 w-7 items-center justify-center rounded-md">
                      <Icon
                        icon="lucide:external-link"
                        width={20}
                        className="text-primary"
                      />
                    </div>
                    <div>
                      <p className="text-sm font-medium">
                        {navItem.learn_more?.label ||
                          `Explore All ${navItem.title}`}
                      </p>
                      <p className="text-default-500 text-xs">
                        View all {navItem.items.length} products
                      </p>
                    </div>
                  </a>
                ) : (
                  <Link
                    to={
                      navItem.learn_more?.link ||
                      `/explore/${navItem.title.toLowerCase().replace(/\s+/g, '-')}`
                    }
                    className="hover:bg-default-100 dark:hover:bg-default-200/20 flex w-full items-start gap-3 rounded-md p-2 transition-colors">
                    <div className="bg-primary/10 flex h-7 w-7 items-center justify-center rounded-md">
                      <Icon
                        icon="lucide:layout-grid"
                        width={20}
                        className="text-primary"
                      />
                    </div>
                    <div>
                      <p className="text-sm font-medium">
                        {navItem.learn_more?.label ||
                          `Explore All ${navItem.title}`}
                      </p>
                      <p className="text-default-500 text-xs">
                        View all {navItem.items.length} products
                      </p>
                    </div>
                  </Link>
                )}
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  )
}
