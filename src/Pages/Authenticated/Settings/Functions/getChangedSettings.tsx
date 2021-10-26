import IUserSettings from "../Types/IUserSettings"

interface EData {
    [key: string]: string;
}

const defaultValues = {
    email: '',
    lastname: '',
    name: ''
}

const getChangedSettings = (originalSettings: IUserSettings | null, newSettings: IUserSettings | null) => {
    const changedData: EData = {}

    const { email, lastname, name } = newSettings ? newSettings : defaultValues

    if (originalSettings?.email !== email && email) {
        changedData.email = email
    }

    if (originalSettings?.lastname !== lastname && lastname) {
        changedData.lastname = lastname
    }

    if (originalSettings?.name !== name && name) {
        changedData.name = name
    }

    return changedData
}

export default getChangedSettings