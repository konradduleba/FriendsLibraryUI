import { useHistory, useLocation } from 'react-router'
import { NavLink } from 'react-router-dom'
import { menuList } from '../Utils/menuList'
import LogoutIcon from 'Assets/Icons/logout-white.svg'
import '../Styles/DesktopMenu.scss'

const DesktopMenu = () => {
    const history = useHistory()
    const { pathname } = useLocation()

    const onClickLogout = () => {
        return history.push('/login')
    }

    return (
        <div className='menu-wrapper'>
            <NavLink to='/home'>
                <h1>FL</h1>
            </NavLink>
            {menuList.map(({ title, path, icon, whiteIcon }) => (
                <NavLink to={path} key={title + path} activeClassName='selected'>
                    <img src={path === pathname ? whiteIcon : icon} alt='menu' />
                </NavLink>
            ))}
            <div className='single-menu-item' onClick={onClickLogout}>
                <img src={LogoutIcon} alt='logout' />
            </div>
        </div>
    )
}

export default DesktopMenu