import IMessageToTheUser from "Components/MessageToTheUser/IMessageToTheUser";
import ITab from "./ITab";

export default interface ISettingsTemplate {
    title: string;
    options: ITab[];
    onSubmitClick: () => void;
    messageToTheUser: IMessageToTheUser;
    viewsWithoutSubmitButton?: string[];
    page?: string;
}