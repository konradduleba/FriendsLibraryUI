import React from 'react'
import IHeader from '../Types/IHeader'

const Header = ({ title, children }: IHeader) => {
    if (!title) {
        return null
    }

    return (
        <label>
            <span>{title}</span>
            {children && children}
        </label>
    )
}

export default Header