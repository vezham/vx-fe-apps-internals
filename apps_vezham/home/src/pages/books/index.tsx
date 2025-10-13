import { BookSection } from '../../components/books/index'
import { Footer } from '../../components/footer'
import { Header } from '../../components/header'
import { BookNavbar } from '../../components/navbar-1'

const Books = () => {
  return (
    <div>
      <Header />
      <BookNavbar />
      <BookSection />
      <Footer />
    </div>
  )
}

export { Books }
