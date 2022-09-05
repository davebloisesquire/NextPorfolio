import NavbarItem from "./NavbarItem"

const menuToggle = () => {
    document.getElementById("menuBackground").classList.toggle("pointer-events-none")
    document.getElementById("menuBackground").classList.toggle("pointer-events-auto")
    document.getElementById("mobileNav").classList.toggle("-right-full")
    document.getElementById("mobileNav").classList.toggle("right-0")
    document.getElementById("colorMenuBackground").classList.toggle("opacity-0")
    document.getElementById("colorMenuBackground").classList.toggle("opacity-70")
    document.getElementById("blurMenuBackground").classList.toggle("backdrop-blur-sm")
    document.getElementById("blurMenuBackground").classList.toggle("backdrop-blur-none")
}

const NavbarMobile = () => {
    return (
    <>
        <span onClick={menuToggle} id="menuBackground" className="pointer-events-none sm:hidden">
            <span id="blurMenuBackground" className="fixed inset-0 backdrop-blur-none transition-all duration-1000"></span>
            <span id="colorMenuBackground" className="fixed inset-0 bg-slate-900 opacity-0 transition-all duration-1000"></span>
        </span>
        <div onClick={menuToggle} className="w-full flex justify-end sm:hidden p-2">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
        </div>
        <nav id="mobileNav" className="bg-slate-800 justify-center fixed -right-full top-0 w-48 bottom-0 transition-all duration-1000 ease-in-out sm:flex sm:relative sm:w-full sm:right-auto">
            <ul onClick={menuToggle} className="justify-end items-center w-full text-2xl sm:flex sm:text-base">
                <div className="w-full flex justify-end sm:hidden p-2">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>

                </div>
                <NavbarItem href="/" name="Home"/>
                <NavbarItem href="/about" name="About"/>
                <NavbarItem href="/projects" name="Projects"/>
                <NavbarItem href="/blog" name="Blog"/>
                <hr className="sm:hidden"/>
                <NavbarItem href="/contact" name="Contact"/>
            </ul>
        </nav>
    </>
    )
}

export default NavbarMobile