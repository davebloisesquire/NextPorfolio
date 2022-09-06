import Image from "next/image"
import Link from "next/link"
import flamingoIcon from "../public/flamingo-icon.svg"

const NavLogo = () => {
    return (
        <div className='bg-slate-800 flex justify-center items-center ml-3 sm:w-14'>
            <Link href="/">
                <Image src={flamingoIcon} height={50} width={50}/>
            </Link>
        </div>

    )
}

export default NavLogo