import ISingleOption from "./ISingleOption";

export default interface ISelect {
    isRequired?: boolean;
    placeholder?: string;
    header?: string;
    headerChildren?: JSX.Element;
    value?: string | number | null;
    onChange: (value: string | number) => void;
    options: ISingleOption[];
    errorMessage?: string;
}