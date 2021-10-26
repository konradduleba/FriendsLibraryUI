import IMessageToTheUser from "Pages/Global/Register/Types/IMessageToTheUser";
import IUserSettings from "./IUserSettings";
import IValidators from "./IValidators";

export default interface IContent {
    settings: IUserSettings;
    goThroughtValidators: (key: string, value: string) => void;
    validators: IValidators;
    setMessageToTheUser: (options: IMessageToTheUser) => void;
}