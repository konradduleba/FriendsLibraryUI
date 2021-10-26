import IUserSettings from "../Types/IUserSettings";

const checkIfThereAreSomeChanges = (originalSettings: IUserSettings | null, newSettings: IUserSettings | null): boolean => {
    const email = originalSettings?.email === newSettings?.email
    const name = originalSettings?.name === newSettings?.name
    const lastname = originalSettings?.lastname === newSettings?.lastname

    return !(email && name && lastname)
}


export default checkIfThereAreSomeChanges