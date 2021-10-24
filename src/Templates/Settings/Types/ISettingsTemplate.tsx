import IMessageToTheUser from "Pages/Global/Register/Types/IMessageToTheUser";
import ITab from "./ITab";

export default interface ISettingsTemplate {
    title: string;
    options: ITab[];
    onSubmitClick: () => void;
    messageToTheUser: IMessageToTheUser;
    viewsWithoutSubmitButton?: string[];
    page?: string;
}