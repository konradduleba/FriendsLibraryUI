import IGlobalUsers from "./IGlobalUsers";

export default interface IDisplayUserList {
    users: IGlobalUsers[];
    onClickProfile: (username: string, isThatMe: boolean) => void;
}