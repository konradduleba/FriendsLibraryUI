import IPrivacy from "./IPrivacy";

export default interface IContent {
    settings: IPrivacy;
    onUpdateSetting: (key: string, value: string | number) => void;
}