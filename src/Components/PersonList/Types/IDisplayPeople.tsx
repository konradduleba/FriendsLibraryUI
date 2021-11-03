import IGroup from "Utils/Types/IGroup";
import IPerson from "Utils/Types/IPerson";

export default interface IDisplayPeople {
    list: IPerson[] | IGroup[] | [] | null;
    isMobileView: boolean;
    onClickResult: (username: string, isThatMe?: boolean) => void;
    invites?: boolean;
    onRemoveInvite?: (username: string) => void;
    onAcceptInvite?: (username: string) => void;
}