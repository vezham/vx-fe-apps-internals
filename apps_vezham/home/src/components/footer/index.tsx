import { Icon } from '@iconify/react'
import React from 'react'

import { Alert, Button, Image, Input, Link } from '@vx-oss/react'
import { useTheme } from '@vx-oss/use-theme'

import type { FooterProps } from './types'
import { footerVariants as fv } from './variant'

const Component: React.FC<FooterProps> = ({ footerNavigation }) => {
  const currentYear = new Date().getFullYear()
  const [formState, setFormState] = React.useState({ email: '' })
  const [showAlert, setShowAlert] = React.useState<
    'default' | 'success' | 'danger'
  >('default')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formState)
    setTimeout(() => setShowAlert('default'), 3000)
  }

  const { theme } = useTheme()
  const isDark = theme === 'dark'
  const logo = isDark
    ? 'https://static.cdn.vezham.com/images/logo-white.png'
    : 'https://static.cdn.vezham.com/images/logo-black.png'

  const renderList = ({
    title,
    items
  }: {
    title: string
    items: { name: string; href: string }[]
  }) => (
    <div>
      <h3 className={fv.base.listTitle}>{title}</h3>
      <ul className={fv.base.listUl}>
        {items.map(item => (
          <li key={item.name}>
            <Link
              href={item.href}
              className={fv.base.listLink}
              size="sm"
              underline="hover">
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )

  return (
    <footer className={fv.base.footer}>
      <div className={fv.base.container}>
        <div className={fv.base.gridWrapper}>
          {/* Logo + Socials */}
          <div className={fv.base.logoWrapper}>
            <Image
              alt="Brand Logo"
              className="h-16 w-auto"
              src={logo}
              removeWrapper
            />
            <p className={fv.base.tagline}>Think, Innovate, Explore</p>

            <div className={fv.base.socialWrapper}>
              {footerNavigation.social.map(item => (
                <Link key={item.name} isExternal href={item.href}>
                  <span className="sr-only">{item.name}</span>
                  <item.icon
                    aria-hidden="true"
                    className={fv.variants.socialIcon}
                  />
                </Link>
              ))}
            </div>
          </div>

          {/* Footer Grid */}
          <div className={fv.variants.gridTwoCol}>
            <div className={fv.variants.gridInner}>
              <div>
                {renderList({
                  title: 'Our Expertise',
                  items: footerNavigation.services
                })}
              </div>
              <div className={fv.variants.colSpacing}>
                {renderList({
                  title: 'Resources',
                  items: footerNavigation.resources
                })}
              </div>
            </div>

            <div className={fv.variants.gridInner}>
              <div>
                {renderList({
                  title: 'Company',
                  items: footerNavigation.aboutUs
                })}
              </div>
              <div className={fv.variants.colSpacing}>
                {renderList({ title: 'Legal', items: footerNavigation.legal })}
              </div>
            </div>
          </div>
        </div>

        {/* Subscribe Section */}
        <div className={fv.base.subscribeWrapper}>
          <div>
            <h3 className={fv.base.subscribeTitle}>
              Subscribe to our newsletter
            </h3>
            <p className={fv.base.subscribeDesc}>
              Receive weekly updates with the newest insights, trends, and
              tools, straight to your email.
            </p>
          </div>
          <form className={fv.variants.form} onSubmit={handleSubmit}>
            <Input
              isRequired
              aria-label="Email"
              autoComplete="email"
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
            <div className={fv.variants.inputWrapper}>
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

        {/* Alert */}
        {showAlert !== 'default' && (
          <div className={fv.variants.alertWrapper}>
            <Alert
              title={
                showAlert === 'success'
                  ? 'Subscribed Successfully!'
                  : 'Error sending message!'
              }
              description={
                showAlert === 'success'
                  ? 'Thank you for subscribing to our newsletter.'
                  : 'There was an error sending your message. Please try again or contact us directly.'
              }
              color={showAlert}
              onClose={() => setShowAlert('default')}
              classNames={{
                title: fv.variants.alertTitle,
                description: fv.variants.alertDesc
              }}
            />
          </div>
        )}

        {/* Footer bottom */}
        <div className={fv.base.footerBottom}>
          <p className={fv.base.footerText}>
            &copy; {currentYear} Vezham Technologies Private Limited. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export { Component }
