import { TokenContext } from 'Context/Token'
import React, { useContext } from 'react'
import { useHistory } from 'react-router'
import checkIsMobileView from 'Utils/Functions/checkIsMobileView'
import useWindowSize from 'Utils/Functions/useWindowSize'
import DesktopMenu from './Components/DesktopMenu'
import MobileMenu from './Components/MobileMenu'

const Menu = () => {
    const { width } = useWindowSize()
    const isMobileView = checkIsMobileView(width)
    const history = useHistory()
    const { logoutUser } = useContext(TokenContext)

    const onClickLogout = async () => {
        const result = logoutUser && await logoutUser()

        if (!result) {
            return null
        }

        return history.push('/login')
    }

    if (isMobileView) {
        return <MobileMenu logout={onClickLogout} />
    }

    return <DesktopMenu logout={onClickLogout} />
}

export default Menu