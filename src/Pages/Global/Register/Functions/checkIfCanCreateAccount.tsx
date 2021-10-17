import IPasswordValidator from "../Types/IPasswordValidator";
import ISignUpCredentials from "../Types/ISignUpCredentials";

const checkIfCanCreateAccount = (validationArray: IPasswordValidator[], { email, lastname, name, password }: ISignUpCredentials): boolean => {
    const validationPassed = validationArray.filter(({ status }) => status).length === validationArray.length

    return !!(email && lastname && name && password && validationPassed)
}

export default checkIfCanCreateAccount