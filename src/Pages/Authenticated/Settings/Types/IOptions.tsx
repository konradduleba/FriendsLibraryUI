import { EDandDTypes } from "./EDandDTypes";

export default interface IOptions {
    setIsActive: (value: boolean) => void;
    onClickSubmit: (value: EDandDTypes) => void;
    rejectValue: string;
    confirmValue: string;
    deactivateButton?: boolean
    type: EDandDTypes;
}