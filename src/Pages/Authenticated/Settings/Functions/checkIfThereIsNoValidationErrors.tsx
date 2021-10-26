import IValidators from "../Types/IValidators"

const checkIfThereIsNoValidationErrors = ({ email, lastname, name }: IValidators): boolean => {
    const statusEmail = email.filter(({ status }) => status).length === email.length
    const statusLastname = lastname.filter(({ status }) => status).length === lastname.length
    const statusName = name.filter(({ status }) => status).length === name.length

    return !!(statusEmail && statusLastname && statusName)
}

export default checkIfThereIsNoValidationErrors