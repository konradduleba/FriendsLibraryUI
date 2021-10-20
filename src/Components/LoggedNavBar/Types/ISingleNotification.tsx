import { ENotificationStatus } from "./ENotificationStatus"

export default interface ISingleNotification {
    id: string;
    status: ENotificationStatus;
    date: Date;
    icon: string;
    title: string;
    description: string;
}