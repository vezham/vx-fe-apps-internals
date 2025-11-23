import { Footers } from '../../components/footer'
import { useFooters } from '../../store/useFooter'

const Footer = () => {
  const { data: footerNavigation } = useFooters.list({})

  if (!footerNavigation) {
    return <div>Loading footer...</div>
  }

  return (
    <>
      {/* Other page content */}
      <Footers footerNavigation={footerNavigation} />
    </>
  )
}

export { Footer }
