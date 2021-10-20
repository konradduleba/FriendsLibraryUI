import React from 'react'
import { useHistory, useLocation } from 'react-router-dom'
import checkIfMatchLocation from 'Utils/Functions/checkIfMatchLocation'
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
                <div className={`single-menu-element ${checkIfMatchLocation(path, pathname) ? 'selected' : ''}`} onClick={() => onElementClick(path)} key={path + index}>
                    <img src={checkIfMatchLocation(path, pathname) ? whiteIcon : icon} alt='menu element' />
                    <p>{label}</p>
                </div>
            ))}
        </div>
    )
}

export default Menu