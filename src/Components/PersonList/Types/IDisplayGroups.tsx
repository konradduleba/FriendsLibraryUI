import IGroup from "Utils/Types/IGroup";
import IPerson from "Utils/Types/IPerson";

export default interface IDisplayGroups {
    list: IPerson[] | IGroup[] | [] | null;
    isMobileView: boolean;
    onClickResult: (username: string, isThatMe?: boolean) => void;
}