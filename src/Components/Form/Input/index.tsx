import React, { useEffect, useState } from 'react'
import PasswordToggler from './Components/PasswordToggler'
import Header from './Components/Header'
import ErrorInformation from '../ErrorInformation'
import IInput from './Types/IInput'
import EInputTypes from './Types/EInputTypes'
import EErrorMessage from './Types/EErrorMessages'
import './Styles/Input.scss'

const FormInput = ({ type, placeholder, value, onChange, header, headerChildren, errorMessage, isRequired }: IInput) => {
    const [errorInformation, setErrorInformation] = useState<string | null>(null)
    const [isInputFilled, setIsInputFilled] = useState<boolean>(false)
    const [inputType, setInputType] = useState<EInputTypes>(type)

    useEffect(() => {
        isRequired && errorMessage && setErrorInformation(errorMessage)
    }, [errorMessage, isRequired])

    const checkErrorMessage = (inputValue: string) => {
        if (inputValue) {
            return null
        }

        return EErrorMessage.EMPTY_FIELD
    }

    const onInputChange = ({ target }: any) => {
        const inputValue = target.value

        setIsInputFilled(false)

        if (isRequired) {
            const errorMessage = checkErrorMessage(inputValue)

            setErrorInformation(errorMessage)
        }

        return onChange(inputValue)
    }

    const onBlurChangeBorderStyle = () => {
        if (value) {
            return setIsInputFilled(true)
        }

        return null
    }

    return (
        <div className={`form-input-wrapper ${errorInformation ? 'error' : ''}`}>
            <Header title={header}>{headerChildren}</Header>
            <div className={`input-content-container ${isInputFilled ? 'filled' : ''}`}>
                <input
                    type={inputType}
                    value={value}
                    onChange={onInputChange}
                    placeholder={placeholder}
                    onBlur={onBlurChangeBorderStyle}
                />
                {type === EInputTypes.PASSWORD && <PasswordToggler type={inputType} onTypeChange={setInputType} />}
            </div>
            <ErrorInformation errorMessage={errorInformation} />
        </div>
    )
}

export default FormInput