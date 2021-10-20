import checkIsMobileView from 'Utils/Functions/checkIsMobileView'
import useWindowSize from 'Utils/Functions/useWindowSize'
import DesktopView from './Components/DesktopView'
import MobileView from './Components/MobileView'
import './Styles/NavBar.scss'

const NavBar = () => {
    const { width } = useWindowSize()
    const isMobileView = checkIsMobileView(width)

    return (
        <div className='nav-bar-wrapper'>
            {isMobileView ?
                <MobileView />
                :
                <DesktopView />
            }
        </div>
    )
}

export default NavBar