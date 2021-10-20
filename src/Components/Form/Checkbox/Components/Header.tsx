import React from 'react'
import IHeader from '../Types/IHeader'

const Header = ({ title, onClick }: IHeader) => {
    if (!title) {
        return null
    }

    return (
        <label onClick={onClick}>{title}</label>
    )
}

export default Header