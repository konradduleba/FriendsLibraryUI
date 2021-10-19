import React from 'react'
import { Link } from 'react-router-dom'
import INavBarMenu from '../Types/INavBarMenu'

const Menu = ({ menuList, onCloseMenu }: INavBarMenu): JSX.Element | null => {
    if (!menuList || !menuList.length) {
        return null
    }

    return (
        <div className='menu-list'>
            {menuList.map(({ label, path, icon }, index) => (
                <div className='single-menu-element' onClick={onCloseMenu}>
                    <img src={icon} alt='menu element' />
                    <Link
                        to={path}
                        key={`${index}-${path}-${label}`}
                    >
                        {label}
                    </Link>
                </div>
            ))}
        </div>
    )
}

export default Menu