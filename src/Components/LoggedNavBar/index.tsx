import { UserDataContext } from 'Context/UserData'
import React, { useContext } from 'react'
import { useLocation } from 'react-router'
import checkIfMatchLocation from 'Utils/Functions/checkIfMatchLocation'
import checkIsMobileView from 'Utils/Functions/checkIsMobileView'
import useWindowSize from 'Utils/Functions/useWindowSize'
import Notification from './Components/Notification'
import Search from './Components/Search'
import User from './Components/User'
import './Styles/LoggedNavBar.scss'

const LoggedNavBar = () => {
    const { width } = useWindowSize()
    const isMobileView = checkIsMobileView(width)
    const { userData } = useContext(UserDataContext)
    const { name, notificationNumber, picture } = userData
    const { pathname } = useLocation()

    if (isMobileView) {
        return null
    }

    const isThatSearchLocation = checkIfMatchLocation('/search', pathname)

    return (
        <div className='logged-nav-bar-wrapper'>
            <div className='nav-container'>
                {!isThatSearchLocation && <Search />}
                <Notification notificationNumber={notificationNumber} />
                <User name={name} picture={picture} />
            </div>
        </div>
    )
}

export default LoggedNavBar