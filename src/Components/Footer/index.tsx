import React from 'react'
import { Link } from 'react-router-dom'
import checkIsMobileView from 'Utils/Functions/checkIsMobileView'
import useWindowSize from 'Utils/Functions/useWindowSize'
import './Footer.scss'

const Footer = () => {
    const { width } = useWindowSize()
    const isMobileView = checkIsMobileView(width)

    if (isMobileView) {
        return null
    }

    return (
        <div className='footer-wrapper'>
            <div className='menu-list'>
                <Link to='/about'>About</Link>
                <Link to='/terms'>Terms</Link>
                <Link to='/privacy'>Privacy</Link>
                <Link to='/faq'>FAQ</Link>
            </div>
        </div>
    )
}

export default Footer