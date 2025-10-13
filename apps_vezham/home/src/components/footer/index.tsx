import type { IconProps } from '@iconify/react'
import { Icon } from '@iconify/react'
import React from 'react'

import { Alert, Button, Image, Input, Link } from '@vx-oss/react'
import { useTheme } from '@vx-oss/use-theme'

type SocialIconProps = Omit<IconProps, 'icon'>

const footerNavigation = {
  services: [
    { name: 'Branding', href: '#' },
    { name: 'Market Research', href: '#' },
    { name: 'Cloud Transformation', href: '#' },
    { name: 'IT Consulting', href: '#' },
    { name: 'Software Development', href: '#' },
    { name: 'Data Analysis & AI', href: '#' },
    { name: 'Cybersecurity', href: '#' },
    { name: 'E-commerce Solutions', href: '#' }
  ],
  // supportOptions: [
  //   {name: "Pricing Plans", href: "#"},
  //   {name: "User Guides", href: "#"},
  //   {name: "Tutorials", href: "#"},
  //   {name: "Service Status", href: "#"},
  // ],
  resources: [
    { name: 'Blog', href: '#' },
    { name: 'Case Studies', href: '#case-studies' },
    { name: 'Whitepapers', href: '#' },
    { name: 'Webinars', href: '#' }
  ],
  aboutUs: [
    { name: 'Our Story', href: '#' },
    { name: 'Why Choose Us', href: '#stats' },
    { name: 'Clients', href: '#our-clients' },
    { name: 'Latest News', href: '#' },
    { name: 'Careers', href: '#' },
    { name: 'Media Enquiries', href: '#' },
    { name: 'Collaborations', href: '#' },
    { name: 'Contact Us', href: '/contact' }
  ],
  legal: [
    { name: 'Privacy', href: '#' }, // Privacy Policy
    { name: 'Terms', href: '#' }, // Terms of Service
    { name: 'GDPR', href: '#' }, // Cookie Policy, GDPR
    { name: 'Security', href: '#' },
    { name: 'User Agreement', href: '#' }
  ],
  social: [
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
}

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const [formState, setFormState] = React.useState({
    email: ''
  })

  const renderList = React.useCallback(
    ({
      title,
      items
    }: {
      title: string
      items: { name: string; href: string }[]
    }) => (
      <div>
        <h3 className="text-small text-default-600 font-semibold">{title}</h3>
        <ul className="mt-6 space-y-4">
          {items.map(item => (
            <li key={item.name}>
              <Link
                className="text-default-400"
                href={item.href}
                size="sm"
                underline="hover">
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    ),
    []
  )

  const [showAlert, setShowAlert] = React.useState<
    'default' | 'success' | 'danger'
  >('default')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formState)
    // Here you would typically send the form data to your backend

    setTimeout(() => setShowAlert('default'), 3000) // Hide alert after 3 seconds
  }

  const { theme, setTheme } = useTheme()
  const isDark = theme === 'dark'

  const logo = isDark
    ? 'https://static.cdn.vezham.com/images/logo-white.png'
    : 'https://static.cdn.vezham.com/images/logo-black.png'

  return (
    <footer className="flex w-full flex-col pt-5">
      <div className="mx-auto max-w-7xl px-6 pb-8">
        {/* pt-16 sm:pt-24 lg:px-8 lg:pt-32 */}
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-8 md:pr-8">
            <div className="flex flex-col items-start justify-start">
              {/* <AcmeIcon size={44} />
              <span className="text-medium font-medium">ACME</span> */}
              <Image
                alt="Brand Logo"
                className="h-16 w-auto"
                src={logo}
                removeWrapper
              />
              {/* <p className="font-bold ml-2 text-lg">Ram Infosys</p> */}
              {/* <span className="text-medium font-medium">Ram Infosys</span> */}

              <p className="text-small text-default-500 pt-5">
                Think, Innovate, Explore
              </p>
            </div>
            {/* <p className="text-small text-default-500">
            Enduring Innovation. Transforming Governance & Industry with Intelligent Technology
            </p> */}

            <div className="space-y-2">
              {/* <div className="flex items-center gap-2">
                <Icon icon="lucide:map-pin" className="text-default-400 w-5 h-5" />
                <span className="text-small text-default-400">NS HOUSE, Anna Salai, Chennai, TN</span>
              </div> */}
              {/* <div className="flex items-center gap-2">
                <Icon icon="lucide:mail" className="text-default-400 w-5 h-5" />
                <Link href="mailto:info@raminfosys.com" className="text-small text-default-400 hover:text-primary">
                  info@raminfosys.com
                </Link>
              </div>
              <div className="flex items-center gap-2">
                <Icon icon="lucide:phone" className="text-default-400 w-5 h-5" />
                <Link href="tel:+919094606001" className="text-small text-default-400 hover:text-primary">
                  +91 90946 06001
                </Link>
              </div> */}
            </div>

            <div className="flex space-x-6">
              {footerNavigation.social.map(item => (
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
          <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                {renderList({
                  title: 'Our Expertise',
                  items: footerNavigation.services
                })}
              </div>
              <div className="mt-10 md:mt-0">
                {renderList({
                  title: 'Resources',
                  items: footerNavigation.resources
                })}
              </div>
            </div>
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                {renderList({
                  title: 'Company',
                  items: footerNavigation.aboutUs
                })}
              </div>
              <div className="mt-10 md:mt-0">
                {renderList({ title: 'Legal', items: footerNavigation.legal })}
              </div>
            </div>
          </div>
        </div>

        <div className="rounded-medium bg-default-200/20 my-10 p-4 sm:my-14 sm:p-8 lg:my-16 lg:flex lg:items-center lg:justify-between lg:gap-2">
          <div>
            <h3 className="text-small text-default-600 font-semibold">
              Subscribe to our newsletter
            </h3>
            <p className="text-small text-default-400 mt-2">
              Receive weekly updates with the newest insights, trends, and
              tools, straight to your email.
            </p>
          </div>
          <form
            className="mt-6 sm:flex sm:max-w-md lg:mt-0"
            onSubmit={handleSubmit}>
            <Input
              isRequired
              aria-label="Email"
              autoComplete="email"
              id="email-address"
              labelPlacement="outside"
              name="email-address"
              placeholder="mia@gmail.com"
              value={formState.email}
              onValueChange={value =>
                setFormState({ ...formState, email: value })
              }
              startContent={
                <Icon className="text-default-500" icon="solar:letter-linear" />
              }
              type="email"
            />
            <div className="mt-4 sm:mt-0 sm:ml-4 sm:flex-shrink-0">
              <Button
                color="primary"
                type="submit"
                isDisabled={showAlert != 'default'}
                isLoading={showAlert != 'default'}>
                Subscribe
              </Button>
            </div>
          </form>
        </div>

        {showAlert !== 'default' && (
          <div className="fixed right-4 bottom-4 z-50 w-full max-w-sm">
            <Alert
              title={
                showAlert == 'success'
                  ? 'Subscribed Successfully!'
                  : 'Error sending message!'
              }
              description={
                showAlert == 'success'
                  ? 'Thank you for subscribing to our newsletter.'
                  : 'There was an error sending your message. Please try again or contact us directly.'
              }
              color={showAlert}
              // isVisible={showAlert}
              onClose={() => setShowAlert('default')}
              classNames={{
                title: 'text-green font-bold',
                description: 'text-green/80'
              }}
            />
          </div>
        )}

        <div className="flex flex-wrap justify-center gap-2 pt-8">
          <p className="text-small text-default-400">
            &copy; {currentYear} Vezham Technologies Private Limited. All rights
            reserved.
          </p>
          {/* <ThemeSwitch /> */}
        </div>
      </div>
    </footer>
  )
}

export { Footer }
