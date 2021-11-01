import IInviteList from "./IInviteList";

export default interface IDisplayInviteList {
    invites: IInviteList[];
    onClickProfile: (username: string) => void;
    onRemoveInvite: (username: string) => void;
    onAcceptInvite: (username: string) => void;
}