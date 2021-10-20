import React from 'react'
import ShowInputValueIcon from 'Assets/Icons/show-input.svg'
import HideInputValueIcon from 'Assets/Icons/hide-input.svg'
import IPasswordToggler from '../Types/IPasswordToggler'
import EInputTypes from '../Types/EInputTypes'

const PasswordToggler = ({ type, onTypeChange }: IPasswordToggler) => {

    const showPassword = () => {
        if (type === EInputTypes.TEXT) {
            return onTypeChange(EInputTypes.PASSWORD)
        }

        return onTypeChange(EInputTypes.TEXT)
    }

    if (type === EInputTypes.PASSWORD) {
        return <img src={ShowInputValueIcon} alt='show password' onClick={showPassword} />
    }

    return <img src={HideInputValueIcon} alt='hide password' onClick={showPassword} />
}



export default PasswordToggler