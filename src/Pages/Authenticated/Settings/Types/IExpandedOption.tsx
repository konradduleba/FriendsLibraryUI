import IInputValidatorMessages from "Pages/Global/Register/Types/IInputValidatorMessages";
import { EDandDTypes } from "./EDandDTypes";

export default interface IExpandedOption {
    password: string;
    goThroughtValidators: (key: string, type: string, value: string, value1?: string, value2?: string) => void;
    passwordValidator: IInputValidatorMessages[] | [];
    onClickSubmit: (type: EDandDTypes) => void,
    setIsActive: (value: boolean) => void;
    repeatPassword?: string;
    repeatPasswordValidator?: IInputValidatorMessages[] | [];
    currentPassword?: string;
    currentPasswordValidator?: IInputValidatorMessages[] | [];
    selectedDeactivateOption?: string | number;
    setSelectedDeactivateOption?: (value: string | number) => void;
}