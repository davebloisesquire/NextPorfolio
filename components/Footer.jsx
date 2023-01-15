import Link from "next/link"
const Footer = () => {
    return (
        <footer className="flex flex-wrap items-center justify-around bg-slate-800 h-auto">
            <Link href="/">LinkedIn</Link>
            <Link href="/">GitHub</Link>
            <Link href="/">YouTube</Link>
            <Link href="/">Twitter</Link>
        </footer>
    )
} 

export default Footer