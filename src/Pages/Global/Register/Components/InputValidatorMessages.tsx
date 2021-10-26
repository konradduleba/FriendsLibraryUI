import React from 'react'
import IInputValidatorMessages from '../Types/IInputValidatorMessages'
import TicIcon from 'Assets/Icons/correct-tic.svg'
import ErrorIcon from 'Assets/Icons/cancel-red.svg'

interface IInputValidatorMessagesComponent {
    inputValidator: IInputValidatorMessages[] | []
}

const InputValidatorMessages = ({ inputValidator }: IInputValidatorMessagesComponent): JSX.Element => {
    if (!inputValidator.length) {
        return <div className='input-validator'></div>
    }

    return (
        <div className='input-validator'>
            {inputValidator.map(({ status, label }, index) => (
                <p key={index} className={status ? "success" : 'error'}><img src={status ? TicIcon : ErrorIcon} alt='status' />{label}</p>
            ))}
        </div>
    )
}

export default InputValidatorMessages