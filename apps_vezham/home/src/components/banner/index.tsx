import { Icon } from '@iconify/react'
import React from 'react'

import { Link } from '@vx-oss/react'

import { BannerProps, SocialItem } from './types'
import {
  bannerText,
  bannerWrapper,
  contentWrapper,
  gradientContainer,
  gradientShapeStyle,
  gradientText,
  scheduleButton,
  scheduleInner,
  socialIcon,
  socialWrapper,
  spinningBackground
} from './variant'

const Banner: React.FC<BannerProps> = () => {
  const socialLinks: SocialItem[] = [
    {
      name: 'LinkedIn',
      href: '#',
      icon: props => <Icon {...props} icon="fontisto:linkedin" />
    },
    {
      name: 'X',
      href: '#',
      icon: props => <Icon {...props} icon="prime:twitter" />
    },
    {
      name: 'Facebook',
      href: '#',
      icon: props => <Icon {...props} icon="fontisto:facebook" />
    },
    {
      name: 'Instagram',
      href: '#',
      icon: props => <Icon {...props} icon="fontisto:instagram" />
    },
    {
      name: 'GitHub',
      href: '#',
      icon: props => <Icon {...props} icon="fontisto:github" />
    }
  ]

  return (
    <div className={bannerWrapper()}>
      {/* Background gradients */}
      <div
        aria-hidden="true"
        className={gradientContainer({ side: 'left', tone: 'light' })}>
        <div style={gradientShapeStyle} />
      </div>
      <div
        aria-hidden="true"
        className={gradientContainer({ side: 'right', tone: 'medium' })}>
        <div style={gradientShapeStyle} />
      </div>

      {/* Content */}
      <div className={contentWrapper()}>
        <a href="/contact" rel="noopener noreferrer" className={bannerText()}>
          <span aria-label="engage" className="hidden md:block" role="img">
            🤝🏻
          </span>
          <span className={gradientText()}>
            Discover endless possibilities! Schedule your free consultation
            today.
          </span>
        </a>

        <a
          href="/contact"
          rel="noopener noreferrer"
          className={scheduleButton()}>
          <span className={spinningBackground()} />
          <div className={scheduleInner()}>
            Schedule
            <Icon
              aria-hidden="true"
              className="transition-transform outline-none group-hover:translate-x-0.5 [&>path]:stroke-[2px]"
              icon="solar:arrow-right-linear"
              width={16}
            />
          </div>
        </a>
      </div>

      {/* Social icons */}
      {/* Social icons */}
      <div className={socialWrapper()}>
        {socialLinks.map((item: SocialItem) => (
          <Link
            key={item.name}
            href={item.href}
            isExternal
            className={socialIcon()}>
            <span className="sr-only">{item.name}</span>
            {item.icon({ 'aria-hidden': true, className: 'w-6' })}
          </Link>
        ))}
      </div>
    </div>
  )
}

export { Banner }
