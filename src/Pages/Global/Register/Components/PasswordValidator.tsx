import React from 'react'
import IPasswordValidator from '../Types/IPasswordValidator'
import TicIcon from 'Assets/Icons/correct-tic.svg'
import ErrorIcon from 'Assets/Icons/cancel-red.svg'

interface IPasswordComponent {
    passwordValidator: IPasswordValidator[] | []
}

const PasswordValidator = ({ passwordValidator }: IPasswordComponent): JSX.Element => {
    if (!passwordValidator.length) {
        return <div className='password-validator'></div>
    }

    return (
        <div className='password-validator'>
            {passwordValidator.map(({ status, label }, index) => (
                <p key={index}><img src={status ? TicIcon : ErrorIcon} alt='status' />{label}</p>
            ))}
        </div>
    )
}

export default PasswordValidator