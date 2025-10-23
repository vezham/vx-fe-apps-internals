import { BookSection } from '../../components/books/index'
import { BookNavbar } from '../../components/navbar-1'
import { Footer } from '../footer'
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
