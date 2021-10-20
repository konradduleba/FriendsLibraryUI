
import IValidators from "../Types/IValidators";

const checkIfCanLogIn = ({ email, password }: IValidators): boolean => {
    const emailValidation = email.filter(({ status }) => status).length === email.length
    const passwordValidation = password.filter(({ status }) => status).length === password.length

    return !!(emailValidation && passwordValidation)
}

export default checkIfCanLogIn