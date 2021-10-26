import { EPrivacyOptions, EPrivacyOptionsExtended } from "./EPrivacyOptions"

export default interface IPrivacy {
    seeFuturePosts: EPrivacyOptions;
    following: EPrivacyOptions;
    friendRequest: EPrivacyOptionsExtended;
    friendList: EPrivacyOptions;
    tag: EPrivacyOptions;
    phoneNumber: EPrivacyOptions;
    emailAddress: EPrivacyOptions;
}