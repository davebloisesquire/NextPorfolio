import Link from 'next/link'
const NavbarItem = ( props ) => {
    return (
        <li className='p-2 mx-4 hover:text-cyan-600'>
            <Link href={props.href}>{props.name}</Link>
        </li>
    )
}

export default NavbarItem