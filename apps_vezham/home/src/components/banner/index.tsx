import { Icon } from '@iconify/react'

import { forwardRef } from '@vezham/react-utils'

import { Link } from '@vx-oss/react'

import { Props, useProps } from './types'

const Banner = forwardRef<'div', Props>((props, ref) => {
  const {
    getBaseProps,
    getGradientProps,
    getContentWrapperProps,
    getBannerTextProps,
    getGradientTextProps,
    getScheduleButtonProps,
    getSpinningBackgroundProps,
    getScheduleInnerProps,
    getSocialWrapperProps,
    getSocialIconProps,
    social
  } = useProps({ ...props, ref })

  const socialLinks = social || [
    {
      name: 'LinkedIn',
      href: '#',
      icon: (p: any) => <Icon {...p} icon="fontisto:linkedin" />
    },
    {
      name: 'X',
      href: '#',
      icon: (p: any) => <Icon {...p} icon="prime:twitter" />
    },
    {
      name: 'Facebook',
      href: '#',
      icon: (p: any) => <Icon {...p} icon="fontisto:facebook" />
    },
    {
      name: 'Instagram',
      href: '#',
      icon: (p: any) => <Icon {...p} icon="fontisto:instagram" />
    },
    {
      name: 'GitHub',
      href: '#',
      icon: (p: any) => <Icon {...p} icon="fontisto:github" />
    }
  ]

  return (
    <div {...getBaseProps()}>
      {/* Gradients */}
      <div aria-hidden="true" {...getGradientProps('left')}>
        <div
          style={{
            clipPath:
              'polygon(74.8% 41.9%,97.2% 73.2%,100% 34.9%,92.5% 0.4%,87.5% 0%,75% 28.6%,58.5% 54.6%,50.1% 56.8%,46.9% 44%,48.3% 17.4%,24.7% 53.9%,0% 27.9%,11.9% 74.2%,24.9% 54.1%,68.6% 100%,74.8% 41.9%)'
          }}
        />
      </div>
      <div aria-hidden="true" {...getGradientProps('right')}>
        <div
          style={{
            clipPath:
              'polygon(74.8% 41.9%,97.2% 73.2%,100% 34.9%,92.5% 0.4%,87.5% 0%,75% 28.6%,58.5% 54.6%,50.1% 56.8%,46.9% 44%,48.3% 17.4%,24.7% 53.9%,0% 27.9%,11.9% 74.2%,24.9% 54.1%,68.6% 100%,74.8% 41.9%)'
          }}
        />
      </div>

      {/* Content */}
      <div {...getContentWrapperProps()}>
        <a href="/contact" rel="noopener noreferrer" {...getBannerTextProps()}>
          <span aria-label="engage" className="hidden md:block" role="img">
            🤝🏻
          </span>
          <span {...getGradientTextProps()}>
            Discover endless possibilities! Schedule your free consultation
            today.
          </span>
        </a>

        <a
          href="/contact"
          rel="noopener noreferrer"
          {...getScheduleButtonProps()}>
          <span {...getSpinningBackgroundProps()} />
          <div {...getScheduleInnerProps()}>
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
      <div {...getSocialWrapperProps()}>
        {socialLinks.map(item => (
          <Link
            key={item.name}
            href={item.href}
            isExternal
            {...getSocialIconProps()}>
            <span className="sr-only">{item.name}</span>
            {item.icon({ 'aria-hidden': true, className: 'w-6' })}
          </Link>
        ))}
      </div>
    </div>
  )
})

Banner.displayName = 'Banner'
export { Banner }
