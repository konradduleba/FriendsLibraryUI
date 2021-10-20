import React, { useEffect, useState } from 'react'
import TicIcon from 'Assets/Icons/tic.svg'
import ErrorInformation from '../ErrorInformation'
import Header from './Components/Header'
import ICheckbox from './Types/ICheckbox'
import EErrorMessage from './Types/EErrorMessages'
import './Styles/Checkbox.scss'

const FormCheckbox = ({ isRequired, header, value, onChange, errorMessage }: ICheckbox) => {
    const [errorInformation, setErrorInformation] = useState<string | null>(null)

    useEffect(() => {
        isRequired && errorMessage && setErrorInformation(errorMessage)
    }, [errorMessage, isRequired])

    const checkErrorMessage = (inputValue: boolean) => {
        if (inputValue) {
            return null
        }

        return EErrorMessage.IS_REQUIRED
    }

    const onClick = () => {
        if (isRequired) {
            const errorMessage = checkErrorMessage(!value)

            setErrorInformation(errorMessage)
        }

        return onChange(!value)
    }

    return (
        <div className='form-checkbox-wrapper'>
            <div className='checkbox-content-container'>
                <Header title={header} onClick={onClick} />
                <div className={`checkbox ${value ? 'selected' : ''}`} onClick={onClick}>
                    {value && <img src={TicIcon} alt='checked' />}
                </div>
            </div>
            <ErrorInformation errorMessage={errorInformation} />
        </div>
    )
}



export default FormCheckbox