import { useRef, useState } from 'react'
import ISignUpCredentials from './Types/ISignUpCredentials'
import Button from 'Components/Button'
import EButtonTypeList from 'Components/Button/Types/EButtonTypeList'
import FormInput from 'Components/Form/Input'
import EInputTypes from 'Components/Form/Input/Types/EInputTypes'
import FormCheckbox from 'Components/Form/Checkbox'
import { Link } from 'react-router-dom'
import checkIfCanCreateAccount from './Functions/checkIfCanCreateAccount'
import sendRequest from 'Authentication/sendRequest'
import EApiMethods from 'Utils/Types/EApiMethods'
import IMessageToTheUser from './Types/IMessageToTheUser'
import MessageToTheUser from './Components/MessageToTheUser'
import InputValidatorMessages from './Components/InputValidatorMessages'
import checkValidation from './Functions/checkValidation'
import './Styles/Register.scss'
import IValidators from './Types/IValidators'
import GlobalPageTemplate from 'Templates/GlobalPage'

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
    const [validators, setValidators] = useState<IValidators>({
        password: [],
        email: [],
        name: [],
        lastname: []
    })
    const userMessageRef = useRef<null | HTMLDivElement>(null)

    const { email, password, name, lastname } = signUpCredentials

    const updateSignUpCredentials = (key: string, value: string) => {
        return setSignUpCredentials(prevState => ({
            ...prevState,
            [key]: value
        }))
    }

    const moveToTopSmoothly = () => {
        return userMessageRef.current && userMessageRef.current.scrollIntoView({ behavior: 'smooth' })
    }

    const onSignUp = async () => {
        const data = {
            email,
            pwd: password,
            name,
            lastname
        }

        const { isSuccess, message } = await sendRequest(EApiMethods.POST, '/user/register', data)

        moveToTopSmoothly()

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
        const canCreate = checkIfCanCreateAccount(validators) && (email && password && name && lastname)

        if (!agreeWithTerms && !canCreate) {
            moveToTopSmoothly()

            return setMessageToTheUser({
                isSuccess: false,
                message: 'You need to agree with terms and fill all of the fields'
            })
        }

        if (!agreeWithTerms && canCreate) {
            moveToTopSmoothly()

            return setMessageToTheUser({
                isSuccess: false,
                message: 'You need to agree with terms'
            })
        }

        if (!canCreate) {
            moveToTopSmoothly()

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

    const goThroughtValidators = (key: string, value: string) => {
        const validations = checkValidation(key, value)

        setValidators(prevState => ({
            ...prevState,
            [key]: validations
        }))

        return updateSignUpCredentials(key, value)
    }

    return (
        <GlobalPageTemplate information='Contact with your friends without the limits' reference={userMessageRef}>
            <div className='register-page-wrapper'>
                <MessageToTheUser {...messageToTheUser} />
                <div className='form-content'>
                    <h1>Sign up</h1>
                    <div className='form'>
                        <div className='input-container'>
                            <FormInput
                                value={email}
                                onChange={value => goThroughtValidators('email', value)}
                                type={EInputTypes.TEXT}
                                header='Email'
                            />
                            <InputValidatorMessages inputValidator={validators.email} />
                        </div>
                        <div className='input-container'>
                            <FormInput
                                value={password}
                                onChange={value => goThroughtValidators('password', value)}
                                type={EInputTypes.PASSWORD}
                                header='Password'
                            />
                            <InputValidatorMessages inputValidator={validators.password} />
                        </div>
                        <div className='input-container'>
                            <FormInput
                                value={name}
                                onChange={value => goThroughtValidators('name', value)}
                                type={EInputTypes.TEXT}
                                header='Name'
                            />
                            <InputValidatorMessages inputValidator={validators.name} />
                        </div>
                        <div className='input-container'>
                            <FormInput
                                value={lastname}
                                onChange={value => goThroughtValidators('lastname', value)}
                                type={EInputTypes.TEXT}
                                header='Lastname'
                            />
                            <InputValidatorMessages inputValidator={validators.lastname} />
                        </div>
                        <FormCheckbox
                            value={agreeWithTerms}
                            onChange={value => setAgreeWithTerms(value)}
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
        </GlobalPageTemplate>
    )
}

export default Register