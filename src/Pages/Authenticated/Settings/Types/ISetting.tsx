import EInputTypes from "Components/Form/Input/Types/EInputTypes";

export default interface ISetting {
    setting: string;
    onUpdateSetting: (key: string, value: string) => void;
    title: string;
    keyName: string;
    type: EInputTypes;
    placeholder?: string;
}