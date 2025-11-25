'use client'

import { Icon } from '@iconify/react'

import { Button, Link } from '@vx-oss/react'

const Developers = () => {
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
    <section className="bg-default-50 w-full py-20" id="developers">
      <div className="mx-auto max-w-5xl px-6 text-center">
        {/* Title */}
        <h2 className="text-foreground text-3xl font-bold md:text-5xl">
          Built for everyone. made for developers
        </h2>

        {/* Small Link */}
        <Link
          href="https://github.com"
          isExternal
          className="text-foreground/70 hover:text-foreground mt-4 inline-flex items-center gap-3 text-sm">
          <Icon icon="mdi:github" className="text-xl" />
          <span>See GitHub repository</span>
        </Link>

        {/* Feature Items */}
        <div className="mt-12 grid grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-4">
          {features.map((item, index) => (
            <div
              key={index}
              className="hover:bg-default-100 flex flex-col items-center rounded-lg p-3 text-center">
              <Icon
                icon={item.icon}
                className="text-foreground mb-2 text-2xl"
              />
              <p className="text-foreground font-medium">{item.title}</p>
              <p className="text-foreground/60 text-sm">{item.subtitle}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export { Developers }
