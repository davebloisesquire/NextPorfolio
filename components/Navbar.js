import styles from "../styles/Navbar.module.css"
import NavbarItem from "./NavbarItem"
import NavLogo from "./NavLogo"

const Navbar = () => {
    return (
    <nav className="bg-slate-800 h-12 flex justify-center">
        <NavLogo/>
        <ul className="justify-end items-center w-full sm:block md:flex">
            <NavbarItem href="/" name="Home"/>
            <NavbarItem href="/about" name="About"/>
            <NavbarItem href="/projects" name="Projects"/>
            <NavbarItem href="/blog" name="Blog"/>
            <NavbarItem href="/contact" name="Contact"/>
        </ul>
    </nav>
    )
}

export default Navbar