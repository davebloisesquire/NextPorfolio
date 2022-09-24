import NavbarMobile from "./NavbarMobile"
import Navbar from "./Navbar"
import Footer from "./Footer"

const Layout = ( {children} ) => {
    return (<>
        <NavbarMobile/>
        <div className="container mx-auto max-w-4xl bg-slate-700">
        {children}
        </div>
        <Footer/>
    </>)
}

export default Layout