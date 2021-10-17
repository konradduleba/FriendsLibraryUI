import React, { useState } from 'react'
import ISignUpCredentials from './Types/ISignUpCredentials'
import Button from 'Components/Button'
import EButtonTypeList from 'Components/Button/Types/EButtonTypeList'
import FormInput from 'Components/Form/Input'
import EInputTypes from 'Components/Form/Input/Types/EInputTypes'
import FormCheckbox from 'Components/Form/Checkbox'
import { Link } from 'react-router-dom'
import IPasswordValidator from './Types/IPasswordValidator'
import checkPasswordValidation from './Functions/checkPasswordValidation'
import checkIfCanCreateAccount from './Functions/checkIfCanCreateAccount'
import sendRequest from 'Authentication/sendRequest'
import EApiMethods from 'Utils/Types/EApiMethods'
import IMessageToTheUser from './Types/IMessageToTheUser'
import MessageToTheUser from './Components/MessageToTheUser'
import PasswordValidator from './Components/PasswordValidator'
import './Styles/Register.scss'

const Register = (): JSX.Element => {
    const [signUpCredentials, setSignUpCredentials] = useState<ISignUpCredentials>({
        email: '',
        lastname: '',
        name: '',
        password: ''
    })
    const [agreeWithTerms, setAgreeWithTerms] = useState<boolean>(false)
    const [messageToTheUser, setMessageToTheUser] = useState<IMessageToTheUser>({
        isSuccess: false,
        message: ''
    })
    const [passwordValidator, setPasswordValidator] = useState<IPasswordValidator[] | []>([])

    const { email, password, name, lastname } = signUpCredentials

    const updateSignUpCredentials = (key: string, value: string) => {
        return setSignUpCredentials(prevState => ({
            ...prevState,
            [key]: value
        }))
    }

    const onSignUp = async () => {
        const data = {
            email,
            pwd: password,
            name,
            lastname
        }
        const { isSuccess, message } = await sendRequest(EApiMethods.POST, '/user/register', data)

        if (!isSuccess) {
            return setMessageToTheUser({
                isSuccess: false,
                message
            })
        }

        setMessageToTheUser({
            isSuccess: true,
            message: 'Account have been created'
        })
    }

    const onCreateAccount = async () => {
        const canCreate = checkIfCanCreateAccount(passwordValidator, signUpCredentials) && agreeWithTerms

        if (!canCreate) {
            return setMessageToTheUser({
                isSuccess: false,
                message: 'You need to fill all of the fields'
            })
        }

        setMessageToTheUser({
            isSuccess: false,
            message: ''
        })

        return onSignUp()
    }

    const onPasswordType = (value: string) => {
        const validations = checkPasswordValidation(value)

        setPasswordValidator(validations)

        return updateSignUpCredentials('password', value)
    }

    return (
        <div className='sign-up-page-wrapper'>
            <div className='information'>
                <p>Contact with your friends without the limits</p>
            </div>
            <div className='form-container'>
                <MessageToTheUser {...messageToTheUser} />
                <div className='form-content'>
                    <h1>Sign up</h1>
                    <div className='form'>
                        <FormInput
                            value={email}
                            onChange={value => updateSignUpCredentials('email', value)}
                            type={EInputTypes.TEXT}
                            isRequired
                            header='Email'
                        />
                        <div className='password-container'>
                            <FormInput
                                value={password}
                                onChange={value => onPasswordType(value)}
                                type={EInputTypes.PASSWORD}
                                isRequired
                                header='Password'
                            />
                            <PasswordValidator passwordValidator={passwordValidator} />
                        </div>
                        <FormInput
                            value={name}
                            onChange={value => updateSignUpCredentials('name', value)}
                            type={EInputTypes.TEXT}
                            isRequired
                            header='Name'
                        />
                        <FormInput
                            value={lastname}
                            onChange={value => updateSignUpCredentials('lastname', value)}
                            type={EInputTypes.TEXT}
                            isRequired
                            header='Lastname'
                        />
                        <FormCheckbox
                            value={agreeWithTerms}
                            onChange={value => setAgreeWithTerms(value)}
                            isRequired
                            header={<p>Agree with <Link to='/terms'>terms and conditions</Link></p>}
                        />
                    </div>
                    <Button
                        type={EButtonTypeList.PRIMARY}
                        value='Create account'
                        onClick={onCreateAccount}
                    />
                </div>
            </div>
        </div>
    )
}

export default Register