// MobileSubmenu.tsx
import { Icon } from '@iconify/react'
import { Link } from '@tanstack/react-router'

import { MobileSubmenuProps } from './types'
import { mobileSubmenuVariants as v } from './variant'

export default function MobileSubmenu({ subMenus }: MobileSubmenuProps) {
  const isExternalLink = (link: string): boolean =>
    link.startsWith('http') || link.startsWith('https')

  return (
    <div className={v.base.container}>
      {subMenus.map((navItem, index) => (
        <div key={index} className={v.base.section}>
          {navItem.title && <p className={v.base.title}>{navItem.title}</p>}

          <div className={v.base.list}>
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
                <Wrapper key={idx} {...wrapperProps} className={v.base.link}>
                  <div className={v.base.iconWrapper}>
                    <Icon icon={item.icon} width={20} className={v.base.icon} />
                  </div>
                  <div>
                    <p className={v.base.label}>{item.name}</p>
                    {item.description && (
                      <p className={v.base.description}>{item.description}</p>
                    )}
                  </div>
                </Wrapper>
              )
            })}

            {/* Learn more section */}
            {navItem.items.length > 5 && (
              <>
                <div className={v.base.divider}>
                  {renderExtraLink(
                    navItem.learn_more,
                    navItem,
                    'lucide:layout-grid',
                    'Explore All'
                  )}
                </div>
                <div className={v.base.divider}>
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

  function renderExtraLink(
    linkObj: any,
    navItem: any,
    icon: string,
    fallbackText: string
  ) {
    const label = linkObj?.label || `${fallbackText} ${navItem.title}`
    const url =
      linkObj?.link ||
      `/explore/${navItem.title.toLowerCase().replace(/\s+/g, '-')}`
    const Wrapper = isExternalLink(url) ? 'a' : Link
    const wrapperProps = isExternalLink(url)
      ? { href: url, target: '_blank', rel: 'noopener noreferrer' }
      : { to: url }

    return (
      <Wrapper {...wrapperProps} className={v.base.link}>
        <div className={v.base.iconWrapper}>
          <Icon icon={icon} width={20} className={v.base.icon} />
        </div>
        <div>
          <p className={v.base.label}>{label}</p>
          <p className={v.base.description}>
            View all {navItem.items.length} products
          </p>
        </div>
      </Wrapper>
    )
  }
}
