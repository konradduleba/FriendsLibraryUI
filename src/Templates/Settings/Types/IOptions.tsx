import ITab from "./ITab";

export default interface IOptions {
    options: ITab[];
    activeTab: string;
    updateActiveTab: (value: string) => void;
}