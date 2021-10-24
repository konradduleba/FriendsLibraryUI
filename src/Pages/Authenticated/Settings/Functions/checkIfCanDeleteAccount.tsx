import IInputValidatorMessages from "Pages/Global/Register/Types/IInputValidatorMessages"

const checkIfCanDeleteAccount = (passwordValidator: IInputValidatorMessages[] | []): boolean => {
    const status = passwordValidator.length && passwordValidator.filter(({ status }) => status).length === passwordValidator.length

    return !!(status)
}

export default checkIfCanDeleteAccount