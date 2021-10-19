import React from 'react'
import { useHistory } from 'react-router-dom'
import INavBarMenu from '../Types/INavBarMenu'

const Menu = ({ menuList, onCloseMenu }: INavBarMenu): JSX.Element | null => {
    const history = useHistory()

    if (!menuList || !menuList.length) {
        return null
    }

    const onElementClick = (path: string) => {
        history.push(path)

        return onCloseMenu()
    }

    return (
        <div className='menu-list'>
            {menuList.map(({ label, path, icon }, index) => (
                <div className='single-menu-element' onClick={() => onElementClick(path)} key={path + index}>
                    <img src={icon} alt='menu element' />
                    <p>{label}</p>
                </div>
            ))}
        </div>
    )
}

export default Menu