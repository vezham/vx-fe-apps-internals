import { BookSection } from '../../components/books/index'
import { Footer } from '../../components/footer'
import { BookNavbar } from '../../components/navbar-1'
import { Header } from '../header'

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
