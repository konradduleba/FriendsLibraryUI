import React, { useState } from 'react'
import MenuOpenIcon from 'Assets/Icons/burger-menu.svg'
import MenuCloseIcon from 'Assets/Icons/cancel-icon.svg'
import Menu from './Menu'
import { menuList } from '../Utils/menuList'

const MobileView = () => {
    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false)

    const menuVisibilityToggler = () => {
        return setIsMenuOpen(!isMenuOpen)
    }

    return (
        <>
            <img
                src={isMenuOpen ? MenuCloseIcon : MenuOpenIcon}
                alt='menu'
                className={isMenuOpen ? 'menu-opened' : 'menu-burger'}
                onClick={menuVisibilityToggler}
            />
            {isMenuOpen && <Menu
                menuList={menuList}
                onCloseMenu={() => setIsMenuOpen(false)}
            />}

        </>
    )
}

export default MobileView