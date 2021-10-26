import IInputValidatorMessages from "../Types/IInputValidatorMessages";

const phoneValidator = (phone: string) => {
    const requirementsArray: IInputValidatorMessages[] = []

    const regexPhone = /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/

    requirementsArray.push({
        label: 'Correct phone number',
        status: regexPhone.test(phone)
    })

    requirementsArray.push({
        label: 'Length between 7 and 12',
        status: phone.length >= 7 && phone.length <= 12
    })

    return requirementsArray
}

export default phoneValidator;