import { Icon } from '@iconify/react'
import { Link } from '@tanstack/react-router'
import React from 'react'

import { MobileSubmenuProps, useMobileSubmenuProps } from './types'

const MobileSubmenu: React.FC<MobileSubmenuProps> = props => {
  const {
    subMenus,
    getContainerProps,
    getSectionProps,
    getTitleProps,
    getListProps,
    getLinkProps,
    getIconWrapperProps,
    getIconProps,
    getLabelProps,
    getDescriptionProps,
    getDividerProps
  } = useMobileSubmenuProps(props)

  const isExternalLink = (link: string) =>
    link.startsWith('http://') || link.startsWith('https://')

  const renderExtraLink = (
    linkObj: any,
    navItem: any,
    icon: string,
    fallbackText: string
  ) => {
    const label = linkObj?.label || `${fallbackText} ${navItem.title}`
    const url =
      linkObj?.link ||
      `/explore/${navItem.title.toLowerCase().replace(/\s+/g, '-')}`
    const Wrapper = isExternalLink(url) ? 'a' : Link
    const wrapperProps = isExternalLink(url)
      ? { href: url, target: '_blank', rel: 'noopener noreferrer' }
      : { to: url }

    return (
      <Wrapper {...wrapperProps} {...getLinkProps()}>
        <div {...getIconWrapperProps()}>
          <Icon icon={icon} width={20} {...getIconProps()} />
        </div>
        <div>
          <p {...getLabelProps()}>{label}</p>
          <p {...getDescriptionProps()}>
            View all {navItem.items.length} products
          </p>
        </div>
      </Wrapper>
    )
  }

  return (
    <div {...getContainerProps()}>
      {subMenus.map((navItem, index) => (
        <div key={index} {...getSectionProps()}>
          {navItem.title && <p {...getTitleProps()}>{navItem.title}</p>}
          <div {...getListProps()}>
            {navItem.items.slice(0, 5).map((item, idx) => {
              const Wrapper = isExternalLink(item.link) ? 'a' : Link
              const wrapperProps = isExternalLink(item.link)
                ? {
                    href: item.link,
                    target: '_blank',
                    rel: 'noopener noreferrer'
                  }
                : { to: item.link || '/' }

              return (
                <Wrapper key={idx} {...wrapperProps} {...getLinkProps()}>
                  <div {...getIconWrapperProps()}>
                    <Icon icon={item.icon} width={20} {...getIconProps()} />
                  </div>
                  <div>
                    <p {...getLabelProps()}>{item.name}</p>
                    {item.description && (
                      <p {...getDescriptionProps()}>{item.description}</p>
                    )}
                  </div>
                </Wrapper>
              )
            })}

            {navItem.items.length > 5 && (
              <>
                <div {...getDividerProps()}>
                  {renderExtraLink(
                    navItem.learn_more,
                    navItem,
                    'lucide:layout-grid',
                    'Explore All'
                  )}
                </div>
                <div {...getDividerProps()}>
                  {renderExtraLink(
                    navItem.more,
                    navItem,
                    'lucide:external-link',
                    'More'
                  )}
                </div>
              </>
            )}
          </div>
        </div>
      ))}
    </div>
  )
}

MobileSubmenu.displayName = 'MobileSubmenu'

export { MobileSubmenu }
