import React from 'react'
import { useHistory, useLocation } from 'react-router-dom'
import IMenuListAuthenticated from '../Types/IMenuListAuthenticated'
import LogoutIcon from 'Assets/Icons/logout.svg'

const MenuList = ({ menuList, onCloseMenu, logout }: IMenuListAuthenticated): JSX.Element | null => {
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
            {menuList.map(({ title, path, icon, whiteIcon }, index) => (
                <div className={`single-menu-element ${path === pathname ? 'selected' : ''}`} onClick={() => onElementClick(path)} key={path + index}>
                    <img src={path === pathname ? whiteIcon : icon} alt='menu element' />
                    <p>{title}</p>
                </div>
            ))}
            <div className='single-menu-element' onClick={logout}>
                <img src={LogoutIcon} alt='logout' />
                <p>Logout</p>
            </div>
        </div>
    )
}

export default MenuList