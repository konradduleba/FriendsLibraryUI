import { ReactNode } from "react";
import IGroup from "Utils/Types/IGroup";
import IPerson from "Utils/Types/IPerson";

export default interface IPersonList {
    list: IPerson[] | IGroup[] | [] | null;
    onClickResult: (username: string, isThatMe?: boolean) => void;
    isSearchActive?: boolean;
    title?: string;
    searchQuery?: string;
    setSearchQuery?: (value: string) => void;
    noResultContent: ReactNode;
    headerContent?: ReactNode;
    displayGroup?: boolean;
    displayHeader?: boolean;
    invites?: boolean;
    onRemoveInvite?: (username: string) => void;
    onAcceptInvite?: (username: string) => void;
}