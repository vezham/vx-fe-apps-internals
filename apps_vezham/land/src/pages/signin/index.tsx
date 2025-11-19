'use client'

import { Icon } from '@iconify/react'
import React from 'react'

import { Button, Divider, Form, Input, Link } from '@vx-oss/react'
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

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    console.log('handleSubmit')
  }

  return (
    <div className="flex h-screen w-full items-center justify-center">
      <div className="rounded-large flex w-full max-w-sm flex-col gap-4 px-8">
        <div className="flex flex-col items-center">
          <NavbarLogo visible={false} />
          <p className="text-xl font-medium">Welcome</p>
          <p className="text-small text-default-500">
            Create an account to get started
          </p>
        </div>
        <Form
          className="flex flex-col gap-3"
          validationBehavior="native"
          onSubmit={handleSubmit}>
          <Input
            isRequired
            label="Email Address"
            name="email"
            type="email"
            variant="bordered"
          />
          <Button
            className="w-full"
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
        </Form>
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
          Need to create an account?&nbsp;
          <Link href="/signup" size="sm">
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  )
}
