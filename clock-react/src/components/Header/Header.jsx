import { useState } from 'react'
import './Header.css'

// icons
import { HiHome, HiOutlineMenuAlt3 } from 'react-icons/hi';
import MenuMobile from '../MenuMobile/MenuMobile';

import { useLocation } from 'react-router-dom';



const Header = () => {
    // instancia do location para usar na url
    const location = useLocation();
    // estado do menu
    const [openMenu, setOpenMenu] = useState(false)
    // logica do menu. Inverte o estado atual
    const handleMenu = () => {
        setOpenMenu(prev => !prev)
    }


    // se for true abre o menu mobile
    if (openMenu) {
        return (
            <MenuMobile open={openMenu} handleMenu={handleMenu} />
        )
    }


    return (
        <header className='container-header'>
            <img src='./logo.png' width={100} />

            {/* se a url for diferente de "/quiz" renderiza o menu padrao */}
            {location.pathname != '/quiz' && <HiOutlineMenuAlt3 className='menu-icon' onClick={handleMenu} />}

            {/* se a url for igual a "/quiz" renderiza o menu com o botao para Home */}
            {location.pathname == '/quiz' || location.pathname == '/calcular' ?
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