import ISingleOption from "Components/Form/Select/Types/ISingleOption";

export default interface ISetting {
    setting: string | number;
    onUpdateSetting: (key: string, value: string | number) => void;
    options: ISingleOption[];
    title: string;
    keyName: string;
}