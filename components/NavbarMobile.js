import NavbarItem from "./NavbarItem"
import NavLogo from "./NavLogo"
import Hamburger from "./icons/hamburger"
import Exit from "./icons/exit"

const menuToggle = () => {
    document.getElementById("menuBackground").classList.toggle("pointer-events-none")
    document.getElementById("menuBackground").classList.toggle("pointer-events-auto")
    document.getElementById("mobileNav").classList.toggle("-right-full")
    document.getElementById("mobileNav").classList.toggle("right-0")
    document.getElementById("colorMenuBackground").classList.toggle("opacity-0")
    document.getElementById("colorMenuBackground").classList.toggle("opacity-90")
    document.getElementById("blurMenuBackground").classList.toggle("backdrop-blur-sm")
    document.getElementById("blurMenuBackground").classList.toggle("backdrop-blur-none")
}

const NavbarMobile = () => {
    return (
    <div className="flex w-full justify-between bg-slate-800 h-14 items-center">
    <NavLogo/>
        <span onClick={menuToggle} id="menuBackground" className="pointer-events-none sm:hidden">
            <span id="blurMenuBackground" className="fixed inset-0 backdrop-blur-none transition-all duration-1000"></span>
            <span id="colorMenuBackground" className="fixed inset-0 bg-slate-900 opacity-0 transition-all duration-1000"></span>
        </span>
        <div onClick={menuToggle} className="w-full flex justify-end sm:hidden p-2">
            <Hamburger/>
        </div>
        <nav id="mobileNav" className="justify-center fixed -right-full top-0 w-48 bottom-0 transition-all duration-1000 ease-in-out sm:flex sm:relative sm:w-auto sm:right-auto">
            <ul onClick={menuToggle} className="justify-end items-center w-full text-2xl sm:flex sm:text-base">
                <div className="w-full flex justify-end sm:hidden p-2">
                    <Exit/>
                </div>
                <NavbarItem href="/" name="Home"/>
                <NavbarItem href="/about" name="About"/>
                <NavbarItem href="/projects" name="Projects"/>
                <NavbarItem href="/blog" name="Blog"/>
                <NavbarItem href="/contact" name="Contact"/>
            </ul>
        </nav>
    </div>
    )
}

export default NavbarMobile