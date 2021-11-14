import IAccountInfo from "Utils/Types/IAccountInfo";
import IBasicInfo from "Utils/Types/IBasicInfo";
import IContactInfo from "Utils/Types/IContactInfo";
import IPersonalInfo from "Utils/Types/IPersonalInfo";

export default interface IProfile {
    accountInfo: IAccountInfo;
    basicInfo: IBasicInfo;
    contactInfo: IContactInfo;
    personalInfo: IPersonalInfo;
    inviteStatus: boolean;
    isOnFriendList: boolean;
    isThatMyProfile: boolean;
    mutualFriendsNumber: number;
    canSendFriendRequest: boolean;
}