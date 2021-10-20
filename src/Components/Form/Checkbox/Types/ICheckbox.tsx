export default interface ICheckbox {
    isRequired?: boolean;
    header?: string | JSX.Element;
    value: boolean;
    onChange: (vlaue: boolean) => void;
    errorMessage?: string;
}