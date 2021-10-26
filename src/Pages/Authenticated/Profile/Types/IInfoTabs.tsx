import { EParentKeys } from "./EParentKeys";
import IProfile from "./IProfile";
import IValidators from "./IValidators";

export default interface IInfoTabs {
    profileInfo: IProfile;
    isEditing: boolean;
    onUpdateProfileData: (key: string, parentKey: EParentKeys, value: string | Date) => void;
    goThroughtValidators: (key: string, parentKey: EParentKeys, value: string) => void;
    validators: IValidators
}