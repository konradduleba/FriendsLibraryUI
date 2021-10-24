import IInputValidatorMessages from "../Types/IInputValidatorMessages";

const newPasswordValidator = (password: string, repeatPassword: string, currentPassword: string) => {
    const requirementsArray: IInputValidatorMessages[] = []

    const regexNumbers = /\d/
    const regexLowerCase = /[a-z]/
    const regexUpperCase = /[A-Z]/
    const specialCharacters = /[\s~`!@#$%\^&*+=\-\[\]\\';,/{}|\\":<>\?()\._]/g

    requirementsArray.push({
        label: 'New password can not be same as the previous one',
        status: password !== currentPassword
    })

    requirementsArray.push({
        label: 'Password matching',
        status: password === repeatPassword
    })

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

export default newPasswordValidator;