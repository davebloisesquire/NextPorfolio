import styles from "../styles/Navbar.module.css"
import Link from "next/link"
const Navbar = () => {
    return (
    <nav className={styles.navbar}>
        <div className={styles.links}>
            <Link href="/">Home</Link>
            <Link href="/projects">Projects</Link>
        </div>
    </nav>
    )
}

export default Navbar