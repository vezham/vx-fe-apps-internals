'use client'

import { Icon } from '@iconify/react'
import React from 'react'

import { Button, Link } from '@vx-oss/react'

import { DevelopersCompProps, useDevelopersProps } from './types'

const Developers = React.forwardRef<HTMLDivElement, DevelopersCompProps>(
  (props, ref) => {
    const {
      getBaseProps,
      getContainerProps,
      getTitleProps,
      getGitHubLinkProps,
      getGitHubIconProps,
      getGitHubTextProps,
      getFeaturesGridProps,
      getFeatureItemProps,
      getFeatureIconProps,
      getFeatureTitleProps,
      getFeatureSubtitleProps
    } = useDevelopersProps({
      ...props,
      ref
    })

    const features = [
      {
        icon: 'ph:tag-duotone',
        title: '100% open source.',
        subtitle: 'No vendor-locking'
      },
      {
        icon: 'ph:code-duotone',
        title: 'Easy-to-use APIs',
        subtitle: 'Quick implementation'
      },
      {
        icon: 'ph:sparkle-duotone',
        title: 'Multiple AI providers',
        subtitle: 'Generative AI ready'
      },
      {
        icon: 'ph:lightning-duotone',
        title: 'Fast, reliable',
        subtitle: 'Scalable'
      }
    ]

    return (
      <section {...getBaseProps()}>
        <div {...getContainerProps()}>
          {/* Title */}
          <h2 {...getTitleProps()}>Built for everyone. made for developers</h2>

          {/* Small Link */}
          <Link {...getGitHubLinkProps()} href="https://github.com" isExternal>
            <Icon {...getGitHubIconProps()} icon="mdi:github" />
            <span {...getGitHubTextProps()}>See GitHub repository</span>
          </Link>

          {/* Feature Items */}
          <div {...getFeaturesGridProps()}>
            {features.map((item, index) => (
              <div key={index} {...getFeatureItemProps()}>
                <Icon {...getFeatureIconProps()} icon={item.icon} />
                <p {...getFeatureTitleProps()}>{item.title}</p>
                <p {...getFeatureSubtitleProps()}>{item.subtitle}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    )
  }
)

Developers.displayName = 'Developers'

export { Developers }
