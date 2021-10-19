import React from 'react'
import checkIsMobileView from 'Utils/Functions/checkIsMobileView'
import useWindowSize from 'Utils/Functions/useWindowSize'
import DesktopMenu from './Components/DesktopMenu'
import MobileMenu from './Components/MobileMenu'

const Menu = () => {
    const { width } = useWindowSize()
    const isMobileView = checkIsMobileView(width)

    if (isMobileView) {
        return <MobileMenu />
    }

    return <DesktopMenu />
}

export default Menu