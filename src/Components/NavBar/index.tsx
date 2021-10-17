import { appName, appShortcutName } from 'Utils/Constants/appInfo'
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
            <div className='information'>
                <h1>{isMobileView ? appShortcutName : appName}</h1>
            </div>
            <div className='options'>
                {isMobileView ?
                    <MobileView />
                    :
                    <DesktopView />
                }
            </div>
        </div>
    )
}

export default NavBar