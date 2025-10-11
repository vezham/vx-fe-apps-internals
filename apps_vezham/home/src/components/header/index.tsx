import React, { useEffect, useState } from 'react'

import { Banner } from '../../components/banner/banner'
import { Navbars } from '../../components/navbar/index'
import { PromoBanner } from '../banner/promo-banner'

const Header = () => {
  const [showPromoBanner, setShowPromoBanner] = useState(true)

  // Update padding calculation to account for the new gap
  // const mainPaddingTop = showPromoBanner ? "pt-[calc(8rem+2.5rem)]" : "pt-28";

  const handleCloseBanner = () => {
    setShowPromoBanner(false)
    // Optionally save to localStorage to persist the user's preference
    localStorage.setItem('promoBannerClosed', 'true')
  }

  // Check localStorage on component mount to see if the banner was previously closed
  useEffect(() => {
    const bannerClosed = localStorage.getItem('promoBannerClosed') === 'true'
    if (bannerClosed) {
      setShowPromoBanner(false)
    }
  }, [])

  return (
    <div>
      <Banner />
      {showPromoBanner && <PromoBanner onClose={handleCloseBanner} />}
      <Navbars showPromoBanner={showPromoBanner} />
    </div>
  )
}

export { Header }
