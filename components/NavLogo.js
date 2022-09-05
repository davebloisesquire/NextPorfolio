import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import { faCrow } from "@fortawesome/free-solid-svg-icons"

const NavLogo = () => {
    return (
        <div className='bg-slate-700 flex justify-center items-center'>
            <FontAwesomeIcon className='h-9 my-2 mx-4' icon={faCrow} />
        </div>

    )
}

export default NavLogo