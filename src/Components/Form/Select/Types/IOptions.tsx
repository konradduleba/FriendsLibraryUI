import ISingleOption from "./ISingleOption";

export default interface IOptions {
    options: ISingleOption[];
    selectedValue?: string | number | null;
    onSelectOption: (value: string | number) => void;
    header?: string;
    isMobileView: boolean | number;
    toggleOpening: () => void;
}