import IAccountInfo from "Utils/Types/IAccountInfo"
import IBasicInfo from "Utils/Types/IBasicInfo"
import IContactInfo from "Utils/Types/IContactInfo"
import IPersonalInfo from "Utils/Types/IPersonalInfo"
import IProfile from "../Types/IProfile"

const checkIfBasicInfoChanged = (originalSettings?: IBasicInfo | null, newSettings?: IBasicInfo | null): boolean => {
    const birthday = originalSettings?.birthday === newSettings?.birthday
    const city = originalSettings?.city === newSettings?.city
    const school = originalSettings?.school === newSettings?.school
    const status = originalSettings?.status === newSettings?.status
    const sex = originalSettings?.sex === newSettings?.sex

    return !(birthday && city && school && status && sex)
}

const checkIfContactInfoChanged = (originalSettings?: IContactInfo | null, newSettings?: IContactInfo | null): boolean => {
    const email = originalSettings?.email === newSettings?.email
    const phone = originalSettings?.phone === newSettings?.phone

    return !(email && phone)
}

const checkIfPersonalInfoChanged = (originalSettings?: IPersonalInfo | null, newSettings?: IPersonalInfo | null): boolean => {
    const aboutMe = originalSettings?.aboutMe === newSettings?.aboutMe
    const favouriteMovies = originalSettings?.favouriteMovies === newSettings?.favouriteMovies
    const favouriteMusic = originalSettings?.favouriteMusic === newSettings?.favouriteMusic
    const interestedIn = originalSettings?.interestedIn === newSettings?.interestedIn
    const interests = originalSettings?.interests === newSettings?.interests
    const lookingFor = originalSettings?.lookingFor === newSettings?.lookingFor
    const partner = originalSettings?.partner === newSettings?.partner
    const relationshipStatus = originalSettings?.relationshipStatus === newSettings?.relationshipStatus

    return !(aboutMe && favouriteMovies && favouriteMusic && interestedIn && interests && lookingFor && partner && relationshipStatus)
}

const checkIfAccountInfoChanged = (originalSettings?: IAccountInfo | null, newSettings?: IAccountInfo | null): boolean => {
    const name = originalSettings?.name === newSettings?.name
    const lastname = originalSettings?.lastname === newSettings?.lastname

    return !(name && lastname)
}

const checkIfThereAreSomeChanges = (originalSettings: IProfile | null, newSettings: IProfile | null): boolean => {
    const accountInfo = checkIfAccountInfoChanged(originalSettings?.accountInfo, newSettings?.accountInfo)
    const basicInfo = checkIfBasicInfoChanged(originalSettings?.basicInfo, newSettings?.basicInfo)
    const contactInfo = checkIfContactInfoChanged(originalSettings?.contactInfo, newSettings?.contactInfo)
    const personalInfo = checkIfPersonalInfoChanged(originalSettings?.personalInfo, newSettings?.personalInfo)

    return accountInfo || basicInfo || contactInfo || personalInfo
}


export default checkIfThereAreSomeChanges