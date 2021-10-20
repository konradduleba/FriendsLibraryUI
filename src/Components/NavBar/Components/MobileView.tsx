import { useState } from 'react'
import MenuOpenIcon from 'Assets/Icons/burger-menu.svg'
import MenuCloseIcon from 'Assets/Icons/cancel-white.svg'
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
                <div className={`${isMenuOpen ? 'menu-opened' : 'menu-closed'} menu-burger`}
                    onClick={menuVisibilityToggler}>
                    <img
                        src={isMenuOpen ? MenuCloseIcon : MenuOpenIcon}
                        alt='menu'
                    />
                </div>
                {isMenuOpen && <Menu
                    menuList={menuList}
                    onCloseMenu={() => setIsMenuOpen(false)}
                />}
            </div>
        </>
    )
}

export default MobileView