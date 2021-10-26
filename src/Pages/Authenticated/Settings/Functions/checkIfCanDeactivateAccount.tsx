import IInputValidatorMessages from "Pages/Global/Register/Types/IInputValidatorMessages"

const checkIfCanDeactivateAccount = (passwordValidator: IInputValidatorMessages[] | [], selectedDeactivateOption?: string | number): boolean => {
    const status = passwordValidator.length && passwordValidator.filter(({ status }) => status).length === passwordValidator.length

    return !!(status && selectedDeactivateOption)
}

export default checkIfCanDeactivateAccount
