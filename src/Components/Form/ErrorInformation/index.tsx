import React from 'react'
import ErrorIcon from 'Assets/Icons/error-icon.svg'
import IErrorInformation from './IErrorInformation'
import './ErrorInformation.scss'

const ErrorInformation = ({ errorMessage }: IErrorInformation) => {
    if (!errorMessage) {
        return null
    }

    return (
        <div className='error-information-container'>
            <img src={ErrorIcon} alt='error icon' />
            <p>{errorMessage}</p>
        </div>
    )
}

export default ErrorInformation