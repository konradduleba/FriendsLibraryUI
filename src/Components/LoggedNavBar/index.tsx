import { UserDataContext } from 'Context/UserData'
import React, { useContext } from 'react'
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

    if (isMobileView) {
        return null
    }

    return (
        <div className='logged-nav-bar-wrapper'>
            <div className='nav-container'>
                <Search />
                <Notification notificationNumber={notificationNumber} />
                <User name={name} picture={picture} />
            </div>
        </div>
    )
}

export default LoggedNavBar