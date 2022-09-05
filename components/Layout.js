import NavbarMobile from "./NavbarMobile"
import Navbar from "./Navbar"
import Footer from "./Footer"

const Layout = ( {children} ) => {
    return (<>
        <NavbarMobile/>
        <div className="container mx-auto">
        {children}
        </div>
        <Footer/>
    </>)
}

export default Layout