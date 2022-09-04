import Link from "next/link"
const Footer = () => {
    return (
        <footer className="bg-teal-900 flex justify-around">
            <Link href="/">LinkedIn</Link>
            <Link href="/">GitHub</Link>
            <Link href="/">YouTube</Link>
            <Link href="/">Twitter</Link>
        </footer>
    )
} 

export default Footer