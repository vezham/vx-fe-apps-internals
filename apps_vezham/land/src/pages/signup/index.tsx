'use client'

import { Icon } from '@iconify/react'

import { Button, Divider, Input, Link } from '@vx-oss/react'
import { useTheme } from '@vx-oss/use-theme'

export default function Component() {
  interface NavbarLogoProps {
    visible: boolean
  }

  const NavbarLogo = ({ visible = false }: NavbarLogoProps) => {
    const { theme } = useTheme()
    const isDark = theme === 'dark'
    return (
      <a href="#">
        <img
          src={
            isDark
              ? 'https://static.cdn.vezham.com/images/logo-white.png'
              : 'https://static.cdn.vezham.com/images/logo-black.png'
          }
          alt="Vezham Logo"
          className="h-10 w-10 w-auto transition-all duration-300"
        />
      </a>
    )
  }

  return (
    <div className="flex h-screen w-full items-center justify-center">
      <div className="rounded-large flex w-full max-w-sm flex-col gap-4 px-8 pt-6 pb-10">
        <div className="flex flex-col items-center pb-6">
          <NavbarLogo visible={false} />
          <p className="text-xl font-medium">Welcome</p>
          <p className="text-small text-default-500">
            Create an account to get started
          </p>
        </div>
        <form
          className="flex flex-col gap-3"
          onSubmit={e => e.preventDefault()}>
          <Input
            isRequired
            label="Email Address"
            name="email"
            placeholder="Enter your email"
            type="email"
            variant="bordered"
          />
          <Button
            color="primary"
            startContent={
              <Icon
                className="pointer-events-none text-2xl"
                icon="solar:letter-bold"
              />
            }
            type="submit">
            Continue with Email
          </Button>
        </form>
        <div className="flex items-center gap-4 py-2">
          <Divider className="flex-1" />
          <p className="text-tiny text-default-500 shrink-0">OR</p>
          <Divider className="flex-1" />
        </div>
        <div className="flex flex-col gap-2">
          <Button
            startContent={<Icon icon="flat-color-icons:google" width={24} />}
            variant="flat">
            Continue with Google
          </Button>
          <Button
            startContent={
              <Icon className="text-default-500" icon="fe:github" width={24} />
            }
            variant="flat">
            Continue with Github
          </Button>
        </div>
        <p className="text-small text-center">
          Already have an account?&nbsp;
          <Link href="/login" size="sm">
            Log In
          </Link>
        </p>
      </div>
    </div>
  )
}
