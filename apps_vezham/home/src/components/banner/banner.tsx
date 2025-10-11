import { Icon } from '@iconify/react'
import type { IconProps } from '@iconify/react'
import React from 'react'

import { Button, Link } from '@vx-oss/react'

type SocialIconProps = Omit<IconProps, 'icon'>

const Banner = () => {
  const social = [
    {
      name: 'LinkedIn',
      href: '#',
      icon: (props: SocialIconProps) => (
        <Icon {...props} icon="fontisto:linkedin" />
      )
    },
    {
      name: 'X',
      href: '#',
      icon: (props: SocialIconProps) => <Icon {...props} icon="prime:twitter" />
    },
    {
      name: 'Facebook',
      href: '#',
      icon: (props: SocialIconProps) => (
        <Icon {...props} icon="fontisto:facebook" />
      )
    },
    {
      name: 'Instagram',
      href: '#',
      icon: (props: SocialIconProps) => (
        <Icon {...props} icon="fontisto:instagram" />
      )
    },
    // {
    //   name: "Twitter",
    //   href: "#",
    //   icon: (props: SocialIconProps) => <Icon {...props} icon="fontisto:twitter" />,
    // },
    {
      name: 'GitHub',
      href: '#',
      icon: (props: SocialIconProps) => (
        <Icon {...props} icon="fontisto:github" />
      )
    }
  ]
  return (
    <>
      <div className="bg-background border-divider relative isolate z-30 flex items-center gap-x-16 overflow-hidden border-b-1 px-6 py-2 sm:px-3.5 sm:before:flex-0">
        <div
          aria-hidden="true"
          className="absolute top-1/2 left-[max(-7rem,calc(50%-52rem))] -z-10 -translate-y-1/2 transform-gpu blur-2xl">
          <div
            className="aspect-[577/310] w-[36.0625rem] bg-gradient-to-r from-[#e4c2d1] to-[#9089fc] opacity-20 dark:from-[#F54180] dark:to-[#338EF7] dark:opacity-10"
            style={{
              clipPath:
                'polygon(74.8% 41.9%, 97.2% 73.2%, 100% 34.9%, 92.5% 0.4%, 87.5% 0%, 75% 28.6%, 58.5% 54.6%, 50.1% 56.8%, 46.9% 44%, 48.3% 17.4%, 24.7% 53.9%, 0% 27.9%, 11.9% 74.2%, 24.9% 54.1%, 68.6% 100%, 74.8% 41.9%)'
            }}
          />
        </div>
        <div
          aria-hidden="true"
          className="absolute top-1/2 left-[max(45rem,calc(50%+8rem))] -z-10 -translate-y-1/2 transform-gpu blur-2xl">
          <div
            className="aspect-[577/310] w-[36.0625rem] bg-gradient-to-r from-[#e4c2d1] to-[#9089fc] opacity-30 dark:from-[#F54180] dark:to-[#338EF7] dark:opacity-20"
            style={{
              clipPath:
                'polygon(74.8% 41.9%, 97.2% 73.2%, 100% 34.9%, 92.5% 0.4%, 87.5% 0%, 75% 28.6%, 58.5% 54.6%, 50.1% 56.8%, 46.9% 44%, 48.3% 17.4%, 24.7% 53.9%, 0% 27.9%, 11.9% 74.2%, 24.9% 54.1%, 68.6% 100%, 74.8% 41.9%)'
            }}
          />
        </div>
        <div className="flex w-3/4 items-center justify-between gap-x-3 md:justify-center">
          <a
            className="text-small text-foreground flex items-end transition-opacity hover:opacity-80 sm:text-[0.93rem]"
            href="/contact"
            rel="noopener noreferrer">
            <span aria-label="engage" className="hidden md:block" role="img">
              🤝🏻
            </span>
            <span
              className="animate-text-gradient inline-flex bg-[linear-gradient(90deg,#D6009A_0%,#8a56cc_50%,#D6009A_100%)] bg-clip-text font-medium text-transparent md:ml-1 dark:bg-[linear-gradient(90deg,#FFEBF9_0%,#8a56cc_50%,#FFEBF9_100%)]"
              style={{
                fontSize: 'inherit',
                backgroundSize: '200%',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                color: 'transparent'
              }}>
              Discover endless possibilities! Schedule your free consultation
              today.&nbsp;
            </span>
          </a>
          <a
            className="group text-foreground focus-visible:outline-primary relative flex min-w-[120px] items-center gap-1.5 overflow-hidden rounded-full p-[1px] font-semibold shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
            href="/contact"
            rel="noopener noreferrer">
            <span className="absolute inset-[-1000%] animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#F54180_0%,#338EF7_50%,#F54180_100%)]" />
            <div className="bg-background group-hover:bg-background/70 transition-background text-foreground inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full px-3 py-1 text-sm font-medium backdrop-blur-3xl">
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
        <div className="hidden space-x-2 md:flex">
          {social.map(item => (
            <Link
              key={item.name}
              isExternal
              className="text-default-400 hover:text-primary-500"
              href={item.href}>
              <span className="sr-only">{item.name}</span>
              <item.icon aria-hidden="true" className="w-6" />
            </Link>
          ))}
        </div>
      </div>

      {/* <div className="flex w-full items-center gap-x-3 border-b-1 border-divider bg-gradient-to-r from-default-100 via-danger-100 to-secondary-100 px-6 py-2 sm:px-3.5 sm:before:flex-1">
      <p className="text-small text-foreground">
        <Link className="text-inherit" href="/#contact">
        Discover endless possibilities! Schedule your free consultation today.&nbsp;
        </Link>
      </p>
      <Button
        as={Link}
        className="group relative h-9 overflow-hidden bg-transparent text-small font-normal roun"
        color="default"
        endContent={
          <Icon
            className="hidden sm:flex flex-none outline-none transition-transform group-data-[hover=true]:translate-x-0.5 [&>path]:stroke-[2]"
            icon="solar:arrow-right-linear"
            width={16}
          />
        }
        href="/#contact"
        style={{
          border: "solid 2px transparent",
          backgroundImage: `linear-gradient(hsl(var(--heroui-danger-50)), hsl(var(--heroui-danger-50))), linear-gradient(to right, #F871A0, #9353D3)`,
          backgroundOrigin: "border-box",
          backgroundClip: "padding-box, border-box",
        }}
        variant="bordered"
      >
        Schedule
      </Button>
      <div className="flex flex-1 justify-end">
        <Button isIconOnly aria-label="Close Banner" className="-m-1" size="sm" variant="light">
          <Icon aria-hidden="true" className="text-default-500" icon="lucide:x" width={20} />
        </Button>
      </div>
    </div> */}
    </>
  )
}

export { Banner }
