import { menuList } from '../Utils/menuList'
import MenuOpenIcon from 'Assets/Icons/burger-menu.svg'
import MenuCloseIcon from 'Assets/Icons/cancel-white.svg'
import { useState } from 'react'
import MenuList from './MenuList'
import '../Styles/MobileMenu.scss'

const MobileMenu = () => {
    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false)

    const menuVisibilityToggler = () => {
        return setIsMenuOpen(!isMenuOpen)
    }

    return (
        <div className='mobile-menu-wrapper'>
            <div className='information'>
                <h1>FL</h1>
            </div>
            <div className='options'>
                <div className={`${isMenuOpen ? 'menu-opened' : 'menu-closed'} menu-burger`}
                    onClick={menuVisibilityToggler}>
                    <img
                        src={isMenuOpen ? MenuCloseIcon : MenuOpenIcon}
                        alt='menu'
                    />
                </div>
                {isMenuOpen && <MenuList
                    menuList={menuList}
                    onCloseMenu={() => setIsMenuOpen(false)}
                />}
            </div>
        </div>
    )
}

export default MobileMenu