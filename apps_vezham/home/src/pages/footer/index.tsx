import { Footers } from '../../components/footer'
import { footerNavigation } from '../../components/footer/data'

const Footer = () => {
  return (
    <>
      {/* Other page content */}
      <Footers footerNavigation={footerNavigation} />
    </>
  )
}

export { Footer }
