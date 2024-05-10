import { Navbar } from './Navbar/Navbar'
import { Footer } from './Footer/Footer'

export const Layout = ({children}) => {
  return (
    <div>
    <Navbar/>
    <div>
        { children }
    </div>
    <Footer/>
    </div>
  )
}
