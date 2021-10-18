import IInputValidatorMessages from "../Types/IInputValidatorMessages";

const passwordValidator = (password: string) => {
    const requirementsArray: IInputValidatorMessages[] = []

    const regexNumbers = /\d/
    const regexLowerCase = /[a-z]/
    const regexUpperCase = /[A-Z]/
    const specialCharacters = /[\s~`!@#$%\^&*+=\-\[\]\\';,/{}|\\":<>\?()\._]/g

    requirementsArray.push({
        label: 'At least 8 characters',
        status: password.length >= 8
    })

    requirementsArray.push({
        label: 'Numbers (0-9)',
        status: regexNumbers.test(password)
    })

    requirementsArray.push({
        label: 'Lower case (a-z)',
        status: regexLowerCase.test(password)
    })

    requirementsArray.push({
        label: 'Upper case (A-Z)',
        status: regexUpperCase.test(password)
    })

    requirementsArray.push({
        label: 'Special characters',
        status: specialCharacters.test(password)
    })

    return requirementsArray
}

export default passwordValidator;