import IInputValidatorMessages from "Pages/Global/Register/Types/IInputValidatorMessages";

export default interface IValidators {
    name: IInputValidatorMessages[] | [];
    lastname: IInputValidatorMessages[] | [];
    email: IInputValidatorMessages[] | [];
    phone: IInputValidatorMessages[] | [];
}