import React from 'react'
import { useHistory, useLocation } from 'react-router-dom'
import INavBarMenu from '../Types/INavBarMenu'

const Menu = ({ menuList, onCloseMenu }: INavBarMenu): JSX.Element | null => {
    const history = useHistory()
    const { pathname } = useLocation()

    if (!menuList || !menuList.length) {
        return null
    }

    const onElementClick = (path: string) => {
        history.push(path)

        return onCloseMenu()
    }

    return (
        <div className='menu-list'>
            {menuList.map(({ label, path, icon, whiteIcon }, index) => (
                <div className={`single-menu-element ${pathname === path ? 'selected' : ''}`} onClick={() => onElementClick(path)} key={path + index}>
                    <img src={pathname === path ? whiteIcon : icon} alt='menu element' />
                    <p>{label}</p>
                </div>
            ))}
        </div>
    )
}

export default Menu