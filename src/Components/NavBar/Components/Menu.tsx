import React from 'react'
import { Link } from 'react-router-dom'
import INavBarMenu from '../Types/INavBarMenu'

const Menu = ({ menuList, onCloseMenu }: INavBarMenu): JSX.Element | null => {
    if (!menuList || !menuList.length) {
        return null
    }

    return (
        <div className='menu-list'>
            {menuList.map(({ label, path }, index) => (
                <Link
                    to={path}
                    key={`${index}-${path}-${label}`}
                    onClick={onCloseMenu}>
                    {label}
                </Link>
            ))}
        </div>
    )
}

export default Menu