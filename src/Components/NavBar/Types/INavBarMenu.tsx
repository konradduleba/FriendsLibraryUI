import IMenuList from "./IMenuList";

export default interface INavBarMenu {
    menuList: IMenuList[];
    onCloseMenu: () => void;
}