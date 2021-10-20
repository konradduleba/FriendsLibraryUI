import { MouseEvent } from "react";
import ISingleNotification from "./ISingleNotification";

export default interface INotificationList {
    list: ISingleNotification[];
    onClick: (event: MouseEvent, id: string) => void;
}