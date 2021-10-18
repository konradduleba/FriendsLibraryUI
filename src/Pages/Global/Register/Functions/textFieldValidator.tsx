import IInputValidatorMessages from "../Types/IInputValidatorMessages";

const textFieldValidator = (key: string, value: string) => {
    const requirementsArray: IInputValidatorMessages[] = []

    const textFieldRegex = /^[a-z ,.'-]+$/i

    requirementsArray.push({
        label: 'At least 3 characters',
        status: value.length >= 3
    })

    requirementsArray.push({
        label: `Correct ${key} value`,
        status: textFieldRegex.test(value)
    })

    return requirementsArray
}

export default textFieldValidator;