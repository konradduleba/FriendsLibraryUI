import IValidators from "../Types/IValidators"

const checkIfThereIsNoValidationErrors = ({ email, lastname, name, phone }: IValidators): boolean => {
    const statusEmail = email.filter(({ status }) => status).length === email.length
    const statusLastname = lastname.filter(({ status }) => status).length === lastname.length
    const statusName = name.filter(({ status }) => status).length === name.length
    const statusPhone = phone.filter(({ status }) => status).length === phone.length

    return !!(statusEmail && statusLastname && statusName && statusPhone)
}

export default checkIfThereIsNoValidationErrors