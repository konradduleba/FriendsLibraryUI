import IInputValidatorMessages from "./IInputValidatorMessages";

export default interface IValidators {
    email: IInputValidatorMessages[] | [];
    password: IInputValidatorMessages[] | []
    name: IInputValidatorMessages[] | []
    lastname: IInputValidatorMessages[] | []
}