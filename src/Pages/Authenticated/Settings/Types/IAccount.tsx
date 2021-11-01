import IMessageToTheUser from "Components/MessageToTheUser/IMessageToTheUser";

export default interface IAccount {
    setMessageToTheUser: (options: IMessageToTheUser) => void;
}