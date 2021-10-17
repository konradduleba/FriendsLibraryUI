import React, { useState } from 'react'
import MenuOpenIcon from 'Assets/Icons/burger-menu.svg'
import MenuCloseIcon from 'Assets/Icons/cancel-icon.svg'
import Menu from './Menu'
import { menuList } from '../Utils/menuList'
import Information from './Information'

const MobileView = () => {
    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false)

    const menuVisibilityToggler = () => {
        return setIsMenuOpen(!isMenuOpen)
    }

    return (
        <>
            <Information />
            <div className='options'>
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
            </div>
        </>
    )
}

export default MobileView