
import IValidators from "../Types/IValidators";

const checkIfCanCreateAccount = ({ email, lastname, name, password }: IValidators): boolean => {
    const emailValidation = email.filter(({ status }) => status).length === email.length
    const lastnameValidation = lastname.filter(({ status }) => status).length === lastname.length
    const nameValidation = name.filter(({ status }) => status).length === name.length
    const passwordValidation = password.filter(({ status }) => status).length === password.length

    return !!(emailValidation && lastnameValidation && nameValidation && passwordValidation)
}

export default checkIfCanCreateAccount