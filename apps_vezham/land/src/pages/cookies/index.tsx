import React, { useEffect, useState } from 'react'

import { Button, Link } from '@vx-oss/react'

const CookieBanner = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Check localStorage on mount
    const cookieConsent = localStorage.getItem('cookieConsent')

    // Show banner only if not accepted/rejected before
    if (cookieConsent === null) {
      setIsVisible(true)
    }
  }, [])

  const handleAccept = () => {
    localStorage.setItem('cookieConsent', 'true') // user accepted
    setIsVisible(false)
  }

  const handleReject = () => {
    localStorage.setItem('cookieConsent', 'false') // user rejected
    setIsVisible(false)
  }

  if (!isVisible) return null

  return (
    <div className="pointer-events-none fixed inset-x-0 bottom-0 z-50">
      <div className="border-divider bg-background/15 shadow-small pointer-events-auto flex w-full items-center justify-between gap-x-20 border px-6 py-4 backdrop-blur">
        <p className="text-small text-default-700 font-normal">
          We use cookies to provide the best experience. By continuing to use
          our site, you agree to our&nbsp;
          <Link className="font-medium" href="#" size="sm" underline="always">
            Cookie Policy.
          </Link>
        </p>

        <div className="flex items-center gap-2">
          <Button
            className="px-4 font-medium"
            radius="lg"
            onPress={handleAccept}
            style={{
              border: 'solid 2px transparent',
              backgroundImage: `linear-gradient(hsl(var(--heroui-background)), hsl(var(--heroui-background))),
                 linear-gradient(83.87deg, #F54180, #9353D3)`,
              backgroundOrigin: 'border-box',
              backgroundClip: 'padding-box, border-box'
            }}>
            Accept All
          </Button>

          <Button
            className="font-medium"
            radius="lg"
            variant="light"
            onPress={handleReject}>
            Reject
          </Button>
        </div>
      </div>
    </div>
  )
}

export { CookieBanner }
