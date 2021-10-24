import IPrivacy from "../Types/IPrivacy";

const checkIfPrivacySettingsHaveChanged = (originalPrivacySettings: IPrivacy | null, privacySettings: IPrivacy | null): boolean => {
    const emailAddress = originalPrivacySettings?.emailAddress === privacySettings?.emailAddress
    const following = originalPrivacySettings?.following === privacySettings?.following
    const friendList = originalPrivacySettings?.friendList === privacySettings?.friendList
    const friendRequest = originalPrivacySettings?.friendRequest === privacySettings?.friendRequest
    const phoneNumber = originalPrivacySettings?.phoneNumber === privacySettings?.phoneNumber
    const seeFuturePosts = originalPrivacySettings?.seeFuturePosts === privacySettings?.seeFuturePosts
    const tag = originalPrivacySettings?.tag === privacySettings?.tag

    return !(emailAddress && following && friendList && friendRequest && phoneNumber && seeFuturePosts && tag)
}


export default checkIfPrivacySettingsHaveChanged