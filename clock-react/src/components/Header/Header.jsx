import { useState } from 'react'
import './Header.css'

// icons
import { HiHome, HiOutlineMenuAlt3 } from 'react-icons/hi';
import MenuMobile from '../MenuMobile/MenuMobile';

import { useLocation } from 'react-router-dom';



const Header = () => {
    const location = useLocation();
    const [openMenu, setOpenMenu] = useState(false)
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

            {location.pathname != '/quiz' && <HiOutlineMenuAlt3 className='menu-icon' onClick={handleMenu} />}


            {location.pathname == '/quiz' ?
                <a href='/'>
                    <HiHome size={20} />
                </a>
                :
                <div className='menu-desktop'>
                    <a href='#historia'>História</a>
                    <a href='#calcular'>Como Calcular</a>
                    <a href='#quiz'>Play!</a>
                </div>
            }

        </header>
    )
}

export default Header