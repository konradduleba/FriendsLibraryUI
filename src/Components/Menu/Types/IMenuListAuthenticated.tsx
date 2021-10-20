import IMenuList from "./IMenuList";

export default interface IMenuListAuthenticated {
    menuList: IMenuList[];
    onCloseMenu: () => void;
    logout: () => void;
}