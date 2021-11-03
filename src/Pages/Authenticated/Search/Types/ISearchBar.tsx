import ISearchList from "./ISearchList";

export default interface ISearchBar {
    setSearchList: (searchList: ISearchList[] | []) => void;
}