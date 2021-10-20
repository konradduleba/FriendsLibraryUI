import IInputValidatorMessages from "../Types/IInputValidatorMessages";

const emailValidator = (email: string) => {
    const requirementsArray: IInputValidatorMessages[] = []

    const regexEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

    requirementsArray.push({
        label: 'Correct email',
        status: regexEmail.test(email)
    })

    return requirementsArray
}

export default emailValidator;