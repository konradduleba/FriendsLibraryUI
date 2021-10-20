import IInputValidatorMessages from "../Types/IInputValidatorMessages"
import emailValidator from "./emailValidator"
import passwordValidator from "./passwordValidator"
import textFieldValidator from "./textFieldValidator"

const checkValidation = (key: string, value: string) => {
    let requirementsArray: IInputValidatorMessages[] = []

    if (key === 'password') {
        requirementsArray = passwordValidator(value)
    }
    else if (key === 'email') {
        requirementsArray = emailValidator(value)
    }
    else {
        requirementsArray = textFieldValidator(key, value)
    }

    return requirementsArray
}

export default checkValidation