import React from 'react'
import { useHistory, useLocation } from 'react-router-dom'
import IMenuListAuthenticated from '../Types/IMenuListAuthenticated'
import LogoutIcon from 'Assets/Icons/logout.svg'

const MenuList = ({ menuList, onCloseMenu }: IMenuListAuthenticated): JSX.Element | null => {
    const history = useHistory()
    const { pathname } = useLocation()

    if (!menuList || !menuList.length) {
        return null
    }

    const onElementClick = (path: string) => {
        history.push(path)

        return onCloseMenu()
    }

    const onClickLogout = () => {
        return history.push('/login')
    }

    return (
        <div className='menu-list'>
            {menuList.map(({ title, path, icon }, index) => (
                <div className={`single-menu-element ${path === pathname ? 'selected' : ''}`} onClick={() => onElementClick(path)} key={path + index}>
                    <img src={icon} alt='menu element' />
                    <p>{title}</p>
                </div>
            ))}
            <div className='single-menu-element' onClick={onClickLogout}>
                <img src={LogoutIcon} alt='logout' />
                <p>Logout</p>
            </div>
        </div>
    )
}

export default MenuList