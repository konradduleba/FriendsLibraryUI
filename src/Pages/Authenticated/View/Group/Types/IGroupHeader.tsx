import IMessageToTheUser from "Components/MessageToTheUser/IMessageToTheUser";

export default interface IGroupHeader {
    name: string;
    description: string;
    belong: boolean;
    amIOwner: boolean;
    messageToTheUser: IMessageToTheUser
}