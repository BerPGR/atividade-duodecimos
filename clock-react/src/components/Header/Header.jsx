import { useState } from 'react'
import './Header.css'

// icons
import { HiOutlineMenuAlt3 } from 'react-icons/hi';
import MenuMobile from '../MenuMobile/MenuMobile';


const Header = () => {
    const [openMenu, setOpenMenu] = useState(false)
    console.log(openMenu)
    const handleMenu = () => {
        setOpenMenu(prev => !prev)
    }


    if (openMenu) {
        return (
            <MenuMobile open={openMenu} handleMenu={handleMenu} />
        )
    }

    return (
        <header className='container-header'>
            <img src='./logo.png' width={100} />
            <HiOutlineMenuAlt3 className='menu-icon' onClick={handleMenu} />
            <div className='menu-desktop'>
                <a href='#historia'>História</a>
                <a href='#calcular'>Como Calcular</a>
                <a href='#quiz'>Play!</a>
            </div>
        </header>
    )
}

export default Header