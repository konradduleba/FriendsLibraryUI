import IInputValidatorMessages from "Pages/Global/Register/Types/IInputValidatorMessages";

export default interface IValidators {
    email: IInputValidatorMessages[] | [];
    password: IInputValidatorMessages[] | []
}