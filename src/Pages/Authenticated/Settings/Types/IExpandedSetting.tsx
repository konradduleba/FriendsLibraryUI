import IMessageToTheUser from "Pages/Global/Register/Types/IMessageToTheUser";
import { EDandDTypes } from "./EDandDTypes";

export default interface IExpandedSetting {
    title: string;
    description: string;
    icon: string;
    iconAlt: string;
    type: EDandDTypes;
    setMessageToTheUser: (options: IMessageToTheUser) => void;
}