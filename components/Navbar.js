import styles from "../styles/Navbar.module.css"
import Link from "next/link"
const Navbar = () => {
    return (
    <nav className={styles.navbar}>
        <Link className={styles.links} href="/">Home</Link>
        <Link className={styles.links} href="/projects">Projects</Link>
    </nav>
    )
}

export default Navbar