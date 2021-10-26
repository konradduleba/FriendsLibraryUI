import IInputValidatorMessages from "Pages/Global/Register/Types/IInputValidatorMessages"

const checkIfCanUpdatePassword = (passwordValidator: IInputValidatorMessages[] | [], repeatPasswordValidator?: IInputValidatorMessages[] | [], currentPasswordValidator?: IInputValidatorMessages[] | []): boolean => {
    const statusPassword = passwordValidator.length && passwordValidator.filter(({ status }) => status).length === passwordValidator.length
    const statusRepeat = repeatPasswordValidator && repeatPasswordValidator.length && repeatPasswordValidator.filter(({ status }) => status).length === repeatPasswordValidator.length
    const statusCurrent = currentPasswordValidator && currentPasswordValidator.length && currentPasswordValidator.filter(({ status }) => status).length === currentPasswordValidator.length

    return !!(statusPassword && statusRepeat && statusCurrent)
}

export default checkIfCanUpdatePassword