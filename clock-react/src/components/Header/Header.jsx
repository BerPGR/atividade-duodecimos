import { useState } from 'react'
import './Header.css'

// icons
import { HiOutlineMenuAlt3 } from 'react-icons/hi';


const Header = () => {
    const [openMenu, setOpenMenu] = useState(false)
    return (
        <header className='container-header'>
            <img src='./logo.png' width={100} />
            <HiOutlineMenuAlt3 className='menu-icon' onClick={setOpenMenu} />
        </header>
    )
}

export default Header