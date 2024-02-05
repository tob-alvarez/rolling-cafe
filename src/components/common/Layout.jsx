import Menu from '../common/Menu'
import Footer from '../common/Footer'

// eslint-disable-next-line react/prop-types
const Layout = ({children}) => {
  return (
    <>
    <Menu/>
        {children}
    <Footer/>
    </>
  )
}

export default Layout