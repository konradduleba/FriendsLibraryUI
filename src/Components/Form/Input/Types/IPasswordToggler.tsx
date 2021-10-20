import EInputTypes from "./EInputTypes";

export default interface IPasswordToggler {
    type: string;
    onTypeChange: (value: EInputTypes) => void;
}