import IMessageToTheUser from "Pages/Global/Register/Types/IMessageToTheUser";

export default interface IAccount {
    setMessageToTheUser: (options: IMessageToTheUser) => void;
}