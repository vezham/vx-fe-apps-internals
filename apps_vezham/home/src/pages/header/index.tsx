import { useEffect, useState } from 'react'

import { Banner } from '../../components/banner'
import { Navbars } from '../../components/navbar/index'
import { PromoBanner } from '../../components/promo-banner'

const Header = () => {
  const [showPromoBanner, setShowPromoBanner] = useState(true)

  const handleCloseBanner = () => {
    setShowPromoBanner(false)
    localStorage.setItem('promoBannerClosed', 'true')
  }

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
