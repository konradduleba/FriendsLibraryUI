import sendRequest from 'Authentication/sendRequest'
import { TokenContext } from 'Context/Token'
import checkValidation from 'Pages/Global/Register/Functions/checkValidation'
import IInputValidatorMessages from 'Pages/Global/Register/Types/IInputValidatorMessages'
import React, { useContext, useState } from 'react'
import { useHistory } from 'react-router'
import moveToTopSmoothly from 'Utils/Functions/moveToTopSmoothly'
import EApiMethods from 'Utils/Types/EApiMethods'
import checkIfCanDeactivateAccount from '../Functions/checkIfCanDeactivateAccount'
import checkIfCanDeleteAccount from '../Functions/checkIfCanDeleteAccount'
import checkIfCanUpdatePassword from '../Functions/checkIfCanUpdatePassword'
import { EDandDTypes } from '../Types/EDandDTypes'
import IExpandedSetting from '../Types/IExpandedSetting'
import ChangePassword from './ChangePassword'
import DeactivateAccount from './DeactivateAccount'
import DeleteAccount from './DeleteAccount'
import DeleteOrDeactivateHeader from './Header'

const ExpandedSetting = ({ title, description, icon, iconAlt, type, setMessageToTheUser }: IExpandedSetting) => {
    const [isActive, setIsActive] = useState<boolean>(false)
    const [password, setPassword] = useState<string>('')
    const [passwordValidator, setPasswordValidator] = useState<IInputValidatorMessages[] | []>([])
    const [repeatPassword, setRepeatPassword] = useState<string>('')
    const [repeatPasswordValidator, setRepeatPasswordValidator] = useState<IInputValidatorMessages[] | []>([])
    const [currentPassword, setCurrentPassword] = useState<string>('')
    const [currentPasswordValidator, setCurrentPasswordValidator] = useState<IInputValidatorMessages[] | []>([])
    const [selectedDeactivateOption, setSelectedDeactivateOption] = useState<string | number | undefined>(undefined)
    const { logoutUser } = useContext(TokenContext)
    const history = useHistory()

    const goThroughtValidators = (key: string, type: string, value: string, value1?: string, value2?: string) => {
        const validations = checkValidation(key, value, value1, value2)

        if (type === 'password') {
            setPasswordValidator(validations)

            const repeatPasswordValidations = checkValidation('new-password', repeatPassword, value, currentPassword)

            repeatPassword && setRepeatPasswordValidator(repeatPasswordValidations)

            return setPassword(value)
        }
        else if (type === 'repeat') {
            setRepeatPassword(value)

            const newPasswordValidations = checkValidation('new-password', password, value, currentPassword)

            password && setPasswordValidator(newPasswordValidations)

            return setRepeatPasswordValidator(validations)
        }

        setCurrentPassword(value)

        const repeatPasswordValidations = checkValidation('new-password', repeatPassword, password, value)

        repeatPassword && setRepeatPasswordValidator(repeatPasswordValidations)

        const newPasswordValidations = checkValidation('new-password', password, repeatPassword, value)

        password && setPasswordValidator(newPasswordValidations)

        return setCurrentPasswordValidator(validations)
    }

    const logoutAndRedirectToLoginPage = () => {
        return setTimeout(async () => {
            const result = logoutUser && await logoutUser()

            if (!result) {
                return null
            }
            return history.push('/login')
        }, 2000);
    }

    const havingFunWithUser = () => {
        return setMessageToTheUser({
            isSuccess: false,
            message: "I see you're having fun with button's disabled functionality. Nice try"
        })
    }

    const somethingWentWrong = () => {
        return setMessageToTheUser({
            isSuccess: false,
            message: "Something went wrong, try next time"
        })
    }

    const updatePassword = async () => {
        const canUpdate = checkIfCanUpdatePassword(passwordValidator, repeatPasswordValidator, currentPasswordValidator)

        moveToTopSmoothly()

        if (!canUpdate) {
            return havingFunWithUser()
        }

        const data = {
            newPassword: password,
            currentPassword,
        }

        const response = await sendRequest(EApiMethods.PATCH, '/user/password', data)

        if (!response) {
            return somethingWentWrong()
        }

        const { isSuccess } = response

        if (!isSuccess) {
            return setMessageToTheUser({
                isSuccess: false,
                message: "We couldn't change your password. Check if current password is correct"
            })
        }

        setMessageToTheUser({
            isSuccess: true,
            message: 'Password have been updated, you will be logged out'
        })

        return logoutAndRedirectToLoginPage()
    }

    const deactivateAccount = async () => {
        const canUpdate = checkIfCanDeactivateAccount(passwordValidator, selectedDeactivateOption)

        moveToTopSmoothly()

        if (!canUpdate) {
            return havingFunWithUser()
        }

        const data = {
            numberOfDays: selectedDeactivateOption ? selectedDeactivateOption : 0,
            currentPassword: password,
        }

        const response = await sendRequest(EApiMethods.POST, '/user/deactivate', data)

        if (!response) {
            return somethingWentWrong()
        }

        const { isSuccess } = response

        if (!isSuccess) {
            return setMessageToTheUser({
                isSuccess: false,
                message: "We couldn't deactivate your account. Check if password is correct"
            })
        }

        setMessageToTheUser({
            isSuccess: true,
            message: 'Account have been deactivated, you will be logged out'
        })

        return logoutAndRedirectToLoginPage()
    }

    const deleteAccount = async () => {
        const canUpdate = checkIfCanDeleteAccount(passwordValidator)

        moveToTopSmoothly()

        if (!canUpdate) {
            return havingFunWithUser()
        }

        const data = {
            numberOfDays: 9999,
            currentPassword: password,
        }

        const response = await sendRequest(EApiMethods.POST, '/user/deactivate', data)

        if (!response) {
            return somethingWentWrong()
        }

        const { isSuccess } = response

        if (!isSuccess) {
            return setMessageToTheUser({
                isSuccess: false,
                message: "We couldn't delete your account. Check if password is correct"
            })
        }

        setMessageToTheUser({
            isSuccess: true,
            message: 'Account have been deleted, you will be logged out'
        })

        return logoutAndRedirectToLoginPage()
    }

    const onClickSubmit = async (type: EDandDTypes) => {
        if (type === EDandDTypes.CHANGE_PASSWORD) {
            return updatePassword()
        }
        else if (type === EDandDTypes.DEACTIVATE) {
            return deactivateAccount()
        }

        return deleteAccount()
    }

    return (
        <div className='delete-or-deactive-wrapper'>
            {!isActive && <DeleteOrDeactivateHeader
                iconAlt={iconAlt}
                icon={icon}
                description={description}
                title={title}
                setIsActive={setIsActive}
            />}
            {isActive && type === EDandDTypes.DELETE && <DeleteAccount
                goThroughtValidators={goThroughtValidators}
                onClickSubmit={onClickSubmit}
                password={password}
                passwordValidator={passwordValidator}
                setIsActive={setIsActive}
            />}
            {isActive && type === EDandDTypes.DEACTIVATE && <DeactivateAccount
                goThroughtValidators={goThroughtValidators}
                onClickSubmit={onClickSubmit}
                password={password}
                passwordValidator={passwordValidator}
                setIsActive={setIsActive}
                selectedDeactivateOption={selectedDeactivateOption}
                setSelectedDeactivateOption={setSelectedDeactivateOption}
            />}
            {isActive && type === EDandDTypes.CHANGE_PASSWORD && <ChangePassword
                goThroughtValidators={goThroughtValidators}
                onClickSubmit={onClickSubmit}
                password={password}
                passwordValidator={passwordValidator}
                repeatPassword={repeatPassword}
                repeatPasswordValidator={repeatPasswordValidator}
                currentPassword={currentPassword}
                currentPasswordValidator={currentPasswordValidator}
                setIsActive={setIsActive}
            />}
        </div>
    )
}

export default ExpandedSetting