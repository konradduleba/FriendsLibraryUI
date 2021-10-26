import Button from "Components/Button"
import EButtonTypeList from "Components/Button/Types/EButtonTypeList"
import FormInput from "Components/Form/Input"
import EInputTypes from "Components/Form/Input/Types/EInputTypes"
import { useContext, useRef, useState } from "react"
import ILoginCredentials from "./Types/ILoginCredentials"
import { Link, useHistory } from "react-router-dom"
import useWindowSize from "Utils/Functions/useWindowSize"
import checkIsMobileView from "Utils/Functions/checkIsMobileView"
import { TokenContext } from "Context/Token"
import IValidators from "./Types/IValidators"
import checkValidation from "../Register/Functions/checkValidation"
import MessageToTheUser from "./Components/MessageToTheUser"
import IMessageToTheUser from "../Register/Types/IMessageToTheUser"
import checkIfCanLogIn from "./Functions/checkIfCanLogIn"
import "./Styles/Login.scss"

const Login = (): JSX.Element => {
    const { loginUser } = useContext(TokenContext);
    const { width } = useWindowSize();
    const isMobileView = checkIsMobileView(width);
    const [loginCredentials, setUpLoginCredentials] = useState<ILoginCredentials>({
        email: "",
        password: "",
    });
    const [validators, setValidators] = useState<IValidators>({
        password: [],
        email: []
    })
    const userMessageRef = useRef<null | HTMLDivElement>(null)
    const [messageToTheUser, setMessageToTheUser] = useState<IMessageToTheUser>({
        isSuccess: false,
        message: ''
    })
    const history = useHistory()

    const onLoginUser = async () => {
        const data = { ...loginCredentials }

        const result = loginUser && await loginUser(data)

        if (!result) {
            return null
        }

        const { message, isSuccess } = result

        if (!isSuccess) {
            return setMessageToTheUser({
                isSuccess,
                message
            })
        }

        return history.push('/home')
    }

    const onLoginIn = async () => {
        const canCreate = checkIfCanLogIn(validators) && (email && password)

        if (!canCreate) {
            return setMessageToTheUser({
                isSuccess: false,
                message: 'You need to fill all of the fields'
            })
        }

        return onLoginUser()
    }

    const updateLoginCredentials = (key: string, value: string) => {
        setUpLoginCredentials((prevState) => ({
            ...prevState,
            [key]: value,
        }));
    };

    const goThroughtValidators = (key: string, value: string) => {
        const validations = checkValidation(key, value)

        setValidators(prevState => ({
            ...prevState,
            [key]: validations
        }))

        return updateLoginCredentials(key, value)
    }

    const forgotPasswordHeader = <Link to="/forgot-password">Forgot your password?</Link>

    const { email, password } = loginCredentials

    return (
        <div className='login-page-wrapper' ref={userMessageRef}>
            <div className='content-container'>
                <MessageToTheUser {...messageToTheUser} />
                <h1>Log in</h1>
                <div className='form'>
                    <div className='input-container'>
                        <FormInput
                            value={email}
                            onChange={value => goThroughtValidators('email', value)}
                            type={EInputTypes.TEXT}
                            header='Email'
                        />
                    </div>
                    <div className='input-container'>
                        <FormInput
                            value={password}
                            onChange={value => goThroughtValidators('password', value)}
                            type={EInputTypes.PASSWORD}
                            header='Password'
                            headerChildren={isMobileView ? null : forgotPasswordHeader}
                        />
                    </div>
                    <Button
                        onClick={onLoginIn}
                        type={EButtonTypeList.PRIMARY}
                        value="Log in"
                    />
                </div>
                <div className='additional-info'>
                    <p>Don’t have an account yet?</p>
                    <Link to="/register">Create an account</Link>
                </div>
            </div>
        </div>
    )
}

export default Login
